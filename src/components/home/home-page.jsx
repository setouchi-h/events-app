import Image from "next/image"
import Link from "next/link"

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data.map((ev) => (
      <Link className="card" key={ev.id} href={`events/${ev.id}`} passHref>
        <Image width={100} height={100} alt={ev.title} src={ev.image} />
        <div className="content">
          <h2> {ev.title} </h2>
          <p> {ev.description} </p>
        </div>
      </Link>
    ))}
  </div>
)

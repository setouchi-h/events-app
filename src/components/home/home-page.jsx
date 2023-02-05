import Image from "next/image"
import Link from "next/link"

export const HomePage = ({ data }) => (
  <main>
    {data.map((ev) => (
      <Link key={ev.id} href={`events/${ev.id}`} passHref>
        <Image width={100} height={100} alt={ev.title} src={ev.image} />
        <h2> {ev.title} </h2>
        <p> {ev.description} </p>
      </Link>
    ))}
  </main>
)

import Link from "next/link"
import Image from "next/image"

export const Header = () => (
  <header>
    <div className="topNav">
      <Image src={"/images/logo_black.png"} width={50} height={50} alt="logo" />
      <nav>
        <ul>
          <li>
            <Link href="/" passHref>
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link href="/events" passHref>
              {" "}
              Events
            </Link>
          </li>
          <li>
            <Link href="/about-us" passHref>
              {" "}
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <h1> Build and Deploy a Full Stack App</h1>
  </header>
)

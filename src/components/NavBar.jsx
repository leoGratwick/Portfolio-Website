import React from 'react'
import { Link } from "react-scroll";

const NavBar = (props) => {
  return (
    <div>
        <ul className={props.type}>
            <li>
                <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="About"
                className={props.contentType}>
                    About Me
                </Link>
            </li>
            <li>
                <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Skills"
                className={props.contentType}>
                    Skills
                </Link>
            </li>
            <li>
                <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Projects"
                className={props.contentType}>
                    Projects
                </Link>
            </li>
            <li>
                <Link
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="Contact"
                className={props.contentType}>
                    Contact Me
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <img src="https://i.imgur.com/41glzvV.png" alt="" className="logo" />
        <div className="navItems">
          <button className="navButton"><FontAwesomeIcon icon={faUser} /> Login</button>
          <button className="navButton">Register</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
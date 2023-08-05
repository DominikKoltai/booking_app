import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCar, faEarthAmericas, faHotel, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faHotel} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faEarthAmericas} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">Book. Travel. Discover.</h1>
        <p className="headerDesc">Your gateway to limitless adventures and unforgettable experiences around the world.</p>
        <button className="headerBtn">Sign In / Register</button>
      </div>
    </div>
  )
}

export default Header
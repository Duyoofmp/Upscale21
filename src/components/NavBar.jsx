import navbrand from '../assets/upscale.svg';
import {RiHomeLine} from "react-icons/ri";
import { IoBulbOutline } from "react-icons/io5";
import { BsCalendarEvent, BsPeople, BsTelephone } from "react-icons/bs";

const NavBar = ({
  scrollToRef,
  headerRef,
  infoRef,
  speakerRef,
  scheduleRef,
}) => {
  return (
    
    <nav className='navbar navbar-expand-md navbar navbar-dark fixed-top '>
      <img src={navbrand} className="navbar-brand" alt=",." />
        <button
          className='navbar-toggler ml-auto'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className="navbar-nav-brand">
              <img src={navbrand} alt=".." className="nav-img" />
              </li>
            <li className='nav-item'>
              <div
                className='nav-link active'
                aria-current='page'
                onClick={() => scrollToRef(headerRef)}
              >
                <RiHomeLine className="icon"/><span className="nav-text"> Home</span>
              </div>
            </li>
            <li className='nav-item'>
              <div className='nav-link' onClick={() => scrollToRef(infoRef)}>
                <IoBulbOutline className="icon"/> <span className="nav-text"> About</span>
              </div>
            </li>
            <li className='nav-item'>
<<<<<<< HEAD
              <div
                className='nav-link'
                onClick={() => scrollToRef(scheduleRef)}
              >
                Schedule
              </div>
            </li>
            <li className='nav-item'>
              <div className='nav-link' onClick={() => scrollToRef(speakerRef)}>
                Speakers
              </div>
=======
              <div className='nav-link'><BsCalendarEvent className="icon"/><span className="nav-text"> Schedule</span></div>
            </li>
            <li className='nav-item '>
              <div className='nav-link'><BsPeople className="icon" /><span className="nav-text"> Speakers</span></div>
>>>>>>> 535b663 (navbar)
            </li>
            <li className='nav-item '>
              <div className='nav-link'><BsTelephone className="icon" /><span className="nav-text"> Contact Us</span></div>
            </li>
            
          </ul>
        </div>
    </nav>
  );
};

export default NavBar

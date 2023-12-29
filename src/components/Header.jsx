import {logo} from '../utils/constants'

const Header = () => {
    return(
      <div className="Header">
        <div className='logoContainer'>
          <img className='logo' src={logo} alt="" />
        </div>
        <div className='navItems'>
         <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
         </ul>
        </div>
      </div>
    )
  }
export default Header;
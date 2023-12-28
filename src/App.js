import './index.css';

/*
* Header
* - Logo
* - Nav Items
* Body
* - Search
* - RestaurantContainer
*   - Restaurant Card
* Footer
* - Copyright
* - Links
* - Address
* - Contact
*/

const Header = () => {
  return(
    <div className="Header">
      <div className='logoContainer'>
        <img className='logo' src="https://assets.materialup.com/uploads/08467c74-4744-4eac-817f-598b2f2fd680/preview.png" alt="" />
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

const RestaurantCard = (props) => {
 
  const {resData} = props

  return(
    <div className="res-card">
      <img className='res-logo' src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg" alt="" />
      <h3></h3>
      <h4>Biriyani, North indian, Chinese</h4>
      <h4>4.4 Stars</h4>
      <h4>33 Minutes</h4>
    </div>
  )
}

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="resContainer">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  )
}



const AppLayout = () => {
  return (
    <div className='App'>
      <Header/>
      <Body/>
    </div>
  )
}


export default AppLayout;

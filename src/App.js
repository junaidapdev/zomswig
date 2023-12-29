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

  const {name,location, cuisine, rating } = resData;

  return(
    <div className="res-card">
      <img className='res-logo' src="https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg" alt="" />
      <h3>{name}</h3>
      <h4>{location}</h4>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
    </div>
  )
}

const resList = [
  {
    "id": 1,
    "name": "The Gourmet Kitchen",
    "location": "123 Foodie Street, Flavor Town",
    "cuisine": "Italian, Indian, Mangolian",
    "rating": 4.5
  },
  {
    "id": 2,
    "name": "kannur Kitchen",
    "location": "123 Foodie Street, Flavor Town",
    "cuisine": "Italian, Indian, Mangolian",
    "rating": 4.5
  },
  {
    "id": 3,
    "name": "Kerala Kitchen",
    "location": "123 Foodie Street, Flavor Town",
    "cuisine": "Italian, Indian, Mangolian",
    "rating": 4.5
  }
]



const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="resContainer">
        {
          resList.map(restaurant => (
            <RestaurantCard key={restaurant.id} resData={restaurant}/> 
          ))
        }
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

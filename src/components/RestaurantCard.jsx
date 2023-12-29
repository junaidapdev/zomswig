import {foodImageUrl} from '../utils/constants'

const RestaurantCard = (props) => {
 
    const {resData} = props
  
    const {name,location, cuisine, rating } = resData;
  
    return(
      <div className="res-card">
        <img className='res-logo' src={foodImageUrl} alt="" />
        <h3>{name}</h3>
        <h4>{location}</h4>
        <h4>{cuisine}</h4>
        <h4>{rating}</h4>
      </div>
    )
  }

export default RestaurantCard;
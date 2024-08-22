import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import { assets } from '../../assets/assets'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext);

    window.onscroll = function() {showButton()};

    function showButton() {
      if (document.documentElement.scrollTop > 500) {
        document.getElementById("up-button").className = "show-btn";
      } else {
        document.getElementById("up-button").className = "";
      }
    }

  return (
    <div className='food-display' id='food-display'>
        <h2>Top dishes near you</h2>  
        <div className="food-display-list">
           {food_list.map((item, index)=>{
            if (category==="All" || category===item.category) {
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            }
           })} 
        </div>  
        <div id = "up-button">
          <a href='/#navbar'>
              <img src={assets.up_arrow} alt="" />
          </a>
        </div>    
    </div>
  )
}

export default FoodDisplay
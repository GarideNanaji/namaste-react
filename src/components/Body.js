import RestuarantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
    //state variable
    const [listRestaurants,setListRestaurant] = useState([]);//useState Hook
    const [filteredRestaurants,setFilteredRestaurant] = useState([]);
    
    const [searchText,setSearchText] = useState('');

    useEffect(() =>{
        fetchData();
    },[]);
    
    const fetchData = async() => {
        console.log(" API Data");
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.981117889157668&lng=77.63425637036562&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        //console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //optional chaining
       setListRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilteredRestaurant(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    console.log('rendered');

    return  listRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filtered">
                <input type="text" className="input-value" placeholder="Search for something..."value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className="input-value" onClick={() => {
                    console.log(searchText);
                    const filteredRes=listRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurant(filteredRes);
                }}>Search</button>
                <button className="filter-btn" onClick=
                {() => {
                    const filtered = listRestaurants.filter((res)=>res.info.avgRating > 4.2);
                    setFilteredRestaurant(filtered);
                }}> Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {/* <RestuarantCard resData={resObj}/> */}
                {filteredRestaurants.map((restaurant) => (
                <RestuarantCard key={restaurant.info.id} resData={restaurant} />
            ))}
                
            </div>
        </div>
    )
}

export default Body;
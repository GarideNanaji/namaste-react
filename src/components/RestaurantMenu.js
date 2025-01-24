import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";


const RestaurantMenu = (() => {
    
    const { resId } = useParams(); 
    const [resMenu,setResMenu] = useState(null);
    
    useEffect(()=>{
    //     timer = setInterval(() => {
    //         console.log('Timerr')
    //    },1000);
        fetchData();
        // return () => {
        //     clearInterval(timer);
        //         //it will act as like componentWillUnmount of classcomponent
        // }
    },[resId]);

    const fetchData = (async() => {
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const jsonData = await data.json();
       // console.log(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards[0].card.info.name);
        setResMenu(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards || null);
    });

    

    return (resMenu === null)?<Shimmer/>:(
        <div className="res-menu">
            
            <ul>{resMenu.map((res,index) => (<li key={`${res.card.info.id}-${index}`}>{res.card.info.name}-{"RS." + res.card.info.price/100}</li>))}</ul>

        </div>
    )
})

export default RestaurantMenu;
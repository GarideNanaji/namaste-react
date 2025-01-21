const RestuarantCard = (props) => {
    const { resData } = props;

    return (
        <div className="res-card">
            <img 
                className="res-logo" 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resData?.info?.cloudinaryImageId}`} 
                alt={`${resData?.info?.name} Logo`} 
            />
            <h3>{resData?.info?.name}</h3>
            <h4>{resData?.info?.cuisines ? resData?.info?.cuisines.join(", ") : "Cuisines not available"}</h4>
            <h4>Rating: {resData?.info?.avgRating || "N/A"} ⭐</h4>
            <h4>Cost for Two: {resData?.info?.costForTwo || "N/A"}</h4>
            <h4>Location: {resData?.info?.locality || resData?.info?.areaName || "N/A"}</h4>
        </div>
    );
};

export default RestuarantCard;

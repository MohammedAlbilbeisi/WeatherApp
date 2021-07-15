import React  from "react";

const Weather = (props) => {
return(

<div className="info"> 
   {props.tempreature && <p className="info-key">tempreature :<span className="info_value"> {props.tempreature}</span></p>}
   {props.city && <p className="info-key">city :<span className="info_value">{props.city}</span> </p>}
   {props.country && <p className="info-key">country :<span className="info_value"> {props.country}</span></p>}
   {props.humidity && <p className="info-key">humidity : <span className="info_value">{props.humidity}</span></p>}
   {props.descriplion && <p className="info-key">description :<span className="info_value"> {props.descriplion}</span></p> }
   {props.error && <p className="info-key">error : <span className="info_value">{props.error}</span></p>}
</div>

)




}
export default Weather;

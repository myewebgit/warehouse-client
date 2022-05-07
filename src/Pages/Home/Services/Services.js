import React, { useEffect, useState } from "react";
import Service from "../Home/Service/Service";
import './Services.css';




const Services =()=>{
    const [Services, setServices] = useState([]);
    

    useEffect( ()=>{
        fetch('http://localhost:5000/book')
        .then(res => res.json())
        .then(data => setServices(data));
        
    },[])

    
    
    return (
        <div>
		<h1 className="text-primary">Books available</h1>
        
        <div className="services-container">
        {
            Services.map(service => <Service
                 key={service._id}
                 service={service}
                 ></Service>)
        }
        </div>
        </div>
    );
};

export default Services;

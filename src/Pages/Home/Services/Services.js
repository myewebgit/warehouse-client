import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import Service from "../Home/Service/Service";
import './Services.css';




const Services =()=>{
    const [Services, setServices] = useState([]);
    const [bookCount, setBookCount] = useState(0);
    

    useEffect( ()=> {
        fetch('http://localhost:5000/bookCount')
        .then(res => res.json())
        .then(data =>{
            const count = data.count;
            const books = Math.ceil(count/1);
            setBookCount(books);
        })
    },[]);

    useEffect( ()=>{
        fetch('http://localhost:5000/book')
        .then(res => res.json())
        .then(data => setServices(data));
        
    },[]);

    

    
    
    return (
        <Container>
            <h1 className="text-primary">Books available</h1>
        
        <div className="services-container">
        {
            Services.map(service => <Service
                 key={service._id}
                 service={service}
                 ></Service>)
        }
<div>
            {
                [...Array(bookCount).keys()]
                .map(number => <button>{number + 1}</button>)
            }
        </div>

        </div>
        

        
        </Container>
    );
};

export default Services;

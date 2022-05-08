import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Service.css';

const Service =({service, })=>{
    const {_id, name, img, type, description, price, quantity, author} = service;
    
    const navigate = useNavigate();
    const navigateToServiceDetail=id => {
        navigate(`/service/${id}`);}


      
    
    return (
       
        <div>


<div className="card-group">
  <div className="card">
    <img src={img}  height="320px" width="80px" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <h6>Origin:{type}</h6>
        <p>Author:{author}</p>
      <p>Price:{price}</p>
      <p>Quantity:{quantity}</p>
      <p className="card-text"><small>Description:{description}</small></p>
    </div>
    <div className="card-footer">
      <small className="text-muted"><button  onClick={()=>navigateToServiceDetail(_id)} className="bg-info mt-2 mb-0">Update </button></small>
    </div>
  </div>
  
  
</div>
        </div>
    );
};

export default Service;

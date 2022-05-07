import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './Service.css';

const Service =({service, })=>{
    const {_id, name, img, type, description, price, quantity, author} = service;
    
    const navigate = useNavigate();
    const navigateToServiceDetail=id => {
        navigate(`/Service/${id}`);}


      
    
    return (
        // <div>
		
        // <img  src={img} alt=""/>
        // <h4>Title:{name}</h4>
        // <h4>Origin:{type}</h4>
        // <p>Author:{author}</p>
        // <p><small>Description:{description}</small></p>
        // <p>Price:{price}</p>
        // <p>Quantity:{quantity}</p>
           
        // <Button>Detail:{name}</Button>

        // </div>
        <div>
{/* <CardGroup>
  <Card>
    <Card.Img variant="top" src={img} height="250px" width="100px" alt=""/>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <h4>Origin:{type}</h4>
        <p>Author:{author}</p>
      <p>Price:{price}</p>
      <p>Quantity:{quantity}</p>
      <p><small>Description:{description}</small></p>
      <Card.Text>
       
        <button  onClick={()=>navigateToServiceDetail(id)} className="bg-info mt-2 mb-0">Book:{name}</button>
      </Card.Text>
    </Card.Body>
    
  </Card>
  
</CardGroup> */}

<div class="card-group">
  <div class="card">
    <img src={img}  height="320px" width="80px" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <h6>Origin:{type}</h6>
        <p>Author:{author}</p>
      <p>Price:{price}</p>
      <p>Quantity:{quantity}</p>
      <p class="card-text"><small>Description:{description}</small></p>
    </div>
    <div class="card-footer">
      <small class="text-muted"><button  onClick={()=>navigateToServiceDetail(_id)} className="bg-info mt-2 mb-0">See More </button></small>
    </div>
  </div>
  
  
</div>
        </div>
    );
};

export default Service;

import React from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const TopSection =()=>{
    const navigate = useNavigate();

    return (
        <Container>
		<h1 className="text-center fst-italic text-primary"> New Arrivle!!!!<br></br> Book of this Month.</h1>
        <div class="card-group ">
  <div class="card">
    <img src="https://i.ibb.co/CPVfQRM/glasses-1052010-340.jpg" height='300px' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">The Pride of Jane Austen.</h5>
      <p class="card-text">Jane Austen</p>
    </div>
    <div class="card-footer">
    <Button className="w-100" onClick={()=>navigate('/services')} >Detail</Button>
    </div>
  </div>
  <div class="card">
    <img src="https://i.ibb.co/CPVfQRM/glasses-1052010-340.jpg" height='300px' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">A Game of Thrones</h5>
      <p class="card-text">George R. R. Martin</p>
    </div>
    <div class="card-footer">
    <Button className="w-100" onClick={()=>navigate('/services')} >Detail</Button>
    </div>
  </div>
  <div class="card">
    <img src="https://i.ibb.co/CPVfQRM/glasses-1052010-340.jpg" height='300px' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Outlander</h5>
      <p class="card-text">Author: Diana Gabaldon</p>
    </div>
    <div class="card-footer">
    <Button className="w-100" onClick={()=>navigate('/services')} >Detail</Button>
    </div>
  </div>
  <br></br>
</div>
<div class="card-group">
  <div class="card">
    <img src="https://i.ibb.co/CPVfQRM/glasses-1052010-340.jpg"  height='300px' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">The Count of Monte Cristo</h5>
      <p class="card-text">Author: Alexender Dumas</p>
    </div>
    <div class="card-footer">
    <Button className="w-100" onClick={()=>navigate('/services')} >Detail</Button>
    </div>
  </div>
  <div class="card">
    <img src="https://i.ibb.co/CPVfQRM/glasses-1052010-340.jpg" height='300px' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Maus</h5>
      <p class="card-text">Author: Art Spigelman</p>
    </div>
    <div class="card-footer">
    <Button className="w-100" onClick={()=>navigate('/services')} >Detail</Button>
    </div>
  </div>
  <div class="card">
    <img src="https://i.ibb.co/CPVfQRM/glasses-1052010-340.jpg" height='300px' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">The Sweetness of Pie</h5>
      <p class="card-text">Author: Alen Bardley</p>
    </div>
    <div class="card-footer">
      <Button className="w-100" onClick={()=>navigate('/services')} >Detail</Button>
    </div>
  </div>
</div>
<br></br>

<Button className="w-100" onClick={()=>navigate('/manageservice')} >Detail</Button>

        </Container>
    );
};

export default TopSection;

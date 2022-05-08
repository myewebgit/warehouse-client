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
    <img src="https://i.ibb.co/jMCb8Ph/MV5-BYzc2-MWU1-Nm-Mt-NTRl-OC00-ZWVk-LWE0-MDgt-Njc5-Mz-Ax-OGM4-ZWU1-Xk-Ey-Xk-Fqc-Gde-QXVy-NTE4-Mz-Ey.jpg" height='300px' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Nineteen Eighty-Four
</h5>
      <p class="card-text">Novel by George Orwell</p>
    </div>
    <div class="card-footer">
    <Button className="w-100" onClick={()=>navigate('/services')} >Detail</Button>
    </div>
  </div>
  <div class="card">
    <img src="https://i.ibb.co/M60P69W/19351043-SX0-SY0.jpg" height='300px' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Nimona

</h5>
      <p class="card-text">Novel by ND Stevenson</p>
    </div>
    <div class="card-footer">
    <Button className="w-100" onClick={()=>navigate('/services')} >Detail</Button>
    </div>
  </div>
  <div class="card">
    <img src="https://i.ibb.co/0mb1D3C/16160621.jpg" height='300px' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Sherlock Holmes 

</h5>
      <p class="card-text">Sir Arthur Conan Doyle</p>
    </div>
    <div class="card-footer">
    <Button className="w-100" onClick={()=>navigate('/services')} >Detail</Button>
    </div>
  </div>
  <br></br>
</div>
<div class="card-group">
  <div class="card">
    <img src="https://i.ibb.co/D5g9WtS/71j-Jc-PTGd3-L.jpg"  height='300px' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">The Name of the Wind

</h5>
      <p class="card-text">Novel by Patrick Rothfuss</p>
    </div>
    <div class="card-footer">
    <Button className="w-100" onClick={()=>navigate('/services')} >Detail</Button>
    </div>
  </div>
  <div class="card">
    <img src="https://i.ibb.co/VCzcqs5/24359968-SY475.jpg" height='300px' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">The Accursed Kings

</h5>
      <p class="card-text">Novel series by  Maurice Druon</p>
    </div>
    <div class="card-footer">
    <Button className="w-100" onClick={()=>navigate('/services')} >Detail</Button>
    </div>
  </div>
  <div class="card">
    <img src="https://i.ibb.co/wrWq9qH/download.jpg" height='300px' class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Around the World in Eighty Days

</h5>
      <p class="card-text">Novel by Jules Verne and Peter Holeinone</p>
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

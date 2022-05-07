import React, { useState } from "react";
import { Carousel, Container } from "react-bootstrap";




const Banner = () => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };



  return (
    
      <Carousel className="mt-2" activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/YbBPhc9/istockphoto-1222563369-612x612.jpg" height='800px' 
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="fs-3 fw-bolder">The Bookstore</h3>
          <p>828 Broadway at 12th Street.<br></br>
            New York City, NY # 10030</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/ggrhFLg/bookstore-1.jpg" height='800px' 
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="fs-3 fw-bolder">The Bookstore</h3>
          <p>60th Street and 5th Avenue<br></br>
            New York, NY 10065</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/mJsRLHH/2bf7a5921f2793fee851eb2efe6b097b.jpg" height='800px' 
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="fs-3 fw-bolder">The Bookstore</h3>
          <p>450 Columbus Avenue
            <br></br>
            New York, NY 10024
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
  );
}





export default Banner;

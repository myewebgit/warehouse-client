import React from "react";
import { Container } from "react-bootstrap";

const Footerorgan = () => {
    return (
        <Container className="mt-4 text-center">
            <h4 className="text-center fst-italic">Store Hours and Locations
            </h4>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card col-sm-12">
                        <img src="https://i.ibb.co/YbBPhc9/istockphoto-1222563369-612x612.jpg" height='200px' className="card-img-top rounded-circle " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Main Location</h5>
                            <p className="text-center">828 Broadway at 12th Street<br></br>
                                (between 81st and 82nd street)<br></br>
                                New York, NY 10003<br></br>
                                Monday-Friday<br></br>
                                11:00am - 7:00pm<br></br>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card col-sm-12">
                        <img src="https://i.ibb.co/cwsMJds/bookstore.jpg" height='200px' className="card-img-top rounded-circle " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Bookstore at Central Park Kiosk</h5>
                            <p className="text-center">
                                60th Street and 5th Avenue<br></br>
                                New York, NY 10065<br></br>
                                Saturdays and Sundays<br></br>
                                11:00am - 7:00pm<br></br>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card col-sm-12">
                        <img src="https://i.ibb.co/mJsRLHH/2bf7a5921f2793fee851eb2efe6b097b.jpg" height='200px' className="card-img-top rounded-circle " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The Strand at Columbus Avenue</h5>
                            <p className="text-center">450 Columbus Avenue<br></br>

                                New York, NY 10024<br></br>
                                Monday-Friday<br></br>
                                11:00am - 7:00pm<br></br>
                                Saturday<br></br>
                                10:00am - 7:00pm<br></br>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card col-sm-12">
                        <img src="https://i.ibb.co/hfk5tgG/146049589-bookstore-shop-exterior-with-books-and-textbooks-in-showcase-3d-illustration.webp" height='200px' className="card-img-top rounded-circle " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">The Strand at The Bowery Bay Shops</h5>
                            <p className="text-center">LaGuardia Airport, Terminal B
                                Queens, NY<br></br>
                                Monday-Sunday<br></br>
                                3:30am - 7:00pm
                            </p>
                        </div>
                    </div>
                </div>



            </div>
        </Container>

    );
};

export default Footerorgan;

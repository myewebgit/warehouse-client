import React from "react";

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-center mt-5 bg-dark text-dark fixed='bottom'">

            <div class="row row-cols-1 row-cols-md-4 g-4 p-3">
                <div class="col">
                    <div class="card ">

                        <div class="card-body">
                            <h6 class="card-title  text-dark">STAY CONNECTED</h6>
                            <p class="card-text text-dark">
                                Books lists, events info, special offers, and more — right in your inbox!
                                View our privacy policy.<br></br>
                                <img className="ms-2" src="https://i.ibb.co/5Gg1bdq/facebook-logos-PNG19757.png" height='30px' width='30px' alt=""/>
                                <img className="ms-2" src="https://i.ibb.co/QF1zv3z/9-2-twitter-high-quality-png.png" height='30px' width='30px' alt=""/>
                                <img className="ms-2" src="https://i.ibb.co/58QRshb/pintrest.webp" height='30px' width='30px' alt=""/>
                                <img className="ms-2" src="https://i.ibb.co/X3ZJxh2/49803d8eb5ea235a5860ac942caece70-download-png-download-eps-instagram-logo-clipart-png-1024-1024.jpg" height='30px' width='30px' alt=""/>
                                <img className="ms-2" src="https://i.ibb.co/KsM7bT5/youtube-1837872-340.webp" height='30px' width='30px' alt=""/>
                            </p>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card ">

                        <div class="card-body">
                            <h6 class="card-title  text-dark">HELP</h6>
                            <p class="card-text text-dark"><small>Contact Us</small><br></br>
                                <small>Help Topics</small><br></br>
                                <small>Shipping</small><br></br>
                                <small>Store Pickup</small><br></br>
                                <small>Terms</small>
                            </p>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card ">

                        <div class="card-body">
                            <h6 class="card-title  text-dark">EXPLORE</h6>
                            <p class="card-text text-dark"><small>About Us</small><br></br>
                                <small>Careers</small><br></br>
                                <small>Events</small><br></br>
                                <small>Gift Cards</small><br></br>
                                <small>Sitemap</small>
                            </p>

                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card ">

                        <div class="card-body">
                            <h6 class="card-title  text-dark">ACCOUNT</h6>
                            <p class="card-text text-dark"><small>My Account</small><br></br>
                                <small>Used Book Alerts</small><br></br>
                                <small>Wish List</small><br></br>
                                <small>Publishers</small><br></br>
                                <small>Security</small>
                            </p>






                        </div>
                    </div>
                </div>

            </div>
            <p className="text-white"><small>copyright &copy; {year}; The Bookstore.com</small></p>
        </footer>
    );
};

export default Footer;
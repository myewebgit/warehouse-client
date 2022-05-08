import React from "react";
import Footerorgan from "../../Footerorgan/Footerorgan";


import Lower from "../../Lower/Lower";
import TopSection from "../../TopSection/TopSection";

import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home =()=>{
    return (
        <div>
		
        <Banner></Banner>
        <TopSection></TopSection>
        {/* <Services></Services> */}
       <Footerorgan></Footerorgan>
        <Lower></Lower>
        
        

        </div>
    );
};

export default Home;

import React from "react";
import Lower from "../../Lower/Lower";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home =()=>{
    return (
        <div>
		<Header></Header>
        <Banner></Banner>
        <Services></Services>
        <Lower></Lower>

        </div>
    );
};

export default Home;

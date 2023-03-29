import React from "react";
import Availability from "../Components/Home/Availability";
import Footer from "../Components/Common/Footer";
import Banner from "../Components/Home/Banner";
import BestValues from "../Components/Home/BestValues";
import Blogs from "../Components/Home/Blogs";
import ContactBanner from "../Components/Home/ContactBanner";
import Products from "../Components/Home/Products";
import Stats from "../Components/Home/Stats";


const Home = () => {
  return (
    <div>
     
      <Banner />
      <BestValues />
      <Products />
      <Stats />
      <Blogs />
      <Availability />
      <ContactBanner />
      <Footer />
    </div>
  );
};

export default Home;

import Banner from "../components/Banner";
import BannerBottom from "../components/BannerBottom";
import React,{useEffect, useState}from "react";
import Sale from "../components/home/Sale";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import YearProduct from "../components/home/YearProduct";
import HomeLoader from "./pageProps/HomeLoder";

const Home = () => {
  const [isLoading,setLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
        setLoading(false);
    },1000);            
},[]);



    return (
      <>
     { isLoading? < HomeLoader/> 
      : <div className="w-full mx-auto">
        <Banner />
        <BannerBottom />
        <div className="max-w-container mx-auto px-4">
          <Sale />
           <NewArrivals />
          <BestSellers />
          <YearProduct />
         {/*  <SpecialOffers /> */}
        </div>
      </div>}
      </>
    );
  };
  
  export default Home;
  
import React, { useEffect, useState } from "react";
import Breadcrumbs from "./Breadcrumbs"
import { Link, useLocation } from "react-router-dom";
import { useProductContext } from "../productContext/ProductContext";
const About = () => {
    const location = useLocation();
    const {setShow}= useProductContext();
    const [prevLocation, setPrevLocation] = useState("");
    useEffect(() => {
        setPrevLocation(location.state.data);
    }, [location]);
    return (
        <div className="max-w-container mx-auto px-4" onClick={()=> setShow(false)}>
          <Breadcrumbs title="About" prevLocation={prevLocation} />
          <div className="pb-10">
            <h1 className="max-w-[600px] text-base text-lightText mb-2 text-gray-500">
              <span className="text-black font-semibold text-lg">ShopHub</span>{" "}
              is one of the world's leading ecommerce brands and is internationally
              recognized for celebrating the essence of classic Worldwide cool
              looking style.
            </h1>
            <Link to="/">
              <button className="w-52 h-10 bg-gray-600 text-white hover:bg-black duration-300">
                Continue Shopping!
              </button>
            </Link>
          </div>
        </div>
      );
    };
    
    export default About;
    
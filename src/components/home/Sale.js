import React from "react";
import { Link } from "react-router-dom";
import saleImgOne from "../../assits/products/offer/offer1.png"; 
import saleImgTwo from "../../assits/products/offer/offer2.png";
import saleImgThree from "../../assits/products/offer/offer3.png";
import Image from "../../assits/Image";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full relative group">
        <Link to="/shop">
          <img className="h-full w-full object-cover   
          transition-opacity duration-300 ease-in-out group-hover:opacity-60" src={saleImgOne} />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full relative group">
          <Link to="/shop">
            <img className="h-full w-full object-cover 
             transition-opacity duration-300 ease-in-out group-hover:opacity-60" src={saleImgTwo} />
          </Link>
        </div>
        <div className="h-1/2 w-full relative group">
          <Link to="/shop">
            <img
              className="h-full w-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-65"
              src={saleImgThree}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;

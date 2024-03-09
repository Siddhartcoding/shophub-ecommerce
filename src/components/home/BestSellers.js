import React from "react";
import Heading from "../products/Heading";
import Product from "../products/Products";
import {
    bestSellerOne,
    bestSellerThree,
    bestSellerFour,
    bestSellerTwo,
    bestSellerTen
} from "../../assits/products/ImageIndex";

const BestSellers = () => {
    return (
      <div className="w-full pb-20">
        <Heading heading="Our Bestsellers" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
          <Product
            _id="1011"
            img={bestSellerOne}
            productName="New Backpack"
            price="800"
            color="Blank"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
          <Product
            _id="1012"
            img={bestSellerTwo}
            productName=" Glass Table"
            price="1800"
            color="Gray"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
           
          <Product
            _id="1014"
            img={bestSellerFour}
            productName="Smart watch"
            price="7000"
            color="Black and red"
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
           <Product
            _id="1013"
            img={bestSellerTen}
            productName="Study chair"
            price="1000"
            color="Mixed" 
            badge={false}
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
          />
        </div>
      </div>
    );
  };
  
  export default BestSellers;
  
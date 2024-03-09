import React from "react";
import Slider from "react-slick";
import Heading from "../products/Heading";
import Product from "../products/Products";
import {
    
    bestSellerSix,
    spfSeven,
    spfThree,
    spfTwo,
    newArrTen
} from "../../assits/products/ImageIndex";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
// import { useProductContext } from "../../productContext/ProductContext";

const NewArrivals = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };
    return (
      <div className="w-full pb-16">
        <Heading heading="New Arrivals" />
        <Slider {...settings}>
          <div className="px-2">
            <Product
              _id="100001"
              img={spfSeven}
              productName="Shelf"
              price="2400"
              color="White"
              badge={true}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
          <div className="px-2">
            <Product
              _id="100002"
              img={spfThree}
              productName="Chair "
              price="3500"
              color="Brown"
              badge={true}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
          <div className="px-2">
            <Product
              _id="100003"
              img={ bestSellerSix}
              productName="Wire earphone"
              price="1350"
              color="Black"
              badge={true}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
          <div className="px-2">
            <Product
              _id="100004"
              img={spfTwo}
              productName=" Glass table"
              price="1800"
              color="Mixed"
              badge={true}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
          <div className="px-2">
            <Product
              _id="100005"
              img={newArrTen}
              productName="Trypod lamp"
              price="2500"
              color="Mixed"
              badge={true}
              des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
            />
          </div>
        </Slider>
      </div>
    );
  };
  
  export default NewArrivals;
  
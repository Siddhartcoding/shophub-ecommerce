import React from "react";
import Heading from "../products/Heading";
import Product from "../products/Products";
import {
    newArrEight,
    bestSellerSeven,
    bestSellerNine,
    newArrFourteen,
} from "../../assits/products/ImageIndex";

const SpecialOffersTwo = () => {
    return (
        <div className="w-full pb-20">
            <Heading heading="Special Offers" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
                <Product
                    _id="1101"
                    img={newArrEight}
                    productName="Smart watch"
                    price="3500"
                    color="Black"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    discountPrice="2990"
                    discount = "20 off%"
                />
                <Product
                    _id="1102"
                    img={bestSellerSeven}
                    productName="Flming camera"
                    price="65000"
                    color="Black"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    discountPrice="52000"
                    discount = "20% off"
                />
                <Product
                    _id="1103"
                    img={bestSellerNine}
                    productName="Headphone"
                    price="2500"
                    color="Black"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    discountPrice="1900"
                    discount = "10% off"
                />
                <Product
                    _id="1104"
                    img={newArrFourteen}
                    productName="Table clock"
                    price="5200"
                    color="White"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    discountPrice="4200"
                    discount = "20% off"
                />
            </div>
        </div>
    );
};

export default SpecialOffersTwo;

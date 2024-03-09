import React from "react";
import Heading from "../products/Heading";
import Product from "../products/Products";
import {
    spfOne,
    spfTwo,
    spfThree,
    spfFour,
} from "../../assits/products/ImageIndex";

const SpecialOffers = () => {
    return (
        <div className="w-full pb-20">
            <Heading heading="Special Offers" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
                <Product
                    _id="1101"
                    img={spfOne}
                    productName="Chair"
                    price="3500"
                    color="Brown"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    discountPrice="2990"
                    discount = "20% off"
                />
                <Product
                    _id="1102"
                    img={spfTwo}
                    productName="Tea Table"
                    price="1800"
                    color="Gray"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    discountPrice="999"
                    discount = "20% off"
                />
                <Product
                    _id="1103"
                    img={spfThree}
                    productName="Chair"
                    price="2500"
                    color="Brown"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    discountPrice="1890"
                    discount = "20% off"
                />
                <Product
                    _id="1104"
                    img={spfFour}
                    productName="Bookshelf"
                    price="2200"
                    color="Brown"
                    badge={true}
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    discountPrice="1800"
                    discount = "20% off"
                />
            </div>
        </div>
    );
};

export default SpecialOffers;

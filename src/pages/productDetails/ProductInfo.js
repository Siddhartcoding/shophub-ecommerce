import React, { useEffect, useState } from "react";
import { useProductContext } from "../../productContext/ProductContext";

const ProductInfo = ({ productInfo }) => {
    const { addToCart } = useProductContext();
    const [price , setPrice] = useState("");

    useEffect(()=>{
    {productInfo.discountPrice? setPrice(productInfo.discountPrice)
    :setPrice(productInfo.price)}
    },[productInfo]);
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-4xl font-semibold">
                {productInfo.productName}
            </h2>

            <p className={productInfo.discount ? " line-through text-[18px]" : "text-[#767676] text-[14px]"}>₹{productInfo.price}</p>
            {productInfo.discount ? (<p className="text-red-600 text-sm font-semibold font-titleFont  animate-bounce  ">
                {productInfo.discount}
            </p>) : ""}
            {productInfo.discountPrice ? (<p className="text-red-600 text-xl font-semibold font-titleFont animate-bounce">
                ₹{productInfo.discountPrice}
            </p>) :
                ""}
            <p className="text-base text-gray-600">{productInfo.des}</p>
            <p className="font-medium text-lg">
                <span className="font-normal">Colors:</span> {productInfo.color}
            </p>
            <button
                onClick={() =>

                    addToCart({
                        _id: productInfo._id,
                        name: productInfo.productName,
                        quantity: 1,
                        image: productInfo.img,
                        badge: productInfo.badge,
                        price: price,
                        colors: productInfo.color,
                    })

                }
                className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
            >
                Add to Cart
            </button>
            <p className="font-normal text-sm">
                <span className="text-base font-medium"> Categories:</span> Spring
                collection, Streetwear, Women Tags: featured SKU: N/A
            </p>
        </div>
    );
};

export default ProductInfo;

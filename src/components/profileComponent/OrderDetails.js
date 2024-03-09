import React, { useEffect, useState } from "react";
import { useProductContext } from "../../productContext/ProductContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import OrderInfo from "./OrderInfo";
import { useAuthValue } from "../../productContext/authContext";
import emptyCart from "../../assits/emptyCart.png";
const OrderDetails = () => {
    const { isLoggedIn } = useAuthValue();
    const { myorders } = useProductContext();

    return (
        <div className="text-align: center flex  flex-col justify-between items-center">
            <h1 className=" text-4xl text-primeColor font-titleFont font-bold">
                My Orders
            </h1>
            {!isLoggedIn && (<motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20 py-3"
            >
                <div>
                    <img
                        className="w-80 rounded-lg p-4 mx-auto"
                        src={emptyCart}
                        alt="emptyCart"
                    />
                </div>
                <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg ">
                    <h1 className="font-titleFont text-xl font-bold uppercase">
                        Your orders feels lonely.
                    </h1>
                    <p className="text-sm text-center px-10 -mt-2">
                    For filling up an empty order page, utilize the 'Sign In' emblem for the user. 🛒🔐
                    </p>
                    <Link to="/login">
                        <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                             Sign In
                        </button>
                    </Link>
                </div>
            </motion.div>

            )};

            {isLoggedIn&&myorders.length === 0 ?

                (<motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
                >
                    <div>
                        <img
                            className="w-80 rounded-lg p-4 mx-auto"
                             src={emptyCart}
                            alt="emptyCart"
                        />
                    </div>
                    <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
                        <h1 className="font-titleFont text-xl font-bold uppercase">
                            Your orders feels lonely.
                        </h1>
                        <p className="text-sm text-center px-10 -mt-2">
                            Your Shopping cart lives to serve. Give it purpose - fill it with
                            books, electronics, videos, etc. and make it happy.
                        </p>
                        <Link to="/shop">
                            <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                                Continue Shopping
                            </button>
                        </Link>
                    </div>
                </motion.div>

                ) : (
                    // if contains order than render them one by one
                    // order list container
                    <div className="w-full sml:ml-[-1rem] ">
                        {myorders.map((order, i) => <OrderInfo key={i} order={order} />)}
                    </div>
                )}
        </div>
    )
}


export default OrderDetails;
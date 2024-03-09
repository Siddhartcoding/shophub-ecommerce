import React from "react";
import { Link } from "react-router-dom";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { useProductContext } from "../../productContext/ProductContext";
import { useAuthValue } from "../../productContext/authContext";


const SpecialCase = () => {
    const{isLoggedIn} = useAuthValue();
    const { cart} = useProductContext();
return (
    <div className="fixed top-52 right-2 z-20  flex  flex-col gap-2">
        <Link to={isLoggedIn?"/profile":"/login"}>
            <div className="bg-white opacity-70 lg:w-16 sm:w-14 lg:h-[70px] sm:h-[60px]  rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer">
                <div className="flex justify-center items-center">
                    <MdSwitchAccount className="lg:text-2xl sm:text-xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

                    <MdSwitchAccount className="lg:text-2xl sm:text-xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
                </div>
                
               {isLoggedIn?<p className="text-xs font-semibold font-titleFont">Profile</p>:<p className="text-xs font-semibold font-titleFont">Login</p> }
            </div>
        </Link>
        <Link to="/cart">
            <div className="bg-white opacity-70 lg:w-16 sm:w-14 lg:h-[70px] sm:h-[60px] rounded-md flex flex-col gap-1 text-[#33475b] justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative">
                <div className="flex justify-center items-center">
                    <RiShoppingCart2Fill className="lg:text-2xl sm:text-xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200" />

                    <RiShoppingCart2Fill className="lg:text-2xl sm:text-xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200" />
                </div>
                <p className="text-xs font-semibold font-titleFont">Buy Now</p>
                
                {cart.length > 0 && (
            <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
              {cart.length}
            </p>
          )}
                </div>
        </Link>
    </div>
);
};

export default SpecialCase;

import React, { useRef } from "react";
import { motion } from "framer-motion";

const Offline = () => {
    const ref = useRef(null);
    return (


        <div className="relative w-full h-screen bg-zinc-800">
            <div className=" fixed z-[2] w-full h-screen">
                <h1 className=" absolute top-1/2 left-1/2 
                     -translate-x-[50%] 
                     -translate-y-[50%] text-[16vw] 
                     leading-none tracking-tighter font-semibold
                      text-zinc-900">
                    ShopHub</h1>
            </div>

            <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full ">

                <motion.div drag dragConstraints={ref} whileDrag={{ scale: 1.1 }} dragElastic={0.2}
                    dragTransition={{ bounceStiffness: 100, bounceDamping: 15 }}
                    className=" relative w-60 h-50 rounded-[50px] flex-shrink-0 bg-zinc-100/60">
                    <h1 className=" text-xl font-titleFont font-bold 
                  uppercase px-7 pt-8 ">You are offline!</h1>
                    <p className="text-sm text-center px-3 font-titleFont
                    py-5 ">
                        Please check your internet connection.
                    </p>
                </motion.div>

            </div>

        </div>
    )
}

export default Offline;
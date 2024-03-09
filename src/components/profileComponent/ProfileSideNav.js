import React, { useEffect, useState } from "react";
import { useAuthValue } from "../../productContext/authContext";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../../fireBase";

import { motion } from "framer-motion";


const ProfileSideNav = () => {
   const { userLoggedIn } = useAuthValue();
   const [sidenav, setSidenav] = useState(false);

   const [showMenu, setShowMenu] = useState(false);

   useEffect(() => {
      let ResponsiveMenu = () => {
         if (window.innerWidth < 667) {
            setShowMenu(false);
         } else {
            setShowMenu(true);
         }
      };
      ResponsiveMenu();
      window.addEventListener("resize", ResponsiveMenu);
   }, []);





   return (
      <>
         <div className=" relative">
            {showMenu && (
               <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center w-auto  p-0 gap-2"
               >
                  <>
                     <div className=" w-full flex flex-col gap-7">
                        {/* <h1 className="font-titleFont font-semibold text-3xl">
                      Persnol information
                  </h1> */}
                        <p className="text-base font-titleFont font-semibold px-2">
                           Name
                        </p>
                        <div className="w-full py-1 border-b-2 px-2 text-base font-medium ">
                           {userLoggedIn.name}
                        </div>
                        <p className="text-base font-titleFont font-semibold px-2">
                           Email
                        </p>
                        <div className="w-full py-1 border-b-2 px-2 text-base font-medium">
                           {userLoggedIn.email}
                        </div>
                     </div >
                  </>
               </motion.div>
            )}

            {/* <div onClick={() => setSidenav(!sidenav)} 
           className=" flex h-10 cursor-pointer items-center gap-2 text-primeColor md:hidden">
            <HiMenuAlt2
               className="w-5 h-5"
            />
            {sidenav && (
               <div>
                  <motion.div
                     initial={{ y: 30, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.5 }}
                     className=" top-[50%] z-60 bg-primeColor w-full text-[#d8d7d7] h-auto p-4 pb-6"
                  >
                     <p className="text-base font-titleFont font-semibold px-2">
                        Name
                     </p>
                     <div className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor">
                        {name}
                     </div>
                     <p className="text-base font-titleFont font-semibold px-2">
                        Email
                     </p>
                     <div className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor">
                        {email}
                     </div>
                     

                  </motion.div>
               </div>
            )}
            </div> */}
         </div>


      </>

   )
}

export default ProfileSideNav;
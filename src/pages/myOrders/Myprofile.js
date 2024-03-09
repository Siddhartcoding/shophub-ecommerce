import React, { useEffect, useState } from "react";
import Breadcrumbs from "../Breadcrumbs";
import ProfileSideNav from "../../components/profileComponent/ProfileSideNav";
import OrderDetails from "../../components/profileComponent/OrderDetails";

const Myprofile = () => {
    const [prevLocation, setPrevLocation] = useState("");
    


    return (
        <div className="max-w-container mx-auto pl-[0rem] pr-[1rem]">
            <Breadcrumbs title="Profile"/>
          <div className="w-full h-full flex pb-20 gap-10">
            {/* <div className="w-[18%] lgl:w-[20%]  mdl:inline-flex h-full">
                <ProfileSideNav/>
            </div> */}
            <div className="w-full h-full  "> 
            <OrderDetails/>
            </div>

          </div>

        </div>
    )

}

export default Myprofile;
import React from "react";
import giflogo from "../../assits/l-1.gif";


export default function HomeLoader() {

    return (
          <div>
            {/* show spinner */}
           <img className="w-full h-screen object-cover" src={giflogo} alt="logo"/>
            {/* show message below the spinner */}
          </div>
     
      )
  }
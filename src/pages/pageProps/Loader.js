import React from "react";
import giflogo from "../../assits/l-2.gif";


export default function Loader() {

    return (
      // styling the spinner
         
          <div>
            {/* show spinner */}
           <img className="w-full h-screen object-cover" src={giflogo} alt="logo"/>
            {/* show message below the spinner */}
          </div>
     
      )
  }
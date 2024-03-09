import React, {useState} from "react";
import Breadcrumbs from "./Breadcrumbs";
import { useProductContext } from "../productContext/ProductContext";
import SpecialOffersTwo from "../components/home/SpecialOffersTwo";
const OfferTwo = () => {
  const{setShow} = useProductContext();
    const [prevLocation] = useState("");
  
    return (
      <div className="max-w-container mx-auto" onClick={()=> setShow(false)}>
        <Breadcrumbs title="Offer's on Gagets" prevLocation={prevLocation} />
        <div className="pb-10">
          <SpecialOffersTwo />
        </div>
      </div>
    );
  };
  
  export default OfferTwo;
  
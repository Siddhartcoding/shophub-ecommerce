import React, {useState} from "react";
import Breadcrumbs from "./Breadcrumbs";
import SpecialOffers from "../components/home/SpecialOffers";
import { useProductContext } from "../productContext/ProductContext";
const Offer = () => {
  const{setShow} = useProductContext();
    const [prevLocation] = useState("");
  
    return (
      <div className="max-w-container mx-auto" onClick={()=> setShow(false)}>
        <Breadcrumbs title="Offer" prevLocation={prevLocation} />
        <div className="pb-10">
          <SpecialOffers />
        </div>
      </div>
    );
  };
  
  export default Offer;
  
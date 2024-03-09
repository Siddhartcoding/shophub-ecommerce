import React from "react";
import { useProductContext } from "../../../productContext/ProductContext";
const FilterBar = ()=> {
  const {price , setPrice , view , setView} = useProductContext();
 

    return (
        <div className="w-full">
        <span className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]"
        >Price:</span> {`${price}`}
        <br/>
        <button onClick= {()=> setView(!view)}className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            ApplyFilter
        </button>
      { view ?  <input type="range"
        min="10.00"
        max="5000.00"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}/>: " "}
        </div>

    )
}

export default FilterBar;
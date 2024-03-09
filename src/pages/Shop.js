import React, { useState , useEffect} from "react";
import Breadcrumbs from "./Breadcrumbs";
import ShopSideNav from "../components/shopPage/ShopSideNav";
import Pagination from "../components/shopPage/shopBy/Pagination";
import ProductBanner from "../components/shopPage/shopBy/ProductBanner";
import { useProductContext } from "../productContext/ProductContext";


const Shop = () => {
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const {setShow} = useProductContext();
   

    const itemsPerPageFromBanner = (itemsPerPage) => {
        setItemsPerPage(itemsPerPage);
    };
    return (
        <div className="max-w-container mx-auto px-4" onClick={()=>setShow(false)}>
            <Breadcrumbs title="Shop"/>
            {/* ================= Products Start here =================== */}
            <div className="w-full h-full flex pb-20 gap-10">
                <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
                    <ShopSideNav />
                </div>
                <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
              <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
              <Pagination itemsPerPage={itemsPerPage}
                                     
                                       />
            </div>
            </div>
            {/* ================= Products End here ===================== */}
        </div>
    );
};

export default Shop;
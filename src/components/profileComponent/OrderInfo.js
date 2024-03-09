import React, { useState, useEffect } from "react";
export default function OrderInfo(props) {

  const { date, list, amount } = props.order;
  const [shippingCharge, setShippingCharge] = useState("");
  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    let price = 0;
    list.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [list]);

  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);

  return (

    <div className="p-[-0.85rem] rounded m-[10px] bg-white ">
      <h1 className=" py-6  font-titleFont font-semibold"> Orderd on: {date}</h1>
      <table className=" w-full font-semibold text-current border-collaps sml:pl-0">

        <tr className="bg-black/10">
          <th className=" border-b border-r-2 px-2 py-2">S.no</th>
          <th className="pl-0 border-b border-r-2 px-2 py-2">Product Name</th>
          <th className="pl-0 border-b border-r-2 px-2 py-2">Price</th>
          <th className=" pl-0 border-b  border-r-2 px-2 py-2">Quantity</th>
          <th className=" pl-0 border-b px-2 py-2">Total Price</th>
        </tr>

        {list.map((product, i) => <tr>
          <td className="border-b border-r-2 px-2 py-2">{i + 1}</td>
          <td className="border-b border-r-2 px-2 py-2">{product.name}</td>
          <td className="border-b border-r-2 px-2 py-2">{product.price}</td>
          <td className="border-b border-r-2 px-2 py-2 pl-[8%]">X{product.quantity}</td>
          <td className="border-b  px-2 py-2">₹{product.quantity * product.price}</td>
        </tr>)}
        <tr>

          <td colSpan={4} className="border-b  px-2 py-2  font-bold ">
            Shippingcharges:</td>
          <td className="border-b  px-2 py-2 sml:pl-[1%] ">₹{shippingCharge}</td>
        </tr>
        <tr>

          <td colSpan={4} className="border-b px-2 py-2 bg-black/5 font-bold ">
            Grand Total:</td>
          <td className="border-b bg-black/5 px-2 py-2 sml:pl-[1%] ">₹{totalAmt + shippingCharge}</td>
        </tr>
      </table>



    </div >


  )
}
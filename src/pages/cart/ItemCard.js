import React from "react";
import { ImCross } from "react-icons/im";
import { useProductContext } from "../../productContext/ProductContext";

const ItemCard = (props) => {
const {name , image, price, quantity} = props.item;
    const { 
        
        removeFromCart,
        increaseQuant,
        decreaseQuant,
        } = useProductContext();

        return (
            <div className="w-full grid grid-cols-5 mb-4 border-b py-2">
              <div className="flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4">
                <ImCross
                  onClick={() => (removeFromCart(props.item))}
                  className="text-primeColor hover:text-red-500 duration-300 cursor-pointer"
                />
                <img className="w-32 h-32" src={image} alt="productImage" />
                <h1 className="font-titleFont font-semibold">{name}</h1>
              </div>
              <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0">
                <div className="flex w-1/3 items-center text-lg font-semibold">
                ₹{price}
                </div>
                <div className="w-1/3 flex items-center gap-6 text-lg">
                  <span
                    onClick={() => (decreaseQuant( props.item ))}
                    className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-gray-300 hover:border-gray-300"
                  >
                    -
                  </span>
                  <p>{quantity}</p>
                  <span
                    onClick={() => (increaseQuant( props.item ))}
                    className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300  border-gray-300 hover:border-gray-300"
                  >
                    +
                  </span>
                </div>
                <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
                  <p>₹{quantity * price}</p>
                </div>
              </div>
            </div>
          );
        };
        
        export default ItemCard;

import { createContext, useContext, useEffect, useState } from "react";
 import toast from "react-hot-toast";
import { useAuthValue } from "./authContext";
import { db } from "../fireBase";
import {
    updateDoc, doc,
    arrayUnion, onSnapshot,
    arrayRemove
}
    from "firebase/firestore";
 

export const productContext = createContext();

export function useProductContext() {

    const value = useContext(productContext);
    return value;
}

export function ProductContext({ children }) {

    const { isLoggedIn, userLoggedIn,
        setLoggedIn, setUserLoggedIn } = useAuthValue();

    const [show , setShow] = useState(false);
    const [cart, setCart] = useState([]);
    const [myorders, setMyOrders] = useState([]);
    const [itemInCart, setItemInCart] = useState(0);
    const [shippingCharge, setShippingCharge] = useState("");
    const [totalAmt, setTotalAmt] = useState("");
    const [total, setTotal] = useState(0);


    useEffect(()=> {
        let price = 0;
        cart.map((item)=> {
            price += item.price * item.quantity;
            return price;
        });
        setTotalAmt(price);
    },[cart]);
     
    
    useEffect(() => {
        if (totalAmt <= 200) {
          setShippingCharge(30);
        } else if (totalAmt <= 400) {
          setShippingCharge(25);
        } else if (totalAmt > 401) {
          setShippingCharge(20);
        }
      }, [totalAmt]);

    // return date in yy/mm/dd format
    function getDate() {
        // getting current date
        const date = new Date();
        // day
        let day = date.getDate();
        // month
        let month = date.getMonth() + 1;
        // year
        let year = date.getFullYear();

        // yy/mm/dd format
        return (`${year}-${month}-${day}`);
    }


    // to check if the user is still logged in on page refresh
    useEffect(() => {
        // getting user authentication token from local storage
        const token = window.localStorage.getItem("token");
        if (token) {
            // loggedIn user's data 
            const index = window.localStorage.getItem("index");
            const user = JSON.parse(index);
            setLoggedIn(token);
            setUserLoggedIn(user);
        }
    }, []);

    //getting real time update of user's cart

    useEffect(() => {

        // check whether user is logged in or not
        if (isLoggedIn) {
            // getting real-time update of data
            const unsub = onSnapshot(doc(db, "ShopHub", userLoggedIn.id), (doc) => {
                // storing all the data in cart
                setCart(doc.data().cart);
                setMyOrders(doc.data().orders);
            });
            // total amount of products in cart
            let sum = 0;
            cart.map((item) => Number(sum += item.price));
            setTotal(sum);
            setItemInCart(cart.length);
            
        }
        
    }, [userLoggedIn]);





    async function increaseQuant(item) {
        console.log(cart);
 
        const index = cart.findIndex((i) => i.name === item.name);
        cart[index].quantity++;
        setCart(cart);
        setItemInCart(itemInCart + 1);
        setTotal(Number(total + cart[index].price));

        const userRef = doc(db, "ShopHub", userLoggedIn.id);
        await updateDoc(userRef, {
            cart: cart
        });
        // increase itemCount and total amount
        setItemInCart(itemInCart + 1);
        setTotal(Number(total + cart[index].price));

       

    }

    async function decreaseQuant(product) {
        // finding item's index
        console.log(product.name);
        console.log(cart.name);
        const index = cart.findIndex((item) => item.name === product.name);
        // reduce total amount
        console.log(index);
        setTotal(Number(total - cart[index].price));

        // change quantity of product and update cart array
        if (cart[index].quantity >1) {
            cart[index].quantity--;
        }
        else if (cart[index].quantity===1){
            cart[index].quantity=1;
        }
        else {
            // cart.splice(index, 1);
        }

        // update cart and item Count
        setCart(cart);
        setItemInCart(itemInCart - 1);

        // update cart in array
        const userRef = doc(db, "ShopHub", userLoggedIn.id);
        await updateDoc(userRef, {
            cart: cart
        });
    }




    // function to add product to cart
    async function addToCart(product) {
          console.log(itemInCart);
        // check whether user is logged in or not
        if (!isLoggedIn) {
            toast.error(`Please first Login !!!`);
            return;
        }

        // checking whether the product already in the cart
        const index = cart.findIndex((item) => item.name === product.name);
        if (index !== -1) {
            // if product already in cart then increase quantity
            increaseQuant(cart[index]);
            toast.success(`Product Quantity Increased!!`);
            return;
        }

        // add product to the cart of loggedIn user
        const userRef = doc(db, "ShopHub", userLoggedIn.id);
        await updateDoc(userRef, {
            cart: arrayUnion({ quantity: 1, ...product })
        });
        // increase item  count and total amount
        setTotal(Number(total + product.price));
        setItemInCart(itemInCart + 1);
        toast.success(`Added to your Cart!!`);
    }



    async function removeFromCart(item) {
        // update database 
        console.log(item);
        const userRef = doc(db, "ShopHub", userLoggedIn.id);
        await updateDoc(userRef, {
            cart: arrayRemove(item)
        });
        // reduce item count and total amount
        setTotal(Number(total - (item.quantity * item.price)));
        setItemInCart(itemInCart - item.quantity);
        toast.success(`Removed from Cart!!`);
    }


    // function to remove all product from cart
    async function clearCart() {
        // if no item in cart then return with message
        if (itemInCart === 0) {
            toast.success(`Nothing to remove in Cart!!`);
            return;
        }

        // empty cart array in database
        const userRef = doc(db, "ShopHub", userLoggedIn.id);
        await updateDoc(userRef, {
            cart: []
        });

        // set item count and total amount 
        setTotal(0);
        setItemInCart(0);
        toast.success(`Empty Cart!!`);
    }



    // function to purchase all the items in cart
    async function purchaseAll() {
        // get current data from function
        const currentDate = getDate();

        // adding order to database
        const userRef = doc(db, "ShopHub", userLoggedIn.id);
        await updateDoc(userRef, {
            orders: arrayUnion({ date: currentDate, list: cart, amount:total})
        });

        // empty cart
        clearCart();
    }



    return (
        <productContext.Provider value={{
            
          setShow , show,
            addToCart,
            cart,
            total,
            setTotal,
            removeFromCart,
            clearCart,
            purchaseAll,
            myorders,
            increaseQuant,
            decreaseQuant,
            itemInCart
        }}>

            {children}
        </productContext.Provider>
    );
}
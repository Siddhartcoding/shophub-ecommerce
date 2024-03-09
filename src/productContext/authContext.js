import { createContext, useContext, useEffect, useState } from "react";
// firebase database
import { auth, db } from "../fireBase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import toast from "react-hot-toast";
export const authContext = createContext();

export function useAuthValue() {
    const value = useContext(authContext);
    return value;
}



export function AuthContext({ children }) {
    const [userList, setUserList] = useState([]);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(null);
    const [successMsg, setSuccessMsg] = useState("");
    const [msg, setMsg] = useState(false);

    // useEffect(() => {
    //     const unsub = onAuthStateChanged(auth, (user) => {
    //         setCurrentUser(user);

    //     });

    //     return () => {
    //         unsub();
    //     };
    // }, []);

    // getting all the users from data base on first render of page
    useEffect(() => {
        const unsub = onSnapshot(collection(db, "ShopHub"), (snapShot) => {
            const users = snapShot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });
            setUserList(users);

        });
    }, [isLoggedIn]);





    // creating new user
    async function createUser(data) {
        // checking whether the email address already in use or not
        const index = userList.findIndex((user) => user.email === data.email);
        // if found email display notification
        if (index !== -1) {
            // toast.error("Email Address already exist, Try Again or SignIn Instead!!!");
            return;
        }

        // if email not found create new user 
        const docRef = await addDoc(collection(db, "ShopHub"), {
            name: data.name,
            email: data.email,
            password: data.password,
            cart: [],
            orders: []
        });

        // setName("");
        // setEmail("");
        // toast.success("New user Created, Please LogIn to Continue !!");
    }


    async function signIn(data) {

        console.log(userLoggedIn);
        // finding user in database
        const index = userList.findIndex((user) => user.email === data.email);

        // if user not found show notification
        if (index === -1) {
            // toast.error("Email does not exist, Try again or SignUp Instead!!!");

            return false;
        }

        // if email found in database then match password
        if (userList[index].password === data.password) {
            // toast.success("Sign In Successfully!!!");
            setSuccessMsg(
                `Hello dear, Thank you for your attempt. 
             We are processing to validate your access. 
             Till then stay connected and additional assistance 
             will be sent to you by your mail at ${data.email}`
            );
            // logging in user and storing its data in local variable
          
            setLoggedIn(true);
            setUserLoggedIn(userList[index]);
            setMsg(true);

            // generating user's login token and store user's data 
            window.localStorage.setItem("token", true);
            window.localStorage.setItem("index", JSON.stringify(userList[index]));
            return true;
        }
        else {

            // if password doesn't match in database
            // toast.error("Wrong UserName/Password, Try Again");
            return false;
        }
    }


    // signout function 
    function signOut() {

               console.log(userLoggedIn.name);
               console.log(userLoggedIn.email);
        // removing user' data and token from local storage
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("index");

        // set loggin status false
        setLoggedIn(false);
        // loggedin user's data
        setUserLoggedIn(null);
         toast.success(`Sign Out Successfully!`);
    }




    return (
        <authContext.Provider value={{ signOut,
            createUser, isLoggedIn,
            setLoggedIn, signIn, userLoggedIn, msg,
            successMsg, setMsg, setUserLoggedIn,
            
        }}>
            {children}
        </authContext.Provider>
    );
};

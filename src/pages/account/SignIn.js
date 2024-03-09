import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsCheckCircleFill } from "react-icons/bs";
import logoLight from "../../assits/Collection 4.png";
import { useAuthValue } from "../../productContext/authContext";
import Loader from "../pageProps/Loader";

const SignIn = () => {
    const navigate = useNavigate();
    const { signIn,successMsg,msg,setMsg } = useAuthValue();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");

    
    const [isLoading,setLoading]=useState(true);

    useEffect(()=>{
      setTimeout(()=>{
          setLoading(false);
      },1000);            
  },[signIn]);
  
  function handlClick (){
    setMsg(false);
    navigate("/");
  }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");
    };



    // ============= Event Handler End here ===============
    const handleSignIn = async (e) => {
        e.preventDefault();

        const data = {
            email: email,
            password: password
        }

        const status = await signIn(data);
        console.log(status);
        // { status ? navigate("/") : navigate("/login") }


        if (!email) {
            setErrEmail("Enter your email");
        }

        if (!password) {
            setErrPassword("Create a password");
        }
        else if (status == false) {
            setErrPassword("username/password is incorrect")
         }
        //    ============== Getting the value ==============
        // else if () {
        //     setSuccessMsg(
        //         `Hello dear, Thank you for your attempt. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
        //     );
        //     setMsg(true);
        //     setEmail("");
        //     setPassword("");

        // }
    };
    return (
        <>
       { isLoading? <Loader/>:
       <div className="w-full h-screen flex items-center justify-center">
            <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
                <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
                    <Link to="/">
                        <img src={logoLight} alt="logoImg" className="w-28" />
                    </Link>
                    <div className="flex flex-col gap-1 -mt-1">
                        <h1 className="font-titleFont text-xl font-medium">
                            Stay sign in for more
                        </h1>
                        <p className="text-base">When you sign in, you are with us!</p>
                    </div>
                    <div className="w-[300px] flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                            <BsCheckCircleFill />
                        </span>
                        <p className="text-base text-gray-300">
                            <span className="text-white font-semibold font-titleFont">
                                Get started fast with ShopHub
                            </span>
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
                            nisi dolor recusandae consectetur!
                        </p>
                    </div>
                    <div className="w-[300px] flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                            <BsCheckCircleFill />
                        </span>
                        <p className="text-base text-gray-300">
                            <span className="text-white font-semibold font-titleFont">
                                Access all ShopHub services
                            </span>
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
                            nisi dolor recusandae consectetur!
                        </p>
                    </div>
                    <div className="w-[300px] flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                            <BsCheckCircleFill />
                        </span>
                        <p className="text-base text-gray-300">
                            <span className="text-white font-semibold font-titleFont">
                                Trusted by online Shoppers
                            </span>
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
                            nisi dolor recusandae consectetur!
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-10">
                        <Link to="/">
                            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                                © ShopHub
                            </p>
                        </Link>
                        <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                            Terms
                        </p>
                        <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                            Privacy
                        </p>
                        <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                            Security
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full lgl:w-1/2 h-full">
                {msg&&successMsg ? (
                    <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
                        <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
                            {successMsg}
                        </p>
                            <button onClick={handlClick}
                                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
                                  tracking-wide hover:bg-black hover:text-white duration-300"
                            >
                               Welcome!
                            </button>
                       
                    </div>
                ) : (
                    <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
                        <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center ">
                            <h1 className="font-titleFont font-semibold text-3xl md:text-4xl mb-4 relative group">
                                Sign in
                                <span className="absolute bottom-0 left-0 w-[7.5rem] h-0.5 bg-black/55 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </h1>
                            <div className="flex flex-col gap-3">
                                {/* Email */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Work Email
                                    </p>
                                    <input
                                        onChange={handleEmail}
                                        value={email}
                                        className="  w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal  border-b-[1px] hover:border-b-[2px] border-gray-400 outline-none"
                                        type="email"
                                        placeholder="abc@workemail.com"
                                    />
                                    {errEmail && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errEmail}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Password
                                    </p>
                                    <input
                                        onChange={handlePassword}
                                        value={password}
                                        className=" px-0 w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal border-b-[1px] hover:border-b-[2px] border-gray-400 outline-none"
                                        type="password"
                                        placeholder="Create password"
                                    />
                                    {errPassword && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errPassword}
                                        </p>
                                    )}
                                </div>

                                <button
                                    onClick={handleSignIn}
                                    className="bg-black/70 hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                                >
                                    Sign In
                                </button>
                                <p className="text-sm text-center font-titleFont font-medium relative group">
                                    Don't have an Account?{" "}
                                    <Link to="/register">
                                        <span className="hover:text-blue-600 duration-300 hover:underline ">
                                            Sign up
                                        </span>

                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>}
        </>
    );
};

export default SignIn;





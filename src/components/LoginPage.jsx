import { useForm } from 'react-hook-form'
import TextField from './TextField';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/api';
import toast from 'react-hot-toast';
import { useStoreContext } from '../ContextApi/contextapi';


const LoginPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { setToken } = useStoreContext();

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const loginHandler = async (data) => {
        setLoader(true)
        try{
            const {data: response} = await api.post(
                "/api/auth/public/login",
                data
            )
            toast.success("Login Successful")
            setToken(response.token)
            localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token))
            // console.log(response.token)
            reset();
            navigate("/dashboard");
            console.log("success")
        } catch(error) {
            console.log(error);
            toast.error("Login Unsuccessful")
        } finally {
            setLoader(false);
        }
    };

  return (
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
        <form onSubmit={handleSubmit(loginHandler)}
        className='sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md'>
            <h1 className='text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl'>
                Login Here
            </h1>

            <hr className='mt-2 mb-5 text-white'/>

            <div className='flex flex-col gap-3'>
                <TextField 
                    label="Username"
                    required
                    id="username"
                    type="text"
                    message="username is required"
                    placeholder="Type your username"
                    register={register}
                    errors={errors}
                />

                {/* <TextField 
                    label="Email"
                    required
                    id="email"
                    type="text"
                    message="email is required"
                    placeholder="Type your email"
                    register={register}
                    errors={errors}
                /> */}

                <TextField 
                    label="Password"
                    required
                    id="password"
                    type="text"
                    message="password is required"
                    placeholder="Type your password"
                    min={6}
                    register={register}
                    errors={errors}
                />
            </div>

            <button
            disabled={loader}
            type='submit'
            className='bg-customRed font-semibold text-white  bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3'>
           {loader ? "Loading..." : "Login"}
            </button>
            <p>
                Don't have an Account?
                <Link
                className='font-semibold underline hover:text-black'
                to="/register"
                >
                    <span className='text-btnColor '> Register</span>
                </Link>
            </p>
        </form>
    </div>
  )
}

export default LoginPage
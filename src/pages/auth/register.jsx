import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik"
import { Input, Button, Typography, } from "@material-tailwind/react";
import AuthLayout from "../../layouts/auth";
import { register } from "../../services/auth";
import customTitle from "../../hooks/customMetadata";

export default function RegistrationForm() {

    const [registerFailed, setRegisterFailed] = useState('')

 customTitle('Register')

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        onSubmit: async function () {
            try {

                const data = {
                    username: formik.values.username,
                    email: formik.values.email,
                    password: formik.values.password,
                }
                await register(data, (status, res) => {
                    if (status) {
                        localStorage.setItem('token', res.data.token)
                        window.location.href = "/"
                    } else {
                        setRegisterFailed(res.response.data)
                    }
                })
            }
            catch (error) {
                console.error( error);
            }
        }
    });

    return (
        <AuthLayout>
            <Typography variant="h4" color="blue-gray">
                Sign Up
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
                Enter your details to register.
            </Typography>
            {registerFailed && <p className="text-red-500 text-sm my-2">{registerFailed}</p>}
            <form className="mt-5 mb-2 w-80 max-w-screen-lg sm:w-96"
                id="my-form" onSubmit={formik.handleSubmit}>
                <div className="mb-4 flex flex-col gap-6">
                    <Input
                        variant="static" required name="username"
                        type="text" size="lg" label="Name"
                        placeholder="Masukkan Username"
                        onChange={formik.handleChange}
                        value={formik.values.username} />
                    <Input
                        variant="static" required name="email"
                        type="email" size="lg" label="Email"
                        placeholder="Masukkan Email"
                        onChange={formik.handleChange}
                        value={formik.values.email} />
                    <Input
                        variant="static" required name="password"
                        type="password" size="lg" label="Password"
                        placeholder="Masukkan Password"
                        onChange={formik.handleChange}
                        value={formik.values.password} />
                </div>
                <Button className="mt-6" fullWidth type="submit">
                    Register
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                    Have an account?{" "}
                    <NavLink to="/login" className="font-medium text-gray-900">
                        Sign In
                    </NavLink>
                </Typography>
            </form>
        </AuthLayout>
    );
}


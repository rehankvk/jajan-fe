import { Input, Button, Typography, } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { login } from "../../services/auth";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import AuthLayout from "../../layouts/auth";
import customTitle from "../../hooks/customMetadata";

export default function LoginForm() {
    const [loginFailed, setLoginFailed] = useState('')

    customTitle('Login')

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        onSubmit: async function () {
            try {
                const data = {
                    email: formik.values.email,
                    password: formik.values.password,
                }

                await login(data, (res) => {
                    if (res.status === 200) {
                        localStorage.setItem('token', res.data.token);
                        window.location = "/profiles";
                    } else if (res.status === 404) {
                        setLoginFailed(res.response.data.message)
                    } else if (res.status = 401) {
                        setLoginFailed(res.response.data.message)
                    } else {
                        localStorage.clear()
                    }
                })
            }
            catch (error) {
                console.error(error);
            }
        }
    });
   
    return (
        <>
            <AuthLayout>
                <Typography variant="h4" color="blue-gray">
                    Sign In
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to login.
                </Typography>

                {loginFailed && <p className="my-2 text-sm text-red-500 text-center">{loginFailed}</p>}
                <form className="w-80 max-w-screen-xl sm:w-96" onSubmit={formik.handleSubmit}>
                    <div className="py-3 flex flex-col gap-6">
                        <Input variant="static" placeholder="Masukkan Email" value={formik.values.email} onChange={formik.handleChange} type="text" size="lg" label="Email" name="email" />
                        <Input variant="static" placeholder="Massukan Password" value={formik.values.password} onChange={formik.handleChange} type="password" size="lg" label="Password" name="password" />
                    </div>

                    <Button className="mt-6" fullWidth type="submit">
                        Login
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Don't have an account?{" "}
                        <NavLink to="/register" className="font-medium text-gray-900">
                            Sign Up
                        </NavLink>
                    </Typography>
                </form>
            </AuthLayout>
        </>

    );
}
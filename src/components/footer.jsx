import React from "react";
import { Typography } from "@material-tailwind/react";
// import logo from "../assets/logo.jpeg"
import { NavLink } from "react-router-dom";

const link = [
    {
        path: "/",
        title: "Home"
    },
    {
        path: "/products",
        title: "Products"
    },
    {
        path: "/cart",
        title: "Cart"
    },
    {
        path: "/profiles",
        title: "Profile"
    },
]

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="w-full bg-white p-8 mt-5">
            <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
                {/* <img src={logo} alt="logo" width={'40px'} height={'40px'} /> */}
                <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
                    {link.map((items, i) => (
                        <li key={i}>
                            <Typography
                                color="blue-gray"
                                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                            >
                                <NavLink to={items.path}>{items.title}</NavLink>
                            </Typography>
                        </li>
                    ))}
                </ul>
            </div>
            <hr className="my-8 border-[#eceff1]" />
            <Typography color="blue-gray" className="text-center font-normal">
                &copy; {year} Fjrrhn
            </Typography>
        </footer>
    );
}


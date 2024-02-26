import React, { useState, useEffect } from "react";
import { Navbar, Collapse, Typography, IconButton, Menu, MenuHandler, Button, Avatar, MenuList, MenuItem } from "@material-tailwind/react";
import { Bars2Icon, XMarkIcon, UserIcon, ClipboardDocumentListIcon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom"
// import NavList from "./Navlist"
// import Profile from "./Profile"




const Profile = () => {
    return (
        <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full p-0"
        >
            <Avatar
                variant="circular"
                size="sm"
                alt="avatar"
                className="border border-gray-900"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
        </Button>
    );
}

const NavList = () => {

    return (
        <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                className="p-1 font-medium text-gray-700"
            >
                <NavLink to="/" className="flex items-center hover:text-blue-500 transition-colors">
                    Home
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-medium text-gray-700"
            >
                <NavLink to="/products" className="flex items-center hover:text-blue-500 transition-colors">
                    Products
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 font-medium text-gray-700"
            >
                <NavLink to="/cart" className="flex items-center hover:text-blue-500 transition-colors">
                    Cart
                </NavLink>
            </Typography>
            <div className="hidden md:block" onClick={() => window.location = "/profiles"}>
                <Profile />
            </div>
        </ul>
    );
}

export default function Navigationbar() {
    const [openNav, setOpenNav] = useState(false);
    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <header className="sticky top-0 z-20 w-full mx-auto">
            <Navbar className="rounded-none w-full max-w-none">
                <div className="flex items-center justify-between text-[#263238]">
                    <Typography
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5 text-black"
                    >
                        <NavLink to="/">Maenan</NavLink>
                    </Typography>
                    <div className="hidden lg:block">
                        <NavList />
                    </div>
                    <div className="block md:hidden flex items-center space-x-2">
                        <div className="ml-auto block md:hidden" onClick={() => window.location = "/profiles"}>
                            <Profile />
                        </div>
                        <IconButton
                            id="toggle-collapse"
                            aria-label="toggle-collapse"
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <XMarkIcon className="text-black h-6 w-6" />
                            ) : (
                                <Bars2Icon className="h-6 w-6 text-black" />
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    <NavList />
                </Collapse>
            </Navbar>
        </header>
    );
}
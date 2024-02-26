import React from "react";
import { NavLink } from "react-router-dom";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"
import customTitle from "../hooks/customMetadata";

export default function NotFoundPage() {
    customTitle('404 Not Found Page')
    return (
        <>
            <section className="bg-white">
                <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
                    <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                        <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50">
                            <ExclamationCircleIcon className="w-8 h-8" />
                        </p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Page not found</h1>
                        <p className="mt-4 text-gray-500">The page you are looking for doesn't exist. Here are some helpful links:</p>

                        <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                            <NavLink to={'/'}>
                                <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600">
                                    Take me home
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
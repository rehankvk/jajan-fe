import React, { useEffect, useState, Suspense, lazy } from "react";
import Navigationbar from "../components/navbar"
import Footer from "../components/footer.jsx"
import HeroSection from "../components/banner"
import PublicLayout from "../layouts/public"
import CardProductLoader from "../components/cardProduct/loader";
import { Button } from "@material-tailwind/react";
import { NavLink } from "react-router-dom"
import { getAllProducts } from "../services/product";
import customTitle from "../hooks/customMetadata.jsx";
const CardProduct = lazy(() => import("../components/cardProduct"))


export default function HomePage() {
    const [products, setProducts] = useState([])

    customTitle('Home')

    useEffect(() => {
        getAllProducts((data) => {
            setProducts(data)
        })
    }, [])

    return (
        <>
            <Navigationbar />
            <HeroSection />
            <PublicLayout>
                <div className="overflow-x-hidden w-full mx-auto flex flex-col md:flex-row md:items-start">
                    <div className="w-full mx-auto">
                        <Suspense fallback={<CardProductLoader count={4} />}>
                            <CardProduct products={products.slice(0, 4)} />
                            <div className="w-full h-auto flex justify-center">
                                <NavLink to="/products">
                                    <Button fullWidth={false} className="mt-4" size="lg">Explore Products</Button>
                                </NavLink>
                            </div>
                        </Suspense>
                    </div>
                </div>
            </PublicLayout>
            <Footer />
        </>
    )
}

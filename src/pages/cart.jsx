import React, { useEffect, useState } from "react"
import { getAllCart, deleteCart } from "../services/cart";
import { useLogin } from "../hooks/useLogin";
import ContentCart from "./cart/content";
import NullCart from "./cart/null";
import PublicLayout from "../layouts/public";
import Navigationbar from "../components/navbar";
import Footer from "../components/footer";
import customTitle from "../hooks/customMetadata";

export default function CartPage() {
    const [cart, setCart] = useState([])

    useLogin()
    customTitle('Cart')

    useEffect(() => {
        getAllCart((data) => {
            setCart(data)
        })
    }, [])

    return (
        <>
            <Navigationbar />
            <PublicLayout>
                {cart.length > 0 ? <ContentCart data={cart} deleteCart={deleteCart} /> : <NullCart />}
            </PublicLayout>
            <Footer />
        </>

    )
}
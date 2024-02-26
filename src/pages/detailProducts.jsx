import React, { useEffect, useState, Suspense, lazy } from "react"
import { useParams } from "react-router-dom";
import Navigationbar from "../components/navbar"
import DetailProductLoader from "./detailProducts/loader"
import PublicLayout from "../layouts/public";
import { getProductById } from "../services/product";
import customTitle from "../hooks/customMetadata";
const DetailProduct = lazy(() => import("./detailProducts/detail"))

export default function DetailProductsPage() {
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    customTitle('Detail Product')

    useEffect(() => {
        getProductById(id, (data) => {
            if (Array.isArray(data)) {
                setProduct(data);
            } else {
                setProduct([data]); // Convert single object to array
            }
        })
    }, [id])

    return (
        <>
            <Navigationbar />
            <PublicLayout>
                <Suspense fallback={<DetailProductLoader />}>
                    <DetailProduct product={product} />
                </Suspense>
            </PublicLayout>
        </>
    )
} 
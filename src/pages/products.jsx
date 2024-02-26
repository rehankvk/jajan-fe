import Navigationbar from "../components/navbar"
import Footer from "../components/footer"
import PublicLayout from "../layouts/public"
import React, { useState, useEffect, Suspense, lazy } from "react"
import { getAllProducts, getProductsByCategory, searchProduct } from "../services/product"
import CardProductLoader from "../components/cardProduct/loader"
import { Input, IconButton } from "@material-tailwind/react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import customTitle from "../hooks/customMetadata"
const CardProduct = lazy(() => import("../components/cardProduct"))

export default function ProductsPage() {
    const [allProducts, setAllProducts] = useState([])
    const [category, setCategory] = useState('');
    const [search, setSearch] = useState('')

    customTitle('Products')

    function handleSearch(event) {
        if (!event || !search || search.trim() === "") return;
        if (event.key === "Enter" || event.type === "click") {
            event.preventDefault();
            searchProduct(search, (data) => {
                setAllProducts(data);
            });
        } else {
            getAllProducts((data) => {
                setAllProducts(data);
            });
        }
    }

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };

    useEffect(() => {
        if (category) {
            getProductsByCategory(category, (data) => {
                setAllProducts(data);
            });
        } else {
            getAllProducts((data) => {
                setAllProducts(data);
            });
        }
    }, [category]);

    useEffect(() => {
        handleSearch();
    }, [search]);

    return (
        <>
            <Navigationbar />
            <div className="border-t-2 bg-white py-2 sticky top-16 z-50 shadow-md">
                <div className="bg-white w-11/12 mx-auto flex justify-between items-center md:space-x-2">
                    <div className="w-auto md:w-full max-w-full space-x-2 flex flex-row items-center py-1">
                        <Input id="search-product" variant={'outlined'} size={'md'} color={'black'} placeholder="Cari Barang" type="text"
                            value={search} onChange={(e) => setSearch(e.target.value)} className="w-full h-max text-black"
                            label="Cari Barang" onKeyDown={handleSearch}
                        />
                        <IconButton onClick={handleSearch} variant={'outlined'} size={'md'} id="search-product" aria-label="search-product">
                            <MagnifyingGlassIcon className="w-5 h-5" />
                        </IconButton>
                    </div>
                    <div className="relative h-10 w-max">
                        <select aria-label="search-product" id="search-product-icon" onChange={(e) => handleCategoryChange(e.target.value)} value={category}
                            className="peer h-full w-full rounded-[7px] border border-[#b0bec5] bg-transparent px-3 py-2 text-sm font-normal text-[#455a64] outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-[#b0bec5] placeholder-shown:border-t-[#b0bec5] empty:!bg-gray-900 focus:border-2 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-[#eceff1]">
                            <option value="">Semua</option>
                            <option value="electronics">Electronics</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="men's%20clothing">Men's Clothing</option>
                            <option value="women's%20clothing">Women's Clothing</option>
                        </select>
                    </div>
                </div>

            </div>

            <PublicLayout>
                <div className="w-full mx-auto flex flex-col md:flex-row md:items-start">
                    <div className="w-full mx-auto">
                        <Suspense fallback={<CardProductLoader count={4} />}>
                            <CardProduct products={allProducts} />
                        </Suspense>
                    </div>
                </div>
            </PublicLayout>
            <Footer />
        </>
    )
}
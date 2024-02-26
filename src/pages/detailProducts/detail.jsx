import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Button, IconButton, Card, CardBody, Typography } from "@material-tailwind/react";
import { ArrowLeftIcon, MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import ToastInfo from '../../components/toast';
import { addToCart } from '../../services/cart'

const DetailProduct = ({ product }) => {
    const [quantity, setQuantity] = useState(1)
    const [toastInfo, setToastInfo] = useState({
        message: '',
        visible: false
    });
    const back = useNavigate()

    const increament = (id) => {
        setQuantity((prevValue) => prevValue + 1)
    }

    const decreament = (id, minValue) => {
        if (quantity > minValue) {
            setQuantity((prevValue) => prevValue - 1)
        } else {
            return window.alert("minimal beli nya tuh 1 dek")
        }
    }

    const handleAddToCart = async (id) => {
        try {
            const data = {
                products_id: id,
                quantity
            }
            await addToCart(data, (response) => {
                setToastInfo({ message: response.data.message, visible: true });
                setTimeout(() => {
                    setToastInfo((prev) => ({ ...prev, visible: false }));
                }, 2000);
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <div className="w-full mx-auto py-4">
                {
                    toastInfo.visible &&
                    <ToastInfo setToastInfo={setToastInfo}>{toastInfo.message}</ToastInfo>
                }
                {Array.isArray(product) && product?.map((items, index) => {
                    return (
                        <Card key={index} className="w-full mx-auto flex flex-col md:flex-row h-full rounded-none">
                            <div className="w-52 md:w-1/4 p-6 h-auto relative mx-auto">
                                <img src={items.image} alt={items.title} className="mx-auto w-full h-full object-contain" />
                            </div>
                            <CardBody className="w-full flex-auto flex flex-col md:flex-row md:space-x-4">
                                <div className="w-full mx-auto flex flex-col">
                                    <div className="flex justify-between items-center py-3">
                                        <IconButton variant={'text'} size={'sm'} onClick={() => back("/products")}>
                                            <ArrowLeftIcon className="text-black w-5 h-5" />
                                        </IconButton>
                                        <p className="text-sm text-purple-500">{items.category}</p>
                                    </div>
                                    <Typography variant="h6">{items.title}</Typography>
                                    <div className="flex justify-between items-center">
                                        <Typography variant="h4" color={'black'}>${items.price}</Typography>
                                        <p>⭐{items.rating}</p>
                                    </div>
                                    <p className="my-2">{items.description}.</p>
                                </div>

                                <footer className="h-full mx-auto w-full md:w-1/3 flex flex-col text-sm font-medium">
                                    <div className="w-full mx-auto flex flex-col">
                                        <p className="pb-3">Set quantity</p>
                                        <div className="flex justify-between items-center">
                                            <div className="border-2 border-gray-300 rounded-lg flex flex-row items-center">
                                                <IconButton variant="text" onClick={() => decreament(items.id, 1)}>
                                                    <MinusIcon className="w-4 h-4 text-black" />
                                                </IconButton>
                                                <p className="px-1">{quantity}</p>
                                                <IconButton variant="text" onClick={() => increament(items.id)}>
                                                    <PlusIcon className="w-4 h-4 text-black" />
                                                </IconButton>
                                            </div>
                                            <p>Stok: {items.stock}</p>
                                        </div>
                                    </div>
                                    <div className="pt-3 h-max w-full mx-auto">
                                        <Button ripple={true} variant={'filled'} color="gray" fullWidth={true} onClick={() => handleAddToCart(items.id)}>
                                            Add to cart
                                        </Button>
                                    </div>
                                </footer>
                            </CardBody>
                        </Card>
                    )
                })}

            </div>
        </>
    )
}

export default DetailProduct
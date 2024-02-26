import React, { useState } from 'react'
import { Card, CardBody, CardFooter, Typography, Button, IconButton, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { updateQty } from '../../services/cart';
import ToastInfo from '../../components/toast';

function ContentCart({ data, deleteCart }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const [quantity, setQuantity] = useState(data.quantity)

    const totalPrice = () => {
        let total = 0;

        data.forEach(item => {
            total += item.product.price * item.quantity
        })
        return total.toLocaleString("en-US", { style: "currency", currency: "USD" })
    };

    const addQty = (id, quantity) => {
        setQuantity((prevValue) => prevValue + 1)
        updateQty(id, quantity, "increment")
    }
    const decQty = (id, newQuantity) => {
        updateQty(id, newQuantity, "decrement")
        if (newQuantity === 1) {
            deleteCart(id)
        }
    };

    return (
        <>
            <div className="w-full h-auto py-4 mx-auto">
                <div className="flex flex-col md:flex-row md:space-x-3">
                    <div className="md:w-3/4 flex flex-col">
                        {data?.map((items, idx) => (
                            <Card key={idx} className='rounded-none w-full max-w-full flex flex-row items-center pb-4'>
                                <CardBody className='flex flex-col w-full'>
                                    <h1 className='text-black'>{items.product.title}</h1>
                                    <div className="w-full h-auto flex justify-between items-center mt-5">
                                        <div className="items-center flex flex-row space-x-2">
                                            <p className='text-sm text-black'>{items.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                                            <p className='text-lg text-black font-bold'>{(items.product.price * items.quantity).toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                                        </div>
                                        <div className='space-x-3 flex items-center'>
                                            <IconButton size={'sm'} variant={'outlined'} color={'red'} onClick={() => deleteCart(items.id)}>
                                                <TrashIcon className='w-4 h-4' />
                                            </IconButton>
                                            <div className="w-max flex items-center rounded-xl">
                                                <IconButton size={'sm'} variant={'text'} onClick={() => decQty(items.id, quantity)}>
                                                    <MinusIcon className='w-4 h-4' />
                                                </IconButton>
                                                <p name="quantity" id="quantity" className='px-2'>{items.quantity}</p>
                                                {/* <input className='w-min' type="number" name="quantity" id="quantity" value={value} onChange={(e) => e.target.value} /> */}
                                                <IconButton size={'sm'} variant={'text'} onClick={() => addQty(items.id, quantity)}>
                                                    <PlusIcon className='w-4 h-4' />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        ))}
                    </div>

                    <Card className="sticky top-24 h-max mt-5 md:mt-0 md:w-1/4 rounded-none">
                        <CardBody>
                            <Typography variant="h5" className="text-black" color={'black'}>Ringkasan Belanja</Typography>
                            <div className="flex justify-between items-center">
                                <p className="text-black">Total Barang</p>
                                <p className="text-black">{data.length}</p>
                            </div>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <div className="flex justify-between items-center">
                                <Typography className="font-bold" color={'black'}>Subtotal Harga</Typography>
                                <Typography variant={'h5'} className="font-bold" color={'black'}>{totalPrice()}</Typography>
                            </div>
                            <Button
                                color="gray" variant="filled" fullWidth={true} ripple={false}
                                className="mt-3" onClick={handleOpen}>
                                Buy ({data.length})
                            </Button>
                        </CardFooter>
                    </Card >
                </div>
                <Dialog open={open} handler={handleOpen}>
                    <DialogBody>
                        <Typography variant='paragraph'>Untuk saat ini, hanya dapat sampai sini karena website ini masih On Progress. Terimakasih!!</Typography>
                    </DialogBody>
                </Dialog>
            </div>
        </>
    )
}

export default ContentCart


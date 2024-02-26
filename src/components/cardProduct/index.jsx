import React from "react";
import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";


export default function CardProduct({ products }) {
    return (
        <>
            <div className="w-full mx-auto sm:flex sm:flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((items, id) => (
                    <Card className="mt-4 md:mt-0 w-auto shadow-xl bg-white" key={id}>
                        <CardHeader shadow={false} floated={false} className="h-56">
                            <img
                                src={items.image}
                                alt="card-image"
                                className="h-full w-full bg-white object-contain"
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="flex items-center justify-between">
                                <Typography color="blue-gray" className="font-semibold truncate">
                                    <NavLink to={`/products/${items.id}`}>
                                        {items.title}
                                    </NavLink>
                                </Typography>

                                <Typography color="blue-gray" className="mx-1 font-bold">
                                    {items.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                                </Typography>
                            </div>
                            <p className="mt-3 line-clamp-2">
                                {items.description}
                            </p>
                        </CardBody>
                    </Card>
                ))}
            </div>

        </>
    );
}

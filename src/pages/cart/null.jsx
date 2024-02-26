import React from 'react'
import { Card, Typography } from '@material-tailwind/react'
// import nullcart from "../../assets/nullCart.png"

function NullCart() {
    return (
        <>
            <div className="w-11/12 mx-auto h-auto overflow-hidden">
                <div className="flex items-center justify-center">
                    <Card color="transparent" shadow={false}>
                        {/* <img src={nullcart} alt="nullcart" /> */}
                        <Typography color="gray" className="font-normal">
                            Cart mu kosong lek, ayo belonjo ben aku sugeh 😀🤭
                        </Typography>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default NullCart
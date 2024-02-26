import { Card, CardFooter, CardBody, CardHeader } from "@material-tailwind/react"
import { PhotoIcon } from "@heroicons/react/24/solid"
import React from "react"

function Skeleton() {
    return (
        <>
            <Card className="w-auto">
                <CardHeader shadow={false} floated={false} className="h-auto w-auto flex justify-center items-center">
                    <div role="status" className="animate-pulse">
                        <PhotoIcon className="w-32 h-32 object-contain mx-auto" />
                    </div>
                </CardHeader>
                <CardBody>
                    <div role="status" className="animate-pulse">
                        <div className="w-full bg-gray-200 mx-auto h-2.5 ruonded"></div>
                    </div>
                </CardBody>
                <CardFooter className="pt-0">
                    <div role="status" className="animate-pulse">
                        <div className="w-full bg-gray-200 mx-auto h-2.5 ruonded"></div>
                    </div>
                </CardFooter>

            </Card>
        </>
    )
}

function Loader({ itemCount }) {
    const SkeletonLoader = []

    for (let index = 0; index < itemCount; index++) {
        SkeletonLoader.push(
            <div key={index}>
                <Skeleton />
            </div>
        )
    }

    return <>{SkeletonLoader}</>
}


export default function CardProductLoader(props) {
    const itemCount = props.count
    return (
        <>
            <div className="w-full mx-auto sm:flex sm:flex-col md:grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                <Loader itemCount={itemCount} />
            </div>

        </>
    )
}

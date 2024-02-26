import React, { useEffect } from "react";
import { Avatar, Button, Card } from "@material-tailwind/react"
import Navigationbar from "../../components/navbar";
import Footer from "../../components/footer";
import PublicLayout from "../../layouts/public";
import { useLogin } from "../../hooks/useLogin";
import { ArrowLeftStartOnRectangleIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import customTitle from "../../hooks/customMetadata";
import SideBarProfile from "../../components/sidebar-profile";
import { handleLogout } from "../../hooks/logout"
// import { } from "@heroicons/react/24/solid";



export default function ProfilePage() {
    const username = useLogin()

    customTitle('Profile')



    const getInitials = (name) => {
        const nameArray = name.split(' ');
        return nameArray.map(word => word.charAt(0)).join('').toUpperCase();
    }
    return (
        <>
            <Navigationbar />
            <PublicLayout>
                <div className="flex flex-row space-x-3">
                    <SideBarProfile />
                    <div className="w-full mx-auto">
                        <Card className="mx-auto">
                            <div className=" p-3 flex items-center justify-center flex-col">
                                <Avatar
                                    src={`https://ui-avatars.com/api/?name=${getInitials(username)}/?size=512`}
                                    color={'amber'}
                                    size={'xxl'}
                                    className="mx-auto"
                                />
                                <h1 className="text-center capitalize mt-4">{username}</h1>
                            </div>
                        </Card>
                    </div>
                </div>
            </PublicLayout>
            <Footer />
        </>
    )
}


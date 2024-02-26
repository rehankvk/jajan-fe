import React, { useState } from 'react'
import { jwtDecode } from 'jwt-decode';
import { useFormik } from 'formik';
import { updateProfile } from '../../services/auth';
import AuthLayout from '../../layouts/auth'
import { ArrowLeftIcon, UserCircleIcon, ShoppingBagIcon, InboxIcon, PencilIcon, PowerIcon } from '@heroicons/react/24/solid';
import { Typography, Button, Input, IconButton, Card, List, ListItem, ListItemPrefix, Chip, ListItemSuffix, CardHeader, CardBody } from '@material-tailwind/react';
import customTitle from '../../hooks/customMetadata';
import PublicLayout from '../../layouts/public';
import SideBarProfile from '../../components/sidebar-profile';
import Navigationbar from '../../components/navbar';


function EditProfile() {
    const [updateFailed, setUpdateFailed] = useState("")
    customTitle('Edit Profile')

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: async function () {
            try {
                const data = {
                    newUsername: formik.values.username || "",
                    newPassword: formik.values.password || ""
                };
                await updateProfile(data, (status, res) => {
                    if (status) {
                        localStorage.setItem("token", res.data.newToken)
                        window.location.href = "/profiles"
                    } else {
                        setUpdateFailed(res.response.data)
                    }
                });
            } catch (error) {
                console.error("error", error);
            }
        }

    });

    return (
        <>
            <Navigationbar />
            <PublicLayout>
                <div className="flex flex-row space-x-3">
                    <SideBarProfile />
                    <div className="w-auto mx-auto">
                        <Card>
                            <CardBody>
                                <div className="grid grid-cols-12">
                                    <IconButton variant={'text'} size={'sm'} className='col-span-3' onClick={() => window.location = "/profiles"}>
                                        <ArrowLeftIcon className='w-5 h-5' />
                                    </IconButton>
                                    <Typography variant="h4" color="blue-gray" className='col-span-6'>
                                        Update Profile
                                    </Typography>
                                </div>
                                {updateFailed && <p className="my-2 text-sm text-red-500 text-center">{updateFailed}</p>}
                                <form className="mt-5 w-80 max-w-screen-xl sm:w-96" onSubmit={formik.handleSubmit}>
                                    <div className="py-3 flex flex-col gap-6">
                                        <Input variant="static" placeholder="Masukkan Username" value={formik.values.username} onChange={formik.handleChange} type="text" size="lg" label="Username" name="username" />
                                        {/* <Input variant="static" placeholder="Masukkan Email" value={formik.values.email} onChange={formik.handleChange} type="text" size="lg" label="Email" name="email" /> */}
                                        <Input variant="static" placeholder="Massukan Password" value={formik.values.password} onChange={formik.handleChange} type="password" size="lg" label="Password" name="password" />
                                    </div>

                                    <Button className="mt-6" fullWidth type="submit">
                                        Save
                                    </Button>
                                </form>
                            </CardBody>
                        </Card>
                    </div>
                </div>

            </PublicLayout>
        </>
    )
}

export default EditProfile
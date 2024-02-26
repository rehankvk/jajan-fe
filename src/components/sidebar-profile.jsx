import React from "react";
import { ShoppingBagIcon, UserCircleIcon, InboxIcon, PowerIcon, PencilIcon, BellAlertIcon } from "@heroicons/react/24/solid"
import { List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Card } from "@material-tailwind/react";
import { handleLogout } from "../hooks/logout"

export default function SideBarProfile() {

    const notif = 9

    return (
        <>
            <Card className="h-max w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
                <List>
                    <ListItem className="bg-slate-100" onClick={()=> window.location="/profiles"}>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-6 w-6" />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Orders
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <BellAlertIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Notification
                        {
                            notif > 0 ?
                                <ListItemSuffix>
                                    <Chip value={notif} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                                </ListItemSuffix>
                                :
                                ""
                        }
                    </ListItem>
                    <ListItem onClick={() => window.location = "/profiles/edit"}>
                        <ListItemPrefix>
                            <PencilIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Edit
                    </ListItem>
                    <ListItem onClick={handleLogout}>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </List>
            </Card>
        </>
    )
}
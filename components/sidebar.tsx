"use client"
import { cn } from '@/lib/utils'
import { LayoutDashboard, LogOut, Users, } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

    const routes = [
        {
            label: "Dashboard",
            icon: LayoutDashboard,
            href: "/",
            color: "text-sky-500",

        },

        {
            label: "Manage Users",
            icon: Users,
            href: "/users",
            color: "text-green-700"
        },
        {
            label: "Logout",
            icon: LogOut,
            href: "/settings",
        },
    ]

    const pathname = usePathname()

    return (
        <div className="fixed left-0 flex bg-[#edb6dc] flex-col w-[70px] lg:w-60 h-full  border-r border-[#2D2E35] z-50">
            <div className=" space-y-1">
                {
                    routes.map((route) => (
                        <Link href={route.href} key={route.href} className={cn("text-sm group mt-5 flex p-3 w-full justify-center lg:justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? " text-white bg-[#c4287b]" : " text-black")}>
                            <div className="flex items-center  ">
                                <route.icon className={cn("h-5 w-5 lg:mr-3 ", route.color)} />
                                <span className='hidden lg:block'>
                                    {route.label}
                                </span>

                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar
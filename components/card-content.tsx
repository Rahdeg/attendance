import { CalendarDays, LayoutDashboard, Presentation, UserCircle } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'

const CardContent = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
            <div >
                <div className="h-full w-full space-y-4">

                    <div className="group aspect-video relative rounded-md cursor-pointer">
                        <div className="rounded-md absolute inset-0 bg-[#c4287b] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" />
                        <div className=" bg-green-400 flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md">
                            <div className=' relative'>
                                <Avatar>

                                    <AvatarFallback>
                                        50
                                    </AvatarFallback>
                                </Avatar>

                            </div>
                        </div>

                    </div>

                    <div className="flex gap-x-3 items-center justify-start text-slate-700">
                        <LayoutDashboard />
                        <div className="flex flex-col text-sm overflow-hidden">
                            <p className="truncate font-semibold hover:text-blue-500 text-lg">
                                Admin
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div >
                <div className="h-full w-full space-y-4">

                    <div className="group aspect-video relative rounded-md cursor-pointer">
                        <div className="rounded-md absolute inset-0 bg-[#c4287b] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" />
                        <div className=" bg-blue-400 flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md">
                            <div className=' relative'>
                                <Avatar>

                                    <AvatarFallback>
                                        40
                                    </AvatarFallback>
                                </Avatar>

                            </div>
                        </div>

                    </div>

                    <div className="flex gap-x-3 items-center justify-start text-slate-700">
                        <UserCircle />
                        <div className="flex flex-col text-sm overflow-hidden">
                            <p className="truncate font-semibold hover:text-blue-500 text-lg">
                                Total Staffs
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div >
                <div className="h-full w-full space-y-4">

                    <div className="group aspect-video relative rounded-md cursor-pointer">
                        <div className="rounded-md absolute inset-0 bg-[#c4287b] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" />
                        <div className=" bg-yellow-400 flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md">
                            <div className=' relative'>
                                <Avatar>

                                    <AvatarFallback>
                                        38
                                    </AvatarFallback>
                                </Avatar>

                            </div>
                        </div>

                    </div>

                    <div className="flex gap-x-3 items-center justify-start text-slate-700">
                        <CalendarDays />
                        <div className="flex flex-col text-sm overflow-hidden">
                            <p className="truncate font-semibold hover:text-blue-500 text-lg">
                                Present Today
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div >
                <div className="h-full w-full space-y-4">

                    <div className="group aspect-video relative rounded-md cursor-pointer">
                        <div className="rounded-md absolute inset-0 bg-[#c4287b] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" />
                        <div className=" bg-red-400 flex flex-col items-center justify-center gap-y-4 h-full w-full transition-transform group-hover:translate-x-2 group-hover:-translate-y-2 rounded-md">
                            <div className=' relative'>
                                <Avatar>

                                    <AvatarFallback>
                                        2
                                    </AvatarFallback>
                                </Avatar>

                            </div>
                        </div>

                    </div>

                    <div className="flex gap-x-3 items-center justify-start text-slate-700">
                        <Presentation />
                        <div className="flex flex-col text-sm overflow-hidden">
                            <p className="truncate font-semibold hover:text-blue-500 text-lg">
                                Absent Today
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardContent
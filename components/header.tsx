import React from 'react'
import { Logo } from './logo'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const Header = () => {
    return (
        <div className=" fixed top-0  w-full h-20 z-[49] bg-[#c4287b] px-2 lg:px-4 flex justify-between items-center shadow-sm">
            <Logo />
            <p className=' hidden lg:flex font-bold text-2xl text-white'>
                Face Recognition Based  Attendance System
            </p>
            <div className=' flex items-center justify-center gap-x-3'>
                <p className=' text-base font-bold text-white'>
                    Faith
                </p>
                <Avatar>

                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback> FA</AvatarFallback>
                </Avatar>
            </div>


        </div>
    )
}

export default Header
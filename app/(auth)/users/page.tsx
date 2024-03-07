import { columns } from '@/components/coloumn'
import { DataTable } from '@/components/data-table'
import React from 'react'

const Users = () => {

    const formattedData = [
        {
            name: "Raheem",
            email: "walett@gmail.com",
            type: "User"
        },
        {
            name: "Shola",
            email: "shola@gmail.com",
            type: "Admin"
        },
        {
            name: "Jide",
            email: "jide@gmail.com",
            type: "Admin"
        },
        {
            name: "Spark",
            email: "spark@gmail.com",
            type: "User"
        },


    ]


    return (



        <div className="p-6 bg-[#ffe1f1] h-full" >
            <div className="mb-4">
                <h1 className="text-2xl font-bold">
                    User Listing
                </h1>
            </div>

            <DataTable columns={columns} data={formattedData} />
        </div>
    )
}

export default Users
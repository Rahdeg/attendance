"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Actions } from "./action";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Users = {
  name: string;
  email: string;
  type: string;
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Name
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="flex items-center gap-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

          <AvatarFallback> FA</AvatarFallback>
        </Avatar>
        <span>{row.original.name}</span>
      </div>
    )
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Email
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <Button className=" bg-green-400"> Attendance</Button>
  },
  {
    id: "actionss",
    cell: ({ row }) => <Button className=" bg-green-400"> View</Button>
  },
  {
    id: "action",
    cell: ({ row }) => <Actions title={row.original.name} id={row.original.email}>
      <button
      >
        <MoreHorizontal
          className=" text-[#c4287b] font-bold w-7 h-7"
        />
      </button>
    </Actions>
  },
];

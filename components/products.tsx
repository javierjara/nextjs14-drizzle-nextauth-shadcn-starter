"use client"

import React from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { useState, useMemo } from "react"

export default async function Products() {
    const products = [
        {
          id: 1,
          name: "Productivity Planner",
          description: "A daily planner to boost your productivity",
          price: 9.99,
          status: "Published",
        },
        {
          id: 2,
          name: "Minimalist Wallet",
          description: "A slim, durable wallet for everyday use",
          price: 24.99,
          status: "Draft",
        },
        {
          id: 3,
          name: "Ceramic Mug Set",
          description: "A set of handcrafted ceramic mugs",
          price: 39.99,
          status: "Published",
        },
        {
          id: 4,
          name: "Leather Notebook",
          description: "A high-quality leather-bound notebook",
          price: 19.99,
          status: "Draft",
        },
        {
          id: 5,
          name: "Bamboo Sunglasses",
          description: "Sustainable and stylish sunglasses",
          price: 29.99,
          status: "Published",
        },
      ]
      const [searchTerm, setSearchTerm] = useState("")
      const [sortColumn, setSortColumn] = useState("name")
      const [sortDirection, setSortDirection] = useState("asc")
      const filteredProducts = useMemo(() => {
        return products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
      }, [searchTerm, products])
      const sortedProducts = useMemo(() => {
        return filteredProducts.sort((a, b) => {
          if (a[sortColumn as keyof typeof a] < b[sortColumn as keyof typeof b]) return sortDirection === "asc" ? -1 : 1
          if (a[sortColumn as keyof typeof a] > b[sortColumn as keyof typeof b]) return sortDirection === "asc" ? 1 : -1
          return 0
        })
      }, [filteredProducts, sortColumn, sortDirection])
      const handleSort = (column: React.SetStateAction<string>) => {
        if (sortColumn === column) {
          setSortDirection(sortDirection === "asc" ? "desc" : "asc")
        } else {
          setSortColumn(column)
          setSortDirection("asc")
        }
      }
  return (
    <>
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Products</h1>
            <Button className="ml-auto" size="sm">
              Add product
            </Button>
          </div>
          <div className="border shadow-sm rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("name")}>
                    Name
                    {sortColumn === "name" && (
                      <span className="ml-1">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                    )}
                  </TableHead>
                  <TableHead className="hidden md:table-cell cursor-pointer" onClick={() => handleSort("description")}>
                    Description
                    {sortColumn === "description" && (
                      <span className="ml-1">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                    )}
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => handleSort("price")}>
                    Price
                    {sortColumn === "price" && (
                      <span className="ml-1">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                    )}
                  </TableHead>
                  <TableHead className="hidden md:table-cell cursor-pointer" onClick={() => handleSort("status")}>
                    Status
                    {sortColumn === "status" && (
                      <span className="ml-1">{sortDirection === "asc" ? "\u2191" : "\u2193"}</span>
                    )}
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell className="hidden md:table-cell">{product.description}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge
                        variant={
                          product.status === "Published" ? "default" : product.status === "Draft" ? "outline" : "destructive"
                        }
                      >
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveHorizontalIcon className="w-4 h-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
    </>
  );
}

function MoveHorizontalIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}
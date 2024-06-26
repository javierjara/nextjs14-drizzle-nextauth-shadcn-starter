import Header from '@/components/header';
import ProductsOnAuction from '@/components/products-auction';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import Footer from '@/components/footer';

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"


export default function ProductPage() {
  const auctionEndDate = new Date("2023-12-31")
  const lastUserBid = 325
  return (
    <> 
    <div className="flex flex-col min-h-[100dvh]">
    <Header />
    <main className="flex-1">
 
    <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-2 items-start ">
          <div className="col-span-2 lg:col-span-1">
            <Carousel className="rounded-xl overflow-hidden">
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    alt="Product Image"
                    width={600}
                    height={450}
                    className="object-cover w-full aspect-[4/3]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    alt="Product Image"
                    width={600}
                    height={450}
                    className="object-cover w-full aspect-[4/3]"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    alt="Product Image"
                    width={600}
                    height={450}
                    className="object-cover w-full aspect-[4/3]"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="col-span-2 lg:col-span-1">
          <div className='grid gap-12'>
                  <div className='grid gap-4'>
                    <h1 className="text-3xl font-bold">Vintage Leather Briefcase</h1>
                    <p className="text-gray-500 text-lg">
                      Crafted from premium full-grain leather, this vintage-inspired briefcase is the perfect companion for the
                      modern professional. With its timeless design and durable construction, it will withstand the test of time
                      and keep your essentials organized in style.
                    </p>
                    <div className="flex justify-start">
                      <p className="text-gray-500 pr-4">Tags:</p>
                      <p>Full-grain Leather</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-500">Current Bid</p>
                      <p className="text-2xl font-bold">${lastUserBid}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-gray-500">Auction Ends In</p>
                      <p className="text-2xl font-bold">
                        {auctionEndDate.toLocaleDateString()} {auctionEndDate.toLocaleTimeString()}
                      </p>
                    </div>
                    <form className="mt-4 flex gap-2">
                      <Input type="number" placeholder="Enter your bid" className="flex-1" />
                      <Button type="submit">Place Bid</Button>
                    </form>
                 </div>
              </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Auction Highlights</h2>
                <p className="text-gray-500 mt-2">Don&apos;t miss out on these exclusive auction items!</p>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </div>
            <ProductsOnAuction/>
          </div>
        </section>
    </main>
    <Footer />
    </div>
    </>
  )
}
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProductsOnAuction from '@/components/products-auction';
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { JSX, SVGProps } from 'react';

function SailboatIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
      <path d="M21 14 10 2 3 14h18Z" />
      <path d="M10 2v16" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <main className="flex-1">
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Explore
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                Discover the best products from our wide range of categories.
                </p>
                <form className="flex items-center gap-2 rounded-md bg-white dark:bg-gray-950 shadow-sm">
                  <div className="flex-1">
                    <Input
                      type="search"
                      placeholder="Search for products"
                      className="w-full bg-transparent py-3 px-4 focus:outline-none"
                    />
                  </div>
                  <Button className="rounded-md py-3 px-6">Search</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Popular Categories</h2>
                <p className="text-gray-500 mt-2">Explore our most popular categories.</p>
              </div>
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Link href="#" className="flex flex-col items-center gap-2 hover:text-gray-900" prefetch={false}>
                <div className="bg-white rounded-full p-4 shadow-lg">
                <svg className="w-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <g id="Page-1" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                    <g id="Dribbble-Light-Preview" fill="#000" transform="translate(-60 -1999)">
                      <g id="icons" transform="translate(56 160)">
                        <path id="file_player_media-[#1581]" d="m16.48 1850.514-3.983 2.276a1 1 0 0 1-1.497-.869v-4.55a1 1 0 0 1 1.497-.868l3.984 2.275a1 1 0 0 1 0 1.736Zm5.52 5.135c0 .552-.447 1.342-1 1.342H7c-.552 0-1-.79-1-1.342v-13.992c0-.551.448-.657 1-.657h9v3.656c0 1.103.896 2.34 2 2.34h4v8.653Zm1.708-11.286-5.415-5.24c-.187-.188-.442-.122-.707-.122H6c-1.104 0-2 .552-2 1.657v15.99c0 1.104.896 2.341 2 2.341h16c1.105 0 2-1.237 2-2.34v-11.58a1 1 0 0 0-.292-.706Z"/>
                      </g>
                    </g>
                  </g>
                </svg>
                </div>
                <span className="text-sm font-medium">Digital Products</span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-2 hover:text-gray-900" prefetch={false}>
                <div className="bg-white rounded-full p-4 shadow-lg">
                <svg className="w-[30px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <g id="Page-1" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                      <g id="Dribbble-Light-Preview" fill="#000" transform="translate(-180 -2759)">
                        <g id="icons" transform="translate(56 160)">
                          <path id="book-[#1209]" d="M142 2614a1 1 0 0 1-1 1h-6v-14h6a1 1 0 0 1 1 1v12Zm-9 1h-6a1 1 0 0 1-1-1v-12a1 1 0 0 1 1-1h6v14Zm9-16h-16a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v1a1 1 0 0 0 2 0v-1h7a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2Z"/>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <span className="text-sm font-medium">E-books & Audiobooks</span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-2 hover:text-gray-900" prefetch={false}>
                <div className="bg-white rounded-full p-4 shadow-lg">
                <svg className="w-[30px]"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001">
                  <path d="m223.431 131.351-64.189-64.189c-6.171-6.171-16.178-6.171-22.348 0L4.629 199.426c-6.171 6.171-6.171 16.177 0 22.348l64.189 64.189c6.17 6.17 16.18 6.168 22.348 0l132.266-132.265c6.171-6.171 6.171-16.176-.001-22.347zM507.372 199.425 375.107 67.16c-6.171-6.171-16.178-6.171-22.348 0l-64.189 64.189c-6.171 6.171-6.171 16.177 0 22.348l132.266 132.266c6.17 6.17 16.18 6.168 22.348-.001l64.189-64.189c6.171-6.171 6.171-16.178-.001-22.348zM373.055 280.971a1194218.45 1194218.45 0 0 0-98.531-98.527 47.48 47.48 0 0 0-23.407-12.78c-4.477 6.404-139.435 140.486-141.67 142.266a47.49 47.49 0 0 0 12.68 22.93l95.175 95.163c34.206 34.235 68.215 17.49 80.154-6.02l-60.45-60.449c-6.171-6.171-6.171-16.177 0-22.348 6.17-6.171 16.177-6.171 22.348 0l60.264 60.264c12.743-6.195 22.683-18.317 25.42-33.444l-56.252-56.252c-6.171-6.171-6.171-16.177 0-22.348 6.17-6.171 16.177-6.171 22.348 0l61.975 61.976c19.693-17.133 22.955-47.417-.054-70.431z"/>
                </svg>
                </div>
                <span className="text-sm font-medium">Advertising & Collaborations</span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-2 hover:text-gray-900" prefetch={false}>
                <div className="bg-white rounded-full p-4 shadow-lg">
                  <SailboatIcon className="w-8 h-8 text-gray-700" />
                </div>
                <span className="text-sm font-medium">Lifestyle</span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-2 hover:text-gray-900" prefetch={false}>
                <div className="bg-white rounded-full p-4 shadow-lg">
                <svg className="w-[30px]"  xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24">
                  <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 5 5.08 5 6.2 5h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 6.52 21 7.08 21 8.2v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 19 18.92 19 17.8 19H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.48 3 16.92 3 15.8V8.2Z"/>
                  <path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 9-3 3 3 3m4-6 3 3-3 3"/>
                </svg>
                </div>
                <span className="text-sm font-medium">Software</span>
              </Link>
              <Link href="#" className="flex flex-col items-center gap-2 hover:text-gray-900" prefetch={false}>
                <div className="bg-white rounded-full p-4 shadow-lg">
                <svg  className="w-[30px]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 20 20">
                  <g id="Page-1" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                    <g id="Dribbble-Light-Preview" fill="#000" transform="translate(-140 -7319)">
                      <g id="icons" transform="translate(56 160)">
                        <path id="call-[#191]" d="M94 7167v2h2a2 2 0 0 0-2-2m0-4v2c2.206 0 4 1.794 4 4h2a6 6 0 0 0-6-6m0-4v2c4.411 0 8 3.589 8 8h2c0-5.523-4.477-10-10-10m4.652 18.234c-.011.031-.012.036 0 0m-.535-2.656c-.695-.374-1.398-.8-2.125-1.097-1.405-.573-1.31 1.121-2.313 1.67-.652.357-1.572-.29-2.141-.648a10.102 10.102 0 0 1-2.607-2.403c-.375-.487-1.203-1.403-1.101-2.086.162-1.084 1.444-1.138 1.077-2.464-.196-.71-.547-1.409-.81-2.093-.352-.917-.497-1.504-1.524-1.454-.742.036-1.234.353-1.69.948-1.234 1.607-1.048 3.774-.219 5.537 1.174 2.495 3.186 4.847 5.335 6.367 1.462 1.034 3.388 1.973 5.158 2.132 1.296.117 3.109-.584 3.573-1.991l-.078.238.078-.238.081-.245-.08.242c.408-1.24.458-1.838-.614-2.415m.694 2.173c.008-.024.008-.026 0 0"/>
                      </g>
                    </g>
                  </g>
                </svg>
                </div>
                <span className="text-sm font-medium">Online Meetings</span>
              </Link>
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
      <Footer/>
    </div>
    </>
  );
}

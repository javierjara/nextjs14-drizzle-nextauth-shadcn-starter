
import Link from "next/link"

export default function ProductsOnAuction() {



  return (
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white shadow-lg dark:bg-gray-950">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={500}
                height={300}
                className="h-64 w-full rounded-t-lg object-cover"
              />
              <div className="absolute top-4 right-4 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                3 days left
              </div>
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <img
                  src="/placeholder.svg"
                  alt="Seller Profile"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium">John Doe</span>
              </div>
              <h3 className="text-lg font-semibold">Vintage Camera</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">A classic film camera from the 1970s.</p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-2xl font-bold">$250</div>
                <Link className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3' href="/product-page">Place Bid</Link>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-lg dark:bg-gray-950">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={500}
                height={300}
                className="h-64 w-full rounded-t-lg object-cover"
              />
              <div className="absolute top-4 right-4 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                1 day left
              </div>
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <img
                  src="/placeholder.svg"
                  alt="Seller Profile"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium">Jane Smith</span>
              </div>
              <h3 className="text-lg font-semibold">Antique Vase</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A beautifully crafted vase from the 19th century.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-2xl font-bold">$500</div>
                <Link className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3' href="/product-page">Place Bid</Link>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-lg dark:bg-gray-950">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={500}
                height={300}
                className="h-64 w-full rounded-t-lg object-cover"
              />
              <div className="absolute top-4 right-4 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                5 days left
              </div>
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <img
                  src="/placeholder.svg"
                  alt="Seller Profile"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium">Bob Johnson</span>
              </div>
              <h3 className="text-lg font-semibold">Vintage Typewriter</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A fully functional vintage typewriter from the 1950s.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-2xl font-bold">$150</div>
                <Link className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3' href="/product-page">Place Bid</Link>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-white shadow-lg dark:bg-gray-950">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Product Image"
                width={500}
                height={300}
                className="h-64 w-full rounded-t-lg object-cover"
              />
              <div className="absolute top-4 right-4 rounded-full bg-gray-900 px-3 py-1 text-xs font-medium text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                2 days left
              </div>
            </div>
            <div className="p-4">
              <div className="mb-2 flex items-center gap-2">
                <img
                  src="/placeholder.svg"
                  alt="Seller Profile"
                  width={32}
                  height={32}
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-sm font-medium">Sarah Lee</span>
              </div>
              <h3 className="text-lg font-semibold">Vintage Record Player</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A fully restored vintage record player from the 1960s.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-2xl font-bold">$300</div>
                <Link className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3' href="/product-page">Place Bid</Link>
              </div>
            </div>
          </div>
        </div>
  )
}
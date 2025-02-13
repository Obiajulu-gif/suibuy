import { Search, ShoppingCart, User } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    (<header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Exclusive
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm">
            Home
          </Link>
          <Link href="/contact" className="text-sm">
            Contact
          </Link>
          <Link href="/about" className="text-sm">
            About
          </Link>
          <Link href="/sign-up" className="text-sm">
            Sign Up
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="search"
              placeholder="What are you looking for?"
              className="pl-3 pr-8 py-1 border border-neutral-200 rounded-md text-sm w-[200px] dark:border-neutral-800" />
            <Search
              className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
          <button className="p-1">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button className="p-1">
            <User className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>)
  );
}


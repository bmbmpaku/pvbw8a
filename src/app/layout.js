import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import Router from "next/navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
          <div className="flex justify-between items-center px-4 py-3 sm:px-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.svg"
                alt="Logo"
                class="w-10 h-10"
                width={10}
                height={10}
              />
              <h1 class="text-lg font-bold text-gray-800">Parking Voices</h1>
            </div>
            <nav className="hidden sm:flex space-x-6">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-900 font-medium active:text-blue-600"
              >
                Home
              </Link>
              <Link
                href="/category/"
                className="text-gray-600 hover:text-gray-900 font-medium active:text-blue-600"
              >
                Categories
              </Link>
              <Link
                href="/user-posts"
                className="text-gray-600 hover:text-gray-900 font-medium active:text-blue-600"
              >
                Voices
              </Link>
              {/* <Link href="/UserAccount">MyAccount</Link> */}
            </nav>
            {/* User Icon & Menu*/}
            <div class="flex items-center space-x-4">
              {/* User Avatar */}
              <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-white">
                <i class="fas fa-user"></i>
              </div>

              {/* Menu Icon */}
              <button class="sm:hidden text-gray-600 focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokelinecap="round"
                    strokeinejoin="round"
                    strokewidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
        <main className="bg-purple-100 py-6 px-4 rounded-lg shadow-md max-w-lg mx-auto">
          {children}
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p>Driving & Psrking Blog</p>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.myparkingfines.co.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to nextjs.org →
          </a>
        </footer>
      </body>
    </html>
  );
}

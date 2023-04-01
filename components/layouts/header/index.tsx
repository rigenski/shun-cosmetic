"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-40 w-full bg-[#FEF0E4]">
      <div className="container mx-auto max-w-6xl px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              priority
              src="/images/shun-logo.png"
              height="480"
              width="480"
              alt=""
              className="h-10 w-auto md:h-12"
            />
          </Link>
          <ul
            className={`fixed top-[56px] flex w-full flex-col items-center bg-[#FEF0E4] py-4 shadow transition-all md:static md:w-auto md:flex-row md:py-0 md:shadow-none ${
              isMenuOpen ? "right-0" : "-right-full"
            }`}
          >
            <li className="my-1 md:my-0">
              <Link
                href="/"
                className="text-[#000000 px-4 py-2 text-base font-normal"
              >
                List Produk
              </Link>
            </li>
            <li className="my-1 md:my-0">
              <Link
                href="/"
                className="text-[#000000 px-4 py-2 text-base font-normal"
              >
                Tata Cara Maklon
              </Link>
            </li>
            <li className="my-1 md:my-0">
              <Link
                href="/"
                className="text-[#000000 px-4 py-2 text-base font-normal"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image
              priority
              src="/images/header/menu-icon.svg"
              height="480"
              width="480"
              alt=""
              className="h-8 w-8"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

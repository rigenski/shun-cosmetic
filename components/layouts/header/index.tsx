import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "List Produk",
    url: "products",
  },
  {
    title: "Tata Cara Maklon",
    url: "procedures",
  },
  {
    title: "Hubungi Kami",
    url: "contacts",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-40 w-full bg-[#FEF0E4] shadow">
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
            {menus.map((item, index) => {
              return (
                <li className="my-2 md:my-0" key={index}>
                  <Link
                    href={`/${item.url}`}
                    className={`text-[#000000 px-4 py-2 text-base ${
                      pathname === `/${item.url}`
                        ? "font-semibold"
                        : "font-normal"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
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

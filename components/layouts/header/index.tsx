import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "Home",
    url: "",
    type: "link",
  },
  {
    title: "List Produk",
    url: "products",
    type: "link",
  },
  {
    title: "Tata Cara Maklon",
    url: "procedures",
    type: "link",
  },
  {
    title: "Hubungi Kami",
    url: "https://api.whatsapp.com/send?phone=62818511744&text=Hello%20SHUN%2C%20saya%20tertarik%20untuk%20memulai%20produksi%20maklon.%20Boleh%20tanya-tanya%3F%20%F0%9F%98%80",
    type: "button",
  },
];

export default function Header() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-40 w-full bg-[#FEF0E4] shadow">
      <div className="container mx-auto max-w-6xl px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Home">
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
            className={`items=center fixed top-[56px] mr-0 flex w-full flex-col items-center bg-[#FEF0E4] py-4 shadow transition-all md:static md:-mr-4 md:w-auto md:flex-row md:py-0 md:shadow-none ${
              isMenuOpen ? "right-0" : "-right-full"
            }`}
          >
            {menus.map((item, index) => {
              if (item.type === "link") {
                return (
                  <li className="my-2 md:my-0" key={index}>
                    <Link
                      href={`/${item.url}`}
                      className={`text-[#000000 px-4 py-2 text-base transition-all hover:font-semibold ${
                        pathname === `/${item.url}`
                          ? "font-semibold"
                          : "font-normal"
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              } else if (item.type === "button") {
                return (
                  <li className="my-4 md:my-0" key={index}>
                    <Link
                      href={item.url}
                      target="_blank"
                      className="mx-4 my-2 min-w-[140px] rounded bg-[#B4081D] px-4 py-2.5 text-center text-base font-medium text-[#FFFFFF] transition-all hover:translate-y-2 hover:opacity-75 md:my-0"
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
          <button
            className="block md:hidden"
            aria-label="Menu"
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

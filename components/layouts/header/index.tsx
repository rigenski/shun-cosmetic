import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="w-full bg-[#FEF0E4]">
      <div className="container mx-auto max-w-6xl px-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              priority
              src="/images/shun-logo.png"
              height="480"
              width="480"
              alt=""
              className="h-12 w-auto"
            />
          </Link>
          <ul className="flex items-center">
            <li>
              <Link
                href="/"
                className="px-4 py-2 text-base font-normal text-[#000000]"
              >
                List Produk
              </Link>
              <Link
                href="/"
                className="px-4 py-2 text-base font-normal text-[#000000]"
              >
                Tata Cara Maklon
              </Link>
              <Link
                href="/"
                className="px-4 py-2 text-base font-normal text-[#000000]"
              >
                Hubungi Kami
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

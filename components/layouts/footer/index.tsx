import Image from "next/image";
import Link from "next/link";
import React from "react";

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
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#FEF0E4] py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="row -mx-2 mb-8 flex flex-wrap justify-between">
          <div className="mb-4 w-full px-2 md:w-6/12 lg:mb-0">
            <div>
              <div className="mb-4">
                <Image
                  priority
                  src="/images/shun-logo.png"
                  height="480"
                  width="480"
                  alt=""
                  className="h-10 w-auto md:h-12"
                />
              </div>
              <ul>
                <li className="mb-2">
                  <p className="text-sm font-normal text-[#000000]">
                    PT Satu Hati Untuk Negeri Komplek Pergudangan dan Industri
                    Platinum Blok C-2, Jalan Lingkar Timur, Rangkah Kidul,
                    Sidoarjo, Jawa Timur.
                  </p>
                </li>
                <li className="mb-2">
                  <div className="flex items-center">
                    <p className="text-sm font-normal text-[#000000]">
                      Whatsapp:{" "}
                      <Link
                        href="https://api.whatsapp.com/send?phone=62818511744&text=Hello%20SHUN%2C%20saya%20tertarik%20untuk%20memulai%20produksi%20maklon.%20Boleh%20tanya-tanya%3F%20%F0%9F%98%80"
                        target="_blank"
                        className="font-semibold"
                      >
                        +62818511744
                      </Link>
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="mb-4 w-full px-2 md:w-6/12 lg:mb-0">
            <div className="flex justify-start md:justify-end">
              <div>
                <div className="mb-2">
                  <h4 className="text-base font-medium text-[#000000]">MENU</h4>
                </div>
                <ul>
                  {menus.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          href={`/${item.url}`}
                          className={`text-[#000000 } text-sm font-normal transition-all
                            hover:font-semibold`}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4 flex justify-center">
          <p className="max-w-2xl text-center text-xs font-normal text-[#000000] md:text-sm">
            Lihat langsung pabrik fasilitas produksi kami yang sudah
            tersertifikasi BPOM dan terjamin mutunya. SHUN menyambut hangat
            segala kunjungan dari anda untuk bisa berbincang langsung atau
            berkonsultasi dengan tim konsultan kami yang berpengalaman.
          </p>
        </div>
        <div className="mb-4 flex justify-center">
          <p className="max-w-2xl text-center text-xs font-normal text-[#000000] md:text-sm">
            © 2023 <b>PT Satu Hati Untuk Negeri</b>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

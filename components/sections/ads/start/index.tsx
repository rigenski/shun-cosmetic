import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Start() {
  return (
    <section
      className="w-full bg-[#FEE6BF] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/ads/start/start-bg.png')`,
      }}
    >
      <div className="container mx-auto h-full max-w-6xl px-4 py-8 md:py-16">
        <div className="flex flex-col items-center justify-center py-8">
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
          <h2 className="mb-8 max-w-[560px] text-center text-2xl font-medium text-[#000000] lg:text-4xl">
            <span className="font-semibold">Mulai dari 5 Juta Rupiah</span> dan
            dalam <span className="font-semibold"> 3 LANGKAH MUDAH</span>
          </h2>
          <Link
            href="https://api.whatsapp.com/send?phone=62818511744&text=Hello%20SHUN%2C%20saya%20tertarik%20untuk%20memulai%20produksi%20maklon.%20Boleh%20tanya-tanya%3F%20%F0%9F%98%80"
            target="_blank"
            className="mb-2 min-w-[140px] rounded bg-[#B4081D] px-4 py-2.5 text-center text-base font-medium text-[#FFFFFF] transition-all hover:translate-y-2 hover:opacity-75"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}

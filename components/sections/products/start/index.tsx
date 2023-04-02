import Image from "next/image";
import Link from "next/link";

export default function Start() {
  return (
    <section className="w-full bg-[#FFFAF6]">
      <div className="container mx-auto h-full max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 text-center text-2xl font-semibold text-[#000000] md:mb-8 md:text-4xl">
            Mulai produksi merekmu sekarang!
          </h1>
          <p className="mb-4 text-center text-sm font-normal text-[#000000] lg:text-base">
            Punya pertanyaan atau ingin segera membuat produk merek kamu? <br />
            Silahkan hubungi kami di sini
          </p>
          <Link
            href="/"
            className="min-w-[140px] rounded bg-[#B4081D] px-4 py-2.5 text-center text-base font-medium text-[#FFFFFF]"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}

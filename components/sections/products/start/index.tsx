import Link from "next/link";

export default function Start() {
  return (
    <section className="w-full bg-[#FFFAF6]">
      <div className="container mx-auto h-full max-w-6xl px-4 py-8 md:py-16">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 text-center text-2xl font-semibold text-[#000000] md:mb-8 md:text-4xl">
            Mulai produksi merekmu sekarang!
          </h1>
          <p className="mb-4 text-center text-sm font-normal text-[#000000] lg:text-base">
            Punya pertanyaan atau ingin segera membuat produk merek kamu? <br />
            Silahkan hubungi kami di sini
          </p>
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

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full bg-[#FFFAF6]">
      <div className="relative">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12">
            <div className="h-[480px] md:h-0"></div>
          </div>
          <div className="w-full md:w-6/12">
            <div>
              <Image
                priority
                src="/images/home/hero/hero-illust.png"
                height="1080"
                width="1080"
                alt=""
                className="h-[480px] w-full object-cover md:h-[640px]"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 h-auto w-full md:h-[640px]">
          <div className="container mx-auto h-full max-w-6xl px-4 py-16">
            <div className="-mx-4 flex h-full flex-wrap">
              <div className="w-full px-4 md:w-6/12">
                <div className="flex h-full flex-col items-start justify-center">
                  <h1 className="mb-4 text-4xl font-semibold text-[#000000] md:mb-8 lg:text-6xl">
                    Buat Merk Kosmetik kamu sendiri? Bisa Banget!
                  </h1>
                  <p className="mb-4 text-sm font-normal text-[#000000] opacity-50 lg:text-base">
                    Dengan modal kecil, produksi cepat, perizinan diurusin
                    sampai tuntas!
                  </p>
                  <Link
                    href="/"
                    className="mb-2 text-center min-w-[140px] rounded bg-[#B4081D] px-4 py-2.5 text-base font-medium text-[#FFFFFF]"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
              <div className="w-full px-4 md:w-6/12">
                <div className="h-full w-full border-r border-[#FFFAF6]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16">
          <div className="w-full border border-[#DFC2A3]"></div>
        </div>
      </div>
    </section>
  );
}

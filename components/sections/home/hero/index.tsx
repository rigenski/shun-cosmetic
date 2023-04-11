import Image from "next/image";
import Link from "next/link";

const heroImages = [
  {
    image: "hero1-illust.png",
  },
  {
    image: "hero2-illust.png",
  },
  {
    image: "hero3-illust.png",
  },
  {
    image: "hero4-illust.png",
  },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#FFFAF6]">
      <div className="relative">
        <div className="flex flex-wrap">
          <div className="h-[480px] w-full md:h-[720px] md:w-6/12"></div>
          <div className="h-[480px] w-full md:h-[720px] md:w-6/12">
            <div className="flex flex-wrap">
              {heroImages.map((item, index) => {
                return (
                  <div className="w-6/12" key={index}>
                    <Image
                      priority
                      src={`/images/home/hero/${item.image}`}
                      height="1080"
                      width="1080"
                      alt=""
                      className="h-[240px] w-full object-cover md:h-[360px]"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="-mx-4 flex flex-wrap">
              <div className="h-[480px] w-full px-4 py-8 md:h-[720px] md:w-6/12 md:py-16">
                <div className="flex h-full flex-col items-start justify-center">
                  <h1 className="mb-4 text-4xl font-semibold text-[#000000] md:mb-8 lg:text-6xl">
                    Buat Merk Kosmetik kamu sendiri? Bisa Banget!
                  </h1>
                  <p className="mb-4 text-sm font-normal text-[#000000] opacity-75 lg:text-base">
                    Dengan modal kecil, produksi cepat, perizinan diurusin
                    sampai tuntas!
                  </p>
                  <Link
                    href="https://wa.me/62818511744/"
                    target="_blank"
                    className="mb-2 min-w-[140px] rounded bg-[#B4081D] px-4 py-2.5 text-center text-base font-medium text-[#FFFFFF] transition-all hover:translate-y-2 hover:opacity-75"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
              <div className="h-[480px] w-full px-4 py-8 md:h-[720px] md:w-6/12 md:py-16">
                <div className="h-full">
                  <div className="h-full w-full border-r border-[#FFFAF6]"></div>
                </div>
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

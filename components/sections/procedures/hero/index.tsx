import Image from "next/image";

const categories = [
  {
    title: "Komunikasi",
  },
  {
    title: "Pembuatan Sampel",
  },
  {
    title: "Surat Penawaran Resmi",
  },
  {
    title: "Registrasi BPOM",
  },
  {
    title: "Desain Kemasan Produk",
  },
  {
    title: "Proses Produksi dan Pengiriman Produk",
  },
  {
    title: "Report Order Kilat",
  },
];

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
                      src={`/images/procedures/hero/${item.image}`}
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
                    Tata Cara Maklon
                  </h1>
                  <div className="mb-4 w-6/12 border border-b border-[#DFC2A3]"></div>
                  <ul className="mb-4">
                    {categories.map((item, index) => {
                      return (
                        <li className="mb-2" key={index}>
                          <p className="text-base font-medium text-[#000000] md:text-lg">
                            {index + 1}. {item.title}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="h-[480px] w-full px-4 py-8 md:h-[720px] md:w-6/12 md:py-16">
                <div className="h-full">
                  <div className="h-full w-full rounded-tr-2xl rounded-bl-2xl border border-[#FFFFFF]"></div>
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

import Image from "next/image";
import Link from "next/link";

const process = [
  {
    image: "concept-illust.png",
    title: "Konsep Produk",
  },
  {
    image: "create-illust.png",
    title: "Pembuatan Sample",
  },
  {
    image: "license-illust.png",
    title: "Perizinan",
  },
  {
    image: "production-illust.png",
    title: "Produksi",
  },
];

export default function Process() {
  return (
    <section className="w-full">
      <div className="relative">
        <div className="flex flex-wrap">
          {process.map((item, index) => {
            return (
              <div
                className="h-[480px] w-6/12 bg-cover bg-center bg-no-repeat p-4 md:h-[720px] md:w-3/12"
                style={{
                  backgroundImage: `url('/images/home/process/${item.image}')`,
                }}
                key={index}
              >
                <div className="relative flex h-full items-center justify-center">
                  <h4 className="mb-2 text-center text-base font-medium text-[#000000] md:text-2xl">
                    {item.title}
                  </h4>
                  {process.length - 1 !== index && (
                    <div className="absolute -right-10 hidden md:block">
                      <Image
                        priority
                        src="/images/home/process/arrow-icon.svg"
                        height="480"
                        width="480"
                        alt=""
                        className="h-12 w-12"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute top-0 w-full">
          <div className="container mx-auto h-[960px] max-w-6xl px-4 py-8 md:h-[720px] md:py-16">
            <div className="flex h-full flex-col items-center justify-between">
              <h2 className="text-center text-2xl font-semibold text-[#000000] md:text-4xl">
                Proses Maklor
              </h2>
              <div className="mb-2">
                <Link
                  href="/procedures"
                  className="min-w-[140px] rounded border border-[#000000] px-4 py-2.5 text-base font-medium text-[#000000] transition-all hover:translate-y-2 hover:opacity-75"
                >
                  Lihat Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

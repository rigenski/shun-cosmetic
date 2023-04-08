import Image from "next/image";
import Link from "next/link";

const process = [
  {
    image: "concept-illust.png",
    title: "Konsep Produk",
    url_section: "communication",
  },
  {
    image: "create-illust.png",
    title: "Pembuatan Sample",
    url_section: "create-sample ",
  },
  {
    image: "license-illust.png",
    title: "Perizinan",
    url_section: "registration-bpom",
  },
  {
    image: "production-illust.png",
    title: "Produksi",
    url_section: "process-production",
  },
];

export default function Process() {
  return (
    <section className="w-full">
      <div className="relative">
        <div className="flex flex-wrap">
          {process.map((item, index) => {
            return (
              <Link
                href={`/procedures#${item.url_section}`}
                className="h-[480px] w-6/12 bg-cover bg-center bg-no-repeat p-4 transition-all hover:scale-[1.1] md:h-[720px] md:w-3/12"
                style={{
                  backgroundImage: `url('/images/home/process/${item.image}')`,
                }}
                key={index}
              >
                <div className="relative flex h-full items-center justify-center">
                  <h2 className="mb-2 text-center text-base font-medium text-[#000000] md:text-2xl">
                    {item.title}
                  </h2>
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
              </Link>
            );
          })}
        </div>
        <div className="absolute top-8 left-2/4 translate-x-[-50%] md:top-16">
          <div className="px-4">
            <h2 className="text-center text-2xl font-semibold text-[#000000] md:text-4xl">
              Proses Maklon
            </h2>
          </div>
        </div>
        <div className="absolute bottom-8 left-2/4 translate-x-[-50%] md:bottom-16">
          <div className="px-4">
            <Link
              href="/procedures"
              className="min-w-[140px] rounded border border-[#000000] px-4 py-2.5 text-base font-medium text-[#000000] transition-all hover:translate-y-2 hover:opacity-75"
            >
              Lihat Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

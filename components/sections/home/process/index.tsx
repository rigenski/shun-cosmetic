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
                className="h-[640px] w-3/12 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('/images/home/process/${item.image}')`,
                }}
                key={index}
              >
                <div className="flex h-full items-center justify-center">
                  <h4 className="mb-2 text-2xl font-medium text-[#000000]">
                    {item.title}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute top-0 h-[640px] w-full">
          <div className="container mx-auto h-full max-w-6xl px-4 py-16">
            <div className="flex h-full flex-col items-center justify-between">
              <h2 className="text-center text-4xl font-semibold text-[#000000]">
                Proses Maklor
              </h2>
              <div>
                <Link
                  href="/"
                  className="mb-2 min-w-[140px] rounded border border-[#000000] px-4 py-2.5 text-base font-medium text-[#000000]"
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

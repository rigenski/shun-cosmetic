import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Hand and Body Care",
  },
  {
    title: "Skin Care",
  },
  {
    title: "Skin Treatment",
  },
  {
    title: "Perfume",
  },
  {
    title: "Hair Care",
  },
];

export default function Product() {
  return (
    <section className="w-full bg-[#FFFAF6]">
      <div className="relative">
        <div className="container mx-auto h-full max-w-6xl px-4 py-16">
          <div className="flex flex-wrap">
            <div className="w-6/12">
              <div
                className="h-[512px] w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/home/product/product-illust.png)",
                }}
              >
                <div className="h-full p-4">
                  <div className="h-full rounded-bl-2xl border-l border-b border-[#FFFFFF]"></div>
                </div>
              </div>
            </div>
            <div className="w-6/12"></div>
          </div>
        </div>
        <div className="absolute top-0 h-[640px] w-full">
          <div className="container mx-auto h-full max-w-6xl px-4 py-16">
            <div className="flex h-full flex-col items-end justify-center">
              <h2 className="mb-4 text-end text-2xl font-semibold text-[#000000] md:text-4xl">
                Produk yang bisa diproduksi
              </h2>
              <ul className="mb-4">
                {products.map((item, index) => {
                  return (
                    <li className="mb-2" key={index}>
                      <p className="text-end text-base font-medium text-[#000000] md:text-lg">
                        {item.title}
                      </p>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/"
                className="min-w-[140px] rounded border border-[#000000] px-4 py-2.5 text-base font-medium text-[#000000]"
              >
                Lihat Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

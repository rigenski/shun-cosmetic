import { event as eventGoogle } from "@/components/layouts/google-analythic";
import { event as eventMeta } from "@/components/layouts/meta-pixel";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const products = [
  "Body Care",
  "Skin Care",
  "Skin Treatment",
  "Parfume",
  "Hair Care",
];

export default function Start() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [product, setProduct] = useState("");
  const navigate = useRouter();

  const handleSendMessage = () => {
    eventMeta({ name: "Contact" });
    eventGoogle({ name: "contact" });

    navigate.push(
      `https://api.whatsapp.com/send?phone=6282229801705&text=Nama:%20${name}%0ANama%20Brand:%20${brand}%0AJenis%20produk%20yang%20ingin%20diproduksi:%20${product}`
    );
  };

  return (
    <section className="w-full bg-[#FEE6BF]">
      <div className="relative h-[840px] md:h-[480px]">
        <div className="flex flex-wrap">
          <div className="h-[360px] w-full md:h-[480px] md:w-6/12"></div>
          <div className="h-[360px] w-full md:h-[480px] md:w-6/12">
            <div>
              <Image
                priority
                src="/images/home/start/start-illust.png"
                height="1080"
                width="1080"
                alt=""
                className="h-[480px] w-full object-cover md:h-[480px]"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="-mx-4 flex flex-wrap">
              <div className="h-[360px] w-full px-4 py-8 md:h-[480px] md:w-6/12 md:py-8">
                <div className="flex h-full flex-col items-start justify-center">
                  <div className="mb-4">
                    <Image
                      priority
                      src="/images/shun-logo.png"
                      height="360"
                      width="360"
                      alt=""
                      className="h-10 w-auto md:h-12"
                    />
                  </div>
                  <h1 className="mb-8 text-2xl font-semibold text-[#000000] md:text-4xl">
                    Mulai produksi merekmu sekarang!
                  </h1>
                </div>
              </div>
              <div className="h-[480px] w-full px-4 py-8 md:h-[480px] md:w-6/12 md:py-8">
                <div className="flex h-full w-full flex-col items-center justify-center bg-[#FEE6BF] p-4">
                  <div className="w-full">
                    <div className="mb-2 flex flex-col">
                      <label
                        htmlFor="name"
                        className="mb-2 text-base font-normal text-[#000000]"
                      >
                        Nama
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="border-2 border-[#DFC2A3] bg-[#FFFAF6] px-4 py-2 text-base font-normal text-[#000000]"
                        placeholder="Tulis nama disini..."
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-2 flex flex-col">
                      <label
                        htmlFor="brand"
                        className="mb-2 text-base font-normal text-[#000000]"
                      >
                        Nama Brand
                      </label>
                      <input
                        type="text"
                        name="brand"
                        className="border-2 border-[#DFC2A3] bg-[#FFFAF6] px-4 py-2 text-base font-normal text-[#000000]"
                        placeholder="Tulis nama brand disini..."
                        onChange={(e) => setBrand(e.target.value)}
                      />
                    </div>
                    <div className="mb-2 flex flex-col">
                      <label
                        htmlFor="product"
                        className="mb-2 text-base font-normal text-[#000000]"
                      >
                        Jenis produk yang ingin diproduksi
                      </label>
                      <select
                        name="product"
                        className="border-2 border-[#DFC2A3] bg-[#FFFAF6] px-4 py-2 text-base font-normal text-[#000000]"
                        onChange={(e) => setProduct(e.target.value)}
                      >
                        <option value="">Pilih produk</option>
                        {products.map((item, index) => {
                          return (
                            <option value={item} key={index}>
                              {item}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button
                        className={`mb-2 min-w-[140px] rounded bg-[#B4081D] px-4 py-2.5 text-center text-base font-medium text-[#FFFFFF] transition-all hover:translate-y-2 hover:opacity-75 ${
                          !name && !brand && !product
                            ? "cursor-not-allowed opacity-75"
                            : ""
                        }`}
                        onClick={() => handleSendMessage()}
                        disabled={!name && !brand && !product}
                      >
                        Kirim Pesan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

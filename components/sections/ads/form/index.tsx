import { event as eventGoogle } from "@/components/layouts/google-analythic";
import { event as eventMeta } from "@/components/layouts/meta-pixel";
import { useRouter } from "next/navigation";
import { useState } from "react";

const products = [
  "Body Care",
  "Skin Care",
  "Skin Treatment",
  "Parfume",
  "Hair Care",
];

export default function Form() {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [product, setProduct] = useState("");
  const navigate = useRouter();

  const handleSendMessage = () => {
    eventMeta({ name: "Contact" });
    eventGoogle({ name: "contact" });

    navigate.push(
      `https://api.whatsapp.com/send?phone=62818511744&text=Nama:%20${name}%0ANama%20Brand:%20${brand}%0AJenis%20produk%20yang%20ingin%20diproduksi:%20${product}`
    );
  };

  return (
    <section
      className="w-full bg-[#FEE6BF] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/ads/form/form-bg.png')`,
      }}
    >
      <div className="container mx-auto h-full max-w-6xl px-4 py-8 md:py-16">
        <div className="flex flex-col items-center justify-center py-8">
          <div className="flex h-full w-full max-w-[480px] flex-col items-center justify-center bg-[#FEE6BF] p-4">
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
    </section>
  );
}

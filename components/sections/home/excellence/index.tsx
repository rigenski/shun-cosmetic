"use client";
import Image from "next/image";

const excellences = [
  {
    image: "capacity-icon.svg",
    description: "Kapasitas Produksi Besar",
  },
  {
    image: "minimum-icon.svg",
    description: "Minimum MOQ Rendah",
  },
  {
    image: "assurance-icon.svg",
    description: "Jaminan Kualitas Pasti",
  },
  {
    image: "license-icon.svg",
    description: "Perizinan Mudah dan Cepat",
  },
  {
    image: "support-icon.svg",
    description: "Support Research and Development Produk",
  },
];

export default function Excellence() {
  return (
    <section className="w-full bg-[#FFEED3]">
      <div className="relative">
        <div className="flex flex-wrap">
          <div className="w-6/12">
            <div>
              <Image
                priority
                src="/images/home/hero/hero-illust.png"
                height="1080"
                width="1080"
                alt=""
                className="h-[480px] w-full object-cover"
              />
            </div>
          </div>
          <div className="w-6/12"></div>
        </div>
        <div className="absolute top-0 h-[480px] w-full">
          <div className="container mx-auto h-full max-w-6xl px-4 py-16">
            <div className="-mx-2 flex h-full flex-wrap">
              <div className="w-6/12">
                <div className="h-full p-4">
                  <div className="h-full w-full rounded-bl-2xl border-l border-b border-[#FFFAF6]"></div>
                </div>
              </div>
              <div className="w-6/12">
                <div className="flex h-full flex-col items-start justify-center p-4">
                  <p className="mb-4 text-base font-normal text-[#000000]">
                    Dengan pengalaman yang mumpuni, Bekali produksi merk skin
                    care dan kosmetik anda dengan tim yang mampu menangani semua
                    kebutuhan anda
                  </p>
                  <ul>
                    {excellences.map((item, index) => {
                      return (
                        <li className="mb-4 flex items-center" key={index}>
                          <div className="mr-4">
                            <Image
                              priority
                              src={`/images/home/excellence/${item.image}`}
                              height="480"
                              width="480"
                              alt=""
                              className="h-8 w-8"
                            />
                          </div>
                          <p className="text-base font-normal text-[#000000]">
                            {item.description}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

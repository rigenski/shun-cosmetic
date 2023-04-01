"use client";
import Image from "next/image";

const excellences = [
  {
    image: "capacity-icon.svg",
    title: "Kapasitas Produksi Besar",
    description:
      "Dengan pengalaman yang mumpuni, Bekali produksi merk skin care dan kosmetik anda dengan tim yang mampu menangani semua kebutuhan anda",
  },
  {
    image: "license-icon.svg",
    title: "Perizinan Mudah dan Cepat",
    description:
      "Dengan pengalaman yang mumpuni, Bekali produksi merk skin care dan kosmetik anda dengan tim yang mampu menangani semua kebutuhan anda",
  },
  {
    image: "minimum-icon.svg",
    title: "Minimum MOQ Rendah",
    description:
      "Dengan pengalaman yang mumpuni, Bekali produksi merk skin care dan kosmetik anda dengan tim yang mampu menangani semua kebutuhan anda",
  },
  {
    image: "support-icon.svg",
    title: "Support Research and Development Produk",
    description:
      "Dengan pengalaman yang mumpuni, bekali produksi merk skin care dan kosmetik anda dengan tim yang mampu menangani semua kebutuhan anda",
  },
  {
    image: "assurance-icon.svg",
    title: "Jaminan Kualitas Pasti",
    description:
      "Dengan pengalaman yang mumpuni, Bekali produksi merk skin care dan kosmetik anda dengan tim yang mampu menangani semua kebutuhan anda",
  },
];

export default function Excellence() {
  return (
    <section className="w-full bg-[#FFEED3]">
      <div className="container mx-auto h-full max-w-6xl px-4 py-16">
        <div className="mb-8 flex justify-center">
          <h2 className="text-4xl font-semibold text-[#000000]">
            Mengapa Memilih Kami?
          </h2>
        </div>
        <div className="-mx-4 flex h-full flex-wrap rounded-br-2xl border-r border-b border-[#E1AB81]">
          {excellences.map((item, index) => {
            return (
              <div
                className={`mb-4 px-4 ${
                  excellences.length > index + 1 ? "w-6/12" : "w-full"
                }`}
                key={index}
              >
                <div className="mb-4 flex">
                  <div className="mr-4">
                    <Image
                      priority
                      src={`/images/home/excellence/${item.image}`}
                      height="480"
                      width="480"
                      alt=""
                      className="h-10 min-h-[40px] w-10 min-w-[40px]"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 text-2xl font-semibold text-[#000000]">
                      {item.title}
                    </h4>
                    <p className="text-base font-normal text-[#000000]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

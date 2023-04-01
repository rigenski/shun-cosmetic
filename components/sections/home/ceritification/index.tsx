import Image from "next/image";
import Link from "next/link";

const certifications = [
  {
    title: "CPKB BPOM",
    description: "(Cara Produksi Kosmetika yang Baik)",
    image: "cpkb-icon.png",
  },
  {
    title: "Sertifikat Halal SJPH",
    description: "(Sertifikat Jaminan Produk Halal)",
    image: "halal-icon.png",
  },
];

export default function Certification() {
  return (
    <section className="w-full bg-[#FFFAF6]">
      <div className="relative">
        <div className="container mx-auto h-full max-w-6xl px-4 py-16">
          <div className="flex flex-wrap">
            <div className="w-6/12"></div>
            <div className="w-6/12">
              <div
                className="h-[512px] w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage:
                    "url(/images/home/certification/certification-illust.png)",
                }}
              >
                <div className="h-full p-4">
                  <div className="h-full rounded-tr-2xl border-r border-t border-[#FFFFFF]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 h-[640px] w-full">
          <div className="container mx-auto h-full max-w-6xl px-4 py-16">
            <div className="flex h-full flex-col items-start justify-center">
              <h2 className="mb-4 text-4xl font-semibold text-[#000000]">
                Sertifikasi
              </h2>
              <ul className="mb-4">
                {certifications.map((item, index) => {
                  return (
                    <li className="mb-4" key={index}>
                      <div className="flex">
                        <div className="mr-4">
                          <Image
                            priority
                            src={`/images/home/certification/${item.image}`}
                            height="480"
                            width="480"
                            alt=""
                            className="h-16 w-16"
                          />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-[#000000]">
                            {item.title}
                          </h4>
                          <h4 className="text-base font-normal text-[#000000]">
                            {item.description}
                          </h4>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

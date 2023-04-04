import Image from "next/image";

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
        <div className="container mx-auto h-full max-w-6xl">
          <div className="flex flex-wrap">
            <div className="h-[480px] w-6/12 px-4 py-8 md:h-[720px] md:py-16"></div>
            <div className="h-[480px] w-6/12 px-4 py-8 md:h-[720px] md:py-16">
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
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
          <div className="container mx-auto h-[480px] max-w-6xl px-4 py-8 md:h-[720px] md:py-16">
            <div className="flex h-full flex-col items-start justify-center">
              <h2 className="mb-4 text-2xl font-semibold text-[#000000] md:text-4xl">
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
                            className="h-12 w-12 md:h-16 md:w-16"
                          />
                        </div>
                        <div>
                          <h2 className="text-base font-semibold text-[#000000] md:text-lg">
                            {item.title}
                          </h2>
                          <h4 className="text-sm font-normal text-[#000000] md:text-base">
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

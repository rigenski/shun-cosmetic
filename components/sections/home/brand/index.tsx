"use client";
import Image from "next/image";

const brands = [
  {
    image: "colla-illust.png",
  },
  {
    image: "efosh-illust.png",
  },
  {
    image: "beauty-exposure-illust.png",
  },
  {
    image: "purvis-illust.png",
  },
  {
    image: "herbiglow-illust.png",
  },
  {
    image: "khalea-illust.png",
  },
  {
    image: "dnayskin-illust.png",
  },
  {
    image: "fsl-illust.png",
  },
];

export default function Brand() {
  return (
    <section className="w-full bg-[#FFFAF6]">
      <div className="container mx-auto h-full max-w-6xl px-4 py-16">
        <p className="mb-4 text-center text-base font-normal text-[#000000]">
          Brand yang sudah Maklon di SHUN Beauty
        </p>
        <div className="-mx-2 flex flex-wrap items-center justify-between">
          {brands.map((item, index) => {
            return (
              <div className="px-2 pb-4" key={index}>
                <Image
                  priority
                  src={`/images/home/brand/${item.image}`}
                  height="480"
                  width="480"
                  alt=""
                  className="h-16 w-16 object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

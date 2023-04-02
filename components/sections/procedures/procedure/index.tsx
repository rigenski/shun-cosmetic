"use client";
import Image from "next/image";

export default function Procedure({ items, index }: any) {
  return (
    <section className={`w-full bg-[${items.background}]`} key={index}>
      <div className="container mx-auto h-full max-w-6xl px-4 py-8 md:py-16">
        <div className="flex flex-wrap">
          <div
            className={`mb-4 w-full md:w-6/12 ${
              index % 2 === 0 ? "order-1" : "order-1 md:order-2"
            }`}
          >
            <div className="relative">
              <div>
                <Image
                  priority
                  src={`/images/procedures/procedure/${items.image}`}
                  height="480"
                  width="480"
                  alt=""
                  className="h-[240px] w-full object-cover md:h-[360px]"
                />
              </div>
              <div className="absolute top-0 left-0 h-full w-full">
                <div className="h-full p-4">
                  <div
                    className={`h-full ${
                      index % 2 === 0
                        ? "rounded-bl-2xl border-l border-b border-[#FFFFFF]"
                        : "rounded-br-2xl border-r border-b border-[#FFFFFF]"
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`mb-4 w-full md:w-6/12 ${
              index % 2 === 0 ? "order-2" : "order-2 md:order-1"
            }`}
          >
            <div className="px-0 md:px-4">
              <h2 className="mb-4 text-lg font-semibold text-[#000000] lg:text-2xl">
                {index + 1}. {items.title}
              </h2>
              <p className="text-sm font-normal text-[#000000] md:text-base">
                {items.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

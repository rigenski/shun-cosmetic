"use client";

import Image from "next/image";

export default function Category({ items, index }: any) {
  if (items.type === "horizontal") {
    return (
      <section className={`w-full bg-[${items.background}]`} key={index}>
        <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16">
          <div className="mb-4 md:mb-8">
            <h2 className="text-2xl font-semibold text-[#000000] lg:text-4xl">
              {items.title}
            </h2>
          </div>
          <div className="-mx-4 flex flex-wrap pl-4">
            {items.products.map((item: any, index: number) => {
              return (
                <div className="mb-4 w-6/12 px-4 md:w-3/12" key={index}>
                  <ul className="list-disc">
                    {item.map((item: any, index: number) => {
                      return (
                        <li className="mb-2" key={index}>
                          <p className="text-sm font-normal text-[#000000] lg:text-base">
                            {item}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-0 flex justify-center md:-mt-24 md:justify-end">
            <div>
              <Image
                priority
                src={`/images/products/category/${items.image}`}
                height="480"
                width="480"
                alt=""
                className="h-64 w-64 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section
        className={`w-full md:w-6/12 bg-[${items.background}]`}
        key={index}
      >
        <div
          className={`container flex h-full max-w-6xl flex-col  justify-between px-4 py-8 md:max-w-xl md:py-16 ${
            index % 2 === 0 ? "mx-auto md:ml-auto" : "mx-auto md:mr-auto"
          }`}
        >
          <div className="mb-4 block md:mb-8 md:hidden">
            <h2 className="text-2xl font-semibold text-[#000000] lg:text-4xl">
              {items.title}
            </h2>
          </div>
          <div className="-mx-4 flex flex-wrap pl-4">
            {items.products.map((item: any, index: number) => {
              return (
                <div className="mb-4 w-6/12 px-4 md:w-4/12" key={index}>
                  <ul className="list-disc">
                    {item.map((item: any, index: number) => {
                      return (
                        <li className="mb-2" key={index}>
                          <p className="text-sm font-normal text-[#000000] lg:text-base">
                            {item}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="mt-0 flex justify-center md:mt-0 md:justify-between">
            <div className="mb-4 mt-24 hidden -rotate-90 md:mb-8 md:block lg:mt-16">
              <h2 className="text-2xl font-semibold text-[#000000] lg:text-4xl">
                {items.title}
              </h2>
            </div>
            <div>
              <Image
                priority
                src={`/images/products/category/${items.image}`}
                height="480"
                width="480"
                alt=""
                className="h-64 w-64 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

"use client";

import Image from "next/image";

export default function Category({ items, index }: any) {
  return (
    <section className={`w-full bg-[${items.background}]`} key={index}>
      <div className="container mx-auto h-full max-w-6xl px-4 py-16">
        <div className="mb-4 md:mb-8">
          <h2 className="text-2xl font-semibold text-[#000000] lg:text-4xl">
            {items.title}
          </h2>
        </div>
        <div className="-mx-4 flex flex-wrap pl-4">
          {items.products.map((item: any, index: number) => {
            return (
              <div className="mb-4 w-full px-4 sm:w-6/12 md:w-3/12" key={index}>
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
        <div className="mt-0 flex justify-center sm:-mt-24 md:justify-end">
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

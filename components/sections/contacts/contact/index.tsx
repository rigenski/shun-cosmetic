import Image from "next/image";

export default function Contact({ items, key: index }: any) {
  return (
    <section className={`w-full bg-[${items.background}]`} key={index}>
      <div className="relative">
        <div className="flex flex-wrap">
          <div
            className={`h-[360px] w-full md:h-[480px] md:w-6/12 ${
              index % 2 === 0 ? "order-1" : "order-1 md:order-2"
            }`}
          >
            <div>
              <Image
                priority
                src={`/images/contacts/contact/${items.image}`}
                height="1080"
                width="1080"
                alt=""
                className="h-[360px] w-full object-cover md:h-[480px]"
              />
            </div>
          </div>
          <div
            className={`h-[360px] w-full md:h-[480px]  md:w-6/12 ${
              index % 2 === 0 ? "order-2" : "order-2 md:order-1"
            }`}
          ></div>
        </div>
        <div className="absolute top-0 w-full">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="-mx-4 flex flex-wrap">
              <div
                className={`h-[360px] w-full px-4 py-8 md:h-[480px] md:w-6/12 md:py-16 ${
                  index % 2 === 0 ? "order-1" : "order-1 md:order-2"
                }`}
              >
                <div className="h-full">
                  <div
                    className={`h-full ${
                      index % 2 === 0
                        ? "rounded-bl-2xl border-l border-b border-[#FFFFFF]"
                        : "rounded-br-2xl border-r border-b border-[#FFFFFF]"
                    }`}
                  ></div>
                </div>
              </div>
              <div
                className={`h-[360px] w-full px-4 py-8 md:h-[480px] md:w-6/12 md:py-16 ${
                  index % 2 === 0 ? "order-2" : "order-2 md:order-1"
                }`}
              >
                <div className="h-full">
                  <h2 className="mb-4 text-lg font-semibold text-[#000000] lg:text-2xl">
                    {items.title}
                  </h2>
                  <p className="text-sm font-normal text-[#000000] md:text-base">
                    {items.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

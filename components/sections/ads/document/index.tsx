import Image from "next/image";
import React from "react";

export default function Document() {
  return (
    <section className="w-full bg-[#FFFAF6]">
      <div className="container mx-auto h-full max-w-6xl px-4 py-8 md:py-16">
        <div className="mb-8 flex justify-center">
          <h2 className="text-center text-2xl font-semibold text-[#000000] lg:text-4xl">
            Proses dokumen dan administrasi yang ribet?
          </h2>
        </div>
        <div className=" rounded-2xl bg-[#FEF0E4] px-4 py-16 md:px-8">
          <p className="mx-0 mb-8 text-center text-sm font-medium text-[#000000] underline md:mx-24 lg:text-base">
            Dengan membuat produk maklonmu di SHUN, proses perizinan dan dokumen
            akan dibantu sampai tuntas, sehingga kamu tidak perlu bingung dan
            repot dan bisa fokus berjualan
          </p>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full p-4 md:w-6/12">
              <div>
                <div className="mb-4 flex flex-col items-center">
                  <div className="mb-4">
                    <Image
                      priority
                      src="/images/ads/document/check-icon.png"
                      height="480"
                      width="480"
                      alt=""
                      className="h-12 w-auto"
                    />
                  </div>
                  <h4 className="text-center text-lg font-semibold text-[#000000]">
                    Proses Cepat
                  </h4>
                </div>
                <p className="text-sm font-normal text-[#000000] md:text-base">
                  Dengan pengalaman bertahun-tahun di dunia maklon, SHUN telah
                  membantu puluhan brand untuk membuat bisnis mereka. Tim
                  konsultan kami telah dibekali dengan pengetahuan mengenai
                  segala proses administrasi sehingga pengajuan bisa cepat dan
                  terukur.
                </p>
              </div>
            </div>
            <div className="w-full p-4 md:w-6/12">
              <div>
                <div className="mb-4 flex flex-col items-center">
                  <div className="mb-4">
                    <Image
                      priority
                      src="/images/ads/document/check-icon.png"
                      height="480"
                      width="480"
                      alt=""
                      className="h-12 w-auto"
                    />
                  </div>
                  <h4 className="text-center text-lg font-semibold text-[#000000]">
                    Full Pendampingan
                  </h4>
                </div>
                <p className="text-sm font-normal text-[#000000] md:text-base">
                  Dengan maklon bersama SHUN, kamu akan didampingi Personal
                  Consultant yang siap membantu setiap kendala dan menjawab
                  langsung semua pertanyaanmu.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="-mx-4 flex h-full flex-wrap rounded-br-2xl border-r border-b border-[#E1AB81]">
          {excellences.map((item, index) => {
            return (
              <div
                className={`mb-4 px-4 md:mb-8 ${
                  excellences.length - 1 !== index
                    ? "w-full md:w-6/12"
                    : "w-full"
                }`}
                key={index}
              >
                <div className="flex">
                  <div className="mr-4">
                    <Image
                      priority
                      src={`/images/home/excellence/${item.image}`}
                      height="480"
                      width="480"
                      alt=""
                      className="h-8 min-h-[32px] w-8 min-w-[32px] md:h-10 md:min-h-[40px] md:w-10 md:min-w-[40px]"
                    />
                  </div>
                  <div>
                    <h2 className="mb-2 text-lg font-semibold text-[#000000] lg:text-2xl">
                      {item.title}
                    </h2>
                    <p className="text-sm font-normal text-[#000000] lg:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    </section>
  );
}

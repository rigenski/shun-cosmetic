import Image from "next/image";
import Link from "next/link";

export default function Start() {
  return (
    <section className="w-full bg-[#FEE6BF]">
      <div className="relative">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12">
            <div className="h-[320px] md:h-0"></div>
          </div>
          <div className="w-full md:w-6/12">
            <div>
              <Image
                priority
                src="/images/home/start/start-illust.png"
                height="1080"
                width="1080"
                alt=""
                className="h-[320px] w-full object-cover md:h-[640px]"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 h-0 w-full md:h-[640px]">
          <div className="container mx-auto h-full max-w-6xl px-4 py-16">
            <div className="-mx-4 flex h-full flex-wrap">
              <div className="w-full px-4 md:w-6/12">
                <div className="flex h-full flex-col items-start justify-center">
                  <div className="mb-4">
                    <Image
                      priority
                      src="/images/shun-logo.png"
                      height="480"
                      width="480"
                      alt=""
                      className="h-10 w-auto md:h-12"
                    />
                  </div>
                  <h1 className="mb-8 text-2xl font-semibold text-[#000000] md:text-4xl">
                    Mulai produksi merekmu sekarang!
                  </h1>
                  <Link
                    href="/"
                    className="mb-2 min-w-[140px] rounded bg-[#B4081D] px-4 py-2.5 text-base font-medium text-[#FFFFFF]"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
              <div className="w-full px-4 md:w-6/12">
                <div className="h-full w-full border-l border-[#FFFAF6]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

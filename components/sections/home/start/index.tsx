import Image from "next/image";
import Link from "next/link";

export default function Start() {
  return (
    <section className="w-full bg-[#FEE6BF]">
      <div className="relative">
        <div className="flex flex-wrap">
          <div className="h-[360px] w-full md:h-[480px] md:w-6/12"></div>
          <div className="h-[360px] w-full md:h-[480px] md:w-6/12">
            <div>
              <Image
                priority
                src="/images/home/start/start-illust.png"
                height="1080"
                width="1080"
                alt=""
                className="h-[360px] w-full object-cover md:h-[480px]"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="-mx-4 flex flex-wrap">
              <div className="h-[360px] w-full px-4 py-8 md:h-[480px] md:w-6/12 md:py-8">
                <div className="flex h-full flex-col items-start justify-center">
                  <div className="mb-4">
                    <Image
                      priority
                      src="/images/shun-logo.png"
                      height="360"
                      width="360"
                      alt=""
                      className="h-10 w-auto md:h-12"
                    />
                  </div>
                  <h1 className="mb-8 text-2xl font-semibold text-[#000000] md:text-4xl">
                    Mulai produksi merekmu sekarang!
                  </h1>
                  <Link
                    href="https://wa.me/6212345"
                    target="_blank"
                    className="mb-2 min-w-[140px] rounded bg-[#B4081D] px-4 py-2.5 text-center text-base font-medium text-[#FFFFFF] transition-all hover:translate-y-2 hover:opacity-75"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
              <div className="h-[360px] w-full px-4 py-8 md:h-[480px] md:w-6/12 md:py-8">
                <div className="h-full">
                  <div className="h-full w-full border-l border-[#FFFAF6]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

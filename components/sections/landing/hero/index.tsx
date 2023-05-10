import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroImages = [
  {
    image: "hero1-illust.png",
  },
  {
    image: "hero2-illust.png",
  },
  {
    image: "hero3-illust.png",
  },
  {
    image: "hero4-illust.png",
  },
  {
    image: "hero5-illust.png",
  },
];

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="w-full bg-[#FEF0E4]">
      <div className="relative">
        <div className="flex flex-wrap">
          <div className="h-[320px] w-full md:h-[720px] md:w-6/12"></div>
          <div className="h-[320px] w-full md:h-[720px] md:w-6/12"></div>
        </div>
        <div className="absolute top-0 w-full">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="-mx-4 flex flex-wrap">
              <div className="h-[320px] w-full px-4 py-8 md:h-[720px] md:w-6/12 md:py-16">
                <div className="flex h-full flex-col items-start justify-center">
                  <h1 className="mb-4 text-4xl font-semibold text-[#000000] md:mb-8 lg:text-6xl">
                    Ingin buat SkinCare tapi terkendala modal?
                  </h1>
                  <p className="mb-4 text-sm font-normal text-[#000000] opacity-75 lg:text-base">
                    Dengan modal kecil, produksi cepat, perizinan diurusin
                    sampai tuntas!
                  </p>
                  <Link
                    href="https://api.whatsapp.com/send?phone=62818511744&text=Hello%20SHUN%2C%20saya%20tertarik%20untuk%20memulai%20produksi%20maklon.%20Boleh%20tanya-tanya%3F%20%F0%9F%98%80"
                    target="_blank"
                    className="mb-2 min-w-[140px] rounded bg-[#B4081D] px-4 py-2.5 text-center text-base font-medium text-[#FFFFFF] transition-all hover:translate-y-2 hover:opacity-75"
                  >
                    Hubungi Kami
                  </Link>
                </div>
              </div>
              <div className="h-[320px] w-full px-4 py-8 md:h-[720px] md:w-6/12 md:py-16">
                <div className="h-full w-full">
                  <Slider {...settings} className="h-full w-full">
                    {heroImages.map((item, index) => {
                      return (
                        <div className="h-full w-full" key={index}>
                          <Image
                            priority
                            src={`/images/landing/hero/${item.image}`}
                            height="1080"
                            width="1080"
                            alt=""
                            className="max-h-[320px] w-full object-cover md:max-h-[580px]"
                          />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16">
          <div className="w-full border border-[#DFC2A3]"></div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import "react-accessible-accordion/dist/fancy-example.css";
import Slider from "react-slick";

export default function Testimony() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <section className="w-full bg-[#FFFAF6]">
      <div className="container mx-auto h-full max-w-6xl px-4 py-8 md:py-16">
        <div className="">
          <h2 className="mb-4 text-center text-2xl font-semibold text-[#000000] lg:text-4xl">
            Testimoni
          </h2>
          <p className="mb-8 text-center text-sm font-normal text-[#000000] opacity-75 lg:text-base">
            Apa kata customer kami.
          </p>
          <div className="mx-auto w-full">
            <Slider {...settings}>
              <div className="w-full px-2 md:px-4">
                <div className="rounded bg-[#FEE6BF] p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-[#000000]">
                        Justin Liegent
                      </h4>
                      <p className="text-base font-normal text-[#000000] opacity-75">
                        Head of Marketing Brand
                      </p>
                    </div>
                    <div>
                      <Image
                        priority
                        src="/images/ads/testimony/comma-icon.png"
                        height="480"
                        width="480"
                        alt=""
                        className="h-6 w-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p>
                      “Kerja sama kami dengan perusahaan pabrik kosmetik Shun
                      Cosmetic sangatlah sukses. Mereka sangat cepat dan efisien
                      dalam memproduksi produk kami, dan juga memberikan layanan
                      pelanggan yang sangat baik.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-2 md:px-4">
                <div className="rounded bg-[#FEE6BF] p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-[#000000]">
                        Jennifer
                      </h4>
                      <p className="text-base font-normal text-[#000000] opacity-75">
                        Brand Owner
                      </p>
                    </div>
                    <div>
                      <Image
                        priority
                        src="/images/ads/testimony/comma-icon.png"
                        height="480"
                        width="480"
                        alt=""
                        className="h-6 w-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p>
                      “Saya sangat senang telah bermitra dengan perusahaan Shun
                      Cosmetics dalam mengembangkan produk baru kami. Tim mereka
                      sangat profesional dan berdedikasi untuk memastikan produk
                      kami diproduksi dengan standar kualitas tertinggi.”
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-2 md:px-4">
                <div className="rounded bg-[#FEE6BF] p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-[#000000]">
                        Agustin
                      </h4>
                      <p className="text-base font-normal text-[#000000] opacity-75">
                        Brand Owner
                      </p>
                    </div>
                    <div>
                      <Image
                        priority
                        src="/images/ads/testimony/comma-icon.png"
                        height="480"
                        width="480"
                        alt=""
                        className="h-6 w-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <p>
                      “SHUN sangat fleksibel dan responsif terhadap kebutuhan
                      kami. Saya sangat merekomendasikan Pak Adi dan SHUN untuk
                      kerja sama pengembangan produk kosmetik.”
                    </p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const menus = [
  {
    title: "Company visit",
    url: "https://api.whatsapp.com/send?phone=62818511744&text=Hello%20SHUN%2C%20saya%20tertarik%20untuk%20memulai%20produksi%20maklon.%20Boleh%20tanya-tanya%3F%20%F0%9F%98%80",
  },
  {
    title: "Konsultasi",
    url: "https://api.whatsapp.com/send?phone=62818511744&text=Hello%20SHUN%2C%20saya%20tertarik%20untuk%20memulai%20produksi%20maklon.%20Boleh%20tanya-tanya%3F%20%F0%9F%98%80",
  },
  {
    title: "Pertanyaan",
    url: "https://api.whatsapp.com/send?phone=62818511744&text=Hello%20SHUN%2C%20saya%20tertarik%20untuk%20memulai%20produksi%20maklon.%20Boleh%20tanya-tanya%3F%20%F0%9F%98%80",
  },
  {
    title: "Hubungi Kami",
    url: "https://api.whatsapp.com/send?phone=62818511744&text=Hello%20SHUN%2C%20saya%20tertarik%20untuk%20memulai%20produksi%20maklon.%20Boleh%20tanya-tanya%3F%20%F0%9F%98%80",
  },
];

export default function Hero() {
  return (
    <section className="w-full bg-[#FEF0E4]">
      <div className="container mx-auto h-full max-w-6xl px-4 py-8 md:py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-4">
            <Image
              priority
              src="/images/shun-logo.png"
              height="480"
              width="480"
              alt=""
              className="h-16 w-auto md:h-24"
            />
          </div>
          <ul className="flex flex-wrap justify-center">
            {menus.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`flex w-6/12 items-center justify-center md:w-auto ${
                    index < menus.length - 1
                      ? " border-0 border-[#000000] md:border-r"
                      : ""
                  }`}
                >
                  <Link
                    href={item.url}
                    className="text-[#000000 px-4 py-2 text-center text-sm font-normal md:py-0 lg:text-base"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

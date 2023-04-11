import Link from "next/link";

export default function Map() {
  return (
    <section className="w-full bg-[#FFFAF6]">
      <div className="container mx-auto h-full max-w-6xl py-8 md:py-16">
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.076487967792!2d112.73701871493832!3d-7.456790575563356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e738c34a23db%3A0x8a1385e2979dacf7!2sPT.%20Satu%20Hati%20Untuk%20Negeri%20(SHUN)!5e0!3m2!1sid!2sid!4v1680426215570!5m2!1sid!2sid"
            width="600"
            height="450"
            style={{ border: 0, width: "100%" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-8 right-12 md:right-16">
            <Link
              href="https://goo.gl/maps/Nku9PAiqKCNeXLkH6"
              target="_blank"
              className="mb-2 min-w-[140px] rounded bg-[#B4081D] px-4 py-2.5 text-center text-base font-medium text-[#FFFFFF]"
            >
              Buka Maps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

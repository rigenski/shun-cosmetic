import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export default function Question() {
  return (
    <section className="w-full bg-[#FFFAF6]">
      <div className="container mx-auto h-full max-w-6xl px-4 py-8 md:py-16">
        <div className="">
          <h2 className="mb-4 text-2xl font-semibold text-[#000000] lg:text-4xl">
            FAQ
          </h2>
          <p className="mb-8 text-sm font-normal text-[#000000] opacity-75 lg:text-base">
            Dengan modal kecil, produksi cepat, perizinan diurusin sampai
            tuntas!
          </p>
          <div className="mx-auto w-full ">
            <div className="rounded-m overflow-hidden">
              <Accordion>
                <AccordionItem className="mb-4">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Mengapa Harus membuat produk skin care dan kosmetik dengan
                      SHUN?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-sm font-normal text-[#333333]">
                      Bisnis klien kami adalah fokus utama dalam keseharian
                      SHUN. Tim Konsultan kami akan siap sedia 24/7 membantu
                      menjawab semua pertanyaan anda dan mendampingi anda bahkan
                      hingga setelah produk anda selesai diproduksi dan
                      dipasarkan.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="mb-4">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Menerima pesanan khusus
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-sm font-normal text-[#333333]">
                      Dengan teknologi produksi yang kami miliki, apapun produk
                      yang ingin anda produksi siap kami bantu. TIm konsultan
                      yang professional siap membantu anda untuk menyusun bahan
                      komposisi produk anda.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem className="mb-4">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Apakah saya dapat membuat sampel produk terlebih dahulu?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="text-sm font-normal text-[#333333]">
                      entu saja! Setiap produk yang akan diproduksi akan
                      dibuatkan sampel produk terlebih dahulu yang kemudian akan
                      diserahkan kepada anda untuk dilakukan pengecekan. Jika
                      anda menyetujui, barulah produk akan diproduksi
                      seluruhnya.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

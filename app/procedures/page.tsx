"use client";
import Header from "@/components/layouts/header";
import Hero from "@/components/sections/procedures/hero";
import Procedure from "@/components/sections/procedures/procedure";
import { useSearchParams } from "next/navigation";

const categories = [
  {
    title: "Komunikasi",
    description:
      "Merupakan step pertama dari flow untuk membuat brand skin care kamu. Beritahu tim konsultan SHUN mengenai aspirasi kamu dan visi produk tersebut. Kamu dapat memberikan ide bahan (ingredients) dan menentukan langsung bersama dengan konsultan.",
    image: "communication.png",
    background: "#FEF0E4",
    section: "communication",
  },
  {
    title: "Pembuatan Sampel",
    description:
      "Kamu akan ditemani oleh konsultan kami sampai mendapatkan ingredients yang pas, dengan pembuatan sampel. Kamu dapat membuat sampel untuk 1 produk atau lebih langsung di pabrik SHUN.",
    image: "create-sample.png",
    background: "#FFEED3",
    section: "create-sample",
  },
  {
    title: "Surat Penawaran Resmi",
    description:
      "Dari sampel yang sudah ada, kamu dapat menentukan hasil akhir produk yang ingin diproduksi. Kami akan memberikan perhitungan harga modal kamu. Jaminan harga terbaik!",
    image: "offer-letter.png",
    background: "#FEF0E4",
    section: "offer-letter",
  },
  {
    title: "Registrasi BPOM",
    description:
      "Setelah memantapkan hati untuk memulai produkmu sendiri dan memutuskan untuk lanjut produksi, Tim Konsultan kami akan membantumu untuk mengurus semua perizinan yang dibutuhkan mulai dari BPOM, Merk, Surat Perjanjian, dan lainnya.",
    image: "registration-bpom.png",
    background: "#FFEED3",
    section: "registration-bpom",
  },
  {
    title: "Desain Kemasan Produk",
    description:
      "Setelah mendapatkan izin edar dari BPOM, kamu bisa langsung menentukan desain kemasan kamu dan packagingnya. Packaging kamu harus menarik! Oleh karena itu, Konsultan SHUN selalu siap setia menemani kamu untuk brainstorming dan diskusi.",
    image: "packaging-design.png",
    background: "#FEF0E4",
    section: "packaging-design",
  },
  {
    title: "Proses Produksi dan Pengiriman Produk",
    description:
      "Done! Kamu tinggal duduk tenang menunggu produk kamu diproduksi dalam 4-5 hari, dan produk siap untuk dikirim ke gudangmu.",
    image: "process-production.png",
    background: "#FFEED3",
    section: "process-production",
  },
  {
    title: "Report Order Kilat",
    description:
      "Untuk produk kamu yang sudah berjalan dan mengurus segala perizinan, order lagi di SHUN cuma perlu waktu 1 minggu sampai produk kamu re-stok kembali.",
    image: "repeat-order.png",
    background: "#FEF0E4",
    section: "repeat-order",
  },
];

export default function Home() {
  const query = useSearchParams();
  // const hash = router.asPath.split("#")[1];
  // console.log(query);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <>
      <Header />
      <main className="pt-[56px] md:pt-[64px]">
        <Hero />
        {categories.map((item, index) => {
          return <Procedure items={item} index={index} key={index} />;
        })}
      </main>
    </>
  );
}

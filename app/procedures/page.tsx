import Header from "@/components/layouts/header";
import Hero from "@/components/sections/procedures/hero";
import Procedure from "@/components/sections/procedures/procedure";

const categories = [
  {
    title: "Komunikasi",
    description:
      "Merupakan step pertama dari flow untuk membuat brand skin care kamu. Beritahu tim konsultan SHUN mengenai aspirasi kamu dan visi produk tersebut. Kamu dapat memberikan ide bahan (ingredients) dan menentukan langsung bersama dengan konsultan.",
    image: "communication.png",
    background: "#FEF0E4",
  },
  {
    title: "Pembuatan Sampel",
    description:
      "Kamu akan ditemani oleh konsultan kami sampai mendapatkan ingredients yang pas, dengan pembuatan sampel. Kamu dapat membuat sampel untuk 1 produk atau lebih langsung di pabrik SHUN.",
    image: "create-sample.png",
    background: "#FFEED3",
  },
  {
    title: "Surat Penawaran Resmi",
    description:
      "Dari sampel yang sudah ada, kamu dapat menentukan hasil akhir produk yang ingin diproduksi. Kami akan memberikan perhitungan harga modal kamu. Jaminan harga terbaik!",
    image: "offer-letter.png",
    background: "#FEF0E4",
  },
  {
    title: "Registrasi BPOM",
    description:
      "Setelah memantapkan hati untuk memulai produkmu sendiri dan memutuskan untuk lanjut produksi, Tim Konsultan kami akan membantumu untuk mengurus semua perizinan yang dibutuhkan mulai dari BPOM, Merk, Surat Perjanjian, dan lainnya.",
    image: "registration-bpom.png",
    background: "#FFEED3",
  },
  {
    title: "Desain Kemasan Produk",
    description:
      "Setelah mendapatkan izin edar dari BPOM, kamu bisa langsung menentukan desain kemasan kamu dan packagingnya. Packaging kamu harus menarik! Oleh karena itu, Konsultan SHUN selalu siap setia menemani kamu untuk brainstorming dan diskusi.",
    image: "packaging-design.png",
    background: "#FEF0E4",
  },
  {
    title: "Proses Produksi dan Pengiriman Produk",
    description:
      "Done! Kamu tinggal duduk tenang menunggu produk kamu diproduksi dalam 4-5 hari, dan produk siap untuk dikirim ke gudangmu.",
    image: "process-production.png",
    background: "#FFEED3",
  },
  {
    title: "Report Order Kilat",
    description:
      "Untuk produk kamu yang sudah berjalan dan mengurus segala perizinan, order lagi di SHUN cuma perlu waktu 1 minggu sampai produk kamu re-stok kembali.",
    image: "repeat-order.png",
    background: "#FEF0E4",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[56px] md:h-[64px]">
        <Hero />
        {categories.map((item, index) => {
          return <Procedure items={item} index={index} />;
        })}
      </main>
    </>
  );
}

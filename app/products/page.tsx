import Header from "@/components/layouts/header";
import Category from "@/components/sections/products/category";
import Hero from "@/components/sections/products/hero";
import Start from "@/components/sections/products/start";

const categories = [
  {
    title: "Hand & Body Care",
    products: [
      [
        "Body Lotion",
        "Body Butter",
        "Body Cream",
        "Body Serum",
        "Body Oil",
        "Body Gel",
        "Body Scrub",
      ],
      [
        "Hair Removal Cream",
        "Shaving Cream",
        "Feminine Wash",
        "Essential Oil",
        "Stretch Mark Cream",
        "Breast Cream",
        "Deodorant",
      ],
      [
        "Body Mask",
        "Hand Wash",
        "Hand Sanitizer",
        "Hand Cream",
        "Foot Cream",
        "Foot Spray",
        "Foot Perfume",
      ],
      [
        "Slimming Cream",
        "Body Wash",
        "Body Scrub and Exfoliator",
        "Sabun Lulur",
      ],
    ],
    image: "bodycare-illust.png",
    background: "#FEF0E4",
    type: "horizontal",
  },
  {
    title: "Skin Care",
    products: [
      [
        "Face Cleansing Water",
        "Face Wash Foam",
        "Fash Wash cream",
        "Face Cleansing Cream",
        "Face Cleansing Balm",
        "Cleansing Lotion",
        "Milk Clenaser",
        "Facial Wash",
        "Anti Acne Serum",
        "Peel off mask",
        "Sleeping mask",
      ],
      [
        "Anti Aging Serum",
        "Whitening Serum",
        "Vitamin C Serum",
        "Moisturizing Serum",
        "Serum Antioksidan",
        "Serum Eksfoliasi",
        "Face Moisturizer",
        "Night Cream",
        "Eye Treatment",
        "Eye mask",
        "Sheet Mask",
      ],
      [
        "Soothing Cream",
        "Acne Cream",
        "Essence",
        "Face Peeling",
        "Face Scrub and Exfoliator",
        "Face Toner",
        "Face Oil",
        "Face Mist",
        "Face sunblock",
        "Face Sun screen",
        "lay Mask",
      ],
      ["Lip Scrub", "Lip Balm", "Lip Mask"],
    ],
    image: "skincare-illust.png",
    background: "#FFEED3",
    type: "horizontal",
  },
  {
    title: "Parfume",
    products: [
      ["EDC Eau De Cologne", "EDT Eau De Toilette", "EDP Eau De Parfum"],
      ["Body Mist", "Perfume Oil", "Perfume Roll"],
    ],
    image: "parfume-illust.png",
    background: "#FFE4D6",
    type: "horizontal",
  },
  {
    title: "Hair Care",
    products: [
      ["Shampoo", "Conditioner", "Pomade", "Hair Gel"],
      ["Hair Spray", "Hair Wax", "Hair Serum", "Hair Vitamin"],
      ["Hair Tonic", "Hair Oil", "Hair Spa", "Hair Mask"],
      ["Hair Essence", "Hair Mit", "Dry Shampoo"],
    ],
    image: "haircare-illust.png",
    background: "#FEF0E4",
    type: "horizontal",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[56px] md:pt-[64px]">
        <Hero />
        {categories.map((item, index) => {
          return <Category items={item} index={index} key={index} />;
        })}
        <Start />
      </main>
    </>
  );
}

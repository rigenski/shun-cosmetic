"use client";
import Footer from "@/components/layouts/footer";
import { event as eventGoogle } from "@/components/layouts/google-analythic";
import { event as eventMeta } from "@/components/layouts/meta-pixel";
import Document from "@/components/sections/landing/document";
import Form from "@/components/sections/landing/form";
import Hero from "@/components/sections/landing/hero";
import Question from "@/components/sections/landing/question";
import Start from "@/components/sections/landing/start";
import Testimony from "@/components/sections/landing/testimony";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    eventMeta({ name: "PageView" });
    eventGoogle({ name: "page_view" });

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Header /> */}
      {/* <main className="pt-[56px] md:pt-[64px]"> */}
      <main className="">
        <Hero />
        <Document />x
        <Start />
        <Form />
        <Testimony />
        <Question />
      </main>
      {/* <Footer /> */}
    </>
  );
}

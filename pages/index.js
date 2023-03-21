import Head from "next/head";
import Navbar from "@/Components/Navbar/Navbar";
import HeroSection from "@/Components/Hero/HeroSection";
import { GlobalStyle } from "@/styles/GlobalStyle";

export default function Home() {
  return (
    <>
      <Head>
        <title>BLULAB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <GlobalStyle />
        <Navbar />
        <HeroSection />
      </main>
    </>
  );
}

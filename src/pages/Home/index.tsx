import { Banner } from "./components/Banner";
import { CardSection } from "./components/CardSection";
import Footer from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "@/components/Navbar";

const Home = () => {
  return (
    <div className="grid min-h-screen flex-col">
      <Navbar></Navbar>
      <main className="flex justify-center">
        <div className="flex h-auto w-full max-w-[360px] flex-col items-center gap-[24px] px-[20px] py-[28px] sm:max-w-[1440px] sm:gap-[64px] sm:px-[120px] sm:py-[64px]">
          <Hero></Hero>
          <CardSection></CardSection>
          <Banner></Banner>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;

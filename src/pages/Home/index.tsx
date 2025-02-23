import { Template } from "@/templates/Template";
import { Banner } from "../../components/Banner/Banner";
import { SectionCard } from "../../components/CardSection/SectionCard";
import { Hero } from "../../components/Hero/Hero";

const Home = () => {
  return (
    <Template>
      <main className="flex justify-center">
        <div className="flex h-auto w-full max-w-[360px] flex-col items-center gap-[24px] px-[20px] py-[28px] sm:max-w-[1440px] sm:gap-[64px] sm:px-[120px] sm:py-[64px]">
          <Hero></Hero>
          <SectionCard></SectionCard>
          <Banner></Banner>
        </div>
      </main>
    </Template>
  );
};

export default Home;

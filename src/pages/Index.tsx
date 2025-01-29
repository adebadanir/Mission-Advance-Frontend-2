import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <main className="flex justify-center">
        <div className="flex h-auto w-full max-w-[360px] flex-col items-center gap-[24px] px-[20px] py-[28px] sm:max-w-[1440px] sm:gap-[64px] sm:px-[120px] sm:py-[64px]">
          <Hero></Hero>
        </div>
      </main>
    </div>
  );
};

export default Index;

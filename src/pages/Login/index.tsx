import { Loginform } from "./components/LoginForm";
import { Navbar } from "@/components/Navbar";

export default function Login() {
  return (
    <div className="grid h-full max-h-screen">
      <Navbar />
      <section className="flex h-full w-full flex-col items-center justify-center px-[20px] py-[28px] sm:h-[800px]">
        <Loginform />
      </section>
    </div>
  );
}

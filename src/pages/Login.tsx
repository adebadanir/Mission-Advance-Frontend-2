import { Loginform } from "@/components/LoginForm";
import { Navbar } from "@/components/Navbar";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex h-full w-full grow items-center justify-center px-[20px] py-[28px]">
        <Loginform />
      </section>
    </div>
  );
}

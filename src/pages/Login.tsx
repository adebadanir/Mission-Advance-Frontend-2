import { Loginform } from "@/components/LoginForm";
import { Navbar } from "@/components/Navbar";

export default function Login() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <section className="flex h-full grow items-center justify-center">
        <Loginform />
      </section>
    </div>
  );
}

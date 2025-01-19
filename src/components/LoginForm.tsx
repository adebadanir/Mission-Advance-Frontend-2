import { Button } from "@/elements/Buttons";
import { InputFormDesktop, PasswordFormDesktop } from "@/elements/InputForm";
import { useNavigate } from "react-router";

export function Loginform() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full min-h-[617px] w-[590px] flex-col gap-[36px] rounded-[4px] border border-[#f1f1f1] bg-primary-background p-[36px]">
      <div className="flex h-[67px] w-[525px] flex-col items-center gap-[10px]">
        <h3 className="font-heading text-heading-3 font-heading-3">
          Masuk ke Akun
        </h3>
        <p className="text-body-medium font-body font-medium-regular text-dark-secondary">
          Yuk, lanjutin belajarmu di videobelajar.
        </p>
      </div>
      <form className="flex h-auto max-h-[442px] w-auto max-w-[518px] flex-col gap-[24px]">
        <div className="flex h-auto max-h-[330px] w-auto max-w-[518px] flex-col gap-[24px]">
          <div className="flex h-auto max-h-[206px] w-[518px] flex-col gap-[16px]">
            <InputFormDesktop label="E-Mail" name="email" onChange={() => {}} />
            <PasswordFormDesktop
              label="Kata Sandi"
              name="password"
              onChange={() => {}}
            />
            <a
              href=""
              className="text-right font-body font-medium-medium tracking-medium text-[#4A505C]"
            >
              Lupa Password?
            </a>
          </div>
          <div className="flex h-auto max-h-[100px] w-auto max-w-[518px] flex-col gap-[16px]">
            <Button
              children="Masuk"
              type="submit"
              className="bg-primary-default text-ligth-primary hover:bg-primary-hover"
            />
            <Button
              children="Daftar"
              type="button"
              onClick={() => navigate("/register")}
              className="bg-primary-100 text-primary-default hover:bg-primary-200"
            />
          </div>
        </div>
        <div className="relative flex h-[22px] w-full max-w-[518px] items-center justify-center gap-[10px]">
          <div className="z-0 h-[2px] w-[518px] border"></div>
          <p className="absolute left-1/2 flex h-auto max-h-[22px] w-auto max-w-[50px] -translate-x-1/2 transform gap-[10px] bg-primary-background px-[8px] font-body text-medium font-medium-regular tracking-medium text-[#4A505C]">
            atau
          </p>
        </div>
        <Button
          className="border bg-primary-background text-[#4A505C]"
          type="button"
          onClick={() => navigate("/register-google")}
        >
          <div className="flex items-center justify-center gap-[8px]">
            <img src="/icons/logos_google-icon.svg" alt="google-icon" /> Masuk
            dengan Google
          </div>
        </Button>
      </form>
    </div>
  );
}

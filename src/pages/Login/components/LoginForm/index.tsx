import { Button } from "@/components/Buttons";
import { InputForm } from "@/components/InputForm";
import { useNavigate } from "react-router";

export function Loginform() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full max-h-[514px] w-full max-w-[320px] flex-col gap-[20px] rounded-[4px] border border-[#f1f1f1] bg-primary-background p-[20px] sm:h-full sm:max-h-[617px] sm:min-w-[590px] sm:gap-[36px] sm:p-[36px]">
      <div className="flex h-[56px] w-[280px] flex-col items-center gap-[10px] sm:h-[67px] sm:w-[525px]">
        <h3 className="font-heading text-heading-3-mobile font-heading-3 sm:text-heading-3">
          Masuk ke Akun
        </h3>
        <p className="text-small sm:text-medium font-body font-medium-regular text-dark-secondary">
          Yuk, lanjutin belajarmu di videobelajar.
        </p>
      </div>
      <form className="flex h-auto min-h-[398px] w-full max-w-[280px] flex-col gap-[20px] sm:max-h-[442px] sm:w-auto sm:max-w-[518px] sm:gap-[24px]">
        <div className="flex h-auto max-h-[304px] w-auto max-w-[280px] flex-col gap-[24px] sm:max-h-[330px] sm:max-w-[518px]">
          <div className="flex h-auto max-h-[196px] w-full max-w-[280px] flex-col gap-[12px] sm:max-h-[206px] sm:max-w-[518px] sm:gap-[16px]">
            <InputForm
              label="E-Mail"
              name="email"
              formType="email"
              onChange={() => {}}
            />
            <InputForm
              label="Kata Sandi"
              name="password"
              formType="password"
              onChange={() => {}}
            />
            <a
              href=""
              className="w-full text-right font-body font-medium-medium tracking-medium text-[#333333AD] sm:text-[#4A505C]"
            >
              Lupa Password?
            </a>
          </div>
          <div className="flex h-full max-h-[84px] w-auto max-w-[280px] flex-col gap-[16px] sm:max-h-[100px] sm:max-w-[518px]">
            <Button
              children="Masuk"
              type="submit"
              className="bg-primary-default py-[7px] text-light-primary hover:bg-primary-hover sm:py-[10px]"
            />
            <Button
              children="Daftar"
              type="button"
              onClick={() => navigate("/register")}
              className="bg-primary-100 py-[7px] text-primary-default hover:bg-primary-200 sm:py-[10px]"
            />
          </div>
        </div>
        <div className="relative flex h-[22px] w-full max-w-[518px] items-center justify-center gap-[10px]">
          <div className="z-0 h-[2px] w-[518px] border"></div>
          <p className="text-medium absolute left-1/2 flex h-auto max-h-[22px] w-auto max-w-[50px] -translate-x-1/2 transform gap-[10px] bg-primary-background px-[8px] font-body font-medium-regular tracking-medium text-[#4A505C]">
            atau
          </p>
        </div>
        <Button
          className="border bg-primary-background py-[7px] text-[#4A505C] sm:py-[10px]"
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

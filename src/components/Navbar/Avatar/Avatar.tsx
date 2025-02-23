import useIsOpenStore from "@/stores/dropDownStore";
import useIsLoginStore from "@/stores/loginStore";
import { useNavigate } from "react-router";

export function Avatar({ onClick }: { onClick: () => void }) {
  const { isOpen, setIsOpen } = useIsOpenStore();
  const { setIsLogin } = useIsLoginStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLogin(false);
    setIsOpen(false);
    navigate("/login");
  };
  return (
    <div className="flex flex-col">
      <button className={``} onClick={onClick}>
        <img
          src="https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VykNjooymS0X0ei~GE3CsYDQNcyC9vnzi3UIoHLwyovT0od3JF0j0QW-p8tHe~tK3AHSrYnb~vuRbfzqTPenY7kB8GyQPJfx05NLADuu2MH1QCONg4jQM5uCW4qBF3uJlugbFP~M454lXFP9qIE2vmyDBY7r4PvYCgzTsTMvISZXHsNdqZnqwwly4Rp9RJ5FMLx7--8jC1pHg7VDaP-wFjp8vNw8eaekxNs7NZy7uiKqjrqOGgp7hWsCjYBtg7YPhVpSonb4AeT2EXoqwlH1qMnrvrp3G-7EN-ZivSZT68xj-ZtCqbXf7W3cg9B2TMExYCyiwfrBUnXgEITY8Grm8w__"
          alt="avatar"
          className={`sm:w[44px] rounded-[10px] sm:h-[44px]`}
        />
      </button>
      <ul
        className={`${isOpen === false ? "hidden" : "flex"} z-20 h-auto w-full flex-col bg-primary-background p-[4px] sm:absolute sm:right-[120px] sm:top-[74px] sm:w-[200px]`}
      >
        <li className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] font-body text-body-medium font-medium tracking-medium text-dark-secondary sm:hidden">
          Kategori
        </li>
        <li className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] font-body text-body-medium font-medium tracking-medium text-dark-secondary">
          Profil Saya
        </li>
        <li className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] font-body text-body-medium font-medium tracking-medium text-dark-secondary">
          Kelas Saya
        </li>
        <li className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] font-body text-body-medium font-medium tracking-medium text-dark-secondary">
          Pesanan Saya
        </li>
        <button
          className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] text-left font-body text-body-medium font-medium tracking-medium text-error-default"
          onClick={handleLogout}
        >
          Keluar
        </button>
      </ul>
    </div>
  );
}

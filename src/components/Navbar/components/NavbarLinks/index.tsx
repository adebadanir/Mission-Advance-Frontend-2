import { Button } from "@/components/Buttons";
import { useLocation, useNavigate } from "react-router";

export function NavbarLinks({
  login,
  onClick,
}: {
  login: boolean;
  onClick: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname !== "/" || login === false) {
    return (
      <div
        className={`${location.pathname !== "/" || login ? "hidden" : "hidden sm:flex"} sm:gap-[36px]`}
      >
        <button className="text-body-medium font-medium tracking-medium text-dark-secondary">
          Kategori
        </button>
        <div className="flex sm:gap-[16px]">
          <Button
            type="button"
            onClick={() => navigate("/login")}
            className="rounded-[10px] bg-primary-default font-medium-bold tracking-medium text-light-primary sm:px-[26px] sm:py-[10px] sm:text-body-medium"
          >
            Login
          </Button>
          <Button
            type="button"
            onClick={() => navigate("/register")}
            className="rounded-[10px] border border-primary-default font-medium-bold tracking-medium text-primary-default sm:px-[26px] sm:py-[10px] sm:text-body-medium"
          >
            Register
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`hidden items-center sm:flex sm:gap-[36px]`}>
        <button className="text-body-medium font-medium tracking-medium text-dark-secondary">
          Kategori
        </button>
        <button className={``} onClick={onClick}>
          <img
            src="https://s3-alpha-sig.figma.com/img/0577/f0e9/b7fca2f32639871454da0de95f951709?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VykNjooymS0X0ei~GE3CsYDQNcyC9vnzi3UIoHLwyovT0od3JF0j0QW-p8tHe~tK3AHSrYnb~vuRbfzqTPenY7kB8GyQPJfx05NLADuu2MH1QCONg4jQM5uCW4qBF3uJlugbFP~M454lXFP9qIE2vmyDBY7r4PvYCgzTsTMvISZXHsNdqZnqwwly4Rp9RJ5FMLx7--8jC1pHg7VDaP-wFjp8vNw8eaekxNs7NZy7uiKqjrqOGgp7hWsCjYBtg7YPhVpSonb4AeT2EXoqwlH1qMnrvrp3G-7EN-ZivSZT68xj-ZtCqbXf7W3cg9B2TMExYCyiwfrBUnXgEITY8Grm8w__"
            alt="avatar"
            className={`sm:w[44px] rounded-[10px] sm:h-[44px]`}
          />
        </button>
      </div>
    );
  }
}

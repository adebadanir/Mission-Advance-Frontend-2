import { useState } from "react";
import { useNavigate } from "react-router";
import { MdMenu } from "react-icons/md";

import { NavbarContent } from "./components/NavbarContent.tsx";
import { NavbarLinks } from "./components/NavbarLinks/index.tsx";
export function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const login = false;
  return (
    <>
      <header className="flex flex-col items-center border-b border-b-border bg-primary-background">
        <nav className="flex h-auto max-h-[74px] w-full max-w-[360px] items-center justify-between px-[24px] py-[16px] sm:h-auto sm:max-h-[80px] sm:w-full sm:max-w-[1440px] sm:px-[120px] sm:py-[12px]">
          <button
            onClick={() => navigate("/")}
            className="flex h-[42px] w-[152px] items-center justify-between sm:h-[56px] sm:w-[937px] sm:gap-[80px]"
          >
            <img
              src="/images/Logo.png"
              alt="logo"
              className="left-[3.25px] top-[9.75px] h-[22.56px] w-[144.77px] sm:h-[30.08px] sm:w-[193.03px]"
            />
          </button>
          <NavbarLinks login={login} onClick={() => setOpen(!open)} />
          <button
            className="flex h-[24px] w-[24px] items-center justify-center sm:hidden"
            onClick={() => setOpen(!open)}
          >
            <MdMenu size={24} />
          </button>
        </nav>
      </header>
      <NavbarContent login={login} open={open} />
    </>
  );
}

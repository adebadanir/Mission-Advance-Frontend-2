import { ReactNode } from "react";

interface NavbarProps {
  children?: ReactNode;
}

export function Navbar({ children }: NavbarProps) {
  return (
    <header className="flex justify-center border-b border-b-border bg-primary-background">
      <nav className="flex h-auto max-h-[74px] w-full max-w-[360px] items-center justify-between px-[24px] py-[16px]">
        <div className="flex h-[42px] w-[152px] items-center">
          <img
            src="/images/Logo.png"
            alt="logo"
            className="left-[3.25px] top-[9.75px] h-[22.56px] w-[144.77px]"
          />
        </div>
        {children}
      </nav>
    </header>
  );
}

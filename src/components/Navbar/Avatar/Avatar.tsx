import useIsOpenStore from "@/stores/dropDownStore";
import useIsLoginStore from "@/stores/loginStore";
import { useNavigate } from "react-router";
import { NavLink } from "react-router";
import { MdLogout } from "react-icons/md";
export function Avatar({ onClick }: { onClick: () => void }) {
  const { isOpen } = useIsOpenStore();
  const { setIsLogin, setUserId } = useIsLoginStore();
  const navigate = useNavigate();
  const handleLogout = () => {
    setIsLogin(false);
    setUserId("");
    navigate("/login");
  };
  return (
    <div
      className={`hidden items-center sm:flex sm:flex-row-reverse sm:gap-[36px]`}
    >
      <div className="flex sm:gap-[36px]">
        <button className="text-body-medium font-medium tracking-medium text-dark-secondary">
          Kategori
        </button>
        <div className="flex flex-col">
          <button className={``} onClick={onClick}>
            <img
              src="/images/Avatar.png"
              alt="avatar"
              className={`sm:w[44px] rounded-[10px] sm:h-[44px]`}
            />
          </button>
        </div>
      </div>
      <ul
        className={`${isOpen === false ? "hidden" : "flex"} absolute top-[74px] z-30 h-auto w-full flex-col border border-border bg-primary-background p-[4px] sm:w-[200px]`}
      >
        <li className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] font-body text-body-medium font-medium tracking-medium text-dark-secondary hover:bg-gray-scale-100 sm:hidden">
          Kategori
        </li>
        <NavLink
          to="/profile"
          className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] font-body text-body-medium font-medium tracking-medium text-dark-secondary hover:bg-gray-scale-100"
        >
          Profil Saya
        </NavLink>
        <li className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] font-body text-body-medium font-medium tracking-medium text-dark-secondary hover:bg-gray-scale-100">
          Kelas Saya
        </li>
        <li className="h-auto gap-[5px] border-b border-border px-[12px] py-[16px] font-body text-body-medium font-medium tracking-medium text-dark-secondary hover:bg-gray-scale-100">
          Pesanan Saya
        </li>
        <button
          className="flex h-auto items-center gap-[5px] border-b border-border px-[12px] py-[16px] text-left font-body text-body-medium font-medium tracking-medium text-error-default hover:bg-gray-scale-100"
          onClick={handleLogout}
        >
          Keluar
          <MdLogout width={24} height={24} className="size-[24px]" />
        </button>
      </ul>
    </div>
  );
}

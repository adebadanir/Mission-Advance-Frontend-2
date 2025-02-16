import { useState } from "react";
import { mdiEyeOff, mdiEye } from "@mdi/js";
import Icon from "@mdi/react";

export function InputForm({
  label,
  name,
  formType,
  onChange,
}: {
  label: string;
  name: string;
  formType: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="h-auto max-h-[76px] w-full sm:min-w-[518px]">
      <div className="flex h-auto max-h-[28px] w-[110px] gap-[4px] pb-[4px] pr-[16px]">
        <p className="font-body text-body-medium font-medium-regular tracking-medium text-[#333333AD] sm:text-[#4A505C]">
          {label}
        </p>
        <p className="font-subtitle text-subtitle tracking-subtitle text-[#D32E1F]">
          *
        </p>
      </div>
      <div className="flex h-auto min-h-[48px] w-full max-w-[518px] items-center justify-center rounded-[6px] border-[1px] border-[#F1F1F1]">
        <div className="flex h-auto max-h-[40px] w-full max-w-[498px] gap-[8px] py-[8px]">
          <input
            type={
              formType !== "password"
                ? formType
                : showPassword
                  ? "text"
                  : "password"
            }
            name={name}
            className="h-full w-full grow"
            onChange={onChange}
          />
          <button
            onClick={handleClick}
            type="button"
            className={`flex items-center justify-center hover:cursor-pointer ${formType === "password" ? "" : "hidden"}`}
          >
            <Icon
              path={showPassword ? mdiEye : mdiEyeOff}
              size={1}
              color="#6C717A"
              className="left-[1px] top-[3px] h-[19px] w-[22px]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

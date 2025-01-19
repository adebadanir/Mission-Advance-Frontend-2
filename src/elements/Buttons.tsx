export function Button({
  className,
  children,
  onClick,
  type,
}: {
  className: string;
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} flex h-auto max-h-[42px] w-full items-center justify-center rounded-[10px] hover:cursor-pointer`}
    >
      <div className="flex h-auto max-h-[42px] w-auto max-w-[104px] gap-[8px] px-[26px] py-[10px]">
        <p className="flex h-[22px] w-full items-center justify-center text-nowrap font-body font-medium-bold tracking-medium">
          {children}
        </p>
      </div>
    </button>
  );
}

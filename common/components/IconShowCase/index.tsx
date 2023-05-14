import clsx from "clsx";
import Image from "next/image";
import React from "react";
import type { IconType } from "./importHelper";

interface IconShowCaseProps {
  icons: Array<IconType>;
  label?: string;
  iconClassName?: string;
  className?: string;
}

const IconsShowCase = ({
  icons,
  label,
  iconClassName,
  className,
}: IconShowCaseProps) => {
  return (
    <div className={clsx("flex flex-col items-center gap-y-3", className)}>
      {label && (
        <p className="font-semibold text-sm text-[#687076] dark:text-[#9BA1A6]">
          {label}:
        </p>
      )}
      <div
        className={clsx(
          "flex gap-x-2 flex-wrap justify-center gap-y-2 max-w-sm",
          iconClassName
        )}
      >
        {icons.map((icon, key) => {
          return (
            <div
              key={key}
              className="flex text-xs gap-x-2 px-2 py-1 bg-[#ECEEF0] hover:bg-[#E6E8EB] text-[#687076] dark:bg-[#26292B] dark:text-[#9BA1A6] dark:hover:bg-[#2B2F31] rounded-md cursor-pointer transition-transform duration-500 ease-in-out hover:-translate-y-1"
            >
              {icon.icon && (
                <Image src={icon.icon} alt="k" className="w-4 h-auto" />
              )}
              {icon.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconsShowCase;

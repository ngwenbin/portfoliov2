import clsx from "clsx";
import Image from "next/image";
import React from "react";
import type { IconType } from "./importHelper";

interface IconShowCaseProps {
  icons: Array<IconType>;
  label?: string;
  iconClassName?: string;
}

const IconsShowCase = ({ icons, label, iconClassName }: IconShowCaseProps) => {
  return (
    <div className="flex flex-col items-center gap-y-3">
      {label && <p className="font-semibold text-sm text-gray-700">{label}:</p>}
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
              className="flex text-xs gap-x-2 px-2 py-1 bg-gray-100 rounded-md text-gray-800 cursor-pointer hover:bg-gray-200 transition-transform duration-500 ease-in-out hover:-translate-y-1"
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

import clsx from "clsx";
import React, { useState } from "react";
import { DarkCloud, WhiteCloud } from "./cloud";
import { Stars } from "./stars";
import { Craters } from "./craters";

interface ToggleProps {
  id: string;
  isToggled: boolean;
  onToggle: (state: boolean) => void;
}

const backgroundShadesStyle =
  "h-[76px] w-[76px] rounded-full absolute top-1/2 bottom-1/2 -translate-y-1/2 peer-checked:-translate-x-full transition-all duration-500";

const Toggle = ({ id, isToggled, onToggle }: ToggleProps) => {
  return (
    <>
      <label
        className="w-[110px] h-[48px] relative overflow-hidden rounded-full flex justify-between cursor-pointer "
        htmlFor={id}
      >
        <input
          id={id}
          checked={isToggled}
          onChange={() => onToggle(isToggled)}
          type="checkbox"
          className="hidden peer w-0 h-0 group"
        />
        <div className="w-full h-full rounded-full peer-checked:bg-[#40424C] bg-[#47647D] transition-all duration-700" />
        <div
          className={clsx(
            backgroundShadesStyle,
            "bg-[#5E86A6] left-[7px] peer-checked:left-[calc(100%-7px)] peer-checked:bg-[#4A4B57]"
          )}
        />
        <div
          className={clsx(
            backgroundShadesStyle,
            " bg-[#6A96BB] absolute -left-[6px] peer-checked:left-[calc(100%+6px)] peer-checked:bg-[#535562]"
          )}
        />
        <div
          className={clsx(
            backgroundShadesStyle,
            "bg-[#76A7D0] absolute -left-[20px] peer-checked:left-[calc(100%+20px)] peer-checked:bg-[#5C5E6D]"
          )}
        />
        <div className="w-[200%] h-full bg-transparent absolute right-0 peer-checked:translate-x-1/2 transition-all duration-500 delay-200">
          <div className="absolute -bottom-1 -right-1 w-[101px] h-[48px]">
            <DarkCloud />
          </div>
          <div className="absolute -bottom-[10px] -right-[5px] w-[112px] h-[48px]">
            <WhiteCloud />
          </div>
          <div className="absolute w-[54px] h-[37px] top-1 left-1">
            <Stars />
          </div>
        </div>
        <div className="rounded-full top-0 left-0 w-full h-full absolute bg-transparent shadow-[inset_0px_-2px_2px_rgba(0,0,0,0.13),inset_-2px_2px_2px_rgba(0,0,0,0.22)]" />
        <span
          className={clsx(
            "w-9 h-9 absolute top-1/2 bottom-1/2 -translate-y-1/2 rounded-full transition-all duration-500",
            "peer-checked:opacity-0 opacity-100 bg-[#F2C44C]",
            "left-[6px] peer-checked:left-[calc(100%-6px)] peer-checked:-translate-x-full",
            "shadow-[0px_4px_4px_rgba(0,0,0,0.25),inset_3px_4px_5px_rgba(255,244,189,0.79),inset_-3px_-4px_3px_-1px_rgba(18,18,18,0.1)]",
            "peer-checked:shadow-[0px_4px_4px_rgba(0,0,0,0.25),inset_3px_4px_5px_rgba(242,242,242,0.79),inset_-3px_-4px_3px_-1px_rgba(18,18,18,0.1)]"
          )}
        />
        <span
          className={clsx(
            "w-9 h-9 absolute top-1/2 bottom-1/2 -translate-y-1/2 rounded-full transition-all duration-500",
            "peer-checked:opacity-100 opacity-0 bg-[#CFCFCF]",
            "left-[6px] peer-checked:left-[calc(100%-6px)] peer-checked:-translate-x-full",
            "shadow-[0px_4px_4px_rgba(0,0,0,0.25),inset_3px_4px_5px_rgba(255,244,189,0.79),inset_-3px_-4px_3px_-1px_rgba(18,18,18,0.1)]",
            "peer-checked:shadow-[0px_4px_4px_rgba(0,0,0,0.25),inset_3px_4px_5px_rgba(242,242,242,0.79),inset_-3px_-4px_3px_-1px_rgba(18,18,18,0.1)]"
          )}
        >
          <div className="relative top-1.5 left-2.5 w-6 h-6">
            <Craters />
          </div>
        </span>
      </label>
    </>
  );
};

export default Toggle;

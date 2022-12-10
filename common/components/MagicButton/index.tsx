import React, { useEffect, useRef, useState } from "react";
enum MAX_TRANSLATION {
  X = 300,
  Y = 40,
}

interface MousePositionObject {
  x_coord: number;
  y_coord: number;
}
type ButtonPositionObject = MousePositionObject;

interface ZoneParameter {
  zoneIdx: string;
  paddingRadius: number; // Radius from local focal point
  translationAcc: string;
}

interface MagicButtonProps {
  onClickHandler?: () => void;
}

const zones: Array<ZoneParameter> = [
  // Smallest zone first
  {
    zoneIdx: "0",
    paddingRadius: 120,
    translationAcc: "120",
  },
];

const getTranslation = (val: number | undefined, type: MAX_TRANSLATION) => {
  if (val) {
    return val < type ? val * -1 : type * Math.sign(val) * -1;
  }
  return 0;
};

const retrieveCurrZoneParams = (
  relativePos: MousePositionObject // absolute
): string | undefined => {
  const currHypotenuse = Math.sqrt(
    relativePos.x_coord * relativePos.x_coord +
      relativePos.y_coord * relativePos.y_coord
  );
  for (let i = 0; i < zones.length; i++) {
    const maxAllowableHypotenuse = zones[i].paddingRadius;
    if (currHypotenuse < maxAllowableHypotenuse) {
      return zones[i].translationAcc;
    }
  }
  return undefined;
};

const MagicButton = ({ onClickHandler }: MagicButtonProps) => {
  const [translateAcceleration, setTranslateAcceleration] = useState<string>();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mousePosRef = useRef<MousePositionObject>();
  const buttonPosRef = useRef<ButtonPositionObject>();

  const updateButtonPosition = () => {
    const buttonPosition =
      buttonRef.current && buttonRef.current.getBoundingClientRect();
    if (buttonPosition) {
      const left = buttonPosition.left;
      const top = buttonPosition.top;
      const buttonCenterCoords: ButtonPositionObject = {
        x_coord: left + buttonPosition.width / 2,
        y_coord: top + buttonPosition.height / 2,
      };
      buttonPosRef.current = buttonCenterCoords;
      return buttonPosition;
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    const mouseCoords = {
      x_coord: event.clientX - (buttonPosRef.current?.x_coord ?? 0),
      y_coord: event.clientY - (buttonPosRef.current?.y_coord ?? 0),
    };

    if (buttonPosRef.current) {
      const translateAcc = retrieveCurrZoneParams(mouseCoords);
      setTranslateAcceleration(translateAcc);
    }
    mousePosRef.current = mouseCoords;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateButtonPosition);
    window.addEventListener("scroll", updateButtonPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateButtonPosition);
      window.removeEventListener("scroll", updateButtonPosition);
    };
  }, []);

  useEffect(() => {
    updateButtonPosition();
  }, []);

  return (
    <>
      <div className="p-8 h-min mx-auto">
        <button
          ref={buttonRef}
          onClick={() => onClickHandler && onClickHandler()}
          style={{
            transform: `translateX(${
              translateAcceleration
                ? getTranslation(
                    mousePosRef.current?.x_coord,
                    MAX_TRANSLATION.X
                  )
                : 0
            }px) translateY(${
              translateAcceleration
                ? getTranslation(
                    mousePosRef.current?.y_coord,
                    MAX_TRANSLATION.Y
                  )
                : 0
            }px)`,
            transitionDuration: `${translateAcceleration}ms`,
          }}
          className="text-white rounded-md bg-cyan-500 shadow-lg shadow-cyan-500/50 py-2 px-4 whitespace-nowrap transition-transform ease-out"
        >
          Say Hello
        </button>
      </div>
    </>
  );
};

export default MagicButton;

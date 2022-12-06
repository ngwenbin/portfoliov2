import React, { useEffect, useRef, useState } from "react";

interface MousePositionObject {
  x_coord: number;
  y_coord: number;
}
type ButtonPositionObject = MousePositionObject;

const MagicButton = () => {
  const [mousePosition, setMousePosition] = useState<MousePositionObject>();
  const [buttonPosition, setButtonPosition] = useState<MousePositionObject>();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x_coord: event.clientX, y_coord: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const buttonPosition =
      buttonRef.current && buttonRef.current.getBoundingClientRect();

    if (buttonPosition) {
      const left = buttonPosition.left + window.scrollX;
      const right = buttonPosition.right + window.scrollX;
      const top = buttonPosition.top + window.scrollY;
      const bottom = buttonPosition.bottom + window.scrollY;

      const buttonCenterCoords: MousePositionObject = {
        x_coord: (left + right) / 2,
        y_coord: (top + bottom) / 2,
      };

      setButtonPosition(buttonCenterCoords);
    }
  }, []);

  return (
    <div>
      {mousePosition && buttonPosition ? (
        <>
          <p>X: {mousePosition.x_coord - buttonPosition.x_coord}</p>
          <p>Y: {mousePosition.y_coord - buttonPosition.y_coord}</p>
        </>
      ) : null}
      <button ref={buttonRef} className="rounded-md bg-gray-200 py-2 px-4 mt-8">
        Say Hello
      </button>
    </div>
  );
};

export default MagicButton;

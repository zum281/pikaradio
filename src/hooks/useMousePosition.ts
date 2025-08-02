import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>(
    INITIAL_MOUSE_POSITION,
  );
  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);
  return mousePosition;
};

export default useMousePosition;

const INITIAL_MOUSE_POSITION = { x: null, y: null };

type MousePosition = {
  x: number | null;
  y: number | null;
};

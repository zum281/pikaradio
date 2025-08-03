import type { PropsWithChildren, FC } from "react";
import { useState } from "react";
import PikaMouse from "./PikaMouse";
import Radio from "@/assets/stereo_outline.png";
import Close from "@/assets/buttons/x_normal.png";
import Settings from "./Settings";
import ListStations from "./ListStations";

const Scene: FC<PropsWithChildren> = ({ children }) => {
  const [showRadio, setShowRadio] = useState(false);
  const [bounce, setBounce] = useState(true);

  const toggleRadio = () => {
    setShowRadio((prev) => !prev);
    setBounce(false);
  };

  return (
    <>
      <PikaMouse />
      <img
        src={Radio}
        alt="radio"
        onClick={toggleRadio}
        className={`absolute bottom-[10vh] left-[50vw] ${bounce && "animate-bounce"}`}
      />

      <main className="grid place-content-center-safe">
        <div className="absolute top-4 right-5 flex items-center gap-2">
          <ListStations />
          <Settings />
        </div>
        <div
          className={`relative bg-amber-50 rounded-sm shadow-amber-950 shadow-md p-5 min-w-[30vw] aspect-video ${showRadio ? "visible" : "invisible"} ani`}>
          <button
            onClick={() => setShowRadio(false)}
            title="close"
            id="button-close">
            <img
              src={Close}
              alt=""
              role="presentation"
              className="absolute top-5 right-5"
            />
          </button>
          {children}
        </div>
      </main>
    </>
  );
};
export default Scene;

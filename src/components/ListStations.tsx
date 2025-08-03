import type { FC } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Stations from "@/assets/buttons/settings1_normal.png";
import { CloseButton } from "./ui/close-button";
import { useQuery } from "@tanstack/react-query";

const ListStations: FC = () => {
  const query = async () =>
    await fetch(
      "https://de1.api.radio-browser.info/json/stations/topvote/10",
    ).then((response) => response.json());

  const topRadioQuery = useQuery({
    queryKey: ["topRadio"],
    queryFn: query,
  });

  if (!topRadioQuery.data) return;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button title="Radio Stations" id="button-radio-stations">
          <img src={Stations} alt="" role="presentation" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetClose>
          <CloseButton className="block absolute z-50 top-4 right-4" />
        </SheetClose>
        <SheetHeader>
          <SheetTitle>Radio Stations</SheetTitle>
          <SheetDescription>
            <ul>
              {topRadioQuery.data.map((station) => (
                <li key={station.id}>{station.name}</li>
              ))}
            </ul>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default ListStations;

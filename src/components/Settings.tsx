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
import SettingsIcon from "@/assets/buttons/settings3_normal.png";
import { CloseButton } from "./ui/close-button";

const Settings: FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button title="Settings" id="button-settings">
          <img src={SettingsIcon} alt="" role="presentation" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetClose>
            <CloseButton className="block absolute z-50 top-4 right-4" />
          </SheetClose>
          <SheetTitle>Settings</SheetTitle>
          <SheetDescription>miao</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Settings;

import Close from "@/assets/buttons/x_normal.png";
export const CloseButton = ({ className }: { className?: string }) => (
  <button title="Radio Stations" id="button-close" className={className || ""}>
    <img src={Close} alt="" role="presentation" width={24} height={24} />
  </button>
);

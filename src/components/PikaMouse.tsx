import useMousePosition from "@/hooks/useMousePosition";
import Pikachu from "@/assets/pikachu.png";

const PikaMouse = () => {
  const mousePosition = useMousePosition();
  return (
    <div
      id="pika"
      className="absolute pointer-events-none z-50"
      style={{
        top: (mousePosition.y || 0) - 14,
        left: (mousePosition.x || 0) - 7,
      }}>
      <img src={Pikachu} alt="Pikachu" width={32} height={28} />
    </div>
  );
};

export default PikaMouse;

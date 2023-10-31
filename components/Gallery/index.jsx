import { motion } from "framer-motion";
import Image from "next/image";

const Gallery = ({ mousePosition, handle }) => {
  const { x, y } = mousePosition;

  return (
    <div
      style={{
        clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
      }}
      className="h-[120vh]"
    >
      <div className="w-full h-full relative">
        <Image
          src={`/images/${handle}/background.jpg`}
          alt="image"
          fill
          className="object-cover w-full"
        />
      </div>
      <motion.div
        className="h-[30vw] w-[25vw] fixed top-0 rounded-[1.5vw] overflow-hidden"
        style={{
          x,
          y,
        }}
      >
        <Image
          src={`/images/${handle}/1.jpg`}
          alt="image"
          fill
          className="w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Gallery;

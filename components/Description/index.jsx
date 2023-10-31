import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Description = ({ mousePosition, projects }) => {
  const [index, setIndex] = useState(0);
  const { x, y } = mousePosition;
  return (
    <div
      style={{
        clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)",
      }}
      className="h-[120vh] "
    >
      <div className="absolute w-full h-full flex items-center justify-center flex-col z-[1]">
        {projects.map(({ name }, i) => {
          return (
            <p
              onMouseOver={() => {
                setIndex(i);
              }}
              key={`p${i}`}
              className="text-[7vw] cursor-default uppercase"
            >
              {name}
            </p>
          );
        })}
      </div>
      <motion.div
        className="h-[30vw] w-[25vw] fixed top-0 rounded-[1.5vw] overflow-hidden"
        style={{ x, y }}
      >
        <Image
          src={`/images/${projects[index].handle}/about.jpg`}
          alt="image"
          fill className="w-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Description;

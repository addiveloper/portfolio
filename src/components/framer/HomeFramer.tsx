import { motion } from "framer-motion";
import { useRef } from "react";

export const HomeFramer = ({ children }: { children: React.ReactNode }) => {
  const constraintsRef = useRef(null);

  return (
    <motion.article
      ref={constraintsRef}
      className="relative md:col-span-4 col-span-2 row-span-2 bg-[#1C1E23] rounded-2xl md:p-8 p-6 flex justify-between overflow-clip"
    >
      {children}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="absolute right-0 w-24 h-24  md:static md:w-72 md:h-72 flex justify-center items-center bg-primary rounded-[50%] text-black cursor-grab active:cursor-grabbing"
      >
        <p className="opacity-20">drag me</p>
      </motion.div>
    </motion.article>
  );
};

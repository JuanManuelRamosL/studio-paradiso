import { motion } from "framer-motion";
import Image from "next/image";

type Conductor = {
  name: string;
  imageUrl: string;
};

type ConductoresProps = {
  conductores: Conductor[];
};

export default function Conductores({ conductores }: ConductoresProps) {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10 mt-20"
      id="nosotros"
    >
      {conductores.map((conductor, index) => (
        <motion.div
          key={conductor.name}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Image
            src={conductor.imageUrl}
            alt={conductor.name}
            width={250}
            height={250}
            className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ height: "270px" }}
          />
          <h3 className="text-2xl font-bold text-white mt-4">
            {conductor.name}
          </h3>
        </motion.div>
      ))}
    </div>
  );
}

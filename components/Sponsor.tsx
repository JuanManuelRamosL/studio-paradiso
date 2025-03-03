"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa los estilos básicos
import "swiper/css/navigation"; // Si usas navegación
import "swiper/css/pagination"; // Si usas paginación
import Image from "next/image";

export default function Sponsor() {
  // Array de imágenes (puedes agregar más imágenes aquí)
  const sponsorImages = [
    "https://static.vecteezy.com/system/resources/previews/019/136/404/non_2x/acer-logo-acer-icon-free-free-vector.jpg",
    "https://cdn.worldvectorlogo.com/logos/lg-electronics.svg",
    "https://i.pinimg.com/736x/f0/f2/84/f0f284b824c8056470202e9210c7c604.jpg",
    "https://filenifileni.com/wp-content/uploads/2019/06/Filenifileni-Alcorta-RetailSupermercados-04.jpg",
    "https://www.totalmedios.com/img/noticias/2021/09/6155a3eda7778__838x390.jpg",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-12 bg-gray-900"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-[#C5B358]">
        Patrocinadores
      </h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 5000, // Aumenta el tiempo de espera entre los cambios (en milisegundos)
          disableOnInteraction: false,
        }}
        speed={1000} // Duración de la transición entre imágenes (en milisegundos)
        loop={true}
        className="w-full"
      >
        {sponsorImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={src} // Imagen desde el array
                alt={`Patrocinador ${index + 1}`}
                width={400}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";
import "./body.css";
import TravelTabsContent from "./viajes";
import VideoTabsContent from "./videos";
import Blogs from "./blogs";
import Conductores from "./conductores";
import { FaVideo, FaStar, FaPlane } from "react-icons/fa";

export default function Body() {
  const conductoresData = [
    {
      name: "Donato De Santis",
      imageUrl:
        "https://soloporgusto.com/wp-content/uploads/2022/12/dontato-de-santis-0267-Foto-@MiserereOk.jpg",
    },
    {
      name: "Martin Rubinetti",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzmre3zQDLD0lCzSq_rdi4-dAEdwL8WJWTQ&s",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contenido"
      className="container mx-auto px-4 py-12"
    >
      {/* Sección de Conductores */}

      {/* Sección de Tabs */}
      <Tabs defaultValue="videos" className="container mx-auto px-4 py-8">
        <TabsList className="tabs-list">
          <TabsTrigger value="videos" className="tab-trigger">
            <FaVideo className="icon" /> {/* Ícono de video */}
            <span>Videos</span>
          </TabsTrigger>
          <TabsTrigger value="exclusivo" className="tab-trigger">
            <FaStar className="icon" /> {/* Ícono de estrella */}
            <span>Exclusivo</span>
          </TabsTrigger>
          <TabsTrigger value="viajes" className="tab-trigger">
            <FaPlane className="icon" /> {/* Ícono de avión */}
            <span>Viajes</span>
          </TabsTrigger>
        </TabsList>
        {/* Contenido de Videos */}
        <VideoTabsContent></VideoTabsContent>
        {/* Contenido Exclusivo */}
        <Blogs></Blogs>
        {/* Contenido de Viajes */}
        <TravelTabsContent></TravelTabsContent>
      </Tabs>
      <Conductores conductores={conductoresData}></Conductores>
    </motion.div>
  );
}

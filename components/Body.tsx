"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "framer-motion";
import "./body.css";
import TravelTabsContent from "./viajes";
import VideoTabsContent from "./videos";

export default function Body() {
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
            Videos
          </TabsTrigger>
          <TabsTrigger value="exclusivo" className="tab-trigger">
            Exclusivo
          </TabsTrigger>
          <TabsTrigger value="viajes" className="tab-trigger">
            Viajes
          </TabsTrigger>
        </TabsList>

        {/* Contenido de Videos */}
        <VideoTabsContent></VideoTabsContent>
        {/* Contenido Exclusivo */}
        <TabsContent value="exclusivo" className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-900">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">Contenido Exclusivo</h3>
                <p className="text-gray-400">
                  Accede a nuestro contenido exclusivo para miembros
                </p>
                <Button className="mt-4 bg-[#C5B358] hover:bg-[#B4A347]">
                  Suscribirse
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Contenido de Viajes */}
        <TravelTabsContent></TravelTabsContent>
      </Tabs>
      <div
        className="flex flex-col md:flex-row items-center justify-center gap-10 mb-10 mt-20"
        id="nosotros"
      >
        {/* Conductor 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Image
            src="https://soloporgusto.com/wp-content/uploads/2022/12/dontato-de-santis-0267-Foto-@MiserereOk.jpg"
            alt="Conductor 1"
            width={250}
            height={250}
            className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ height: "270px" }}
          />
          <h3 className="text-2xl font-bold text-white mt-4">
            Donato De Santis
          </h3>
        </motion.div>

        {/* Conductor 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgzmre3zQDLD0lCzSq_rdi4-dAEdwL8WJWTQ&s"
            alt="Conductor 2"
            width={250}
            height={600}
            className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            style={{ height: "270px" }}
          />
          <h3 className="text-2xl font-bold text-white mt-4">
            Martin Rubinetti
          </h3>
        </motion.div>
      </div>
    </motion.div>
  );
}

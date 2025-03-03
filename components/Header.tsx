"use client";

import { Youtube, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Nav from "@/components/nav";

export default function Header() {
  return (
    <section className="relative h-screen" id="inicio">
      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/b6XpL7rCBKc?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&fs=0&disablekb=1&cc_load_policy=0&iv_load_policy=3"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content on top of video */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-4 h-full flex items-center"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBoQeEc0lQ8K1prrGD9UiowNsY_k2G4ytKHQ&s"
              alt="Studio Paradiso Logo"
              width={200}
              height={200}
              className="rounded-full border-2 border-[#C5B358]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="space-y-4 text-center md:text-left"
          >
            <h1 className="text-4xl font-bold text-[#C5B358]">
              Studio Paradiso
            </h1>
            <p className="text-xl text-gray-300">
              Primer canal de streaming de Viajes, Gastronomía y Estilo de Vida
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-center"
              ></motion.div>
              {/* Add other statistics or actions if needed */}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
    </section>
  );
}

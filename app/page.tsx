"use client"

import { Youtube, Instagram, Twitter, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import Nav from "@/components/nav"


export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
     <Nav></Nav>
      {/* Hero Section with Background Video */}
      <section className="relative h-screen">
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
          <h1 className="text-4xl font-bold text-[#C5B358]">Studio Paradiso</h1>
          <p className="text-xl text-gray-300">Primer canal de streaming de Viajes, Gastronomía y Estilo de Vida</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-center"
            >
           
            </motion.div>
            {/* Add other statistics or actions if needed */}
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* Scroll Indicator */}
  
  </section>

      {/* Content Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Tabs defaultValue="videos" className="container mx-auto px-4 py-8">
          <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto">
            <TabsTrigger value="videos">Videos</TabsTrigger>
            <TabsTrigger value="exclusivo">Exclusivo</TabsTrigger>
            <TabsTrigger value="viajes">Viajes</TabsTrigger>
          </TabsList>
          <TabsContent value="videos" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900 transform transition-transform hover:scale-105">
                    <CardContent className="p-0 aspect-video">
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/hCcvFHSm7vM?si=AMGpwhnOrKKvU0lv"
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-t-lg"
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="exclusivo" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900">
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">Contenido Exclusivo</h3>
                  <p className="text-gray-400">Accede a nuestro contenido exclusivo para miembros</p>
                  <Button className="mt-4 bg-[#C5B358] hover:bg-[#B4A347]">Suscribirse</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="viajes" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Travel destination cards */}
              <Card className="bg-gray-900">
                <CardContent className="p-0">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Travel Destination"
                    width={400}
                    height={200}
                    className="rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">Neuquén</h3>
                    <p className="text-gray-400">Descubre los mejores lugares para visitar</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>

      {/* Sponsors Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-12 bg-gray-900"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-[#C5B358]">Patrocinadores</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="aspect-video bg-gray-800 rounded-lg transform transition-transform hover:scale-105"
            />
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-900 py-12"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Captura%20de%20pantalla%202025-02-23%20201906-sRS35XlASUs81aL0OPdlHKMoBC4uoN.png"
              alt="Studio Paradiso Logo"
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex gap-4">
              <Link href="#" className="text-[#C5B358] hover:text-[#B4A347]">
                <Youtube className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#C5B358] hover:text-[#B4A347]">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#C5B358] hover:text-[#B4A347]">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#C5B358] hover:text-[#B4A347]">
                <Facebook className="w-6 h-6" />
              </Link>
            </div>
            <p className="text-gray-400 text-center">© 2024 Studio Paradiso. Todos los derechos reservados.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}


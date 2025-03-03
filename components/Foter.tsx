"use client";

import {
  Youtube,
  Instagram,
  Twitter,
  Facebook,
  PhoneCall,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gray-900 py-12"
      id="footer"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <Link
              href="https://www.youtube.com/@studioparadiso"
              className="text-[#C5B358] transition duration-300 hover:text-[#B4A347]"
            >
              <Youtube className="w-6 h-6 hover:scale-110 transition-transform" />
            </Link>
            <Link
              href="https://www.instagram.com/studioparadiso.ok/"
              className="text-[#C5B358] transition duration-300 hover:text-[#B4A347]"
            >
              <Instagram className="w-6 h-6 hover:scale-110 transition-transform" />
            </Link>

            <Link
              href="https://wa.me/1234567890" // Reemplaza con el número de WhatsApp
              className="text-[#C5B358] transition duration-300 hover:text-[#B4A347]"
            >
              <MessageCircle className="w-6 h-6 hover:scale-110 transition-transform" />
            </Link>
          </div>
          <p className="text-gray-400 text-center">
            © 2024 Studio Paradiso. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

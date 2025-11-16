"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function WhatsAppFloat() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="https://wa.me/919763606444"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center justify-center"
      title="Send Message"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <div className="relative">
        {/* Floating animation */}
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-14 h-14 bg-transparent rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-8 h-8">
            <Image
              src="/img/whatsapp icon.png"
              alt="WhatsApp"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.span 
              className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-[#25D366] text-white text-sm font-medium px-3 py-2 rounded-md whitespace-nowrap shadow-lg"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
            >
              Send Message
              {/* Tooltip arrow */}
              <div className="absolute right-[-6px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-[#25D366] rotate-45"></div>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.a>
  );
}
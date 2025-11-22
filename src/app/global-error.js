"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Custom500() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] relative overflow-hidden px-6">
      
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-[#FFC107]/20 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-[#FFC107]/10 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <motion.h1
        className="text-[#181611] text-7xl sm:text-9xl font-black mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        500
      </motion.h1>

      <motion.p
        className="text-[#897c61] text-lg sm:text-xl max-w-lg text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Oops! Something went wrong on our server. Please try again later.
      </motion.p>

      <Link href="/">
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#FFB800",
            boxShadow: "0 12px 35px rgba(255, 193, 7, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex min-w-[120px] h-12 px-8 cursor-pointer items-center justify-center 
          rounded-lg bg-[#FFC107] text-[#181611] text-base font-bold tracking-wide 
          hover:bg-[#FFC107]/90 transition-all relative overflow-hidden"
        >
          <motion.span
            className="absolute inset-0 bg-white opacity-0"
            whileHover={{ opacity: 0.2 }}
            transition={{ duration: 0.2 }}
          />
          Go Home
        </motion.button>
      </Link>
    </div>
  );
}

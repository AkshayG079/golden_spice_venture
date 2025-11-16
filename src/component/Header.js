"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/service" },
    { name: "About Us", href: "/aboutus" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Animation variants
  const headerVariants = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, rotate: -5 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.8
      }
    },

  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const mobileNavItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const hamburgerVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-[#F5F5F5] dark:bg-[#221c10] shadow-sm border-b border-[#e6e2db] dark:border-[#3a3324]"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-20 py-2">
        {/* Logo + Company Name */}
        <motion.div 
          className="flex items-center gap-3 sm:gap-4"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.div 
            className="relative w-12 h-12 sm:w-16 sm:h-16"
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Image
              src="/img/logo.png"
              alt="Golden Spices Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          <motion.h2 
            className="text-lg sm:text-xl font-bold text-[#6D4C41] dark:text-[#F5F5F5]"
            transition={{ duration: 0.2 }}
          >
            Golden Spices Venture
          </motion.h2>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex gap-8 lg:gap-10"
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              className="relative"
              custom={i}
              variants={navItemVariants}
              whileHover="hover"
            >
              <Link
                href={link.href}
                className={`text-sm sm:text-base font-medium cursor-pointer transition-colors relative z-10 ${
                  pathname === link.href
                    ? "text-[#2E7D32] font-bold"
                    : "text-[#6D4C41] hover:text-[#2E7D32]"
                }`}
              >
                {link.name}
              </Link>
              {pathname === link.href && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-[#2E7D32]"
                  variants={underlineVariants}
                  initial="hidden"
                  animate="visible"
                  layoutId="activeNav"
                />
              )}
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Hamburger */}
        <motion.button
          className="md:hidden p-2 rounded-md text-[#6D4C41] dark:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          variants={hamburgerVariants}
          initial="closed"
          animate={mobileMenuOpen ? "open" : "closed"}
          whileHover="hover"
          whileTap="tap"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-[#F5F5F5] dark:bg-[#221c10] border-t border-[#e6e2db] dark:border-[#3a3324] shadow-md overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.nav 
              className="flex flex-col gap-1 px-4 py-4"
              variants={staggerContainer}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={mobileNavItemVariants}
                >
                  <Link
                    href={link.href}
                    className={`block text-sm font-medium py-3 px-4 rounded-lg transition-all ${
                      pathname === link.href
                        ? "text-[#2E7D32] font-bold bg-[#e6f4ea] dark:bg-[#1b5e20] shadow-sm"
                        : "text-[#6D4C41] dark:text-gray-300 hover:text-[#2E7D32] hover:bg-[#f0f0f0] dark:hover:bg-[#332b1a]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

// Stagger container for mobile menu
const staggerContainer = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};
"use client";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import WhatsAppFloat from "@/component/WhatsAppFloat";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  // Enhanced animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    },
    exit: {
      opacity: 0,
      y: -50,
      transition: { duration: 0.5, ease: "easeIn" }
    },
  };

  // Enhanced scroll animations
  const scrollFadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
  };

  const slideInLeft = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    },
  };

  const slideInRight = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      }
    },
  };

  const scaleIn = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "backOut",
      }
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      }
    }
  };

  const cardHover = {
    hover: {
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const imageHover = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="bg-[#F5F5F5]"
      >
        <Header />

        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col flex-1 w-full max-w-[80vw]">
            <main className="flex-1">
              {/* Enhanced Hero Section */}
              {/* <motion.section
                className="@container"
                initial="hidden"
                whileInView="visible"
                // viewport={{ once: true, amount: 0.3 }}
                variants={staggerContainer}
              >
                <motion.div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 relative overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url("/img/homeBG.png")`,
                  }}
                  variants={scaleIn}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/10 to-[#FFC107]/5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                  />
                  
                  <motion.div
                    className="flex flex-col gap-2 text-center max-w-2xl px-4 relative z-10"
                    variants={scrollFadeUp}
                  >
                    <motion.h1 
                      className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl"
                      variants={scrollFadeUp}
                    >
                      The Golden Spice: A Journey from Farm to Table
                    </motion.h1>
                    <motion.h2 
                      className="text-white text-sm sm:text-base font-normal leading-normal @[480px]:text-base"
                      variants={scrollFadeUp}
                      transition={{ delay: 0.2 }}
                    >
                      Connecting you with the finest, ethically sourced turmeric, straight from our farms to your business.
                    </motion.h2>
                  </motion.div>

                  <motion.div
                    variants={scrollFadeUp}
                    transition={{ delay: 0.4 }}
                    className="relative z-10"
                  >
                    <Link href="aboutus">
                      <motion.button
                        whileHover={{ 
                          scale: 1.05, 
                          backgroundColor: "#FFB800",
                          boxShadow: "0 10px 30px rgba(255, 193, 7, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#FFC107] text-[#181611] text-sm font-bold hover:bg-[#FFC107]/90 transition-all mt-4 relative"
                      >
                        <motion.span
                          className="absolute inset-0 bg-white rounded-lg opacity-0"
                          whileHover={{ opacity: 0.2 }}
                          transition={{ duration: 0.2 }}
                        />
                        Learn More
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.section> */}
              <motion.section className="@container">
                {/* Background container without animation */}
                <div
                  className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[560px]:gap-8 @[560px]:rounded-xl items-center justify-center p-4 relative overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url("/img/homeBG.png")`,
                  }}
                >
                  {/* Static background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FFC107]/10 to-[#FFC107]/5" />

                  {/* Animated text content - triggers on page load */}
                  <motion.div
                    className="flex flex-col gap-2 text-center max-w-2xl px-4 relative z-10"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                  >
                    <motion.h1
                      className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl"
                      variants={scrollFadeUp}
                    >
                      The Golden Spice: A Journey from Farm to Table
                    </motion.h1>
                    <motion.h2
                      className="text-white text-sm sm:text-base font-normal leading-normal @[480px]:text-base"
                      variants={scrollFadeUp}
                      transition={{ delay: 0.3 }}
                    >
                      Connecting you with the finest, ethically sourced turmeric, straight from our farms to your business.
                    </motion.h2>
                  </motion.div>

                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={scrollFadeUp}
                    transition={{ delay: 0.6 }}
                    className="relative z-10"
                  >
                    <Link href="aboutus">
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#FFB800",
                          boxShadow: "0 10px 30px rgba(255, 193, 7, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#FFC107] text-[#181611] text-sm font-bold hover:bg-[#FFC107]/90 transition-all mt-4 relative"
                      >
                        <motion.span
                          className="absolute inset-0 bg-white rounded-lg opacity-0"
                          whileHover={{ opacity: 0.2 }}
                          transition={{ duration: 0.2 }}
                        />
                        Learn More
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.section>
              {/* Enhanced Commitment Section */}
              <motion.section
                className="flex flex-col gap-10 px-4 py-16 @container"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={staggerContainer}
              >
                <motion.div
                  className="flex flex-col gap-6 text-center items-center"
                  variants={scrollFadeUp}
                >
                  <motion.h1
                    className="text-[#181611] text-2xl sm:text-[32px] font-bold leading-tight max-w-[720px]"
                    variants={slideInLeft}
                  >
                    Our Commitment to Quality and Sustainability
                  </motion.h1>
                  <motion.p
                    className="text-[#897c61]  text-base font-normal leading-normal max-w-[720px]"
                    variants={slideInRight}
                    transition={{ delay: 0.1 }}
                  >
                    We are dedicated to providing the highest quality turmeric while ensuring sustainable
                    practices and fair partnerships with our farmers.
                  </motion.p>
                  <motion.div variants={scaleIn} transition={{ delay: 0.2 }}>
                    <Link href="service">
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#FFB800",
                          boxShadow: "0 8px 25px rgba(255, 193, 7, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#FFC107] text-[#181611] text-sm font-bold w-fit hover:bg-[#FFC107]/90 transition-all"
                      >
                        Explore Our Process
                      </motion.button>
                    </Link>
                  </motion.div>
                </motion.div>

                {/* Enhanced Feature Cards */}
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-0"
                  variants={staggerContainer}
                  animate="visible"
                >
                  {[
                    { icon: "🌱", title: "Authentic Sourcing", desc: "We work directly with local farmers to bring you the most authentic and flavorful turmeric." },
                    { icon: "🤝", title: "Sustainable Farming", desc: "Environmentally friendly and supports local ecosystem." },
                    { icon: "⭐", title: "Unmatched Quality", desc: "Every batch undergoes rigorous quality checks." },
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      className="flex flex-1 gap-4 rounded-xl border border-[#FFC107]/20 bg-white  p-6 flex-col items-center text-center shadow-sm hover:shadow-xl transition-shadow"
                      variants={scrollFadeUp}
                      whileHover="hover"
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <motion.div
                        className="w-16 h-16 bg-[#FFC107]/20 rounded-full flex items-center justify-center mb-4 text-2xl"
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {card.icon}
                      </motion.div>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-[#181611] text-lg font-bold leading-tight">
                          {card.title}
                        </h2>
                        <p className="text-[#897c61]  text-sm font-normal leading-normal">
                          {card.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Enhanced Image Cards */}
              <motion.section
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2 }}
                variants={staggerContainer}
              >
                {[
                  {
                    title: "Our Farmers",
                    desc: "Meet the dedicated farmers who are the heart of our company.",
                    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwB_JgrRMOVrvKv8iEBowyW_UBTg3I6WzNsXJWsAZ5VYTv4JCZEUzhpXC1VDxDvMnGCdPFbxBW5OE9aYhMSmRwX8d8Nm28HGQzsZwTkPZnczTMtXbquHZrP56DgM-iPstE_adLAJHrwaOXmoM__dVqXPxJxkglUgc_Nazu9oHhcSoN6uXg9vMSlcGA5qdIFUqMJ55G4r8rSSbp2mr_umtTAhMN3nJ0LhupMNjaIih-q_WqnWvtnuzmSnMho6qXrMs42zRXAITP0PU',
                  },
                  {
                    title: "The Harvest",
                    desc: "A glimpse into harvesting our golden spice.",
                    img: "/img/img-1.jpg"
                  },
                  {
                    title: "The Final Product",
                    desc: "From our farms to your hands, the best turmeric.",
                    img: "/img/Double-Polish-Turmeric-Finger.jpg"
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col gap-4 pb-3 group"
                    variants={scrollFadeUp}
                    whileHover="hover"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <motion.div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden relative"
                      style={{ backgroundImage: `url("${card.img}")` }}
                      variants={imageHover}
                    >
                      <motion.div
                        className="absolute inset-0 bg-[#FFC107]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ opacity: 0.1 }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 + 0.1 }}
                    >
                      <p className="text-[#181611] text-lg font-bold leading-normal">{card.title}</p>
                      <p className="text-[#897c61]  text-sm font-normal leading-normal mt-1">{card.desc}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.section>

              {/* Enhanced Contact Section */}
              <motion.section
                className="bg-gradient-to-r from-[#FCC107]/20 to-[#FFC107]/10 py-20 px-4 text-center relative overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={scaleIn}
              >
                {/* Animated background elements */}
                <motion.div
                  className="absolute top-0 left-0 w-32 h-32 bg-[#FFC107]/10 rounded-full -translate-x-1/2 -translate-y-1/2"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-48 h-48 bg-[#FFC107]/5 rounded-full translate-x-1/3 translate-y-1/3"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                <div className="max-w-2xl mx-auto relative z-10">
                  <motion.h2
                    className="text-2xl sm:text-3xl font-bold text-[#181611] mb-4"
                    variants={scrollFadeUp}
                  >
                    Connect with Us to Source the Finest Turmeric
                  </motion.h2>
                  <motion.p
                    className="text-[#897c61]  mb-8"
                    variants={scrollFadeUp}
                    transition={{ delay: 0.1 }}
                  >
                    Join us in our journey to bring the golden spice to the world. Contact us to learn more.
                  </motion.p>
                  <motion.div
                    variants={scrollFadeUp}
                    transition={{ delay: 0.2 }}
                  >
                    <Link href="/contact">
                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#FFB800",
                          boxShadow: "0 12px 35px rgba(255, 193, 7, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-[#FCC107] text-[#181611] text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#FCC107]/90 transition-all relative overflow-hidden"
                      >
                        <motion.span
                          className="absolute inset-0 bg-white opacity-0"
                          whileHover={{ opacity: 0.2 }}
                          transition={{ duration: 0.2 }}
                        />
                        Get In Touch
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.section>
            </main>

            <Footer />
            <WhatsAppFloat />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
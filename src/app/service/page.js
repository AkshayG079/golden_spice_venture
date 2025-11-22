"use client";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import WhatsAppFloat from "@/component/WhatsAppFloat";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <div className="bg-[#F5F5F5]">
      <Header />
      <div className="w-full min-h-screen overflow-hidden">
        <div className="px-4 md:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[80vw] flex-1 w-full">
            {/* Hero Section */}
            <motion.div
              className="@container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[300px] sm:min-h-[400px] md:min-h-[480px] flex-col gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4 sm:p-6"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url("/img/serviceBG.png")`,
                  }}
                >
                  <motion.div
                    className="flex flex-col gap-2 text-center max-w-4xl px-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                  >
                    <motion.h1
                      className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]"
                      variants={fadeInUp}
                    >
                      Connecting the World to the Golden Spice: Our Export &
                      Logistics Expertise
                    </motion.h1>
                    <motion.h2
                      className="text-white text-sm sm:text-base font-normal leading-normal"
                      variants={fadeInUp}
                      transition={{ delay: 0.2 }}
                    >
                      Seamless and sustainable logistics from farm to global
                      markets.
                    </motion.h2>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Journey Section */}
            <motion.div
              className="mt-6 sm:mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <motion.h2
                className="text-[#181611]  text-xl sm:text-2xl font-bold leading-tight px-4 pb-3 pt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
              >
                The Journey of Turmeric
              </motion.h2>
              <motion.div
                className="grid grid-cols-[40px_1fr] gap-x-2 sm:gap-x-4 px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                {/* Step 1 */}
                <motion.div
                  className="flex flex-col items-center"
                  variants={cardItem}
                >
                  <div className="w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div className="w-1 bg-[#FFC107] flex-1 mt-2"></div>
                </motion.div>
                <motion.div className="pb-6" variants={cardItem}>
                  <h3 className="font-bold text-[#181611] ">Sourcing</h3>
                  <p className="text-[#897c61]  mt-1">
                    Directly from trusted farms with quality assurance.
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  className="flex flex-col items-center"
                  variants={cardItem}
                >
                  <div className="w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div className="w-1 bg-[#FFC107] flex-1 mt-2"></div>
                </motion.div>
                <motion.div className="pb-6" variants={cardItem}>
                  <h3 className="font-bold text-[#181611] ">Processing</h3>
                  <p className="text-[#897c61]  mt-1">
                    State-of-the-art facilities ensuring purity and quality.
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  className="flex flex-col items-center"
                  variants={cardItem}
                >
                  <div className="w-8 h-8 bg-[#FFC107] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div className="w-1 bg-[#FFC107] flex-1 mt-2"></div>
                </motion.div>
                <motion.div className="pb-6" variants={cardItem}>
                  <h3 className="font-bold text-[#181611] ">Export</h3>
                  <p className="text-[#897c61]  mt-1">
                    Efficient logistics network for global delivery.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              className="mt-6 sm:mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <motion.h2
                className="text-[#181611]  text-xl sm:text-2xl font-bold px-4 pb-3 pt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
              >
                Why Choose Us for Your Export Needs?
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                {/* Card 1 */}
                <motion.div
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                  variants={cardItem}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 bg-[#FFC107]/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🌍</span>
                  </div>
                  <h3 className="font-bold text-lg text-[#181611] mb-2">
                    Global Network
                  </h3>
                  <p className="text-[#897c61]">
                    Established partnerships across 50+ countries worldwide.
                  </p>
                </motion.div>

                {/* Card 2 */}
                <motion.div
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                  variants={cardItem}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 bg-[#FFC107]/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h3 className="font-bold text-lg text-[#181611] mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-[#897c61]">
                    Rigorous quality checks at every stage of the process.
                  </p>
                </motion.div>

                {/* Card 3 */}
                <motion.div
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                  variants={cardItem}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="w-12 h-12 bg-[#FFC107]/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">🚚</span>
                  </div>
                  <h3 className="font-bold text-lg text-[#181611] mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-[#897c61]">
                    Optimized logistics for timely global shipments.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Services */}
            <motion.div
              className="mt-8 sm:mt-12 px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <motion.h2
                className="text-[#181611]  text-xl sm:text-2xl font-bold mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={scaleIn}
              >
                Our Export Services
              </motion.h2>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerContainer}
              >
                {/* Service 1 */}
                <motion.div
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#FFC107]"
                  variants={cardItem}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h3 className="font-bold text-lg text-[#181611] mb-3">
                    Bulk Export
                  </h3>
                  <p className="text-[#897c61] mb-4">
                    Large-scale turmeric export with competitive pricing and
                    volume discounts.
                  </p>
                  <ul className="text-[#897c61] text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-3"></span>
                      Custom packaging options
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-3"></span>
                      FOB & CIF terms available
                    </li>
                  </ul>
                </motion.div>

                {/* Service 2 */}
                <motion.div
                  className="bg-white rounded-xl p-6 shadow-md border-l-4 border-[#FFC107]"
                  variants={cardItem}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h3 className="font-bold text-lg text-[#181611] mb-3">
                    Private Labeling
                  </h3>
                  <p className="text-[#897c61] mb-4">
                    Custom branding solutions for your turmeric products.
                  </p>
                  <ul className="text-[#897c61] text-sm space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-3"></span>
                      Custom packaging design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#FFC107] rounded-full mr-3"></span>
                      Quality certification support
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="bg-[#FFC107]/20 mt-10 sm:mt-16 p-6 sm:p-8 rounded-lg mx-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={scaleIn}
            >
              <div className="text-center max-w-2xl mx-auto">
                <motion.h2
                  className="text-xl sm:text-2xl font-bold text-[#181611]  mb-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                >
                  Ready to Export With Us?
                </motion.h2>
                <motion.p
                  className="text-[#897c61]  mb-6 text-sm sm:text-base"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: 0.1 }}
                >
                  Join our network of global partners and experience trusted
                  turmeric exporting.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/contact">
                    <motion.button
                      className="flex justify-center items-center py-3 px-6 rounded-lg bg-[#FFC107] text-brown font-bold text-sm sm:text-base hover:bg-[#FFC107]/90 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Sales
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
        <WhatsAppFloat />
      </div>
    </div>
  );
}

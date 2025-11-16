"use client";
import Footer from "@/component/Footer";
import Header from "@/component/Header";
import WhatsAppFloat from "@/component/WhatsAppFloat";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
    // Animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 60 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const scaleIn = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "backOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardItem = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
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

    const certificates = [
        {
            name: "Business License",
            file: "/doc/License.pdf",
            icon: "📄",
            description: "Official business registration and license documents"
        },
        {
            name: "GST Certificate",
            file: "/doc/Gst.pdf",
            icon: "🏢",
            description: "Goods and Services Tax registration certificate"
        },
        {
            name: "FSSAI Certificate",
            file: "/doc/fssai.pdf",
            icon: "🍃",
            description: "Food Safety and Standards Authority of India certification"
        }
    ];

    return (
        <div className="bg-[#F5F5F5]">
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <motion.div
                    className="w-full"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="flex min-h-[70vh] sm:min-h-[80vh] md:min-h-[calc(100vh)] flex-col gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 sm:p-6"
                        data-alt="A smiling farmer proudly holding a handful of freshly harvested turmeric roots."
                        style={{
                            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("/img/mg-2.jpg")',
                        }}
                        variants={scaleIn}
                    >
                        <motion.div
                            className="flex flex-col gap-4 text-center max-w-3xl px-4"
                            variants={staggerContainer}
                        >
                            <motion.h1
                                className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight font-display"
                                variants={fadeInUp}
                            >
                                From Our Farms to Your Table: The Story of Golden Spice Venture
                            </motion.h1>
                            <motion.h2
                                className="text-white text-base sm:text-lg md:text-xl font-normal leading-normal font-body"
                                variants={fadeInUp}
                                transition={{ delay: 0.2 }}
                            >
                                Discover our commitment to authenticity, sustainability and quality,
                                connecting farmers to international customers.
                            </motion.h2>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Journey Section */}
                <motion.div
                    className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={fadeInUp}
                >
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            className="grid grid-cols-[40px_1fr] gap-x-4 md:gap-x-8"
                            variants={staggerContainer}
                        >
                            <motion.div className="flex flex-col items-center gap-2 pt-3" variants={cardItem}>
                                <motion.div
                                    className="w-8 h-8 bg-[#6D4C41] dark:bg-[#FFC107] rounded-full flex items-center justify-center text-white font-bold text-sm"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    1
                                </motion.div>
                                <div className="w-0.5 bg-[#6D4C41]/20 dark:bg-[#FFC107]/30 h-full grow"></div>
                            </motion.div>
                            <motion.div className="flex flex-1 flex-col pb-8 sm:pb-12" variants={cardItem}>
                                <motion.p
                                    className="text-[#6D4C41] dark:text-[#FFC107] text-sm font-bold uppercase tracking-widest font-display"
                                    variants={fadeInLeft}
                                >
                                    2025
                                </motion.p>
                                <motion.p
                                    className="text-xl sm:text-2xl font-bold font-display mt-1"
                                    variants={fadeInLeft}
                                    transition={{ delay: 0.1 }}
                                >
                                    The Journey
                                </motion.p>
                                <motion.p
                                    className="text-[#897c61] dark:text-[#a1967d] text-base sm:text-lg mt-2 font-body space-y-4"
                                    variants={fadeInLeft}
                                    transition={{ delay: 0.2 }}
                                >
                                    Golden Spice Venture, established in 2025, is a dedicated exporter
                                    of premium Turmeric Fingers from India. We specialize exclusively in
                                    sourcing, processing and supplying high-quality turmeric to meet the
                                    growing global demand for this golden spice.
                                    <br />
                                    With a strong commitment to purity, authenticity and sustainability,
                                    Golden Spice Venture ensures that every turmeric finger we deliver
                                    carries the rich color, aroma and natural benefits that Indian
                                    turmeric is renowned for worldwide.
                                    <br />
                                    Our operations are backed by stringent quality checks, hygienic
                                    processing and reliable logistics, ensuring timely delivery to our
                                    valued international clients. At Golden Spice Venture, we believe in
                                    building long-term partnerships by offering not only a product but
                                    also trust, transparency and consistent quality.
                                    <br />
                                    As a young and ambitious firm, we are driven to position Indian
                                    turmeric on the global map as a symbol of health, tradition and
                                    excellence.
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Mission, Vision & Values Section */}
                <motion.div
                    className="bg-[#6D4C41]/5 dark:bg-[#FFC107]/5 py-12 sm:py-16 md:py-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
                        <motion.h2
                            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 font-display"
                            variants={fadeInUp}
                        >
                            Our Mission, Vision and Values
                        </motion.h2>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
                            variants={staggerContainer}
                        >
                            {/* Mission Card */}
                            <motion.div
                                className="text-center p-6 bg-[#F5F5F5] dark:bg-[#221c10] rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                variants={cardItem}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.span
                                    className="material-symbols-outlined text-4xl text-[#2E7D32] dark:text-[#FFC107]"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    rocket_launch
                                </motion.span>
                                <h3 className="text-xl sm:text-2xl font-bold mt-4 mb-2 font-display">
                                    Our Mission
                                </h3>
                                <p className="font-body text-base sm:text-lg">
                                    To deliver the world's finest, ethically-sourced turmeric while
                                    empowering our farming communities and preserving the environment.
                                </p>
                            </motion.div>

                            {/* Vision Card */}
                            <motion.div
                                className="text-center p-6 bg-[#F5F5F5] dark:bg-[#221c10] rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                variants={cardItem}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3, delay: 0.1 }
                                }}
                            >
                                <motion.span
                                    className="material-symbols-outlined text-4xl text-[#2E7D32] dark:text-[#FFC107]"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    visibility
                                </motion.span>
                                <h3 className="text-xl sm:text-2xl font-bold mt-4 mb-2 font-display">
                                    Our Vision
                                </h3>
                                <p className="font-body text-base sm:text-lg">
                                    To be a global leader in sustainable turmeric export, celebrated
                                    for our unwavering commitment to quality, integrity and social
                                    responsibility.
                                </p>
                            </motion.div>

                            {/* Values Card */}
                            <motion.div
                                className="text-center p-6 bg-[#F5F5F5] dark:bg-[#221c10] rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                                variants={cardItem}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.3, delay: 0.2 }
                                }}
                            >
                                <motion.span
                                    className="material-symbols-outlined text-4xl text-[#2E7D32] dark:text-[#FFC107]"
                                    whileHover={{ scale: 1.1, rotate: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    favorite
                                </motion.span>
                                <h3 className="text-xl sm:text-2xl font-bold mt-4 mb-2 font-display">
                                    Our Values
                                </h3>
                                <p className="font-body text-base sm:text-lg">
                                    Authenticity, Sustainability, Quality, Community and Transparency
                                    guide every decision we make, from farm to table.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Certificates Section - Better Spacing */}
                <motion.div
                    className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20 bg-white dark:bg-[#2c2416]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <div className="max-w-6xl mx-auto">
                        <motion.h2
                            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 font-display"
                            variants={fadeInUp}
                        >
                            Our Certifications & Documents
                        </motion.h2>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10"
                            variants={staggerContainer}
                        >
                            {certificates.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center p-6 bg-[#F5F5F5] dark:bg-[#221c10] rounded-xl shadow-lg border border-[#FFC107]/20 flex flex-col h-full"
                                    variants={cardItem}
                                    whileHover={{
                                        y: -2,
                                        boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    {/* Icon */}
                                    <div className="w-16 h-16 bg-[#FFC107]/20 rounded-full flex items-center justify-center mb-5 text-2xl mx-auto">
                                        {cert.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 font-display text-[#6D4C41] dark:text-[#FFC107]">
                                        {cert.name}
                                    </h3>

                                    {/* Description - Takes available space */}
                                    <p className="text-[#5D4037] dark:text-gray-300 text-sm mb-8 font-body leading-relaxed flex-grow">
                                        {cert.description}
                                    </p>

                                    {/* Buttons - Always at bottom */}
                                    <div className="flex gap-3 justify-center pt-4">
                                        {/* View Button - Green for positive action */}
                                        <motion.a
                                            href={cert.file}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#388E3C] text-white rounded-lg hover:bg-[#2E7D32] transition-colors text-sm font-medium shadow-sm"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            <span className="material-symbols-outlined text-lg">
                                                visibility
                                            </span>
                                            View
                                        </motion.a>

                                        {/* Download Button - Orange for primary action */}
                                        <motion.a
                                            href={cert.file}
                                            download
                                            className="inline-flex items-center gap-2 px-3 py-2 bg-[#6D4C41] text-white rounded-lg hover:bg-[#50403a] transition-colors text-xs font-medium min-w-[80px] justify-center"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <span className="material-symbols-outlined text-base">
                                                download
                                            </span>
                                            Download
                                        </motion.a>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* Gallery Section */}
                <motion.div
                    className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInUp}
                >
                    <motion.h2
                        className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 font-display"
                        variants={fadeInUp}
                    >
                        Our Gallery
                    </motion.h2>

                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
                        variants={staggerContainer}
                    >
                        {[
                            { img: "/img/ladyFarmer.jpg", alt: "A farmer smiling in a turmeric field.", span: "col-span-1" },
                            { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu6nuEaACWd1xSZXCtmH_vOojTAAPmQ357WgnGP9hraqY6zZIsIBwi9b5jNfJPoFy12EnFFSoVxcOJzkpyHUmWHW_CTjNMLpAsyoDPQGSGHNV8lWm5U6n1RfezKyZ1y-f9bQ-FdqT3lS1Kga4gaccnoZcMzR9NqH00x3UVOezR4hPyqVmJF9fJfE_6gKKMiwwZOawfOm3oYys6CdzS2H-hHWzL6MH3sZB_EYt1iFi91lRMEaWPLYgCad7jdaot9YFL0q5ojgBPo7o", alt: "Lush green turmeric plants in a field.", span: "col-span-1" },
                            { img: "/img/farmer.jpg", alt: "A community of farmers together.", span: "col-span-2 sm:col-span-1" },
                            { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBE043EGmtzJLpYcOz4znihV22ee1BC79I_9LHjZol0OH2PuEX-PiUsn1G_SpsWNO49MGrZ6bbHEREHS948rxAox2OsgWTAtHbiMN_kKpzjcn5FywtJF84sxtwPC0s_f_L1qf7NyIB7C66jaWo2CnDE6BGWZFSsJc8Ft0kgPUrLDcKBroPcyc4TIlVkL1nzFpxxTP3FJtceHKsFpuyl_w15tj25u9aezkFv4v1QlnclV-do_QMygLpyw_bS9cB93QoecD3jB-wkx34", alt: "Close-up of vibrant turmeric roots.", span: "col-span-1" },
                            { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3HtLz-2rKAcI39m0TA9WVW4hT9ohD_9r81PVSq3hvVez41GeQMHwiHip6cReZYL2BeNxW4ux0Cr1ReD3Msx6WbLpkGfs-zW6yx_7j57rNwoPNyN-uDyD3manj6IOLusrhTAOc3xQ3Y0t0fwtTvZpcbMJIV0wDIBVAWNclY_SXdTr_I6dBoW2bnWrbJuL9D00jkfb0obW-S5bG5zRnbvmQlYdoiABbnF89UEuMQKsGf4eqkrtJpdi4F4M_0pl1ib-W9UZKPLw9pms", alt: "Turmeric powder in a wooden bowl.", span: "col-span-1" },
                            { img: "/img/Double-Polish-Turmeric-Finger.jpg", alt: "Workers processing turmeric.", span: "col-span-2 sm:col-span-1" },
                        ].map((image, index) => (
                            <motion.div
                                key={index}
                                className={image.span}
                                variants={cardItem}
                                whileHover="hover"
                            >
                                <motion.div
                                    className="w-full h-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg overflow-hidden cursor-pointer"
                                    data-alt={image.alt}
                                    style={{ backgroundImage: `url("${image.img}")` }}
                                    variants={imageHover}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    className="bg-[#6D4C41] text-white dark:bg-[#FFC107] dark:text-[#6D4C41] py-12 sm:py-16 md:py-24"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={scaleIn}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 text-center">
                        <motion.h2
                            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 font-display"
                            variants={fadeInUp}
                        >
                            Ready to Experience the Golden Spice?
                        </motion.h2>
                        <motion.p
                            className="text-base sm:text-lg mb-6 sm:mb-8 font-body"
                            variants={fadeInUp}
                            transition={{ delay: 0.1 }}
                        >
                            Explore our range of premium turmeric products or get in touch to learn more about partnering with us.
                        </motion.p>
                        <motion.div
                            className="flex flex-col sm:flex-row justify-center gap-4"
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <Link href="/contact">
                                <motion.button
                                    className="flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-[#F5F5F5] text-[#6D4C41] font-bold text-base leading-normal tracking-[0.015em] font-display hover:bg-[#F5F5F5]/90 transition-colors"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <span className="truncate">Partner With Us</span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </main>

            <Footer />
            <WhatsAppFloat />
        </div>
    );
}
"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import Header from "@/component/Header";
import WhatsAppFloat from "@/component/WhatsAppFloat";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Animation variants optimized for mobile
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInLeft = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const fadeInRight = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const cardItem = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    const inputFocus = {
        focus: {
            scale: 1.01,
            transition: { duration: 0.2 }
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log("PUBLIC KEY:", process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
        console.log("NEXT_PUBLIC_SERVICE_ID KEY:", process.env.NEXT_PUBLIC_SERVICE_ID);
        console.log("NEXT_PUBLIC_TEMPLATE_ID KEY:", process.env.NEXT_PUBLIC_TEMPLATE_ID);

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.log(error)
            toast.error("Failed to send message. Try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#F5F5F5] min-h-screen">
            <Header />

            <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 md:py-10">
                {/* Fixed container with proper width constraints */}
                <div className="flex flex-col w-full max-w-7xl mx-auto"> {/* Changed to max-w-7xl and removed max-w-full */}

                    {/* Heading Section */}
                    <motion.div
                        className="flex flex-col gap-4 p-2 sm:p-4 w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={fadeInUp}
                    >
                        <motion.div
                            className="flex flex-col gap-3 w-full"
                            variants={staggerContainer}
                        >
                            <motion.h1
                                className="text-[#6D4C41]  text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-center sm:text-left"
                                variants={fadeInUp}
                            >
                                Let's Connect
                            </motion.h1>
                            <motion.p
                                className="text-[#897c61] text-sm sm:text-base font-normal leading-relaxed max-w-full sm:max-w-lg text-center sm:text-left"
                                variants={fadeInUp}
                                transition={{ delay: 0.1 }}
                            >
                                We'd love to hear from you. Whether you have a question about our products,
                                pricing or anything else, our team is ready to answer all your questions.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* Grid Layout - Fixed width issues */}
                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mt-4 md:mt-6 w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >

                        {/* Contact Information */}
                        <motion.div
                            className="flex flex-col gap-4 md:gap-6 w-full"
                            variants={fadeInLeft}
                        >
                            <motion.h2
                                className="text-lg sm:text-xl md:text-2xl font-bold text-[#6D4C41]  text-center sm:text-left"
                                variants={fadeInLeft}
                            >
                                Contact Information
                            </motion.h2>

                            <motion.div
                                className="space-y-3 md:space-y-4 w-full"
                                variants={staggerContainer}
                            >
                                {/* Email */}
                                <motion.div
                                    className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm w-full"
                                    variants={cardItem}
                                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                >
                                    <motion.div
                                        className="rounded-full bg-[#FFC107]/20  p-2 flex-shrink-0 mt-0.5"
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <span className="material-symbols-outlined text-[#6D4C41]  text-lg">mail</span>
                                    </motion.div>
                                    <div className="flex flex-col gap-1 flex-1 min-w-0">
                                        <p className="text-[#6D4C41] text-sm sm:text-base font-medium leading-normal">
                                            Email
                                        </p>
                                        <motion.a
                                            className="text-[#897c61] text-xs sm:text-sm font-normal leading-normal hover:text-green break-all"
                                            href="mailto:goldenspiceventure@gmail.com"
                                            whileHover={{ color: "#4CAF50" }}
                                        >
                                            goldenspiceventure@gmail.com
                                        </motion.a>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm w-full"
                                    variants={cardItem}
                                    whileHover={{ x: 5, transition: { duration: 0.2, delay: 0.05 } }}
                                >
                                    <motion.div
                                        className="rounded-full bg-[#FFC107]/20  p-2 flex-shrink-0 mt-0.5"
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <span className="material-symbols-outlined text-[#6D4C41]  text-lg">phone</span>
                                    </motion.div>
                                    <div className="flex flex-col gap-1 flex-1">
                                        <p className="text-[#6D4C41] text-sm sm:text-base font-medium leading-normal">
                                            Phone
                                        </p>
                                        <motion.a
                                            className="text-[#897c61] text-xs sm:text-sm font-normal leading-normal hover:text-green"
                                            href="tel:+919763606444"
                                            whileHover={{ color: "#4CAF50" }}
                                        >
                                            +91 97636 06444
                                        </motion.a>
                                    </div>
                                </motion.div>

                                {/* Address */}
                                <motion.div
                                    className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm w-full"
                                    variants={cardItem}
                                    whileHover={{ x: 5, transition: { duration: 0.2, delay: 0.1 } }}
                                >
                                    <motion.div
                                        className="rounded-full bg-[#FFC107]/20  p-2 flex-shrink-0 mt-0.5"
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <span className="material-symbols-outlined text-[#6D4C41]  text-lg">location_on</span>
                                    </motion.div>
                                    <div className="flex flex-col gap-1 flex-1">
                                        <p className="text-[#6D4C41] text-sm sm:text-base font-medium leading-normal">
                                            Address
                                        </p>
                                        <p className="text-[#897c61] text-xs sm:text-sm font-normal leading-normal">
                                            Parvana Nagar Nanded, Maharashtra, India
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            className="bg-white p-4 sm:p-6 md:p-6 rounded-xl shadow-lg w-full"
                            variants={fadeInRight}
                        >
                            <motion.form
                                onSubmit={handleSubmit}
                                className="space-y-3 md:space-y-4 w-full"
                                variants={staggerContainer}
                            >
                                {/* Name */}
                                <motion.div variants={cardItem}>
                                    <label
                                        className="block text-sm font-medium text-[#6D4C41] mb-1"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <motion.input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border border-gray-300  bg-[#F5F5F5] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-[#FFC107] text-sm p-2 sm:p-3 text-[#181611]"
                                        whileFocus="focus"
                                        variants={inputFocus}
                                    />
                                </motion.div>

                                {/* Email */}
                                <motion.div variants={cardItem}>
                                    <label
                                        className="block text-sm font-medium text-[#6D4C41] mb-1"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <motion.input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border border-gray-300  bg-[#F5F5F5] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-[#FFC107] text-sm p-2 sm:p-3 text-[#181611]"
                                        whileFocus="focus"
                                        variants={inputFocus}
                                    />
                                </motion.div>

                                {/* Subject */}
                                <motion.div variants={cardItem}>
                                    <label
                                        className="block text-sm font-medium text-[#6D4C41] mb-1"
                                        htmlFor="subject"
                                    >
                                        Subject
                                    </label>
                                    <motion.input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border border-gray-300  bg-[#F5F5F5] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-[#FFC107] text-sm p-2 sm:p-3 text-[#181611]"
                                        whileFocus="focus"
                                        variants={inputFocus}
                                    />
                                </motion.div>

                                {/* Message */}
                                <motion.div variants={cardItem}>
                                    <label
                                        className="block text-sm font-medium text-[#6D4C41] mb-1"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <motion.textarea
                                        id="message"
                                        name="message"
                                        rows="3"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="block w-full rounded-md border border-gray-300  bg-[#F5F5F5] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FFC107] focus:border-[#FFC107] text-sm p-2 sm:p-3 text-[#181611] resize-vertical"
                                        whileFocus="focus"
                                        variants={inputFocus}
                                    ></motion.textarea>
                                </motion.div>

                                {/* Submit Button */}
                                <motion.div variants={cardItem} className="pt-2">
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex justify-center items-center py-2 sm:py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm sm:text-base font-bold text-white bg-[#E65100] hover:bg-[#ff6f00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E65100] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={{
                                            scale: isSubmitting ? 1 : 1.01,
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                                            />
                                        ) : null}
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </motion.button>
                                </motion.div>
                            </motion.form>
                        </motion.div>
                    </motion.div>

                </div>
            </main>

            {/* Footer */}
            <motion.footer
                className="bg-white border-t border-solid border-t-[#e6e2db] px-4 sm:px-6 lg:px-8 py-4 md:py-6 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInUp}
            >
                <motion.p
                    className="text-xs sm:text-sm text-[#897c61]"
                    variants={fadeInUp}
                >
                    © {new Date().getFullYear()} Golden Spice Venture — All Rights Reserved.

                </motion.p>
            </motion.footer>

            <WhatsAppFloat />
        </div>
    );
}
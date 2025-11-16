"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="dark:bg-[#221c10] border-t border-[#FCC107]/20 text-[#181611] dark:text-white p-6 sm:p-10">
            <div className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                <div>
                    <h3 className="text-lg font-bold mb-4">Golden Spice Venture</h3>
                    <p className="text-sm text-[#897c61] dark:text-gray-300">
                        Connecting farms to your table with the highest quality, ethically sourced turmeric.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link className="hover:text-[#FCC107] transition-colors text-[#897c61] dark:text-gray-300" href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-[#FCC107] transition-colors text-[#897c61] dark:text-gray-300" href="/aboutus">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-[#FCC107] transition-colors text-[#897c61] dark:text-gray-300" href="/service">
                                Our Services
                            </Link>
                        </li>
                        <li>
                            <Link className="hover:text-[#FCC107] transition-colors text-[#897c61] dark:text-gray-300" href="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <p className="text-sm text-[#897c61] dark:text-gray-300">
                        Parvana Nagar Nanded, Maharashtra, India
                    </p>
                    <p className="text-sm text-[#897c61] dark:text-gray-300">
                        goldenspiceventure@gmail.com
                    </p>
                    <p className="text-sm text-[#897c61] dark:text-gray-300">
                        +91 97636 06444
                    </p>
                </div>

            </div>

            <div className="mt-8 pt-8 border-t border-[#FCC107]/20 text-center text-sm text-[#897c61] dark:text-gray-300">
                © {new Date().getFullYear()} Golden Spice Venture — All Rights Reserved.
            </div>
        </footer>
    );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
    { name: "About Me", href: "#about-me" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 px-4 md:px-10 ${scrolled ? "bg-[#030014]/80 backdrop-blur-md shadow-lg shadow-[#2A0E61]/20" : "bg-transparent"
                } transition-all duration-300`}
            style={{ height: 65 }}
            aria-label="Main navigation"
        >
            <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
                {/* Left - Name */}
                <a
                    href="#about-me"
                    className="flex items-center gap-3"
                    aria-label="Yashwanth - Home"
                >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-purple-500/30">
                        Y
                    </div>
                    <span className="font-bold text-base text-white hidden sm:block">
                        Yashwanth
                    </span>
                </a>

                {/* Center - Nav pill */}
                <div className="hidden md:block">
                    <div className="navbar-pill">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 text-[13px] font-medium hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right - Social icons */}
                <div className="hidden md:flex items-center gap-5">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white hover:scale-125 transition duration-300">
                        <FaTwitter size={22} />
                    </a>
                    <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:scale-125 transition duration-300">
                        <FaLinkedin size={22} />
                    </a>
                    <a href="https://github.com/Yashwanth070" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white hover:scale-125 transition duration-300">
                        <FaGithub size={22} />
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-white"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                >
                    {mobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden overflow-hidden bg-[#030014]/95 backdrop-blur-lg border-t border-[#7042f861]"
                    >
                        <div className="flex flex-col p-4 gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-gray-300 text-sm py-2 hover:text-white transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-4 pt-3 border-t border-white/10">
                                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white">
                                    <FaLinkedin size={20} />
                                </a>
                                <a href="https://github.com/Yashwanth070" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-white">
                                    <FaGithub size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

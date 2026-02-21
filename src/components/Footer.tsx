"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaInstagram,
} from "react-icons/fa";
import { FiMail, FiFileText } from "react-icons/fi";

const socialLinks = [
    {
        name: "Twitter",
        icon: FaTwitter,
        href: "https://twitter.com/",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        href: "https://linkedin.com/in/",
    },
    {
        name: "GitHub",
        icon: FaGithub,
        href: "https://github.com/Yashwanth070",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "https://instagram.com/",
    },
];

const Footer: React.FC = () => {
    return (
        <footer className="relative z-10 w-full pt-20 pb-8">
            {/* Horizontal line */}
            <div className="section-container mb-12 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

            <div className="section-container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
                    {/* Social Media Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-white font-bold text-lg mb-5">Social Media</h3>
                        <div className="flex flex-col gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <social.icon size={22} />
                                    <span className="text-[14px]">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Community Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-white font-bold text-lg mb-5">Community</h3>
                        <div className="flex flex-col gap-3">
                            <a href="https://github.com/Yashwanth070" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-[14px]">
                                GitHub
                            </a>
                            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-[14px]">
                                Projects
                            </a>
                            <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-[14px]">
                                Skills
                            </a>
                        </div>
                    </motion.div>

                    {/* About Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-white font-bold text-lg mb-5">About</h3>
                        <div className="flex flex-col gap-3">
                            <a
                                href="#about-me"
                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[14px]"
                            >
                                <FiFileText size={16} />
                                Learn about me
                            </a>
                            <a
                                href="mailto:yashwanth@example.com"
                                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-[14px]"
                                aria-label="Send email"
                            >
                                <FiMail size={16} />
                                yashwanth@example.com
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Copyright */}
                <div className="text-center pt-6 border-t border-white/5">
                    <p className="text-gray-500 text-[13px]">
                        &copy; {new Date().getFullYear()} Yashwanth. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

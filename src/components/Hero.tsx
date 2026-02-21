"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import {
    FaReact,
    FaJs,
    FaAws,
    FaGithub,
} from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiGraphql,
    SiFirebase,
    SiVercel,
} from "react-icons/si";

const techIcons = [
    { Icon: FaReact, color: "#61DAFB", delay: 0 },
    { Icon: FaJs, color: "#F7DF1E", delay: 0.1 },
    { Icon: SiTailwindcss, color: "#06B6D4", delay: 0.2 },
    { Icon: SiNextdotjs, color: "#ffffff", delay: 0.3 },
    { Icon: SiGraphql, color: "#E10098", delay: 0.4 },
    { Icon: SiTypescript, color: "#3178C6", delay: 0.5 },
    { Icon: FaAws, color: "#FF9900", delay: 0.6 },
    { Icon: SiFirebase, color: "#FFCA28", delay: 0.7 },
    { Icon: SiVercel, color: "#ffffff", delay: 0.8 },
    { Icon: FaGithub, color: "#ffffff", delay: 0.9 },
];

const Hero: React.FC = () => {
    return (
        <section
            id="about-me"
            className="relative min-h-screen w-full overflow-hidden"
        >
            {/* Blackhole-like gradient background */}
            <div className="absolute inset-0 z-[1]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014] z-[2]" />
                {/* Blackhole glow effect at top center */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[700px] h-[700px] md:w-[900px] md:h-[900px]">
                    <div
                        className="w-full h-full rounded-full animate-hero-pulse"
                        style={{
                            background:
                                "radial-gradient(ellipse at center, rgba(124, 58, 237, 0.4) 0%, rgba(139, 92, 246, 0.2) 25%, rgba(30, 27, 75, 0.1) 50%, transparent 70%)",
                            filter: "blur(40px)",
                        }}
                    />
                    {/* Inner bright ring */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[100px] md:w-[500px] md:h-[140px]"
                        style={{
                            background:
                                "radial-gradient(ellipse at center, rgba(255,255,255,0.3) 0%, rgba(168,85,247,0.2) 40%, transparent 70%)",
                            borderRadius: "50%",
                            filter: "blur(20px)",
                        }}
                    />
                </div>
            </div>

            {/* Content - Two column layout */}
            <div className="relative z-[10] flex items-center min-h-screen max-w-7xl mx-auto px-6 md:px-10 pt-20">
                <div className="flex flex-col md:flex-row items-center md:items-start w-full gap-8">
                    {/* Left side - Text content */}
                    <div className="flex-1 flex flex-col items-start text-left">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="welcome-box flex items-center gap-2 mb-6"
                        >
                            <span className="text-[15px]">✨</span>
                            <span className="text-[13px] text-gray-300 font-medium">
                                Full Stack Developer
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-[36px] sm:text-[46px] md:text-[50px] lg:text-[58px] font-bold leading-[1.1] mb-4"
                        >
                            Hi, I&apos;m{" "}
                            <span className="text-gradient">Yashwanth</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.65, duration: 0.7 }}
                            className="text-xl sm:text-2xl text-gray-300 font-light mb-6"
                        >
                            I build things for the web.
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="text-gray-400 text-[14px] md:text-[16px] leading-relaxed max-w-xl mb-8"
                        >
                            A passionate Full Stack Developer with hands-on experience
                            building modern web applications. I work across the stack — from
                            crafting pixel-perfect React interfaces to designing scalable
                            Node.js backends with MongoDB, Express, and REST/GraphQL APIs.
                            I love turning ideas into polished, performant products.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1, duration: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#projects"
                                className="btn-gradient flex items-center gap-2 text-sm"
                            >
                                View Projects <FiArrowRight size={16} />
                            </a>
                            <a
                                href="#contact"
                                className="flex items-center gap-2 text-sm px-7 py-2.5 rounded-full border border-purple-500/40 text-purple-300 hover:bg-purple-500/10 hover:text-white transition-all duration-300 font-medium"
                            >
                                <FiDownload size={16} /> Get In Touch
                            </a>
                        </motion.div>
                    </div>

                    {/* Right side - Tech icon grid */}
                    <div className="flex-1 flex items-center justify-center md:justify-end">
                        <div className="grid grid-cols-3 gap-4 md:gap-5">
                            {techIcons.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.5 + item.delay,
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 150,
                                    }}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                                >
                                    <item.Icon size={36} style={{ color: item.color }} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030014] to-transparent z-[5]" />
        </section>
    );
};

export default Hero;

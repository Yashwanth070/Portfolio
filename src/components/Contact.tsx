"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const contactSocials = [
    {
        name: "GitHub",
        icon: FaGithub,
        href: "https://github.com/Yashwanth070",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        href: "https://linkedin.com/in/",
    },
    {
        name: "Twitter",
        icon: FaTwitter,
        href: "https://twitter.com/",
    },
];

const Contact: React.FC = () => {
    return (
        <section id="contact" className="relative w-full py-28 z-10 overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div
                    className="w-[500px] h-[500px] rounded-full contact-glow"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(112,66,248,0.15) 0%, transparent 70%)",
                        filter: "blur(60px)",
                    }}
                />
            </div>

            <div className="section-container relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-6"
                >
                    <div className="welcome-box inline-flex items-center gap-2 mb-4">
                        <span className="text-[15px]">📬</span>
                        <span className="text-[13px] text-gray-300 font-medium">
                            Get In Touch
                        </span>
                    </div>
                    <h2 className="text-[40px] md:text-[50px] font-bold">
                        Contact <span className="text-gradient">Me</span>
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-400 text-center max-w-2xl mx-auto text-[15px] leading-relaxed mb-12"
                >
                    I&apos;m always open to discussing new projects, creative ideas, or
                    opportunities to be part of your vision. Feel free to reach out!
                </motion.p>

                {/* Email CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    className="flex justify-center mb-10"
                >
                    <a
                        href="mailto:yashwanth@example.com"
                        className="btn-gradient flex items-center gap-3 text-base px-8 py-3"
                    >
                        <FiMail size={20} />
                        Say Hello
                        <FiArrowUpRight size={18} />
                    </a>
                </motion.div>

                {/* Social icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="flex justify-center gap-6"
                >
                    {contactSocials.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-purple-500/40 transition-all duration-300"
                        >
                            <social.icon size={22} />
                        </a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;

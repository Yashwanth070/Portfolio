"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLock } from "react-icons/fi";

const Encryption: React.FC = () => {
    const [randomTexts, setRandomTexts] = useState<string[]>([]);

    useEffect(() => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        const lines: string[] = [];
        for (let i = 0; i < 10; i++) {
            let line = "";
            for (let j = 0; j < 80; j++) {
                line += chars[Math.floor(Math.random() * chars.length)];
            }
            lines.push(line);
        }
        setRandomTexts(lines);
    }, []);

    useEffect(() => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        const interval = setInterval(() => {
            setRandomTexts((prev) =>
                prev.map((line) => {
                    const arr = line.split("");
                    for (let k = 0; k < 6; k++) {
                        const pos = Math.floor(Math.random() * arr.length);
                        arr[pos] = chars[Math.floor(Math.random() * chars.length)];
                    }
                    return arr.join("");
                })
            );
        }, 200);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full py-28 z-10 overflow-hidden">
            {/* Section Heading - centered */}
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="text-[36px] sm:text-[46px] md:text-[56px] font-bold mb-16 text-center"
            >
                Performance{" "}
                <span className="text-gradient">&</span>{" "}
                Security
            </motion.h2>

            {/* Encrypted Text Area - full width, centered text */}
            <div className="relative w-full my-10">
                {/* Random encryption text lines - centered */}
                <div
                    className="space-y-1.5 text-[11px] sm:text-[12px] font-mono text-purple-300/30 h-[280px]"
                    style={{
                        maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                    }}
                >
                    {randomTexts.map((text, i) => (
                        <div
                            key={i}
                            className="whitespace-nowrap text-center tracking-widest"
                        >
                            <span
                                className="inline-block"
                                style={{
                                    animation: `scroll-text ${18 + i * 2}s linear infinite`,
                                    animationDirection: i % 2 === 0 ? "normal" : "reverse",
                                }}
                            >
                                {text} &nbsp;&nbsp;&nbsp; {text}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Lock Icon in Center */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center"
                >
                    <div
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center"
                        style={{
                            background: "radial-gradient(circle, rgba(112,66,248,0.5) 0%, rgba(112,66,248,0.1) 70%)",
                            animation: "lock-pulse 3s ease-in-out infinite",
                        }}
                    >
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#0a0118] border-2 border-purple-500/50 flex items-center justify-center">
                            <FiLock size={32} className="text-purple-400" />
                        </div>
                    </div>
                    <p className="text-gray-400 text-xs mt-3 font-medium">
                        Encryption
                    </p>
                </motion.div>
            </div>

            {/* Subtitle - centered */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-gray-400 text-lg mt-8 italic text-center"
                style={{ fontFamily: "'Cedarville Cursive', cursive" }}
            >
                Secure your data with end-to-end encryption
            </motion.p>
        </section>
    );
};

export default Encryption;

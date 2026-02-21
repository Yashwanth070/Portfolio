"use client";

import React from "react";
import { motion } from "framer-motion";

interface Project {
    title: string;
    description: string;
    gradient: string;
    link: string;
    tech: string[];
}

const projects: Project[] = [
    {
        title: "SmartHire",
        description:
            "An AI-powered recruitment platform that streamlines the hiring process with intelligent resume parsing, automated candidate matching, interview scheduling, and a comprehensive analytics dashboard. Built with React.js, Node.js, Express, and MongoDB.",
        gradient: "from-purple-600 to-blue-600",
        link: "https://github.com/Yashwanth070",
        tech: ["React", "Node.js", "Express", "MongoDB", "Machine Learning"],
    },
    {
        title: "Taurus AI",
        description:
            "An advanced AI agent platform leveraging cutting-edge language models for intelligent task automation and natural language processing. Features conversational AI with context-aware responses, multi-modal interactions, and edge-deployed functions for low-latency responses.",
        gradient: "from-emerald-600 to-cyan-600",
        link: "https://github.com/Yashwanth070",
        tech: ["Next.js", "TypeScript", "OpenAI API", "Vercel", "Edge Functions"],
    },
    {
        title: "StudySync",
        description:
            "A real-time collaborative learning platform with integrated video conferencing, screen sharing, interactive whiteboards, and AI-powered tutoring. Features synchronized study environments with audio channels and real-time chat with file sharing.",
        gradient: "from-red-600 to-amber-500",
        link: "https://github.com/Yashwanth070",
        tech: ["React", "WebRTC", "OpenAI API", "Socket.io", "Node.js"],
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="relative w-full py-28 z-10">
            <div className="section-container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-[40px] md:text-[50px] font-bold">
                        My <span className="text-gradient">Projects</span>
                    </h2>
                </motion.div>

                {/* Project Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="project-card group block"
                        >
                            {/* Project Image Area */}
                            <div className="relative h-[200px] overflow-hidden">
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}
                                />
                                {/* App-like UI mockup overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-[85%] h-[80%] rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-3 flex flex-col">
                                        <div className="flex gap-1.5 mb-3">
                                            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                                        </div>
                                        <div className="flex-1 space-y-2">
                                            <div className="h-2 bg-white/20 rounded w-3/4" />
                                            <div className="h-2 bg-white/15 rounded w-1/2" />
                                            <div className="h-2 bg-white/10 rounded w-2/3" />
                                            <div className="mt-3 grid grid-cols-2 gap-2">
                                                <div className="h-8 bg-white/10 rounded" />
                                                <div className="h-8 bg-white/10 rounded" />
                                            </div>
                                            <div className="h-2 bg-white/10 rounded w-1/3" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-[13px] leading-relaxed mb-4 line-clamp-4">
                                    {project.description}
                                </p>
                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="tech-tag">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

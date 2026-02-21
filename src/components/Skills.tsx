"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaDocker,
    FaGitAlt,
    FaGithub,
    FaNpm,
    FaAws,
} from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiExpress,
    SiVercel,
    SiGraphql,
    SiRedis,
    SiFirebase,
    SiFigma,
    SiCplusplus,
    SiPrisma,
} from "react-icons/si";

interface SkillItem {
    name: string;
    Icon: React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties }>;
    color: string;
}

const row1: SkillItem[] = [
    { name: "HTML5", Icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", Icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "React", Icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
    { name: "C++", Icon: SiCplusplus, color: "#00599C" },
    { name: "Python", Icon: FaPython, color: "#3776AB" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
    { name: "Node.js", Icon: FaNodeJs, color: "#339933" },
];

const row2: SkillItem[] = [
    { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
    { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
    { name: "Redis", Icon: SiRedis, color: "#DC382D" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
    { name: "Prisma", Icon: SiPrisma, color: "#2D3748" },
];

const row3: SkillItem[] = [
    { name: "Git", Icon: FaGitAlt, color: "#F05032" },
    { name: "Express", Icon: SiExpress, color: "#ffffff" },
    { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
    { name: "AWS", Icon: FaAws, color: "#FF9900" },
    { name: "Docker", Icon: FaDocker, color: "#2496ED" },
    { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

const row4: SkillItem[] = [
    { name: "GitHub", Icon: FaGithub, color: "#ffffff" },
    { name: "npm", Icon: FaNpm, color: "#CB3837" },
];

const rows = [row1, row2, row3, row4];

const Skills: React.FC = () => {
    return (
        <section
            id="skills"
            className="relative w-full py-28 z-10 overflow-hidden"
        >
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className="text-center mb-14"
            >
                <div className="welcome-box inline-flex items-center gap-2 mb-4">
                    <span className="text-[15px]">💻</span>
                    <span className="text-[13px] text-gray-300 font-medium">
                        My Tech Stack
                    </span>
                </div>
                <h2 className="text-[40px] md:text-[50px] font-bold">
                    Skills <span className="text-gradient">&</span> Technologies
                </h2>
            </motion.div>

            {/* Skills pyramid layout */}
            <div className="section-container space-y-8">
                {rows.map((row, rowIndex) => (
                    <motion.div
                        key={rowIndex}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: rowIndex * 0.15, duration: 0.6 }}
                        className="flex flex-wrap justify-center gap-4 md:gap-6"
                    >
                        {row.map((skill, skillIndex) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: rowIndex * 0.1 + skillIndex * 0.05,
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 200,
                                }}
                                whileHover={{ scale: 1.3 }}
                                className="skill-icon flex flex-col items-center justify-center w-20 h-24 md:w-24 md:h-28 cursor-pointer"
                                title={skill.name}
                            >
                                <skill.Icon
                                    size={48}
                                    style={{ color: skill.color }}
                                />
                                <span className="skill-label">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

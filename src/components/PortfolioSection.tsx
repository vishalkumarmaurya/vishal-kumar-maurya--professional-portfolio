import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
interface PortfolioSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}
export function PortfolioSection({
  id,
  title,
  children,
  className = "",
  titleClassName = "",
}: PortfolioSectionProps) {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.section
      id={id}
      className={cn("py-20 md:py-28 lg:py-32", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={sectionVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-black font-display text-slate-950 mb-16 md:mb-20 text-center uppercase tracking-[0.2em] leading-tight",
            titleClassName
          )}
        >
          {title}
        </h2>
        {children}
      </div>
    </motion.section>
  );
}
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconHome } from "@tabler/icons-react";


interface BackToHomeProps {
  className?: string;
  variant?: "default" | "gradient" | "outline";
  showIcon?: boolean;
}

export function BackToHome({ 
  className = "", 
  variant = "gradient",
  showIcon = true 
}: BackToHomeProps) {
  const baseClasses = "inline-flex items-center px-8 py-4 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700",
    outline: "border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-center mt-12 mb-8 ${className}`}
    >
      <Link
        href="/"
        className={`${baseClasses} ${variants[variant]}`}
      >
        {showIcon && <IconHome className="mr-2 h-5 w-5" />}
        Início
      </Link>
    </motion.div>
  );
}
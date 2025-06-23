"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface BackToHomeProps {
  className?: string;
  variant?: "fixed" | "inline";
  showAnimation?: boolean;
}

export function BackToHome({ 
  className = "", 
  variant = "fixed",
  showAnimation = true 
}: BackToHomeProps) {
  const baseClasses = "text-gray-700 hover:text-gray-500 font-sans text-sm p-2 transition-colors duration-300 bg-transparent";
  
  const variantClasses = {
    fixed: "fixed top-5 left-5 z-50",
    inline: "inline-block"
  };

  const content = (
    <Link
      href="/"
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      aria-label="Voltar à página inicial"
      prefetch={true}
    >
      @ Inicio
    </Link>
  );

  if (showAnimation && variant === "fixed") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}
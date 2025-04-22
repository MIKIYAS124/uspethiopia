"use client"

import type * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"

interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
  variant?: "default" | "3d" | "outline" | "glow"
}

export function AnimatedButton({ children, className, variant = "default", ...props }: AnimatedButtonProps) {
  if (variant === "3d") {
    return (
      <motion.button
        className={cn("bg-usp-red hover:bg-usp-red-dark text-white font-bold py-3 px-6 rounded-md btn-3d", className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }

  if (variant === "outline") {
    return (
      <motion.button
        className={cn(
          "border-2 border-usp-red text-usp-red hover:bg-usp-red hover:text-white font-bold py-3 px-6 rounded-md transition-colors",
          className,
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  }

  if (variant === "glow") {
    return (
      <motion.button
        className={cn(
          "bg-usp-red hover:bg-usp-red-dark text-white font-bold py-3 px-6 rounded-md relative overflow-hidden group",
          className,
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        {children}
      </motion.button>
    )
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button className={cn("bg-usp-red hover:bg-usp-red-dark", className)} {...props}>
        {children}
      </Button>
    </motion.div>
  )
}

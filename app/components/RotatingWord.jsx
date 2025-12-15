"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["React apps", "Websites", "Framer websites", "Mobile apps"];

export default function RotatingWord() {
  const [index, setIndex] = useState(0);

  // Change the word every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className="relative inline-block h-[1.8em] bg-amber-800 align-middle"
      style={{ display: "inline-block" }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index} // MUST use index to trigger AnimatePresence
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute left-0 top-0 bg-gray-200 px-2 py-1 rounded-md font-black "
        >
          some text
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// {WORDS[index]}

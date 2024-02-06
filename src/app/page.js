'use client';
import dynamic from "next/dynamic";
import { motion } from 'framer-motion';
const Hero = dynamic(() => import("./components/hero"), { ssr: false });

export default function Home() {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.75,
        duration: 0.75,
      }}
    >
      <Hero />
    </motion.div>
  );
}

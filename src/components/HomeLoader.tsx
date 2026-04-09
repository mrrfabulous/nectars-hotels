"use client";

import { motion } from "framer-motion";

export default function HomeLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-slate-950 px-6 text-white"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(29,174,236,0.22),_transparent_45%)]" />

      <div className="relative flex max-w-sm flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/8 shadow-[0_0_60px_rgba(29,174,236,0.28)]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-dashed border-accent/70"
          />
          <span className="text-5xl font-bold text-white">N</span>
        </motion.div>

        <motion.h2
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.45, ease: "easeOut" }}
          className="font-poppins text-3xl font-semibold tracking-[0.18em] text-white"
        >
          NECTAR
        </motion.h2>

        <motion.p
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.45, ease: "easeOut" }}
          className="mt-3 max-w-xs text-sm uppercase tracking-[0.35em] text-white/65"
        >
          Hotels and Suites
        </motion.p>

        <motion.p
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.45, ease: "easeOut" }}
          className="mt-7 text-sm text-white/80"
        >
          Preparing a smooth arrival experience...
        </motion.p>

        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-white/12">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 rounded-full bg-accent"
          />
        </div>
      </div>
    </motion.div>
  );
}

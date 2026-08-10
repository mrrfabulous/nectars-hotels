"use client";

import { motion } from "framer-motion";

export default function HomeLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35, ease: "easeOut" } }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f9fcff] via-[#eef7ff] to-[#fff8e8] px-6 text-primary"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.24),_transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(250,204,21,0.18),_transparent_38%)]" />

      <div className="relative flex max-w-sm flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/80 bg-white shadow-[0_18px_50px_rgba(59,130,246,0.18)]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2 rounded-full border border-dashed border-accent/70"
          />
          <span className="text-5xl font-bold text-primary">N</span>
        </motion.div>

        <motion.h2
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.45, ease: "easeOut" }}
          className="font-poppins text-3xl font-semibold tracking-[0.18em] text-primary"
        >
          NECTAR
        </motion.h2>

        <motion.p
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.45, ease: "easeOut" }}
          className="mt-3 max-w-xs text-sm uppercase tracking-[0.35em] text-primary/55"
        >
          Hotels and Suites
        </motion.p>

        <motion.p
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.45, ease: "easeOut" }}
          className="mt-7 rounded-full border border-white/80 bg-white/80 px-5 py-2 text-sm text-slate-600 shadow-[0_10px_30px_rgba(15,23,42,0.06)]"
        >
          Preparing a smooth arrival experience...
        </motion.p>

        <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-primary/10">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.35, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-accent via-sky-400 to-amber-400"
          />
        </div>
      </div>
    </motion.div>
  );
}
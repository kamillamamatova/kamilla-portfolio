"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import LinedPaper from "@/components/LinedPaper";
import ScallopedWashiTape from "@/components/ScallopedWashiTape";
import Ribbon from "@/components/Ribbon";

export default function Landing() {
  const router = useRouter();

  // Redirect mobile users directly to the home page
  useEffect(() => {
    if (window.innerWidth < 768) {
      router.replace("/home");
    }
  }, [router]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Jost:wght@300;400;500&display=swap');
      `}</style>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5e6d8] via-[#fef8f5] to-[#ffe9f0] relative overflow-hidden p-6">
        {/* Subtle floating dots */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-petal rounded-full"
              style={{
                left: `${[12, 25, 40, 55, 68, 80, 33, 72][i]}%`,
                top: `${[20, 70, 35, 85, 15, 55, 60, 40][i]}%`,
              }}
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateZ: -1 }}
          animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full"
          style={{ maxWidth: "72rem" }}
        >
          <LinedPaper className="rounded-lg shadow-2xl px-16 py-14 md:px-36 md:py-20 border border-[#e8d5c4]">
            <img
              src="/pinkribbonbowcustom.png"
              alt=""
              className="absolute -top-12 -left-15 z-10"
              style={{ width: 180, transform: "rotate(-27deg)", opacity: 0.75 }}
            />
            <ScallopedWashiTape className="top-12 -right-4 md:-right-8" rotation={45} />
            <ScallopedWashiTape className="bottom-16 -left-4 md:-left-8" rotation={-35} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative bg-[#ffd4e5] rounded-lg px-16 py-12 md:px-24 md:py-16 shadow-lg"
              style={{
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                backgroundSize: "8px 8px",
              }}
            >
              {/* Heart stamp */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8"
              >
                <svg width="63" height="63" viewBox="0 0 48 48" fill="none">
                  <path
                    d="M24 42C24 42 6 30 6 16.5C6 12 9 9 13.5 9C16.5 9 19.5 10.5 24 15C28.5 10.5 31.5 9 34.5 9C39 9 42 12 42 16.5C42 30 24 42 24 42Z"
                    fill="#ffc9d4"
                    opacity="0.5"
                  />
                </svg>
              </motion.div>

              <div className="text-center relative z-10">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                  className="text-6xl md:text-8xl mb-6 text-[#3d2618] leading-tight"
                >
                  Kamilla Mamatova
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex justify-center mb-8"
                >
                  <Ribbon text="junior student with SWE focus" />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => router.push("/home")}
                  className="group bg-[#3d2618] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
                >
                  <span className="font-medium">Enter Portfolio</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </LinedPaper>

          <div className="absolute -bottom-2 left-4 right-4 h-4 bg-gradient-to-b from-black/10 to-transparent blur-md rounded-full" />
        </motion.div>
      </div>
    </>
  );
}

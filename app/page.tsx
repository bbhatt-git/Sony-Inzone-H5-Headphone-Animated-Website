"use client";
import Scrollytelling from "@/components/Scrollytelling";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
};

const revealVariants: Variants = {
  hidden: { y: 40, opacity: 0, scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 24
    }
  }
};

const fadeVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  }
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Balanced 3D Parallax Depth Layers (Fluid macOS Motion)
  const yDeep = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yFloating = useTransform(scrollYProgress, [0, 1], [0, -400]);

  return (
    <main ref={containerRef} className="bg-[#000000] relative selection:bg-primaryAccent selection:text-white pb-48">
      {/* Precision 3D Depth Layers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div style={{ y: yDeep }} className="absolute inset-0 bg-grid-white opacity-[0.4] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></motion.div>

        {/* Layer 1: Ambient Blurs (Sonoma vibe) */}
        <motion.div
          style={{ y: yFloating }}
          className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-primaryAccent/[0.04] rounded-full blur-[120px]"
        ></motion.div>
        <motion.div
          style={{ y: yFloating }}
          className="absolute top-[60%] left-[5%] w-[500px] h-[500px] bg-secondaryAccent/[0.03] rounded-full blur-[150px]"
        ></motion.div>
      </div>

      <Scrollytelling />

      {/* Main Content Sections (Widget Architecture) */}
      <div className="relative z-20 -mt-24 space-y-8 md:space-y-12">

        {/* 01. Acoustic Core Widget */}
        <section className="px-4 md:px-12 max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="macos-glass-panel p-8 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24"
          >
            {/* Context */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-16">
              <div>
                <motion.span variants={revealVariants} className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-white/60 font-medium tracking-[0.2em] uppercase text-[10px] mb-8">
                  Aeronautic Engineering
                </motion.span>
                <div className="overflow-hidden">
                  <motion.h2 variants={revealVariants} className="text-4xl lg:text-5xl font-semibold tracking-tighter leading-[1.1] text-[#F5F5F7]">
                    Symmetric Precision
                  </motion.h2>
                </div>
              </div>

              <div className="space-y-8">
                <motion.div variants={fadeVariants} className="space-y-6 text-white/50 text-[15px] font-light leading-relaxed max-w-sm">
                  <p>
                    Precision engineering for the podium. A unique duct architecture governs airflow to ensure every bass note and high-frequency cue is delivered with pinpoint, pneumatic clarity.
                  </p>
                  <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent my-8"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-1">Driver</p>
                      <p className="text-[#F5F5F7] font-medium text-sm">40mm Neodymium</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-white/30 uppercase tracking-widest mb-1">Response</p>
                      <p className="text-[#F5F5F7] font-medium text-sm">5Hz—20,000Hz</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Visual Callout */}
            <motion.div
              variants={fadeVariants}
              className="md:col-span-7"
            >
              <div className="macos-glass h-full min-h-[400px] flex flex-col justify-end p-8 md:p-12 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-primaryAccent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[1500ms]"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-medium tracking-tight mb-2 text-[#F5F5F7]">Zero Lateral Fatigue</h3>
                  <p className="text-white/40 text-[13px] font-light leading-relaxed max-w-sm">
                    Smooth nylon ear pads and a 260g lightweight frame designed for absolute marathon sessions. Zero distractions, only focus.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 02. Broadcast Comms Widgets */}
        <section className="px-4 md:px-12 max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12"
          >
            {/* Main Feature Block */}
            <motion.div variants={fadeVariants} className="md:col-span-8 macos-glass p-8 md:p-16 flex flex-col justify-between space-y-12">
              <div>
                <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-white/60 font-medium tracking-[0.2em] uppercase text-[10px] mb-8">Microphone Authority</span>
                <h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter leading-[1.1] text-[#F5F5F7] max-w-lg mb-6">Absolute Command</h2>
                <p className="text-[15px] lg:text-lg text-white/50 font-light max-w-xl leading-relaxed">
                  Lead with confidence. The AI-driven boom microphone identifies and isolates your voice from the most chaotic environments, ensuring your team only hears what matters.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                {[
                  { t: "AI Noise Reduction", d: "Neural processing isolates spikes." },
                  { t: "Flip-to-Mute", d: "Tactile line control." },
                  { t: "Sidetone Adjust", d: "Natural voice feedback." },
                  { t: "Dual-Source Mix", d: "Independent balance." }
                ].map((f) => (
                  <div
                    key={f.t}
                    className="bg-black/20 p-6 rounded-3xl border border-white/5"
                  >
                    <h4 className="font-semibold text-[13px] mb-2 text-[#F5F5F7]">{f.t}</h4>
                    <p className="text-white/40 text-[12px] font-light leading-relaxed">{f.d}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stat Block Focus */}
            <motion.div variants={fadeVariants} className="md:col-span-4 macos-glass flex flex-col items-center justify-center p-12 text-center group">
              <div className="text-7xl lg:text-[100px] font-semibold text-[#F5F5F7] mb-4 tracking-tighter transition-all duration-700 group-hover:scale-110 group-hover:text-primaryAccent shadow-sm">28h</div>
              <h4 className="text-[12px] font-semibold mb-4 uppercase tracking-[0.2em] text-white/50">Continuous Endurance</h4>
              <p className="text-white/40 text-[13px] font-light leading-relaxed max-w-xs">
                Lightning charge: 10 min for 3h.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* 03. 360 Spatial Sound Immersive Area (No Card, Open Space) */}
        <section
          className="py-48 px-4 md:px-12 max-w-[1400px] mx-auto relative overflow-hidden flex flex-col items-center justify-center text-center min-h-[700px]"
          style={{ perspective: '1200px' }}
        >

          {/* Short-Range 3D "Sound Dome" Physics */}
          <div
            className="absolute inset-x-0 bottom-12 top-0 flex items-center justify-center pointer-events-none z-0"
            style={{ transformStyle: 'preserve-3d', transform: 'rotateX(65deg)' }}
          >
            {/* 1. Kinetic Acoustic Waves (Localised) */}
            {[1, 2, 3].map((circle) => (
              <motion.div
                key={`sound-dome-${circle}`}
                initial={{ scale: 0.2, opacity: 0 }}
                animate={{ scale: [0.2, 1.8], opacity: [0, 0.6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: circle * 1.3,
                  ease: "easeOut",
                }}
                className="absolute w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full border-[1.5px] border-white/20"
                style={{
                  boxShadow: "0 0 40px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)",
                }}
              />
            ))}

            {/* 2. Central Resonance Core */}
            <motion.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-[300px] h-[300px] rounded-full bg-primaryAccent/10 blur-[80px]"
              style={{ transform: 'translateZ(-50px)' }}
            ></motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative z-10"
          >
            <div className="overflow-hidden mb-8">
              <motion.h2 variants={revealVariants} className="text-6xl md:text-8xl lg:text-[140px] font-bold tracking-tighter text-[#F5F5F7] leading-[0.8] drop-shadow-2xl">
                360 <br /> Spatial
              </motion.h2>
            </div>
            <motion.p variants={fadeVariants} className="text-[17px] lg:text-3xl font-light text-white/50 tracking-tight max-w-2xl mx-auto leading-tight drop-shadow-xl">
              Total immersion. Tailored acoustic algorithms reveal every footstep and reload in absolute competitive clarity. No boundaries.              </motion.p>
          </motion.div>
        </section>

        {/* 04. Power for the marathon (Liquid Glass Ribbon Redesign) */}
        <section className="pb-48 pt-32 px-4 md:px-12 max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="text-center">
              <motion.h2 variants={revealVariants} className="text-5xl lg:text-8xl font-semibold tracking-tighter text-[#F5F5F7] mb-6">
                The Endurance to Outlast
              </motion.h2>
              <motion.p variants={fadeVariants} className="text-[17px] lg:text-xl font-light text-white/40 tracking-tight">
                Built for the long game. And the one after that.
              </motion.p>
            </div>

            {/* The Liquid Ribbon Component */}
            <motion.div variants={fadeVariants} className="macos-glass p-1 md:p-1 rounded-[40px] max-w-6xl mx-auto backdrop-blur-[60px] overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                {/* Battery Block */}
                <div className="flex-1 p-12 flex flex-col items-center text-center group w-full">
                  <span className="text-7xl lg:text-8xl font-bold text-[#F5F5F7] tracking-tighter mb-4 drop-shadow-2xl group-hover:text-primaryAccent transition-colors">28h</span>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Continuous Focus</h4>
                  <p className="text-white/40 text-[13px] font-light">Outlast the competition. Every time.</p>
                </div>

                {/* Quick Charge Block */}
                <div className="flex-1 p-12 flex flex-col items-center text-center group w-full">
                  <span className="text-5xl lg:text-6xl font-bold text-[#F5F5F7] tracking-tighter mb-4 drop-shadow-2xl">Rapid</span>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Lightning Charge</h4>
                  <p className="text-white/40 text-[13px] font-light">3 hours of play in 10 minutes.</p>
                </div>

                {/* Wireless Block */}
                <div className="flex-1 p-12 flex flex-col items-center text-center group w-full">
                  <span className="text-5xl lg:text-6xl font-bold text-[#F5F5F7] tracking-tighter mb-4 drop-shadow-2xl">Stable</span>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-2">Pro Wireless</h4>
                  <p className="text-white/40 text-[13px] font-light">Zero delays. Pure, uninterrupted flow.</p>
                </div>
              </div>
            </motion.div>

            {/* Minimal CTAs */}
            <motion.div variants={fadeVariants} className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
              <Link href="#" className="macos-button min-w-[220px] text-center">
                Secure Your H5
              </Link>
              <Link href="/specs" className="macos-button-secondary min-w-[220px] text-center">
                Full Specifications
              </Link>
            </motion.div>
          </motion.div>
        </section>

      </div>
    </main>
  );
}

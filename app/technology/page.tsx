"use client";
import { motion } from "framer-motion";

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-[#000000] pt-32 pb-48 selection:bg-primaryAccent selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 24 }}
          className="mb-32 mt-12 max-w-5xl"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-white/60 font-medium tracking-[0.2em] uppercase text-[10px] mb-8">
            Engineering
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-semibold tracking-tighter text-[#F5F5F7] mb-8 leading-[0.9]">
            Technology & <br/>Innovation.
          </h1>
          <p className="text-[17px] md:text-2xl text-white/50 font-light max-w-3xl tracking-tight leading-relaxed">
            The INZONE H5 is more than a headset. It&apos;s a precision instrument refined through years of Sony audio research and professional player collaboration.
          </p>
        </motion.div>

        <div className="mt-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8"
          >
            {/* Bento Grid Item 1: Wide Feature */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 24 } }
              }}
              className="md:col-span-8 macos-glass p-8 md:p-16 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                 <span className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full text-white/50 text-[10px] uppercase tracking-widest font-semibold">
                   Absolute Control over Airflow
                 </span>
                 <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#F5F5F7] leading-tight mb-6 max-w-sm">
                   Symmetric Acoustic Structure
                 </h2>
              </div>
              <p className="text-white/40 text-[15px] md:text-lg font-light leading-relaxed max-w-md">
                Our unique housing design features a high-grade acoustic structure with symmetrically placed drivers. This ensures precision-engineered airflow, revealing subtle details in the most hectic gameplay.
              </p>
            </motion.div>

            {/* Bento Grid Item 2: Tall Feature */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 24 } }
              }}
              className="md:col-span-4 macos-glass p-8 md:p-12 flex flex-col justify-between min-h-[400px] bg-gradient-to-b from-[#1D1D1F]/60 to-black/40"
            >
               <div>
                  <span className="inline-block px-3 py-1 mb-6 bg-white/5 rounded-full text-white/50 text-[10px] uppercase tracking-widest font-semibold">
                     Crystal Clear
                  </span>
                  <h2 className="text-2xl md:text-4xl font-semibold tracking-tighter text-[#F5F5F7] leading-tight mb-6">
                    AI Noise Reduction
                  </h2>
               </div>
               <p className="text-white/40 text-[14px] md:text-base font-light leading-relaxed">
                 The boom microphone rests securely near your mouth and utilizes an AI-based noise reduction engine powered by over 500 million samples of ambient noise to isolate your voice.
               </p>
            </motion.div>

            {/* Bento Grid Item 3: Full Width Feature */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 30 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 24 } }
              }}
              className="md:col-span-12 macos-glass p-8 md:p-20 flex flex-col md:flex-row gap-12 items-center justify-between min-h-[300px] overflow-hidden relative group"
            >
               <div className="absolute inset-0 bg-gradient-to-r from-primaryAccent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
               <div className="relative z-10 md:w-1/2">
                  <span className="inline-block px-3 py-1 mb-6 border border-primaryAccent/20 rounded-full text-primaryAccent/80 text-[10px] uppercase tracking-widest font-semibold">
                     Future of Interaction
                  </span>
                  <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-[#F5F5F7] leading-tight drop-shadow-sm">
                    360 Spatial Sound for Gaming
                  </h2>
               </div>
               <div className="relative z-10 md:w-1/2 flex justify-end">
                  <p className="text-white/40 text-[15px] md:text-xl font-light leading-relaxed max-w-lg">
                    Using advanced AI algorithms and custom Head-Related Transfer Functions, the INZONE H5 creates a rich soundscape tailored perfectly to your physiological profile.
                  </p>
               </div>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="mt-48 pt-24 text-center px-4 max-w-[1400px] border-t border-white/5 mx-auto">
             <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 24 }}
              className="max-w-4xl mx-auto flex flex-col items-center"
             >
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-[#F5F5F7] mb-8">Tested by the best.</h2>
                <p className="text-white/40 text-[15px] md:text-lg font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                   We partner with Fnatic and global esports organizations to ensure the INZONE H5 performs under the most intense conditions in the world.
                </p>
                <button className="macos-button min-w-[200px]">Contact Pro Support</button>
             </motion.div>
        </div>
      </div>
    </main>
  );
}

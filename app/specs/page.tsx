"use client";
import { motion } from "framer-motion";

const specData = [
  {
    category: "Audio",
    specs: [
      { label: "Driver Unit", value: "40mm, dome type (CCAW Voice Coil)" },
      { label: "Frequency Response", value: "5Hz - 20,000Hz (JEITA)" },
      { label: "Effective Range", value: "100Hz - 8,000Hz" },
      { label: "Spatial Sound", value: "360 Spatial Sound for Gaming" },
    ]
  },
  {
    category: "Microphone",
    specs: [
      { label: "Type", value: "Bi-directional, Boom" },
      { label: "Frequency Response", value: "100Hz - 8,000Hz" },
      { label: "Noise Reduction", value: "AI-based processing" },
      { label: "Mute Function", value: "Flip-to-mute" },
    ]
  },
  {
    category: "Wireless",
    specs: [
      { label: "Connection", value: "2.4GHz with USB Transceiver" },
      { label: "Battery Life", value: "Max. 28 hours" },
      { label: "Quick Charge", value: "10 min for 3 hours use" },
      { label: "Cable Type", value: "USB Type-C® (Charging)" },
    ]
  },
  {
    category: "General",
    specs: [
      { label: "Weight", value: "Approx. 260g (without cable)" },
      { label: "Wearing Style", value: "Circumaural (Over-the-ear)" },
      { label: "Ear Pads", value: "Smooth Nylon" },
      { label: "Included", value: "USB Transceiver, Reference Guide" },
    ]
  }
];

export default function SpecsPage() {
  return (
    <main className="min-h-screen bg-[#000000] pt-32 pb-32 px-4 md:px-12 selection:bg-primaryAccent selection:text-white">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 24 }}
          className="mb-24 md:mb-32 mt-12"
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-white/60 font-medium tracking-[0.2em] uppercase text-[10px] mb-8">
            Technical Data
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-[#F5F5F7] mb-8 leading-tight">
            Specifications.
          </h1>
          <p className="text-[17px] md:text-xl text-white/50 font-light max-w-2xl leading-relaxed">
            Every detail engineered for performance. Deep dive into the hardware architecture of INZONE H5.
          </p>
        </motion.div>

        <div className="space-y-12">
          {specData.map((section, idx) => (
            <motion.section 
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100, damping: 20 }}
              className="macos-glass p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
                <h2 className="text-2xl font-semibold tracking-tight text-[#F5F5F7] md:col-span-4">{section.category}</h2>
                <div className="md:col-span-8 space-y-4">
                  {section.specs.map((item) => (
                    <div key={item.label} className="border-b border-white/5 pb-4 flex flex-col sm:flex-row justify-between gap-1 group">
                      <span className="text-white/40 text-[12px] font-semibold uppercase tracking-[0.15em] transition-colors group-hover:text-white/60">{item.label}</span>
                      <span className="text-[15px] font-medium text-[#F5F5F7]/90">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          ))}
        </div>
        
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ type: "spring", stiffness: 100, damping: 24 }}
           className="mt-32 p-12 md:p-20 macos-glass-panel text-center flex flex-col items-center"
        >
            <h3 className="text-3xl font-semibold tracking-tighter text-[#F5F5F7] mb-6">Need more help?</h3>
            <p className="text-white/50 mb-12 max-w-lg mx-auto font-light text-[15px] leading-relaxed">
               Download the full reference guide or contact our technical support team for detailed setup configurations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                 <button className="macos-button min-w-[200px]">Contact Support</button>
                 <button className="macos-button-secondary min-w-[200px]">Download PDF</button>
            </div>
        </motion.div>
      </div>
    </main>
  );
}

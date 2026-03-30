"use client";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const TOTAL_FRAMES = 240;

export default function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Load images (3rd-digit padded JPGs)
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameStr = i.toString().padStart(3, '0');
      img.src = `/headphone_explosion/ezgif-frame-${frameStr}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          setImages(loadedImages);
        }
      };
      loadedImages.push(img);
    }
  }, []);

  // Sync scroll with frame rendering
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    if (images.length === 0) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Use a high-quality rendering context
    ctx.imageSmoothingEnabled = true;

    const drawFrame = (latestIndex: number) => {
      const currentFrame = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.floor(latestIndex)));
      const img = images[currentFrame];
      if (img && img.complete) {
        // Clear and draw image matching aspect ratio (Drawing directly to Physical Buffer)
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Ratio based on PHYSICAL buffer pixels
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        let ratio = Math.max(hRatio, vRatio);

        const renderWidth = img.width * ratio;
        const renderHeight = img.height * ratio;
        const offsetX = (canvas.width - renderWidth) / 2;
        const offsetY = (canvas.height - renderHeight) / 2;

        ctx.drawImage(img, 0, 0, img.width, img.height,
          offsetX, offsetY, renderWidth, renderHeight);
      }
    };

    // Render loop synced to Framer Motion transform
    const unsubscribe = frameIndex.on("change", (latest) => {
      drawFrame(latest);
    });

    // Handle Resize (Set canvas physical buffer size vs logical style size)
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      // physical buffer
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      // logical viewport size
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      // DON'T scale(dpr) because we draw with physical offsetX/Y
      drawFrame(frameIndex.get());
    };

    handleResize(); // initial draw sync

    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
    };
  }, [images, frameIndex]);

  // Framer Motion constraints for text blocks based on scroll progress:
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.25], [1, 1, 0, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Subtle background hints
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.05, 0.02, 0.05]);

  return (
    <div ref={containerRef} className="relative h-[2000vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* Immediate "Hero Aura" (Hyper-Visible Sonic Pulse) */}
        <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
          {/* Ambient underlying center glow (Apple Blue bleed) */}
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[800px] h-[800px] rounded-full bg-primaryAccent/10 blur-[120px]"
          ></motion.div>

          {/* Concertic Expanding Waves (Triggered Automatically) */}
          {[1, 2, 3, 4].map((circle) => (
            <motion.div
              key={`hero-ripple-${circle}`}
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: [0.2, 3.5], opacity: [0, 0.5, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: circle * 1.75,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute w-[400px] h-[400px] rounded-full border border-white/20"
              style={{
                boxShadow: "0 0 30px rgba(255, 255, 255, 0.05), inset 0 0 30px rgba(255, 255, 255, 0.05)",
                borderColor: circle % 2 === 0 ? "rgba(255,255,255,0.3)" : "rgba(0,113,227,0.3)" // Chromatic pulse
              }}
            />
          ))}
        </div>

        {/* Full-screen Edge to Edge Canvas object-cover (DPR Aware) */}
        <canvas ref={canvasRef} className="block w-full h-full z-10" />

        {/* Text Layers */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="absolute inset-0 flex flex-col items-center justify-center mt-32 md:mt-40"
          >
            <div className="text-center px-6 max-w-5xl mx-auto flex flex-col items-center justify-center">
              <span className="mb-4 text-[#F5F5F7]/40 text-[10px] font-bold uppercase tracking-[0.4em]">
                Wireless Gaming Headset
              </span>
              <h1 className="text-6xl sm:text-8xl lg:text-[160px] font-bold tracking-tighter text-[#F5F5F7] leading-none">
                INZONE H5
              </h1>
            </div>
          </motion.div>
        </div>

        {/* SEAMLESS BOTTOM FADE to transition to section content */}
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent z-30 pointer-events-none" />
      </div>
    </div>
  );
}

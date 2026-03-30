"use client";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Overview", href: "/" },
  { name: "Technology", href: "/technology" },
  { name: "Specs", href: "/specs" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <>
      {/* Floating macOS Menu Bar */}
      <motion.nav
        initial={false}
        animate={{
          width: isScrolled ? "min(max-content, 90%)" : "80%",
          paddingTop: isScrolled ? "8px" : "16px",
          paddingBottom: isScrolled ? "8px" : "16px",
          paddingLeft: isScrolled ? "24px" : "48px",
          paddingRight: isScrolled ? "24px" : "48px",
          backgroundColor: isScrolled ? "rgba(29, 29, 31, 0.7)" : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(19px)" : "blur(0px)",
          borderColor: isScrolled ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 255, 255, 0)",
          borderRadius: "9999px"
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30
        }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] border flex items-center justify-between shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      >
        <Link
          href="/"
          className="text-[#F5F5F7] text-[10px] font-semibold tracking-[0.2em] opacity-90 hover:opacity-100 transition-opacity uppercase z-50 flex items-center gap-2"
        >
          {/* Subtle minimal dot instead of pure text for logo */}

          INZONE H5
        </Link>

        {/* Desktop Links (Dock Style) */}
        <motion.div
          animate={{
            marginLeft: isScrolled ? "48px" : "0px",
            marginRight: isScrolled ? "32px" : "0px",
            flex: isScrolled ? "unset" : "1"
          }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="hidden md:flex items-center justify-center space-x-2"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative group px-4 py-1.5"
              >
                <span className={`relative z-10 text-[10px] font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${isActive ? "text-white" : "text-white/50 group-hover:text-white/90"
                  }`}>
                  {link.name}
                </span>

                {/* Active Indicator (macOS active state) */}
                {isActive && (
                  <motion.div
                    layoutId="macOSNavPill"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                  />
                )}
                {/* Hover Background */}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 rounded-full transition-colors duration-300" />
                )}
              </Link>
            );
          })}
        </motion.div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className={`hidden md:inline-flex px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.1em] font-medium transition-all duration-500 ${isScrolled
              ? "bg-[#F5F5F7] text-black hover:scale-105 active:scale-95 shadow-[0_4px_14px_rgba(255,255,255,0.1)]"
              : "border border-white/20 text-white hover:bg-white hover:text-black"
              }`}
          >
            Direct Order
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 p-2 text-white/80 transition-colors"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-full h-[1.5px] bg-current transition-transform origin-left rounded-full"
              ></motion.span>
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-[1.5px] bg-current rounded-full"
              ></motion.span>
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-full h-[1.5px] bg-current transition-transform origin-left rounded-full"
              ></motion.span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay (macOS blur) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(40px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#1D1D1F]/80 z-[90] flex flex-col items-center justify-center space-y-10 p-12"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-medium tracking-tight hover:text-white/60 transition-colors text-[#F5F5F7]"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="macos-button w-full text-center mt-8"
            >
              Direct Order
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

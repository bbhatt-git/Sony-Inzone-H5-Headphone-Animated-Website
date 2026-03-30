"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-24 px-4 md:px-12 relative overflow-hidden border-t border-white/[0.03]">
      <div className="max-w-[1400px] mx-auto">
        <div className="macos-glass p-12 md:p-16 mb-8 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
          <div className="md:col-span-6 space-y-8">
            <div className="text-[14px] font-semibold tracking-[0.2em] uppercase text-[#F5F5F7]">
              Sony INZONE H5
            </div>
            <p className="text-white/40 text-[15px] font-light max-w-sm leading-relaxed">
              Precision audio engineering for the competitive edge. Developed in collaboration with Fnatic to define the future of spatial interaction.
            </p>
            <div className="flex space-x-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
              {["Twitter", "Instagram", "YouTube"].map((s) => (
                <a key={s} href="#" className="hover:text-white transition-colors uppercase">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Platform</h4>
            <ul className="space-y-4 text-[13px] text-white/40 font-light">
              <li><Link href="/" className="hover:text-[#F5F5F7] transition-colors">Overview</Link></li>
              <li><Link href="/technology" className="hover:text-[#F5F5F7] transition-colors">Technology</Link></li>
              <li><Link href="/specs" className="hover:text-[#F5F5F7] transition-colors">Specifications</Link></li>
              <li><a href="#" className="hover:text-[#F5F5F7] transition-colors">Software Hub</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Support</h4>
            <ul className="space-y-4 text-[13px] text-white/40 font-light">
              <li><a href="#" className="hover:text-[#F5F5F7] transition-colors">Product Help</a></li>
              <li><a href="#" className="hover:text-[#F5F5F7] transition-colors">Quick Setup</a></li>
              <li><a href="#" className="hover:text-[#F5F5F7] transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-[#F5F5F7] transition-colors">Retail Locations</a></li>
            </ul>
          </div>
        </div>

        <div className="px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[9px] uppercase tracking-[0.25em] text-white/20 font-medium font-mono">
          <div>© 2026 Sony Interactive. All Audio Rights Reserved.</div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Global</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

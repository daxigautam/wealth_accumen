"use client";

import Link from "next/link";
import Image from "next/image";
import { PieChart, Umbrella, ShieldCheck, Landmark, Briefcase, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    { 
      title: "Equity", 
      href: "/services/equity", 
      icon: TrendingUp,
      image: "/assets/images/services/equity.jpeg" 
    },
    { 
      title: "Mutual Funds", 
      href: "/services/mutual-funds", 
      icon: PieChart,
      image: "/assets/images/services/mutual-funds.jpeg" 
    },
    { 
      title: "Insurance", 
      href: "/services/insurance", 
      icon: ShieldCheck,
      image: "/assets/images/services/insurance-new.png" 
    },
    { 
      title: "ETFs (Exchange Traded Funds)", 
      href: "/services/etfs", 
      icon: Landmark,
      image: "/assets/images/services/etf.jpeg" 
    },
    { 
      title: "Bonds", 
      href: "/services/bonds", 
      icon: Briefcase,
      image: "/assets/images/services/bonds.png" 
    },
    { 
      title: "Fixed Deposit", 
      href: "/services/fixed-deposit", 
      icon: Umbrella,
      image: "/assets/images/services/service_fixed_income_premium.png" 
    },
  ];

  return (
    <>
      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-36 pb-20 sm:pt-40 sm:pb-24 overflow-hidden flex items-center">
        <Image
          src="/assets/images/hero-banners/services-hero.png"
          alt="Our Services"
          fill
          className="object-cover object-[75%_center] md:object-[80%_center]"
          priority
        />
        
        {/* Text Overlay */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-12 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl ml-4 lg:ml-12 xl:ml-16"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#0B245B] font-light tracking-[0.2em] text-xs uppercase">Wealth Acumen</span>
              <span className="h-[1px] w-6 bg-[#0B245B]"></span>
            </div>

            <h1 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-light text-[#0B245B] mb-4 drop-shadow-md">
              Our Wealth
              <span className="text-[#0B245B]/90 text-2xl sm:text-3xl md:text-4xl lg:text-[48px] mt-2 block font-extralight">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-[var(--theme-text-muted)] max-w-lg hidden sm:block leading-relaxed">
              Explore our comprehensive range of bespoke financial solutions designed to help you achieve lasting wealth and freedom.
            </p>
          </motion.div>
        </div>
      </section>
      <div className="pb-24 bg-[var(--background)] transition-colors duration-500 relative overflow-hidden">
        {/* Background glow for the grid section */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--foreground)]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link 
                key={idx} 
                href={service.href}
                className="group block relative w-full h-full rounded-[2rem] overflow-hidden bg-[var(--secondary-bg)] border border-[var(--glass-border)] hover:border-[#D4AF37]/50 transition-all duration-500 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] flex flex-col"
              >
                {/* Premium Subtle Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                
                {/* Yellow Pop Effect on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-bl-[100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20" />
                
                {/* Premium Background Watermark Icon */}
                <div className="absolute -bottom-8 -right-8 text-[#D4AF37] opacity-[0.04] group-hover:opacity-[0.08] transition-all duration-700 pointer-events-none transform -rotate-12 group-hover:rotate-0 group-hover:scale-110">
                  <service.icon strokeWidth={0.5} className="w-56 h-56 sm:w-72 sm:h-72" />
                </div>
                
                {/* Image Section in Start Half */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden border-b border-[var(--glass-border)] z-10 bg-white flex items-center justify-center">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="relative z-10 p-8 flex-grow flex flex-col">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--background)] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 mb-6 shadow-inner absolute -top-7 right-8 z-20">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-light text-[var(--foreground)] transition-colors duration-500 mb-3">{service.title}</h3>
                  <p className="text-[var(--theme-text-muted)] transition-colors duration-500 text-sm sm:text-base leading-relaxed font-light">
                    Expert guidance and tailored strategies for your {service.title.toLowerCase()} needs. Click to explore more.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

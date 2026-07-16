import Link from "next/link";
import { brand } from "@/config/brand";
import { PieChart, Umbrella, ShieldCheck, Landmark, Briefcase, TrendingUp } from "lucide-react";
import { WealthOrbitHero } from "@/components/ui/WealthOrbitHero";

export default function ServicesPage() {
  const services = [
    { title: "Equity", href: "/services/equity", icon: TrendingUp },
    { title: "Mutual Funds", href: "/services/mutual-funds", icon: PieChart },
    { title: "Insurance", href: "/services/insurance", icon: ShieldCheck },
    { title: "ETFs", href: "/services/etfs", icon: Landmark },
    { title: "Bonds", href: "/services/bonds", icon: Briefcase },
    { title: "Fixed Deposit", href: "/services/fixed-deposit", icon: Umbrella },
  ];

  return (
    <>
      <WealthOrbitHero />
      <div className="pb-24 bg-[var(--background)] transition-colors duration-500 relative overflow-hidden">
        {/* Background glow for the grid section */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--foreground)]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {services.map((service, idx) => (
              <Link 
                key={idx} 
                href={service.href}
                className="group block relative w-full h-full rounded-[2rem] overflow-hidden bg-[var(--secondary-bg)] border border-[var(--glass-border)] hover:border-[#D4AF37]/40 transition-all duration-500 p-8 sm:p-10 backdrop-blur-xl shadow-sm hover:shadow-[0_15px_40px_rgba(212,175,55,0.12)] hover:-translate-y-1"
              >
                {/* Premium Subtle Texture */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
                
                {/* Yellow Pop Effect on Hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-bl-[100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Premium Background Watermark Icon */}
                <div className="absolute -bottom-8 -right-8 text-[#D4AF37] opacity-[0.04] group-hover:opacity-[0.08] transition-all duration-700 pointer-events-none transform -rotate-12 group-hover:rotate-0 group-hover:scale-110">
                  <service.icon strokeWidth={0.5} className="w-56 h-56 sm:w-72 sm:h-72" />
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 mb-8 shadow-inner">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-[family-name:var(--font-playfair)] text-3xl font-light text-[var(--foreground)] mb-3">{service.title}</h3>
                  <p className="text-[var(--theme-text-muted)] text-base sm:text-lg leading-relaxed font-light">
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

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
      <div className="pb-24 bg-[#040F2D] relative overflow-hidden">
        {/* Background glow for the grid section */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Link 
                key={idx} 
                href={service.href}
                className="group block relative w-full h-full rounded-3xl overflow-hidden bg-[#0B1736]/60 border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 p-8 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#040F2D] border border-white/10 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-500 mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-sans text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/70 text-sm">
                  Expert guidance and tailored strategies for your {service.title.toLowerCase()} needs. Click to explore more.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

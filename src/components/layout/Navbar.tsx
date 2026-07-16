"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { brand } from "@/config/brand";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Equity", href: "/services/equity" },
      { label: "Mutual Funds", href: "/services/mutual-funds" },
      { label: "Insurance", href: "/services/insurance" },
      { label: "ETFs", href: "/services/etfs" },
      { label: "Bonds", href: "/services/bonds" },
      { label: "Fixed Deposit", href: "/services/fixed-deposit" },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Proprietor", href: "/about#proprietor" },
      { label: "FAQs", href: "/faq" },
      { label: "DIY (Do It Yourself)", href: "/diy" },
    ],
  },
  {
    label: "Downloads",
    href: "/downloads",
    children: [
      { label: "KYC/FATCA Forms", href: "/downloads" },
      { label: "MF Factsheet", href: brand.amfiFactsheet },
      { label: "Mutual Fund Taxation", href: brand.amfiTaxation },
    ],
  },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const loginLinks = [
  { label: "App Login", href: brand.angelOneAppLogin },
  { label: "Demat-Free MF Login", href: brand.dematFreeMFLogin },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showAnnouncement, setShowAnnouncement] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem("wealth_acumen_announcement_dismissed");
    if (!dismissed) {
      setTimeout(() => {
        setShowAnnouncement(true);
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const dismissAnnouncement = () => {
    setShowAnnouncement(false);
    localStorage.setItem("wealth_acumen_announcement_dismissed", "true");
  };

  const isDarkMode = mounted && resolvedTheme === "dark";

  return (
    <>
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-[55] h-10 bg-[#101E42] text-white flex items-center justify-between px-4 text-xs sm:text-sm font-sans border-b border-[#D4AF37]/20"
          >
            <div className="flex-1 flex items-center justify-center gap-2">
              <span className="text-[#D4AF37] text-base leading-none select-none">★</span>
              <span className="text-[#E6EEFA] font-medium hidden md:inline">
                LIMITED OFFER: July Portfolio Audit Cycle – Only 4 complimentary reviews left this week.
              </span>
              <span className="text-[#E6EEFA] font-medium inline md:hidden text-[10px] sm:text-[11px] truncate max-w-[45vw]">
                Portfolio Audit: 4 free slots left
              </span>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] hover:bg-[#C59B27] text-[#040F2D] font-light py-1 px-3.5 rounded-full text-xs transition-colors shrink-0 whitespace-nowrap ml-1 shadow-sm"
              >
                Claim Free Slot &rarr;
              </a>
            </div>
            <button
              onClick={dismissAnnouncement}
              className="p-1 hover:bg-white/10 rounded-full transition-colors shrink-0 ml-2"
              aria-label="Dismiss"
            >
              <svg className="w-4 h-4 text-[#A3B5D9] hover:text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          showAnnouncement ? "top-10" : "top-0"
        } ${
          scrolled
            ? "glass-nav shadow-lg"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-none mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Mobile Menu Button (Left on Mobile) */}
            <button
              className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 bg-[var(--theme-accent)] ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 bg-[var(--theme-accent)] ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 w-6 rounded-full transition-all duration-300 bg-[var(--theme-accent)] ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
            
            {/* Left Side: Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 lg:mr-8 ml-4 lg:ml-0 z-10">
              <div className="relative w-[140px] h-[60px] shrink-0">
                <div className="absolute top-0 left-0 w-full h-full flex items-center">
                  <Image
                    src={isDarkMode ? "/assets/logo/logo-white.png" : "/assets/logo/logo.png"}
                    alt="Wealth Acumen"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </div>
            </Link>

            {/* Center: Desktop Nav Links */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center backdrop-blur-md border shadow-sm rounded-full px-3 lg:px-5 h-[52px] transition-all duration-500 bg-white/30 dark:bg-black/30 border-white/40 dark:border-white/10 gap-1 lg:gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
                return (
                  <div
                    key={link.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() =>
                      link.children && setActiveDropdown(link.label)
                    }
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={`px-3 lg:px-4 py-2 text-[15px] lg:text-[16px] font-light tracking-wide transition-colors flex items-center gap-1.5 relative ${
                        isActive 
                          ? "text-[#D4AF37]" 
                          : "text-[var(--foreground)] hover:text-[#D4AF37]"
                      }`}
                    >
                      {link.label}
                      {link.children && (
                        <svg
                          className={`w-3 h-3 transition-transform ${
                            activeDropdown === link.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#D4AF37] rounded-full" />
                      )}
                    </Link>

                    <AnimatePresence>
                      {link.children && activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.96 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-1 w-56 py-2 rounded-xl bg-[var(--background)] border border-[var(--glass-border)] shadow-lg"
                        >
                          {link.children.map((child) => {
                            const isExternal = child.href.startsWith("http");
                            const Tag = isExternal ? "a" : Link;
                            return (
                              <Tag
                                key={child.label}
                                href={child.href}
                                {...(isExternal
                                  ? { target: "_blank", rel: "noopener noreferrer" }
                                  : {})}
                                className="block px-4 py-2.5 text-sm font-medium text-[var(--theme-text-muted)] hover:text-[#D4AF37] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {child.label}
                              </Tag>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right Side: empty spacer for balance */}
              <div className="hidden lg:flex items-center gap-3 z-10" />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[var(--background)] border-l border-[var(--glass-border)] overflow-y-auto"
            >
              <div className="p-6 pt-20 space-y-2 relative">
                
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-base font-medium text-[var(--foreground)] hover:text-[#D4AF37] hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
                      onClick={() => !link.children && setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 border-l border-[var(--glass-border)] pl-4 space-y-1 mt-1 mb-2">
                        {link.children.map((child) => {
                          const isExternal = child.href.startsWith("http");
                          const Tag = isExternal ? "a" : Link;
                          return (
                            <Tag
                              key={child.label}
                              href={child.href}
                              {...(isExternal
                                ? {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  }
                                : {})}
                              className="block px-3 py-2 text-sm text-[var(--theme-text-muted)] hover:text-[#D4AF37] hover:bg-black/5 dark:hover:bg-white/5 rounded-lg transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Tag>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4">
                  <a
                    href={brand.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center block text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

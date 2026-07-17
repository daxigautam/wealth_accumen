"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { blogPosts } from "@/config/content";


/* ─── Animation Helper ─── */
function FadeInSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function BlogPage() {
  return (
    <div className="bg-[var(--background)] text-[var(--foreground)] min-h-screen transition-colors duration-500">
      {/* ═══ HERO BANNER ═══ */}
      <section className="relative pt-44 pb-28 sm:pt-52 sm:pb-36 overflow-hidden flex items-center">
        <Image
          src="/assets/images/hero-banners/our-blogs-hero-banner.png"
          alt="Our Blogs"
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
            <h1 className="font-[family-name:var(--font-outfit)] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-light text-[#0B245B] mb-4 drop-shadow-md">
              Our <span className="text-[#D4AF37]">Blogs</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#0B245B]/80 max-w-lg hidden sm:block leading-relaxed">
              Insights, updates, and expert advice to guide your financial journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ BLOG POSTS GRID ═══ */}
      <section className="pt-8 pb-24 px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="max-w-none mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <FadeInSection key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block glass glass-hover rounded-2xl overflow-hidden h-full group"
                >
                  <div className="h-48 relative overflow-hidden">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-amber-500/10 flex items-center justify-center">
                        <svg className="w-12 h-12 text-[#D4AF37]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6V7.5Z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17]/60 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-[var(--theme-text-muted)]">{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-[var(--theme-text-muted)] opacity-50" />
                      <span className="text-xs text-[var(--theme-text-muted)]">{post.author}</span>
                    </div>
                    <h2 className="font-[family-name:var(--font-outfit)] text-lg font-light text-[var(--foreground)] mb-3 group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-[var(--theme-text-muted)] leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-[#0B245B] group-hover:text-[#D4AF37] transition-colors mt-auto pt-2">
                      Read more
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

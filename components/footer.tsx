"use client";
import Link from "next/link";
import type React from "react";

import {
  Building2,
  Facebook,
  Twitter,
  Youtube,
  Paintbrush as Pinterest,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useReveal } from "./hook/use-reveal";

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>({
    threshold: 0.18,
    once: true,
  });
  return (
    <div
      ref={ref}
      className={cn(
        "transform-gpu transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function FooterConstrc() {
  return (
    <footer className="relative mt-16 mb-5">
      <div
        className={cn(
          "relative mx-2 rounded-[2rem] overflow-hidden",
          "bg-foreground text-primary-foreground"
        )}
        style={{
          backgroundImage: "url(/building-2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Site footer"
      >
        {/* Dark overlay for readability using token color */}
        <div className="absolute inset-0 bg-foreground/80" aria-hidden="true" />

        <div className="relative z-10">
          {/* Top content area */}
          <div className="mx-auto w-full max-w-6xl px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
              {/* Brand + blurb + socials */}
              <Reveal delay={0}>
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-chart-5">
                      <Building2 className="h-5 w-5 text-primary-foreground" />
                    </span>
                    <span className="text-2xl font-semibold tracking-tight">
                      Constrc
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-muted-foreground">
                    our clients, our employees, and our community through our
                    commitment to leadership, excellence in craft, and attention
                    to detail.
                  </p>

                  <div className="flex gap-4">
                    {[
                      { Icon: Facebook, href: "#" },
                      { Icon: Twitter, href: "#" },
                      { Icon: Youtube, href: "#" },
                      { Icon: Pinterest, href: "#" },
                    ].map(({ Icon, href }, i) => (
                      <Link
                        key={i}
                        href={href}
                        className="group inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/40 transition hover:translate-y-[-1px] hover:ring-white"
                        aria-label={`Visit ${Icon.name}`}
                      >
                        <Icon className="h-4 w-4 text-primary-foreground/90 transition group-hover:text-primary-foreground" />
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Quick Links */}
              <Reveal delay={120}>
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold">
                    <span>Quick Links</span>
                    <span className="mt-2 block h-[2px] w-14 bg-primary-foreground/70" />
                  </h3>
                  <ul className="grid gap-3 text-sm text-muted-foreground">
                    {[
                      "Home",
                      "About Us",
                      "Our Team",
                      "Testimonials",
                      "Our Blog",
                      "Contact Us",
                    ].map((label, idx) => (
                      <li
                        key={label}
                        className="flex items-center gap-2 transform-gpu transition-all duration-500"
                        style={{ transitionDelay: `${160 + idx * 40}ms` }}
                      >
                        <span className="inline-block h-2 w-2 rounded-full border border-white/50" />
                        <Link
                          href="#"
                          className="hover:text-primary-foreground"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Our Services */}
              <Reveal delay={180}>
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold">
                    <span>Our Services</span>
                    <span className="mt-2 block h-[2px] w-14 bg-primary-foreground/70" />
                  </h3>
                  <ul className="grid gap-3 text-sm text-muted-foreground">
                    {[
                      "Building Construction",
                      "Commercial Renovate",
                      "Automation & Robotics",
                      "Residential Construction",
                      "Architecture Design",
                      "Building Construction",
                    ].map((label, idx) => (
                      <li
                        key={label}
                        className="flex items-center gap-2 transform-gpu transition-all duration-500"
                        style={{ transitionDelay: `${200 + idx * 40}ms` }}
                      >
                        <span className="inline-block h-2 w-2 rounded-full border border-white/50" />
                        <Link
                          href="#"
                          className="hover:text-primary-foreground"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Newsletter */}
              <Reveal delay={240}>
                <div className="space-y-5">
                  <h3 className="text-xl font-semibold">
                    <span>Newsletter</span>
                    <span className="mt-2 block h-[2px] w-14 bg-primary-foreground/70" />
                  </h3>
                  <p className="text-sm leading-6 text-muted-foreground">
                    our clients, our employees, and our community through our
                    commitment.
                  </p>

                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <label htmlFor="newsletter-email" className="sr-only">
                      Your email address
                    </label>
                    <div className="flex items-center gap-3 rounded-full bg-background px-4 py-2">
                      <input
                        id="newsletter-email"
                        type="email"
                        required
                        placeholder="Your email address"
                        className={cn(
                          "w-full bg-transparent text-sm outline-none",
                          "placeholder:text-muted-foreground/70"
                        )}
                      />
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        type="submit"
                        className={cn(
                          "relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold",
                          "bg-chart-5 text-primary-foreground shadow-[0_6px_0_rgba(0,0,0,0.2)]",
                          "transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_0_rgba(0,0,0,0.18)]",
                          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chart-5",
                          "active:translate-y-0"
                        )}
                      >
                        SUBSCRIBE
                      </button>

                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-foreground ring-2 ring-chart-5 transition-transform group-hover:translate-x-0.5">
                        <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
                      </span>
                    </div>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Bottom pill bar */}
          <Reveal delay={220}>
            <div className="relative z-10 mx-auto mb-6 w-full max-w-6xl px-6">
              <div className="flex flex-col items-center justify-between gap-4 rounded-full bg-primary/10 px-6 py-4 text-sm text-muted-foreground md:flex-row">
                <p className="text-center">
                  Copyrights 2025. All Rights are Reserved by{" "}
                  <Link href="#" className="text-chart-5 hover:underline">
                    Expert Themes
                  </Link>
                </p>
                <div className="flex items-center gap-8">
                  <Link href="#" className="hover:text-primary-foreground">
                    Support Center
                  </Link>
                  <Link href="#" className="hover:text-primary-foreground">
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}

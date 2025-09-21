"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Search,
  Ellipsis,
  ArrowUpRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menus = [
    { title: "Home", links: [{ href: "/", label: "Main Home" }, { href: "/home2", label: "Home 2" }] },
    { title: "About", links: [{ href: "/about/company", label: "Company" }, { href: "/about/team", label: "Team" }] },
    { title: "Services", links: [{ href: "/services/web", label: "Web Development" }, { href: "/services/mobile", label: "Mobile Apps" }] },
    { title: "Projects", links: [{ href: "/projects/ongoing", label: "Ongoing" }, { href: "/projects/completed", label: "Completed" }] },
    { title: "Blog", links: [{ href: "/blog/articles", label: "Articles" }, { href: "/blog/news", label: "News" }] },
    { title: "Shop", links: [{ href: "/shop/tools", label: "Tools" }, { href: "/shop/materials", label: "Materials" }] },
    { title: "Contact", links: [{ href: "/contact", label: "Contact Form" }, { href: "/contact/map", label: "Our Location" }] },
  ];

  return (
    <div className="w-full flex justify-center mt-6 relative">
      <nav className="flex items-center justify-between bg-white shadow-md border rounded-full px-6 py-3 w-[90%] max-w-6xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/construc.png" alt="Logo" width={150} height={150} />
        </div>

        {/* Desktop Menu (only on lg screens) */}
        <ul className="hidden lg:flex gap-6 text-gray-700 font-medium">
          {menus.map((menu, i) => (
            <li key={i} className="relative group cursor-pointer">
              <div className="flex items-center gap-1">
                <span>{menu.title}</span>
                <ChevronDown
                  size={16}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </div>

              {/* Dropdown */}
              <ul className="absolute left-0 top-full mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md w-44 z-50">
                {menu.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      href={link.href}
                      className="block px-4 py-2 hover:bg-gray-100 rounded-md"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Right Icons (only on lg screens) */}
        <div className="hidden lg:flex items-center gap-3">
          <button className="p-3 rounded-full bg-black text-white">
            <Search size={18} />
          </button>
          <button className="p-3 rounded-full bg-black text-white">
            <Ellipsis size={18} />
          </button>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center py-7 px-4">
            GET A QUOTE
            <span className="bg-black rounded-full p-3 ml-2">
              <ArrowUpRight size={14} className="text-white" />
            </span>
          </Button>
        </div>

        {/* Hamburger (on <lg) */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 w-[90%] max-w-6xl bg-white shadow-lg border rounded-2xl px-6 py-4 lg:hidden z-50"
          >
            <ul className="flex flex-col gap-4 text-gray-700 font-medium">
              {menus.map((menu, i) => (
                <li key={i}>
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === menu.title ? null : menu.title
                      )
                    }
                  >
                    <span>{menu.title}</span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${
                        openDropdown === menu.title ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Dropdown inside Mobile */}
                  <AnimatePresence>
                    {openDropdown === menu.title && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2 flex flex-col gap-2 pl-4 overflow-hidden"
                      >
                        {menu.links.map((link, j) => (
                          <li key={j}>
                            <Link
                              href={link.href}
                              className="block px-3 py-2 hover:bg-gray-100 rounded-md"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>

            {/* Icons inside Mobile */}
            <div className="flex items-center gap-3 mt-6">
              <button className="p-3 rounded-full bg-black text-white">
                <Search size={18} />
              </button>
              <button className="p-3 rounded-full bg-black text-white">
                <Ellipsis size={18} />
              </button>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center py-6 px-4">
                GET A QUOTE
                <span className="bg-black rounded-full p-3 ml-2">
                  <ArrowUpRight size={14} className="text-white" />
                </span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

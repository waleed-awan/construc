"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: "building-construction",
    title: "Building Construction",
    description:
      "Our Solutions Are Designed To Meet The Needs Of Modern Enterprises, Ensuring They Thrive In...",
    image: "/service.jpg",
  },
  {
    id: "commercial-renovate",
    title: "Commercial Renovate",
    description:
      "Transform your commercial spaces with our expert renovation services, delivering modern and functional designs...",
    image: "/service-9-1.jpg",
  },
  {
    id: "automation-robotics",
    title: "Automation & Robotics",
    description:
      "Cutting-edge automation and robotics solutions for construction efficiency and precision in every project...",
    image: "/service-8-1.jpg",
  },
  {
    id: "residential-construction",
    title: "Residential Construction",
    description:
      "Building dream homes with quality craftsmanship and attention to detail for comfortable living spaces...",
    image: "/service-7-1.jpg",
  },
  {
    id: "architecture-design",
    title: "Architecture Design",
    description:
      "Innovative architectural designs that blend aesthetics with functionality for stunning structures...",
    image: "/service-6-1.jpg",
  },
  {
    id: "building-construction-2",
    title: "Building Construction",
    description:
      "Comprehensive building construction services from foundation to finishing with expert project management...",
    image: "/service-5-1.jpg",
  },
];

export default function ConstructionServices() {
  const [activeService, setActiveService] = useState<string>(services[0].id);
  const currentService =
    services.find((s) => s.id === activeService) || services[0];

  return (
    <section className="relative min-h-screen text-white py-10 px-4 sm:px-6 lg:px-8">
      {/* 🔥 Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/building-3.jpg" // apni background image ka path daalo
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/70" /> */}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Side - Services List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-[1px] bg-orange-500" />
                <span className="text-orange-500 text-sm font-semibold tracking-wider">
                  AWESOME SERVICES
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
                Construction Service
                <br />
                To Our Clients
              </h1>
            </div>

            {/* Services Buttons */}
            <motion.div
              className="space-y-3"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              {services.map((service) => (
                <motion.button
                  key={service.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  onMouseEnter={() => setActiveService(service.id)}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full group relative overflow-hidden rounded-full transition-all duration-300 ease-out hover:scale-[1.01] hover:-translate-y-0.5 active:scale-[0.98] ${
                    activeService === service.id
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/40"
                      : "bg-zinc-900/80 text-white hover:bg-zinc-800/90"
                  }`}
                >
                  <div className="flex items-center cursor-pointer justify-between px-6 py-3">
                    <span className="text-base sm:text-lg font-semibold text-left">
                      {service.title}
                    </span>
                    <div
                      className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full transition-all duration-300 ${
                        activeService === service.id
                          ? "bg-white text-orange-500"
                          : "bg-black/80 text-white group-hover:bg-white group-hover:text-black"
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image + Description */}
          <motion.div
            className="lg:sticky lg:top-6 space-y-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[450px] rounded-xl overflow-hidden bg-zinc-900/80">
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.image}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentService.image}
                      alt={currentService.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Discover More Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  className="absolute bottom-4 right-4 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full flex items-center gap-2 text-sm sm:text-base font-medium shadow-md shadow-orange-500/40"
                >
                  DISCOVER MORE
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Service Info */}
            <motion.div
              className="space-y-2 px-1"
              key={currentService.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl sm:text-2xl font-bold">
                {currentService.title}
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {currentService.description}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}

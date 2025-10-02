"use client";

import React from "react";
import Image from "next/image";

const clients = [
  { id: 1, src: "/1.png", alt: "Wutama Land" },
  { id: 2, src: "/2.png", alt: "House Logo" },
  { id: 3, src: "/3.png", alt: "Construction Line" },
  { id: 4, src: "/4.png", alt: "Worker Logo" },
  { id: 5, src: "/5.png", alt: "Gormley Construction" },
];

export default function ClientSlider() {
  return (
    <div className="w-full bg-white py-10 flex flex-col items-center">
      {/* Slider Container */}
      <div className="overflow-hidden relative w-full max-w-7xl">
        <div className="flex animate-scroll whitespace-nowrap">
          {/* Infinite loop ke liye multiple copies */}
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div key={index} className="mx-6 sm:mx-10 inline-block">
              <div className="relative w-[clamp(100px,12vw,180px)] h-[clamp(60px,8vw,120px)]">
                <Image
                  src={client.src}
                  alt={client.alt}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Caption under slider */}
      <div className="mt-6 flex justify-center">
        <div className="px-6 py-2 rounded-full border border-gray-400 text-gray-600 text-sm text-center">
          we’re proud to partner with best-in-class clients
        </div>
      </div>
    </div>
  );
}

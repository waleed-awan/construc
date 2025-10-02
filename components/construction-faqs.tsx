"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import ClientSlider from "./swiper";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What kind of warranty or guarantee does Elevate offer?",
    answer:
      "Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facil sis. Lectus arcu odio erat congue sociosqu ultricies.",
  },
  {
    question: "Why should I choose elevate for my construction project?",
    answer:
      "Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facil sis. Lectus arcu odio erat congue sociosqu ultricies.",
  },
  {
    question: "What is the process for working with Elevate?",
    answer:
      "Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facil sis. Lectus arcu odio erat congue sociosqu ultricies.",
  },
  {
    question: "What types of projects does Elevate specialize in?",
    answer:
      "Fusce lacinia nulla consequat porta et viverra velit etiam, varius per condimentum lacus ultricies a placerat venatis semper donec id accumsan augue eleifend facil sis. Lectus arcu odio erat congue sociosqu ultricies.",
  },
];

export default function ConstructionFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(2);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#ffffff] py-12 px-4 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
          {/* Left side - Construction Image */}
          <motion.div
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <div className="relative w-full max-w-[900px] aspect-[3/3]">
              <Image
                src="/faq.png"
                alt="Construction site with cranes and building"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right side - FAQ Content */}
          <div className="order-1 lg:order-2">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="h-px w-2 bg-orange-500"></span>
                  <span className="h-px w-2 bg-orange-500"></span>
                  <span className="h-px w-2 bg-orange-500"></span>
                  <span className="h-px w-2 bg-orange-500"></span>
                  <span className="h-px w-2 bg-orange-500"></span>
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-orange-500 sm:text-base">
                  Construction Company
                </span>
              </div>
              <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Regular Question For
                <br />
                Customer
              </h2>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center cursor-pointer justify-between gap-4 p-5 text-left transition-colors sm:p-6 lg:p-7"
                  >
                    <span className="text-base font-semibold text-gray-900 sm:text-lg lg:text-xl">
                      {item.question}
                    </span>
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-12 sm:w-12 ${
                        openIndex === index
                          ? "bg-gray-900 rotate-180"
                          : "bg-orange-500 hover:bg-orange-600"
                      }`}
                    >
                      {openIndex === index ? (
                        <ChevronDown className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      openIndex === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7">
                        <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ClientSlider/>
    </section>
  );
}

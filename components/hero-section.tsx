"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import Navbar from "./navbar"

const slides = [
  {
    id: 1,
    title: "Your Trusted Construction Partner",
    subtitle: "Unleash Digital Potential",
    description:
      "We Developed Landmark Real Estate Projects That Deliver Lasting Value To Investors And Communities.",
    image: "/construc-3.jpg",
  },
  {
    id: 2,
    title: "Building Tomorrow's Infrastructure",
    subtitle: "Innovation in Construction",
    description:
      "Leading the industry with cutting-edge technology and sustainable building practices for future generations.",
    image: "/construc-1.jpg",
  },
  {
    id: 3,
    title: "Excellence in Every Project",
    subtitle: "Quality Guaranteed",
    description:
      "From residential complexes to commercial developments, we deliver exceptional results on time and within budget.",
    image: "/construc-2.jpg",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return
    setIsTransitioning(true)
    setCurrentSlide(index)
  }

  // reset transition lock
  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 800)
    return () => clearTimeout(timer)
  }, [currentSlide])

  // 🔄 Infinite autoplay (runs once on mount)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Slider */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-800 ease-in-out transform ${
              index === currentSlide
                ? "translate-x-0 opacity-100 scale-100"
                : index < currentSlide
                ? "-translate-x-full opacity-0 scale-95"
                : "translate-x-full opacity-0 scale-95"
            }`}
          >
            {/* Background */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl text-center mx-auto">
                  {/* Subtitle */}
                  <div className="mb-6">
                    <span
                      className={`inline-block rounded-full bg-orange-500 px-6 py-2 text-sm font-medium text-white transition-all duration-700 delay-200 ${
                        index === currentSlide
                          ? "translate-y-0 opacity-100"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      {slide.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h1
                    className={`mb-6 text-6xl font-bold leading-tight text-white md:text-7xl lg:text-7xl transition-all duration-700 delay-300 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    {slide.title === "Your Trusted Construction Partner" ? (
                      <>
                        <div>Your Trusted</div>
                        <div>
                          <span
                            className="text-transparent"
                            style={{ WebkitTextStroke: "2px white" }}
                          >
                            Construction
                          </span>
                          <span className="text-orange-500"> Partner</span>
                        </div>
                      </>
                    ) : (
                      slide.title
                        .split(" ")
                        .map((word, i) => (
                          <span
                            key={i}
                            className={
                              i === slide.title.split(" ").length - 1
                                ? "text-orange-500"
                                : ""
                            }
                          >
                            {word}{" "}
                          </span>
                        ))
                    )}
                  </h1>

                  {/* Description */}
                  <p
                    className={`mb-8 max-w-2xl mx-auto text-lg text-gray-200 leading-relaxed transition-all duration-700 delay-400 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div
                    className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center transition-all duration-700 delay-500 ${
                      index === currentSlide
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 font-medium transform hover:scale-105 transition-transform"
                    >
                      Work With Us
                    </Button>

                    <Button
                      size="lg"
                      variant="ghost"
                      className="text-white hover:bg-white/10 rounded-full px-8 py-3 transform hover:scale-105 transition-transform"
                      onClick={nextSlide}
                      disabled={isTransitioning}
                    >
                      <Play className="mr-2 h-5 w-5 fill-orange-500 text-orange-500" />
                      Watch Video
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left navigation dots */}
      <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2">
        <div className="space-y-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group flex items-center space-x-4 text-left relative"
              disabled={isTransitioning}
            >
              <div
                className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  index === currentSlide
                    ? "border-orange-500 bg-orange-500 text-white scale-110"
                    : "border-white/30 bg-transparent text-white/50 hover:border-white/50 hover:text-white/70"
                }`}
              >
                <span className="text-sm font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="flex items-center space-x-4 rounded-lg bg-white/10 backdrop-blur-sm p-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-10 w-10 rounded-full bg-gray-300 border-2 border-white"
                style={{
                  backgroundImage: `url(/placeholder.svg?height=40&width=40&query=person${i})`,
                  backgroundSize: "cover",
                }}
              />
            ))}
          </div>
          <div className="text-white">
            <div className="text-xl font-bold text-orange-500">25k+</div>
            <div className="text-sm">Clients Review</div>
          </div>
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/10 p-2"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Social links */}
      <div className="absolute bottom-8 left-6 z-20 flex space-x-4 text-white/70">
        <a href="#" className="hover:text-white transition-colors">
          Facebook
        </a>
        <span>-</span>
        <a href="#" className="hover:text-white transition-colors">
          Twitter
        </a>
        <span>-</span>
        <a href="#" className="hover:text-white transition-colors">
          LinkedIn
        </a>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-orange-500 transition-all duration-500 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}

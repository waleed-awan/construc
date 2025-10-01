"use client"

import Image from "next/image"
import { ArrowUpRight, Building2, HardHat } from "lucide-react"
import { useEffect, useState, useRef } from "react"

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || typeof window === "undefined") return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(entry.target)
        }
      },
      { threshold: 0.2, ...options },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [options])

  return [ref, inView] as const
}

export default function RealEstateSection() {
  const [globalCount, setGlobalCount] = useState<number>(0)
  const [localCount, setLocalCount] = useState<number>(0)

  const [leftRef, leftIn] = useInView()
  const [headingRef, headingIn] = useInView()
  const [rightImgRef, rightImgIn] = useInView()
  const [rightContentRef, rightContentIn] = useInView()
  const [statsRef, statsIn] = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (!statsIn) return
    let globalStart = 0
    let localStart = 0

    const globalInterval = setInterval(() => {
      globalStart += 1
      if (globalStart > 120) {
        clearInterval(globalInterval)
      } else {
        setGlobalCount(globalStart)
      }
    }, 20)

    const localInterval = setInterval(() => {
      localStart += 1
      if (localStart > 80) {
        clearInterval(localInterval)
      } else {
        setLocalCount(localStart)
      }
    }, 30)

    return () => {
      clearInterval(globalInterval)
      clearInterval(localInterval)
    }
  }, [statsIn])

  return (
    <section className="bg-white flex flex-col lg:flex-row gap-6 lg:gap-10 px-4 sm:px-6 md:px-12 lg:px-20 py-8 sm:py-12">
      {/* left side  */}
      <div
        ref={leftRef as any}
        className={`flex flex-col justify-around text-center md:text-left w-full lg:w-auto lg:min-w-[400px] transition-all duration-700 ease-out [will-change:transform,opacity] ${
          leftIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Heading */}
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <span className="h-px w-10 bg-orange-500"></span>
          <span className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Who We Are</span>
        </div>

        {/* Image */}
        <div className="relative w-full max-w-md mx-auto md:mx-0 mt-6 lg:mt-0">
          {/* Tall Image */}
          <Image
            src="/building-1.jpg"
            alt="Who We Are"
            width={400}
            height={900}
            className="rounded-2xl mt-8 sm:mt-16 lg:mt-24 object-cover mx-auto w-[200px] h-[300px] sm:w-[260px] sm:h-[400px] md:w-[300px] md:h-[370px]"
          />

          {/* Construction Badge */}
          <div className="absolute -bottom-20 sm:-bottom-28 lg:-bottom-36 left-1/2 -translate-x-1/2">
            <Image
              src="/cap-construc.png"
              alt="Under Construction"
              width={500}
              height={500}
              className="object-contain w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px]"
            />
          </div>
        </div>

        {/* Button */}
        <div className="pt-12 sm:pt-16 lg:pt-20 flex justify-center md:justify-start">
          <button className="group flex items-center gap-2 bg-orange-500 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-orange-600 transition-all duration-300 text-sm sm:text-base hover:shadow-lg active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/60">
            Learn More
            <span className="bg-black text-white rounded-full p-1 transform transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>
      </div>

      {/* //right Side  */}
      <div className="w-full mt-8 lg:mt-0">
        {/* Heading */}
        <h1
          ref={headingRef as any}
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black max-w-3xl transition-all duration-700 ease-out [will-change:transform,opacity] ${
            headingIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          The Largest Privately Held Real Estate Investors And Managers In The World
        </h1>

        <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col lg:flex-row gap-6 lg:gap-12 items-start lg:items-center">
          {/* Left Image */}
          <div
            ref={rightImgRef as any}
            className={`w-full lg:w-auto flex justify-center lg:justify-start transition-all duration-700 ease-out [will-change:transform,opacity] ${
              rightImgIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Image
              src="/building-2.jpg"
              alt="City Buildings"
              width={600}
              height={500}
              className="rounded-2xl object-cover w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:w-[280px] xl:w-[500px] h-auto"
            />
          </div>

          {/* Right Content */}
          <div
            ref={rightContentRef as any}
            style={{ transitionDelay: rightImgIn ? "120ms" : "0ms" }}
            className={`space-y-6 sm:space-y-8 w-full transition-all duration-700 ease-out [will-change:transform,opacity] ${
              rightContentIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Vision */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-black">Our vision</h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                To empower businesses with cutting-edge web solutions that enhance their digital presence and drive
                growth.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-black">Our mission</h2>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Our solutions are designed to meet the needs of modern enterprises, ensuring they thrive in today's
                competitive online landscape.
              </p>
            </div>

            {/* Stats */}
            <div ref={statsRef as any} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Global Reach */}
              <div className="group cursor-pointer bg-black text-white p-4 sm:p-6 rounded-xl flex flex-col items-start hover:bg-orange-600 transition-colors duration-500">
                <div className="flex items-start justify-between w-full">
                  <h3 className="font-semibold text-base sm:text-lg">Global Reach</h3>
                  <div className="flex flex-col items-center">
                    <Building2
                      size={32}
                      className="sm:w-10 sm:h-10 text-white transform transition-transform duration-500 group-hover:rotate-180"
                    />
                  </div>
                </div>

                {/* Number */}
                <p className="text-3xl sm:text-4xl font-bold mt-3 sm:mt-4">
                  {globalCount}
                  <span className="text-orange-500">+</span>
                </p>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">Offices Worldwide</p>
              </div>

              {/* Local Expertise */}
              <div className="group cursor-pointer bg-black text-white p-4 sm:p-6 rounded-xl flex flex-col items-start hover:bg-orange-600 transition-colors duration-500">
                <div className="flex items-start justify-between w-full">
                  <h3 className="font-semibold text-base sm:text-lg">Local Expertise</h3>
                  <div className="flex flex-col items-center">
                    <HardHat
                      size={32}
                      className="sm:w-10 sm:h-10 text-white transform transition-transform duration-500 group-hover:rotate-180"
                    />
                  </div>
                </div>

                {/* Number */}
                <p className="text-3xl sm:text-4xl font-bold mt-3 sm:mt-4">
                  {localCount}
                  <span className="text-orange-500">+</span>
                </p>
                <p className="text-gray-300 text-xs sm:text-sm mt-1">Employees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

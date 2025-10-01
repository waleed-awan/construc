"use client"

import Image from "next/image"
import { MapPin, ArrowRight } from "lucide-react"

type Item = {
  title: string
  location: string
  image: string
}

const items: Item[] = [
  {
    title: "Work With Energetic Team",
    location: "Hollywood, Florida",
    image: "/1-1.jpg",
  },
  {
    title: "Work With Energetic Team",
    location: "Hollywood, Florida",
    image: "/2-1.jpg",
  },
  {
    title: "Work With Energetic Team",
    location: "Hollywood, Florida",
    image: "/3-1.jpg",
  },
  {
    title: "Work With Energetic Team",
    location: "Hollywood, Florida",
    image: "/4-1.jpg",
  },
]

export default function ProjectsSticky() {
  return (
    <section
      aria-label="Our Projects"
      className="py-8 sm:py-10 md:py-14 lg:py-16 flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl flex flex-col items-center">
        {/* Label with dashes */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-chart-5 text-xs sm:text-sm font-medium tracking-wider pt-4 sm:pt-6 md:pt-8 lg:pt-10">
          <span className="h-px w-6 sm:w-8 md:w-10 bg-chart-5/50" aria-hidden />
          <span className="uppercase">Our Projects</span>
          <span className="h-px w-6 sm:w-8 md:w-10 bg-chart-5/50" aria-hidden />
        </div>

        {/* Big heading - improved responsive text sizing and line breaks */}
        <h2 className="mt-3 md:mt-4 text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance px-4">
          We Provide Effective <br className="hidden xs:block" /> Solution In Construction
        </h2>

        {items.map((item, i) => (
          <div key={i} className="sticky top-4 sm:top-6 md:top-8 w-full flex justify-center">
            <div
              className="relative mt-8 sm:mt-10 md:mt-12 lg:mt-14 rounded-2xl sm:rounded-[24px] md:rounded-[28px] 
              overflow-hidden bg-muted flex flex-col items-center
              w-full sm:w-[96%] md:w-[92%] lg:w-[88%] xl:w-[85%]"
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9]">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt="Modern residential construction project"
                  fill
                  priority={i === 0}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 85vw"
                />
              </div>

              {/* Overlay card - completely redesigned for better mobile responsiveness */}
              <div
                className={`relative -mt-8 sm:-mt-10 mx-auto w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)]
                md:mt-0 md:mx-0 md:w-auto
                md:absolute md:top-1/2 md:-translate-y-1/2 
                ${i % 2 === 0 ? "md:left-4 lg:left-6 xl:left-10" : "md:right-4 lg:right-6 xl:right-10"} 
                md:max-w-[280px] lg:max-w-sm xl:max-w-md 
                bg-white text-foreground rounded-xl sm:rounded-2xl md:rounded-3xl shadow-lg 
                p-4 sm:p-5 md:p-6 lg:p-8`}
              >
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                  <span className="text-chart-5 font-semibold text-xs sm:text-sm md:text-base">Builder</span>
                  <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-muted-foreground/40" />
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 text-xs sm:text-sm text-muted-foreground">
                    <MapPin className="size-3 sm:size-4 text-chart-5" aria-hidden />
                    <span className="truncate">{item.location}</span>
                  </div>
                </div>

                <h3 className="mt-2 sm:mt-3 md:mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-snug text-balance">
                  {item.title}
                </h3>

                <p className="mt-2 sm:mt-2.5 md:mt-3 text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
                  Our solutions are designed to meet the needs of modern enterprises, ensuring they thrive in demanding
                  environments with reliable, high-quality construction outcomes.
                </p>

                {/* CTA floating button - improved responsive sizing and positioning */}
                <div className="relative">
                  <button
                    aria-label="Open project"
                    className="absolute -bottom-5 sm:-bottom-6 md:-bottom-7 lg:-bottom-8 
                    right-2 sm:right-3 md:right-4 lg:right-0 
                    size-10 sm:size-11 md:size-12 lg:size-14 
                    rounded-full grid place-items-center 
                    bg-chart-5 text-white shadow-lg 
                    ring-2 sm:ring-3 md:ring-4 ring-white 
                    transition-transform duration-300 
                    hover:scale-105 active:scale-95
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-chart-5 focus-visible:ring-offset-2"
                  >
                    <ArrowRight className="size-4 sm:size-4.5 md:size-5 lg:size-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

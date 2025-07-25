'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
    '/slide/hero1.jpg',
    '/slide/hero2.jpg',
    '/slide/hero3.jpg',
]

const Hero: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* Background Images */}
            {slides.map((src, idx) => (
                <div
                    key={idx}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Slide ${idx + 1}`}
                        fill
                        className="object-cover"
                        priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 to-pink-500/30" />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-xl">
                        Capturing Life&apos;s Precious Moments
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
                        Professional photography for weddings, birthdays, corporate events – preserving your memories with artistry and passion.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/book"
                            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Book a Session
                        </Link>
                        <Link
                            href="/gallery"
                            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                        >
                            View Gallery
                        </Link>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'bg-white w-6' : 'bg-white/50'
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Hero

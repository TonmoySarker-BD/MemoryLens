'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MoveRight } from 'lucide-react'

type Service = {
    title: string
    image: string
    description: string
    icon: string
}

const services: Service[] = [
    {
        title: 'Wedding Photography',
        image: '/slide/hero1.jpg',
        description: 'Capture every magical moment with our cinematic approach',
        icon: '💍'
    },
    {
        title: 'Birthday Celebrations',
        image: '/slide/hero2.jpg',
        description: 'Fun-filled coverage for all ages',
        icon: '🎂'
    },
    {
        title: 'Corporate Events',
        image: '/slide/hero3.jpg',
        description: 'Professional coverage for business milestones',
        icon: '🏢'
    },
    {
        title: 'Cultural Festivals',
        image: '/slide/hero1.jpg',
        description: 'Vibrant documentation of traditions',
        icon: '🎎'
    },
    {
        title: 'Portrait Sessions',
        image: '/slide/hero2.jpg',
        description: 'Stunning individual or family portraits',
        icon: '👨‍👩‍👧'
    },
    {
        title: 'Product Photography',
        image: '/slide/hero3.jpg',
        description: 'Showcase your products beautifully',
        icon: '📦'
    },
    {
        title: 'Real Estate',
        image: '/slide/hero1.jpg',
        description: 'Property photography that sells',
        icon: '🏠'
    },
    {
        title: 'Food Photography',
        image: '/slide/hero2.jpg',
        description: 'Mouthwatering culinary shots',
        icon: '🍽️'
    }
]

const FeaturedServices = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="mx-auto px-4 sm:px-6 lg:px-[5vw]">
                <div className="text-center mb-16">
                    <span className="inline-block bg-rose-100 text-rose-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                        Our Specializations
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Professional Photography Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We specialize in capturing life's most precious moments across various events and occasions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, idx) => (
                        <Link
                            href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                            key={idx}
                            className="group relative block overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
                        >
                            <div className="relative h-60">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-xl">
                                    {service.icon}
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 p-6 z-10 w-full">
                                <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">
                                    {service.title}
                                </h3>
                                <p className="text-gray-200 text-sm drop-shadow-lg">
                                    {service.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium text-white transition-all duration-300 rounded-xl group bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 shadow-lg hover:shadow-xl"
                    >
                        {/* <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-rose-700 rounded group-hover:-mt-4 group-hover:-mr-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 transform bg-white opacity-30"></span>
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 bg-gradient-to-r from-pink-600 to-rose-700 rounded-xl opacity-0 group-hover:opacity-100"></span> */}
                        
                        <span className="relative w-full text-left flex items-center justify-center gap-2">
                            <span>All Services</span>
                            <MoveRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FeaturedServices
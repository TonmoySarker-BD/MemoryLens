'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, Compass, ImageIcon, BookText, Phone } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
    { label: 'Home', href: '/', icon: <Home size={18} /> },
    { label: 'Services', href: '/services', icon: <Compass size={18} /> },
    { label: 'Gallery', href: '/gallery', icon: <ImageIcon size={18} /> },
    { label: 'Blog', href: '/blog', icon: <BookText size={18} /> },
    { label: 'Contact', href: '/contact', icon: <Phone size={18} /> },
]

const Navbar: React.FC = () => {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header
            className={`fixed  w-full z-50 transition-all duration-300 ${scrolled ? 'bg-blue-900/30 backdrop-blur-md shadow-sm' : 'bg-transparent shadow-none'}`}
        >
            <nav className="mx-auto px-4 sm:px-6 lg:px-[5vw]">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-rose-600 tracking-wide hover:text-rose-700 transition">
                        <Image src="/logo.png" alt="MemoryLens Logo" width={100} height={100} />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(({ label, href, icon }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center gap-1 text-lg font-bold transition ${pathname === href ? 'text-rose-600' : 'text-black hover:text-rose-500'}`}
                            >
                                {icon}
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden b flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-full transition ${isOpen ? 'bg-rose-300 text-rose-600' : 'text-rose-600 hover:bg-rose-300'}`}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown with Glass Morphism */}
                {isOpen && (
                    <div className="md:hidden mt-2 pb-4 rounded-lg bg-blue-900/30 backdrop-blur-lg border border-white shadow-lg">
                        <div className="flex flex-col space-y-2 px-2 py-2">
                            {navLinks.map(({ label, href, icon }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-lg font-medium transition ${pathname === href
                                        ? 'bg-rose-200 text-rose-600'
                                        : 'text-black hover:bg-rose-50'}`}
                                >
                                    <span className="text-rose-500">{icon}</span>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar
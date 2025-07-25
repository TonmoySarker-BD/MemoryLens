'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Home, Compass, ImageIcon, BookText, Phone } from 'lucide-react'

const navLinks = [
    { label: 'Home', href: '/', icon: <Home size={18} /> },
    { label: 'Explore', href: '/explore', icon: <Compass size={18} /> },
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
            className={`fixed  w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-black/30 backdrop-blur-2xlshadow-lg'}`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold text-rose-600 tracking-wide hover:text-rose-700 transition">
                        MemoryLens
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map(({ label, href, icon }) => (
                            <Link
                                key={href}
                                href={href}
                                className={`flex items-center gap-1 text-sm font-medium transition ${pathname === href ? 'text-rose-600' : 'text-white hover:text-rose-500'}`}
                            >
                                {icon}
                                {label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-full transition ${isOpen ? 'bg-rose-100 text-rose-600' : 'text-white hover:bg-gray-100'}`}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown with Glass Morphism */}
                {isOpen && (
                    <div className="md:hidden mt-2 pb-4 rounded-lg bg-white backdrop-blur-lg border border-white shadow-lg">
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
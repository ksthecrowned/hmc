'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/Logo'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('accueil')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Détection de la section active
      const sections = ['accueil', 'apropos', 'projets', 'dons', 'contact']
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Appel initial
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#accueil', label: 'Accueil', id: 'accueil' },
    { href: '#apropos', label: 'À propos', id: 'apropos' },
    { href: '#projets', label: 'Projets', id: 'projets' },
    { href: '#dons', label: 'Faire un don', id: 'dons' },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-1000 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/98 backdrop-blur-xl text-gray-900 py-3 shadow-lg border-b border-gray-100' 
        : 'bg-gradient-hero text-white py-3'
    }`}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center">
          <Link
            href="#accueil" 
            className="no-underline text-inherit transition-transform duration-300 hover:scale-105"
            onClick={handleLinkClick}
          >
            <Logo size={scrolled ? 120 : 150} />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-medium text-base transition-all duration-300 rounded-lg group ${
                    scrolled 
                      ? isActive 
                        ? 'text-primary' 
                        : 'text-gray-700 hover:text-primary'
                      : isActive
                        ? 'text-white'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                      scrolled ? 'bg-primary' : 'bg-white'
                    }`} />
                  )}
                  {!isActive && (
                    <span className={`absolute bottom-0 left-1/2 right-1/2 h-0.5 rounded-full transition-all duration-300 group-hover:left-0 group-hover:right-0 ${
                      scrolled ? 'bg-primary/30' : 'bg-white/30'
                    }`} />
                  )}
                </Link>
              )
            })}
            <Link
              href="#contact"
              className={`ml-4 px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                scrolled
                  ? 'btn-primary hover:shadow-[0_8px_25px_rgba(0,82,163,0.4)]'
                  : 'bg-white/20 border-2 border-white text-white hover:bg-white/30 hover:border-white/50 backdrop-blur-sm'
              }`}
            >
              Nous contacter
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled
                ? 'text-gray-900 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} strokeWidth={2.5} />
            ) : (
              <Menu size={24} strokeWidth={2.5} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-2 pb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`px-4 py-3 font-semibold text-base rounded-lg transition-all duration-300 ${
                    scrolled
                      ? isActive
                        ? 'bg-primary-light text-primary border-l-4 border-primary'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                      : isActive
                        ? 'bg-white/20 text-white border-l-4 border-white'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className={`mt-2 px-4 py-3 text-center font-semibold rounded-lg transition-all duration-300 ${
                scrolled
                  ? 'btn-primary'
                  : 'bg-white/20 border-2 border-white text-white hover:bg-white/30'
              }`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

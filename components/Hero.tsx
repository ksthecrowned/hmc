'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Heart, Users, Target, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { number: '500+', label: 'Personnes aidées', icon: Users },
    { number: '50+', label: 'Projets réalisés', icon: Target },
    { number: '100%', label: 'Engagement', icon: Heart },
  ]

  return (
    <section 
      id="accueil" 
      className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated Circles */}
      <div 
        className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"
        style={{
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
        }}
      />

      {/* Geometric Shapes */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-white/30 rounded-full animate-ping" />
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-500" />
      <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-white/25 rounded-full animate-ping delay-1000" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center text-white max-w-5xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-in mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-medium">
              <Heart size={16} className="text-secondary" fill="currentColor" />
              Fondation à but non lucratif
            </span>
          </div>

          {/* Main Title */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight drop-shadow-2xl animate-fade-in"
            style={{
              animationDelay: '0.1s',
              animationFillMode: 'both',
            }}
          >
            <span className="block bg-linear-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
              HandiMobilité Congo
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-xl md:text-2xl lg:text-3xl mb-6 font-bold leading-tight animate-fade-in"
            style={{
              animationDelay: '0.2s',
              animationFillMode: 'both',
            }}
          >
            Le chemin de la mobilité commence ici
          </p>

          {/* Description */}
          <p 
            className="text-base mb-8 opacity-95 leading-relaxed max-w-3xl mx-auto animate-fade-in"
            style={{
              animationDelay: '0.3s',
              animationFillMode: 'both',
            }}
          >
            Contribuons ensemble à la pleine inclusion des personnes en situation de handicap 
            dans la République du Congo
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex gap-5 justify-center flex-wrap mb-8 animate-fade-in"
            style={{
              animationDelay: '0.4s',
              animationFillMode: 'both',
            }}
          >
            <Link 
              href="#dons" 
              className="group btn btn-secondary px-8 py-4 rounded-xl shadow-[0_8px_30px_rgba(0,168,107,0.4)] hover:shadow-[0_12px_40px_rgba(0,168,107,0.5)] transition-all duration-300"
            >
              <Heart size={20} className="group-hover:scale-110 transition-transform" />
              Faire un don
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="#apropos" 
              className="group btn px-8 py-4 rounded-xl border-2 border-white text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300"
            >
              En savoir plus
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Stats */}
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in"
            style={{
              animationDelay: '0.5s',
              animationFillMode: 'both',
            }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center justify-center mb-3">
                    <IconComponent size={32} className="text-white/90" />
                  </div>
                  <div className="text-3xl md:text-4xl font-black mb-2 text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-white/80 font-medium">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

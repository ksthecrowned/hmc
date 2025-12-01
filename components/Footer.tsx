'use client'

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-linear-to-br from-gray-900 to-gray-800 text-white pt-12 pb-8 mt-12">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-2xl font-extrabold mb-4 tracking-tight">
              HANDI MOBILITÉ CONGO
            </h3>
            <p className="text-sm opacity-80 leading-relaxed mb-5">
              Le chemin de la mobilité commence ici.
            </p>
            <p className="text-sm opacity-70">
              Contribuons ensemble à la pleine inclusion des personnes en situation de handicap.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {['Accueil', 'À propos', 'Projets', 'Faire un don', 'Contact'].map((item, index) => {
                const links = ['#accueil', '#apropos', '#projets', '#dons', '#contact']
                return (
                  <Link 
                    key={index}
                    href={links[index]} 
                    className="text-[15px] text-white/80 transition-colors hover:text-white"
                  >
                    {item}
                  </Link>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-[15px] opacity-80">
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>contact@handimobilitecongo.cg</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+242 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Brazzaville, République du Congo</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-5">
              Suivez-nous
            </h4>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <Link 
                  key={index}
                  href="#" 
                  className="text-white/80 transition-all hover:text-white hover:-translate-y-1 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20"
                >
                  <Icon size={20} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-70">
          <p>
            © {new Date().getFullYear()} HandiMobilité Congo. Tous droits réservés.
          </p>
          <p className="mt-2">
            Fondation à but non lucratif - République du Congo
          </p>
        </div>
      </div>
    </footer>
  )
}

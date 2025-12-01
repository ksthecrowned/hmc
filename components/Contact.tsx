'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="section-title animate-fade-in">Contactez-nous</h2>
        <p className="section-subtitle animate-fade-in">
          Nous sommes là pour répondre à vos questions et vous accompagner
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-15 mt-8 max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold mb-6 text-primary">
              Informations de Contact
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary-light">
                  <MapPin size={24} color="#0052a3" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-lg">
                    Adresse
                  </div>
                  <div className="text-gray-600 leading-relaxed">
                    République du Congo<br />
                    Brazzaville
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-secondary-light">
                  <Mail size={24} color="#00a86b" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-lg">
                    Email
                  </div>
                  <div className="text-gray-600 leading-relaxed">
                    contact@handimobilitecongo.cg
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-primary-light">
                  <Phone size={24} color="#0052a3" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-semibold mb-1 text-lg">
                    Téléphone
                  </div>
                  <div className="text-gray-600 leading-relaxed">
                    +242 XX XXX XXXX
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-10 bg-white">
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block mb-2 font-semibold text-gray-900">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-3.5 text-base border-2 border-gray-300 rounded-lg transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-semibold text-gray-900">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3.5 py-3.5 text-base border-2 border-gray-300 rounded-lg transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 font-semibold text-gray-900">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3.5 text-base border-2 border-gray-300 rounded-lg transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-900">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3.5 py-3.5 text-base border-2 border-gray-300 rounded-lg resize-y font-sans transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full py-4 text-lg"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

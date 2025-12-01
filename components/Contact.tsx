'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone, Send, Clock, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.')
    setFormData({ name: '', email: '', phone: '', message: '' })
    setFocusedField(null)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'République du Congo\nBrazzaville',
      color: '#0052a3',
      bgColor: 'bg-primary-light',
      link: '#'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@handimobilitecongo.cg',
      color: '#00a86b',
      bgColor: 'bg-secondary-light',
      link: 'mailto:contact@handimobilitecongo.cg'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+242 XX XXX XXXX',
      color: '#0052a3',
      bgColor: 'bg-primary-light',
      link: 'tel:+242XXXXXXXXX'
    }
  ]

  return (
    <section id="contact" className="section bg-linear-to-br from-gray-50 via-white to-primary-light/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <MessageCircle size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Contact</span>
          </div>
          <h2 className="section-title animate-fade-in mb-4">Contactez-nous</h2>
          <p className="section-subtitle animate-fade-in">
            Nous sommes là pour répondre à vos questions et vous accompagner
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <a
                  key={index}
                  href={info.link}
                  className="group block"
                >
                  <div className={`${info.bgColor} rounded-2xl p-6 border-2 border-transparent hover:border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${info.color}15` }}
                      >
                        <IconComponent size={28} color={info.color} strokeWidth={2} />
                      </div>
                      <div className="flex-1">
                        <div className="font-bold mb-2 text-gray-900 text-lg">
                          {info.title}
                        </div>
                        <div className="text-gray-700 leading-relaxed whitespace-pre-line text-sm">
                          {info.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )
            })}
            
            {/* Response time info */}
            <div className="bg-linear-to-br from-secondary-light to-secondary/10 rounded-2xl p-6 border-2 border-secondary/30 mt-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={24} className="text-secondary" />
                <div className="font-bold text-gray-900">Temps de réponse</div>
              </div>
              <p className="text-sm text-gray-700">
                Nous répondons généralement dans les <strong className="text-secondary">24-48 heures</strong>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block mb-2 font-semibold text-gray-900">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3.5 text-base border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${
                        focusedField === 'name'
                          ? 'border-primary focus:ring-primary/20 bg-primary-light/30'
                          : 'border-gray-300 focus:border-primary focus:ring-primary/20'
                      }`}
                      placeholder="Votre nom"
                    />
                  </div>

                  <div className="relative">
                    <label className="block mb-2 font-semibold text-gray-900">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full px-4 py-3.5 text-base border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${
                        focusedField === 'email'
                          ? 'border-primary focus:ring-primary/20 bg-primary-light/30'
                          : 'border-gray-300 focus:border-primary focus:ring-primary/20'
                      }`}
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-900">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3.5 text-base border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 ${
                      focusedField === 'phone'
                        ? 'border-primary focus:ring-primary/20 bg-primary-light/30'
                        : 'border-gray-300 focus:border-primary focus:ring-primary/20'
                    }`}
                    placeholder="+242 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-gray-900">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={5}
                    className={`w-full px-4 py-3.5 text-base border-2 rounded-xl resize-y font-sans transition-all duration-300 focus:outline-none focus:ring-2 ${
                      focusedField === 'message'
                        ? 'border-primary focus:ring-primary/20 bg-primary-light/30'
                        : 'border-gray-300 focus:border-primary focus:ring-primary/20'
                    }`}
                    placeholder="Dites-nous comment nous pouvons vous aider..."
                  />
                </div>

                <button
                  type="submit"
                  className="group btn btn-primary w-full py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

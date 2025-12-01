'use client'

import { useState } from 'react'
import { Smartphone, CreditCard } from 'lucide-react'

export default function DonationSection() {
  const [donationAmount, setDonationAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'card' | null>(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvv, setCardCvv] = useState('')

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault()
    if (!donationAmount || !paymentMethod) {
      alert('Veuillez remplir tous les champs requis')
      return
    }

    if (paymentMethod === 'momo' && !phoneNumber) {
      alert('Veuillez entrer votre numéro de téléphone MoMo')
      return
    }

    if (paymentMethod === 'card') {
      if (!cardNumber || !cardName || !cardExpiry || !cardCvv) {
        alert('Veuillez remplir tous les champs de la carte bancaire')
        return
      }
    }

    alert(`Merci pour votre don de ${donationAmount} FCFA via ${paymentMethod === 'momo' ? 'MoMo' : 'carte bancaire'}!`)
    
    setDonationAmount('')
    setPaymentMethod(null)
    setPhoneNumber('')
    setCardNumber('')
    setCardName('')
    setCardExpiry('')
    setCardCvv('')
  }

  return (
    <section id="dons" className="section bg-gradient-to-br from-white to-primary-light">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="section-title animate-fade-in">Faire un Don</h2>
        <p className="section-subtitle animate-fade-in">
          Votre générosité contribue à améliorer la mobilité et l'inclusion des personnes en situation de handicap au Congo.
        </p>
        
        <div className="max-w-3xl mx-auto">
          <div className="card animate-fade-in p-12 max-w-2xl mx-auto bg-white shadow-custom-lg">
            <form onSubmit={handleDonation}>
              <div className="mb-6">
                <label className="block mb-2 font-semibold text-gray-900">
                  Montant du don (FCFA) *
                </label>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Ex: 10000"
                  required
                  min="1000"
                  className="w-full px-3 py-3 text-base border-2 border-gray-300 rounded-lg transition-colors focus:border-primary focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-3 font-semibold text-gray-900">
                  Méthode de paiement *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('momo')}
                    className={`p-5 rounded-xl border-[3px] transition-all text-center ${
                      paymentMethod === 'momo' 
                        ? 'border-secondary bg-secondary-light' 
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    <div className="mb-2 flex justify-center">
                      <Smartphone size={32} color={paymentMethod === 'momo' ? '#00a86b' : '#666'} strokeWidth={2} />
                    </div>
                    <div className={`font-semibold ${paymentMethod === 'momo' ? 'text-secondary' : 'text-gray-600'}`}>
                      MoMo
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Mobile Money
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-5 rounded-xl border-[3px] transition-all text-center ${
                      paymentMethod === 'card' 
                        ? 'border-primary bg-primary-light' 
                        : 'border-gray-300 bg-white'
                    }`}
                  >
                    <div className="mb-2 flex justify-center">
                      <CreditCard size={32} color={paymentMethod === 'card' ? '#0052a3' : '#666'} strokeWidth={2} />
                    </div>
                    <div className={`font-semibold ${paymentMethod === 'card' ? 'text-primary' : 'text-gray-600'}`}>
                      Carte Bancaire
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Visa / Mastercard
                    </div>
                  </button>
                </div>
              </div>

              {paymentMethod === 'momo' && (
                <div className="mb-6 p-5 bg-secondary-light rounded-lg border-2 border-secondary">
                  <label className="block mb-2 font-semibold text-gray-900">
                    Numéro de téléphone MoMo *
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Ex: +242 06 123 4567"
                    required
                    className="w-full px-3 py-3 text-base border-2 border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Vous recevrez une demande de confirmation sur votre téléphone
                  </p>
                </div>
              )}

              {paymentMethod === 'card' && (
                <div className="mb-6 p-5 bg-primary-light rounded-lg border-2 border-primary">
                  <div className="mb-4">
                    <label className="block mb-2 font-semibold text-gray-900">
                      Nom sur la carte *
                    </label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      placeholder="Ex: JEAN DUPONT"
                      required
                      className="w-full px-3 py-3 text-base border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block mb-2 font-semibold text-gray-900">
                      Numéro de carte *
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim())}
                      placeholder="1234 5678 9012 3456"
                      required
                      maxLength={19}
                      className="w-full px-3 py-3 text-base border-2 border-primary rounded-lg tracking-wider focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 font-semibold text-gray-900">
                        Date d'expiration *
                      </label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => {
                          let value = e.target.value.replace(/\D/g, '')
                          if (value.length >= 2) {
                            value = value.slice(0, 2) + '/' + value.slice(2, 4)
                          }
                          setCardExpiry(value)
                        }}
                        placeholder="MM/AA"
                        required
                        maxLength={5}
                        className="w-full px-3 py-3 text-base border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-semibold text-gray-900">
                        CVV *
                      </label>
                      <input
                        type="text"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 3))}
                        placeholder="123"
                        required
                        maxLength={3}
                        className="w-full px-3 py-3 text-base border-2 border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary w-full py-4.5 text-lg font-bold rounded-xl mt-2"
              >
                Confirmer le don
              </button>
            </form>
          </div>

          <div className="mt-10 text-center text-gray-600 text-sm">
            <p>🔒 Vos informations de paiement sont sécurisées et cryptées.</p>
            <p className="mt-2">
              Tous les dons sont utilisés pour améliorer la mobilité des personnes en situation de handicap.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

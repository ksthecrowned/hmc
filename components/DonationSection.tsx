'use client'

import { useState } from 'react'
import { Smartphone, CreditCard, Heart, Shield, CheckCircle, Sparkles, Lock, TrendingUp } from 'lucide-react'

export default function DonationSection() {
  const [donationAmount, setDonationAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState<'momo' | 'card' | null>(null)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardExpiry, setCardExpiry] = useState('')
  const [cardCvv, setCardCvv] = useState('')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const suggestedAmounts = [5000, 10000, 25000, 50000, 100000]

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
    <section id="dons" className="section bg-gradient-to-br from-white via-secondary-light/20 to-primary-light/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-4">
            <Heart size={18} className="text-secondary" fill="currentColor" />
            <span className="text-sm font-semibold text-secondary">Faire un don</span>
          </div>
          <h2 className="section-title animate-fade-in mb-4">Faire un Don</h2>
          <p className="section-subtitle animate-fade-in">
            Votre générosité contribue à améliorer la mobilité et l'inclusion des personnes en situation de handicap au Congo.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Suggested amounts sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={20} className="text-primary" />
                  <h3 className="text-lg font-bold text-gray-900">Montants suggérés</h3>
                </div>
                <div className="space-y-3">
                  {suggestedAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setDonationAmount(amount.toString())}
                      className={`w-full p-4 rounded-xl border-2 font-semibold transition-all duration-300 text-left ${
                        donationAmount === amount.toString()
                          ? 'border-secondary bg-secondary-light text-secondary shadow-md scale-105'
                          : 'border-gray-200 bg-white text-gray-700 hover:border-secondary/50 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{amount.toLocaleString('fr-FR')} FCFA</span>
                        {donationAmount === amount.toString() && (
                          <CheckCircle size={18} className="text-secondary" fill="currentColor" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main donation form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <form onSubmit={handleDonation} className="space-y-6">
                  <div>
                    <label className="block mb-3 font-semibold text-gray-900 flex items-center gap-2">
                      <Heart size={18} className="text-secondary" />
                      Montant du don (FCFA) *
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        onFocus={() => setFocusedField('amount')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Entrez le montant"
                        required
                        min="1000"
                        className={`w-full px-4 py-4 text-lg border-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 font-semibold ${
                          focusedField === 'amount'
                            ? 'border-secondary focus:ring-secondary/20 bg-secondary-light/30'
                            : 'border-gray-300 focus:border-secondary focus:ring-secondary/20'
                        }`}
                      />
                      {donationAmount && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                          FCFA
                        </div>
                      )}
                    </div>
                    {donationAmount && parseInt(donationAmount) >= 1000 && (
                      <p className="mt-2 text-sm text-gray-600 flex items-center gap-1">
                        <CheckCircle size={14} className="text-secondary" />
                        Montant minimum: 1 000 FCFA
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block mb-4 font-semibold text-gray-900">
                      Méthode de paiement *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('momo')}
                        className={`group p-6 rounded-xl border-2 transition-all duration-300 text-center relative overflow-hidden ${
                          paymentMethod === 'momo' 
                            ? 'border-secondary bg-secondary-light shadow-lg scale-105' 
                            : 'border-gray-200 bg-white hover:border-secondary/50 hover:shadow-md'
                        }`}
                      >
                        {paymentMethod === 'momo' && (
                          <div className="absolute top-2 right-2">
                            <CheckCircle size={20} className="text-secondary" fill="currentColor" />
                          </div>
                        )}
                        <div className="mb-3 flex justify-center">
                          <div className={`p-3 rounded-full transition-colors ${
                            paymentMethod === 'momo' ? 'bg-secondary/20' : 'bg-gray-100 group-hover:bg-secondary/10'
                          }`}>
                            <Smartphone size={32} color={paymentMethod === 'momo' ? '#00a86b' : '#666'} strokeWidth={2} />
                          </div>
                        </div>
                        <div className={`font-bold text-lg mb-1 ${paymentMethod === 'momo' ? 'text-secondary' : 'text-gray-700'}`}>
                          MoMo
                        </div>
                        <div className="text-xs text-gray-600">
                          Mobile Money
                        </div>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`group p-6 rounded-xl border-2 transition-all duration-300 text-center relative overflow-hidden ${
                          paymentMethod === 'card' 
                            ? 'border-primary bg-primary-light shadow-lg scale-105' 
                            : 'border-gray-200 bg-white hover:border-primary/50 hover:shadow-md'
                        }`}
                      >
                        {paymentMethod === 'card' && (
                          <div className="absolute top-2 right-2">
                            <CheckCircle size={20} className="text-primary" fill="currentColor" />
                          </div>
                        )}
                        <div className="mb-3 flex justify-center">
                          <div className={`p-3 rounded-full transition-colors ${
                            paymentMethod === 'card' ? 'bg-primary/20' : 'bg-gray-100 group-hover:bg-primary/10'
                          }`}>
                            <CreditCard size={32} color={paymentMethod === 'card' ? '#0052a3' : '#666'} strokeWidth={2} />
                          </div>
                        </div>
                        <div className={`font-bold text-lg mb-1 ${paymentMethod === 'card' ? 'text-primary' : 'text-gray-700'}`}>
                          Carte Bancaire
                        </div>
                        <div className="text-xs text-gray-600">
                          Visa / Mastercard
                        </div>
                      </button>
                    </div>
                  </div>

                  {paymentMethod === 'momo' && (
                    <div className="p-6 bg-gradient-to-br from-secondary-light to-secondary/10 rounded-xl border-2 border-secondary/30 animate-fade-in">
                      <div className="flex items-center gap-2 mb-4">
                        <Smartphone size={20} className="text-secondary" />
                        <label className="font-semibold text-gray-900">
                          Numéro de téléphone MoMo *
                        </label>
                      </div>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Ex: +242 06 123 4567"
                        required
                        className={`w-full px-4 py-3 text-base border-2 rounded-xl bg-white focus:outline-none focus:ring-2 transition-all ${
                          focusedField === 'phone'
                            ? 'border-secondary focus:ring-secondary/20'
                            : 'border-secondary/50 focus:border-secondary focus:ring-secondary/20'
                        }`}
                      />
                      <p className="text-sm text-gray-600 mt-3 flex items-center gap-1">
                        <CheckCircle size={14} className="text-secondary" />
                        Vous recevrez une demande de confirmation sur votre téléphone
                      </p>
                    </div>
                  )}

                  {paymentMethod === 'card' && (
                    <div className="p-6 bg-gradient-to-br from-primary-light to-primary/10 rounded-xl border-2 border-primary/30 animate-fade-in">
                      <div className="flex items-center gap-2 mb-5">
                        <CreditCard size={20} className="text-primary" />
                        <label className="font-semibold text-gray-900">
                          Informations de la carte bancaire
                        </label>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block mb-2 font-semibold text-gray-900">
                          Nom sur la carte *
                        </label>
                        <input
                          type="text"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          onFocus={() => setFocusedField('cardName')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Ex: JEAN DUPONT"
                          required
                          className={`w-full px-4 py-3 text-base border-2 rounded-xl bg-white focus:outline-none focus:ring-2 transition-all uppercase ${
                            focusedField === 'cardName'
                              ? 'border-primary focus:ring-primary/20'
                              : 'border-primary/50 focus:border-primary focus:ring-primary/20'
                          }`}
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
                          onFocus={() => setFocusedField('cardNumber')}
                          onBlur={() => setFocusedField(null)}
                          placeholder="1234 5678 9012 3456"
                          required
                          maxLength={19}
                          className={`w-full px-4 py-3 text-base border-2 rounded-xl bg-white tracking-wider focus:outline-none focus:ring-2 transition-all ${
                            focusedField === 'cardNumber'
                              ? 'border-primary focus:ring-primary/20'
                              : 'border-primary/50 focus:border-primary focus:ring-primary/20'
                          }`}
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
                            onFocus={() => setFocusedField('cardExpiry')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="MM/AA"
                            required
                            maxLength={5}
                            className={`w-full px-4 py-3 text-base border-2 rounded-xl bg-white focus:outline-none focus:ring-2 transition-all ${
                              focusedField === 'cardExpiry'
                                ? 'border-primary focus:ring-primary/20'
                                : 'border-primary/50 focus:border-primary focus:ring-primary/20'
                            }`}
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
                            onFocus={() => setFocusedField('cardCvv')}
                            onBlur={() => setFocusedField(null)}
                            placeholder="123"
                            required
                            maxLength={3}
                            className={`w-full px-4 py-3 text-base border-2 rounded-xl bg-white focus:outline-none focus:ring-2 transition-all ${
                              focusedField === 'cardCvv'
                                ? 'border-primary focus:ring-primary/20'
                                : 'border-primary/50 focus:border-primary focus:ring-primary/20'
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="group btn btn-primary w-full py-4 text-lg font-bold rounded-xl mt-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Heart size={20} className="group-hover:scale-110 transition-transform" />
                    {donationAmount && parseInt(donationAmount) > 0 
                      ? `Confirmer le don de ${parseInt(donationAmount).toLocaleString('fr-FR')} FCFA`
                      : 'Confirmer le don'
                    }
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
              <Shield size={24} className="text-primary" />
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Sécurisé</div>
                <div className="text-xs text-gray-600">Paiement crypté</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
              <TrendingUp size={24} className="text-secondary" />
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Transparent</div>
                <div className="text-xs text-gray-600">100% pour la cause</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
              <Lock size={24} className="text-primary" />
              <div className="text-left">
                <div className="font-semibold text-gray-900 text-sm">Rapide</div>
                <div className="text-xs text-gray-600">Confirmation immédiate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

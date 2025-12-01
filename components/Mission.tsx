import { Target, Rocket, Handshake } from 'lucide-react'

export default function Mission() {
  return (
    <section id="apropos" className="section bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="section-title animate-fade-in">Notre Mission</h2>
        <p className="section-subtitle animate-fade-in">
          Promouvoir, soutenir et développer des initiatives pour améliorer la mobilité 
          des personnes en situation de handicap
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="group relative bg-gradient-to-br from-primary-light to-white p-8 rounded-2xl border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-left hover:-translate-y-2">
            <div className="absolute top-6 right-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Target size={32} color="#0052a3" strokeWidth={2} />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Inclusion Totale
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Contribuer à la pleine inclusion des personnes en situation de handicap 
                dans tous les aspects de la vie sociale, économique et culturelle.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-secondary-light to-white p-8 rounded-2xl border-l-4 border-secondary shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:-translate-y-2">
            <div className="absolute top-6 right-6 w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Rocket size={32} color="#00a86b" strokeWidth={2} />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-secondary">
                Mobilité Améliorée
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Développer des solutions innovantes pour faciliter le déplacement et 
                l'accès aux services essentiels pour les personnes à mobilité réduite.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-primary-light to-white p-8 rounded-2xl border-l-4 border-primary shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-right hover:-translate-y-2">
            <div className="absolute top-6 right-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Handshake size={32} color="#0052a3" strokeWidth={2} />
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Partenariats Solides
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Travailler en collaboration avec les institutions, entreprises et 
                organisations pour créer un écosystème inclusif et accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

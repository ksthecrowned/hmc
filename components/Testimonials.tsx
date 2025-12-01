import { User, UserCircle, Briefcase } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marie Kamba',
      role: 'Bénéficiaire',
      content: 'Grâce à HandiMobilité Congo, j\'ai pu obtenir un fauteuil roulant adapté. Ma vie a complètement changé, je peux maintenant me déplacer librement.',
      icon: User,
      color: '#00a86b'
    },
    {
      name: 'Jean-Baptiste Mboumba',
      role: 'Parent',
      content: 'L\'accompagnement de HMC a permis à mon fils d\'accéder à l\'éducation. L\'école est maintenant accessible et il peut suivre ses cours normalement.',
      icon: UserCircle,
      color: '#0052a3'
    },
    {
      name: 'Sophie Nzouzi',
      role: 'Bénéficiaire',
      content: 'Les formations professionnelles m\'ont aidée à trouver un emploi. Je suis maintenant autonome financièrement et fière de contribuer à la société.',
      icon: Briefcase,
      color: '#00a86b'
    }
  ]

  return (
    <section className="section bg-gradient-hero text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="section-title animate-fade-in text-white" style={{ WebkitTextFillColor: 'white', background: 'none' }}>
          Témoignages
        </h2>
        <p className="section-subtitle animate-fade-in text-white/90">
          La voix de ceux que nous aidons
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {testimonials.map((testimonial, index) => {
            const IconComponent = testimonial.icon
            return (
              <div 
                key={index}
                className="group relative bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl p-8 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Quote icon */}
                <div className="absolute top-4 left-4 text-white/20 text-6xl font-serif leading-none">"</div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-transform shadow-lg">
                      <IconComponent size={32} color="white" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <p className="text-base leading-relaxed mb-6 text-center relative z-10 min-h-[120px] flex items-center">
                    <span className="italic">"{testimonial.content}"</span>
                  </p>
                  
                  <div className="text-center pt-6 border-t border-white/20">
                    <div className="font-bold text-lg mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-sm opacity-90 flex items-center justify-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-white/60"></span>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

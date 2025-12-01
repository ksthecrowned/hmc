import { Target, Heart, Scale, FileText } from 'lucide-react'

export default function Preamble() {
  const preambleSections = [
    {
      icon: Target,
      title: 'Notre Objet',
      content: 'La fondation HandiMobilité Congo, en abrégé HMC, a pour objet de contribuer à la pleine inclusion des personnes en situation de handicap, notamment dans le domaine de la mobilité. Le droit à la liberté de mouvement, à l\'éducation, à la santé, à l\'emploi et à la participation sociale est fondamental pour chaque citoyen. La fondation entend lutter contre toute forme de discrimination, d\'exclusion et de marginalisation liée aux difficultés de mobilité.',
      color: '#0052a3',
      gradient: 'from-primary to-primary-dark'
    },
    {
      icon: Heart,
      title: 'Notre Mission',
      content: 'La mission de HMC est de promouvoir, soutenir et développer des initiatives visant à améliorer la mobilité des personnes en situation de handicap sur l\'ensemble du territoire de la République du Congo, en s\'appuyant sur des valeurs de solidarité, de dignité humaine, de responsabilité civique et de justice sociale.',
      color: '#00a86b',
      gradient: 'from-secondary to-secondary-dark'
    },
    {
      icon: Scale,
      title: 'Nos Engagements',
      content: 'Les actions de la fondation s\'inscrivent dans le respect des engagements internationaux et nationaux de la République du Congo en matière de droits des personnes en situation de handicap.',
      color: '#0052a3',
      gradient: 'from-primary to-primary-dark'
    },
    {
      icon: FileText,
      title: 'Notre Cadre Juridique',
      content: 'Les présents statuts ont pour objet d\'organiser la personnalité juridique, la gouvernance, le fonctionnement et les ressources de la Fondation HandiMobilité Congo (HMC), en conformité avec les lois et règlements en vigueur en République du Congo, notamment ceux relatifs aux associations et fondations à but non lucratif.',
      color: '#00a86b',
      gradient: 'from-secondary to-secondary-dark'
    }
  ]

  return (
    <section className="section bg-linear-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <FileText size={18} className="text-primary" />
            <span className="text-sm font-semibold text-primary">Fondation</span>
          </div>
          <h2 className="section-title animate-fade-in mb-4">PRÉAMBULE</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in">
            Les principes fondamentaux qui guident notre action
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {preambleSections.map((section, index) => {
            const IconComponent = section.icon
            return (
              <div
                key={index}
                className="group card p-8 bg-white hover:shadow-custom-hover transition-all duration-300 animate-fade-in"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both',
                }}
              >
                <div className="flex items-start gap-5 mb-5">
                  <div 
                    className="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${section.color}15, ${section.color}25)`,
                    }}
                  >
                    <IconComponent 
                      size={28} 
                      color={section.color} 
                      strokeWidth={2}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-xl font-bold mb-3"
                      style={{ color: section.color }}
                    >
                      {section.title}
                    </h3>
                  </div>
                </div>
                
                <div className="text-base leading-relaxed text-gray-700">
                  <p>
                    {section.content.split('HMC').map((part, i, arr) => 
                      i < arr.length - 1 ? (
                        <span key={i}>
                          {part}
                          <strong className="text-primary font-semibold">HMC</strong>
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </p>
                </div>
                
                {/* Decorative line */}
                <div 
                  className="mt-6 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, ${section.color}, transparent)`,
                  }}
                />
              </div>
            )
          })}
        </div>
        
        {/* Bottom accent */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-hero rounded-full text-white shadow-lg">
            <Heart size={20} fill="currentColor" />
            <span className="font-semibold">Fondation à but non lucratif</span>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Heart, Crown, Scale, Building2, Globe, Lightbulb } from 'lucide-react'

export default function Values() {
  const values = [
    {
      icon: Heart,
      title: 'Solidarité',
      description: 'Nous croyons en la force de la communauté et de l\'entraide pour surmonter les obstacles.',
      color: '#00a86b'
    },
    {
      icon: Crown,
      title: 'Dignité Humaine',
      description: 'Chaque personne mérite le respect et la reconnaissance de sa valeur intrinsèque.',
      color: '#0052a3'
    },
    {
      icon: Scale,
      title: 'Justice Sociale',
      description: 'Nous luttons pour l\'égalité des chances et l\'accès équitable aux ressources.',
      color: '#00a86b'
    },
    {
      icon: Building2,
      title: 'Responsabilité Civique',
      description: 'Nous assumons notre rôle dans la construction d\'une société plus inclusive.',
      color: '#0052a3'
    },
    {
      icon: Globe,
      title: 'Engagement International',
      description: 'Nous respectons et promouvons les engagements internationaux en matière de droits des personnes handicapées.',
      color: '#00a86b'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Nous cherchons constamment des solutions créatives et efficaces pour améliorer la mobilité.',
      color: '#0052a3'
    }
  ]

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-primary-light">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="section-title animate-fade-in">Nos Valeurs</h2>
        <p className="section-subtitle animate-fade-in">
          Les principes qui guident nos actions et définissent notre engagement
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            const isEven = index % 2 === 0
            return (
              <div 
                key={index}
                className={`group relative overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                  isEven 
                    ? 'bg-white shadow-lg hover:shadow-2xl' 
                    : 'bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-xl'
                }`}
              >
                {/* Decorative circle */}
                <div 
                  className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ backgroundColor: value.color }}
                />
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div 
                      className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                      style={{ 
                        background: `linear-gradient(135deg, ${value.color}20, ${value.color}10)`,
                        border: `3px solid ${value.color}30`
                      }}
                    >
                      <IconComponent size={40} color={value.color} strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center" style={{ color: value.color }}>
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed text-center">
                    {value.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

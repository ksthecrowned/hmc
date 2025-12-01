import { Bus, BookOpen, CircleUser, Megaphone, Building, Wrench } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Accessibilité des Transports',
      description: 'Amélioration de l\'accessibilité des transports publics avec installation de rampes et équipements adaptés.',
      icon: Bus,
      status: 'En cours',
      color: '#0052a3'
    },
    {
      title: 'Formation Professionnelle',
      description: 'Programmes de formation et d\'insertion professionnelle pour les personnes en situation de handicap.',
      icon: BookOpen,
      status: 'Actif',
      color: '#00a86b'
    },
    {
      title: 'Équipements Mobiles',
      description: 'Distribution de fauteuils roulants, béquilles et autres équipements de mobilité aux personnes dans le besoin.',
      icon: CircleUser,
      status: 'Actif',
      color: '#0052a3'
    },
    {
      title: 'Sensibilisation',
      description: 'Campagnes de sensibilisation pour changer les mentalités et promouvoir l\'inclusion dans la société.',
      icon: Megaphone,
      status: 'En cours',
      color: '#00a86b'
    },
    {
      title: 'Infrastructure Accessible',
      description: 'Travaux d\'aménagement pour rendre les bâtiments publics et privés accessibles à tous.',
      icon: Building,
      status: 'Planifié',
      color: '#0052a3'
    },
    {
      title: 'Support Technique',
      description: 'Service d\'assistance technique et de conseil pour l\'aménagement d\'espaces accessibles.',
      icon: Wrench,
      status: 'Actif',
      color: '#00a86b'
    }
  ]

  const getStatusStyles = (status: string) => {
    if (status === 'Actif') {
      return 'bg-secondary-light text-secondary'
    } else if (status === 'En cours') {
      return 'bg-primary-light text-primary'
    }
    return 'bg-gray-100 text-gray-600'
  }

  return (
    <section id="projets" className="section bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="section-title animate-fade-in">Nos Projets</h2>
        <p className="section-subtitle animate-fade-in">
          Des initiatives concrètes pour améliorer la mobilité et l'inclusion
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            const statusColor = project.status === 'Actif' 
              ? '#00a86b' 
              : project.status === 'En cours'
              ? '#0052a3'
              : '#6b7280'
            
            return (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-gray-300 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                {/* Status indicator bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: statusColor }}
                />
                
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
                    style={{
                      background: project.status === 'Actif' 
                        ? 'linear-gradient(135deg, #e6faf5, #d1f2e8)' 
                        : project.status === 'En cours'
                        ? 'linear-gradient(135deg, #e6f2ff, #cfe2ff)'
                        : 'linear-gradient(135deg, #f5f5f5, #e5e5e5)'
                    }}
                  >
                    <IconComponent size={24} color={project.color} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span 
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: `${statusColor}15`,
                        color: statusColor
                      }}
                    >
                      <span 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: statusColor }}
                      />
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

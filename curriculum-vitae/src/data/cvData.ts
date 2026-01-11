import type { CVData } from '../types/cv'

export const initialCVData: CVData = {
  name: 'Mauricio Nicolás Castro',
  profession: 'Estudiante Ing. en Sistemas',
  photoUrl: '/FotoPerfil.jpg',
  
  contact: {
    phone: '3704643666',
    email: 'castromauricionicolas@hotmail.com',
    linkedin: 'Mauricio Nicolás Castro',
    github: 'MauricioCastro16'
  },
  
  technicalSkills: {
    programmingLanguages: ['C', 'C++', 'Python', 'Java', 'Kotlin', 'JavaScript', 'Smalltalk', 'SQL'],
    frameworksAndTools: ['Svelte.js', 'Node.js', 'Tkinter', 'UML', 'Jenkins', 'GitHub Actions', 'Jira', 'Trello', 'Docker'],
    databases: ['MySQL', 'PostgreSQL'],
    softwareAndEnvironments: ['Android Studio', 'Microsoft Project', 'Geogebra', 'MathLab', 'Octave', 'AutoCAD', 'R', 'LaTeX', 'VirtualBox', 'Canva'],
    others: ['Excel (avanzado)', 'PowerPoint (avanzado)', 'Word', 'Render', 'Vercel']
  },
  
  softSkills: [
    { name: 'Comunicación efectiva', visible: true },
    { name: 'Trabajo en equipo', visible: true },
    { name: 'Liderazgo y gestión de proyectos', visible: true },
    { name: 'Resolución de problemas', visible: true },
    { name: 'Adaptabilidad', visible: true },
    { name: 'Autodidacta', visible: true },
    { name: 'Pensamiento crítico', visible: true },
    { name: 'Organización y planificación', visible: true }
  ],
  
  languages: [
    { name: 'Español', level: 'Nativo', visible: true },
    { name: 'Inglés', level: 'Nivel medio-alto', certification: 'certificado por Computrabajo Argentina', visible: true }
  ],
  
  professionalProfile: 'Sólida formación técnica y pasión por la innovación tecnológica. Habilidades en programación, análisis de sistemas y principios económicos, orientado a soluciones y con capacidad para trabajar en equipo y liderar proyectos. Entusiasta, autodidacta, adaptable y comprometido con el aprendizaje continuo y la mejora constante.',
  
  education: [
    {
      degree: 'Ingeniería en Sistemas de Información',
      institution: 'Universidad Tecnológica Nacional - Facultad Regional Resistencia',
      period: 'En curso desde 2021',
      details: ['Actualmente cursando 4º año.'],
      average: '8,00',
      averageWithFailures: '7,80',
      visible: true
    },
    {
      degree: 'Bachiller en Economía',
      institution: 'Instituto Privado General San Martín - Formosa Capital',
      period: 'Marzo 2015 - Diciembre 2020',
      visible: true
    }
  ],
  
  workshops: [
    {
      name: 'Taller Las Series de Fourier en relación con los espacios vectoriales',
      visible: true
    }
  ],
  
  experiences: [
    {
      title: 'Investigador',
      company: 'Centro de Investigación Aplicada en Tecnologías de la Información y Comunicación (CIATIC)',
      period: 'Abril 2024 - Actualidad',
      description: [
        'Desarrollo de herramienta móvil de bajo costo para la caracterización morfológica de granos de arroz (Android Studio):',
        'Java - Abril 2024 a Marzo 2025',
        'Kotlin Multiplatform - Desde Marzo 2025 (para mayor compatibilidad y democratización del acceso)'
      ],
      technologies: ['Java', 'Kotlin', 'Android Studio'],
      visible: true
    }
  ],
  
  congresses: [
    {
      name: 'Congreso Paraguayo de Informática 2024',
      achievement: 'Exposición de investigación en procesamiento de imágenes. Premio al mejor trabajo del simposio.',
      visible: true
    },
    {
      name: 'Congreso Nacional de Estudiantes en Ingeniería en Sistemas (CNEISI)',
      visible: true
    },
    {
      name: 'Congreso Latinoamericano de Educación, Tecnología y Ciencia (Argentina, México y Paraguay)',
      achievement: 'Premio a la mejor exposición de Resistencia.',
      visible: true
    }
  ],
  
  competitions: [
    {
      name: 'RALLY de Innovación 2024',
      visible: true
    },
    {
      name: 'Competencia de optimización de código para la obtención de números sociales',
      achievement: 'Primer puesto',
      visible: true
    }
  ],
  
  projects: [
    { description: 'Tratamiento de archivos, procesamiento de estadísticas y presentación de resultados en Pascal y C.', visible: true },
    { description: 'Experimentación en laboratorio y elaboración de informes.', visible: true },
    { description: 'Desarrollo en Geogebra, MathLab y Octave.', visible: true },
    { description: 'Conocimientos en análisis y diseño de sistemas: UML, PUDS, arquitecturas de software, patrones de diseño.', visible: true },
    { description: 'Parser/Lexer en Python.', visible: true },
    { description: 'Simulador de memoria en Python con Tkinter.', visible: true },
    { description: 'Videojuego en Smalltalk (Pharo IDE).', visible: true },
    { description: 'Modelado de bases de datos relacionales en MySQL y PostgreSQL.', visible: true },
    { description: 'Sistema web con Svelte.js y Node.js (deploy en Vercel).', visible: true },
    { description: 'Desarrollo de aplicación web mediante metodología en cascada con diagramas UML.', visible: true },
    { description: 'Módulo de Economía aprobado en la Facultad de Ciencias Económicas (Introducción a las Ciencias Económicas).', visible: true },
    { description: 'Monografía académica elaborada.', visible: true },
    { description: 'Planificación con Microsoft Project y conocimientos en gestión tradicional.', visible: true },
    { description: 'Conocimientos en seguridad informática (Parrot Security, Nmap).', visible: true },
    { description: 'Simulación de un sistema estocástico para optimización de costos.', visible: true },
    { description: 'Integración continua (Jenkins, GitHub Actions), despliegue en Render, conexión con Slack e integración de IA para síntesis de errores.', visible: true },
    { description: 'Administración avanzada de repositorios en GitHub.', visible: true },
    { description: 'Procesamiento de imágenes en C++ para optimización en dispositivos de bajos recursos.', visible: true }
  ]
}


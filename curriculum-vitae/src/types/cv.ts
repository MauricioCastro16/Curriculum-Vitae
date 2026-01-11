// Tipos para el CV

export interface ContactInfo {
  phone: string
  email: string
  linkedin: string
  github: string
}

export interface TechnicalSkills {
  programmingLanguages: string[]
  frameworksAndTools: string[]
  databases: string[]
  softwareAndEnvironments: string[]
  others: string[]
}

export interface SoftSkill {
  name: string
  visible: boolean
}

export interface Language {
  name: string
  level: string
  certification?: string
  visible: boolean
}

export interface Education {
  degree: string
  institution: string
  period: string
  details?: string[]
  average?: string
  averageWithFailures?: string
  visible: boolean
}

export interface Workshop {
  name: string
  visible: boolean
}

export interface Experience {
  title: string
  company: string
  period: string
  description?: string[]
  technologies?: string[]
  visible: boolean
  customDescription?: string
}

export interface Congress {
  name: string
  achievement?: string
  visible: boolean
  customDescription?: string
}

export interface Competition {
  name: string
  achievement?: string
  visible: boolean
  customDescription?: string
}

export interface Project {
  description: string
  visible: boolean
  customDescription?: string
}

export interface CVData {
  // Header
  name: string
  profession: string
  photoUrl?: string
  
  // Contact
  contact: ContactInfo
  
  // Left Column
  technicalSkills: TechnicalSkills
  softSkills: SoftSkill[]
  languages: Language[]
  
  // Right Column
  professionalProfile: string
  education: Education[]
  workshops: Workshop[]
  experiences: Experience[]
  congresses: Congress[]
  competitions: Competition[]
  projects: Project[]
}

export interface CVConfiguration {
  id: string
  jobTitle: string
  jobDescription: string
  visibleItems: {
    softSkills: string[]
    languages: string[]
    education: string[]
    workshops: string[]
    experiences: string[]
    congresses: string[]
    competitions: string[]
    projects: string[]
  }
  customDescriptions: Record<string, string>
  aiSuggestions?: Record<string, string>
}


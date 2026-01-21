<template>
  <div id="app">
    <DownloadButton :cv-data="cvData" />
    <div class="cv-container" id="cv-content">
      <CVHeader 
        :name="cvData.name"
        :profession="cvData.profession"
        :photo-url="cvData.photoUrl"
      />
      
      <div class="cv-body">
        <div class="cv-left-column">
          <ContactInfo :contact="cvData.contact" />
          <TechnicalSkills :skills="cvData.technicalSkills" />
          <SoftSkills :skills="cvData.softSkills" />
          <Languages :languages="cvData.languages" />
        </div>
        
        <div class="cv-right-column">
          <ProfessionalProfile :profile="cvData.professionalProfile" />
          <Education 
            :education="cvData.education"
            :workshops="cvData.workshops"
          />
          <Experience
            :experiences="cvData.experiences"
            :congresses="cvData.congresses"
            :competitions="cvData.competitions"
          />
          <Projects :projects="cvData.projects" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { initialCVData } from './data/cvData'
import type { CVData } from './types/cv'

import CVHeader from './components/CVHeader.vue'
import ContactInfo from './components/ContactInfo.vue'
import TechnicalSkills from './components/TechnicalSkills.vue'
import SoftSkills from './components/SoftSkills.vue'
import Languages from './components/Languages.vue'
import ProfessionalProfile from './components/ProfessionalProfile.vue'
import Education from './components/Education.vue'
import Experience from './components/Experience.vue'
import Projects from './components/Projects.vue'
import DownloadButton from './components/DownloadButton.vue'

const cvData = ref<CVData>(initialCVData)
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e0 100%);
  padding: 2rem 1rem;
  margin: 0;
}

.cv-container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
}

.cv-body {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 0;
}

.cv-left-column {
  background-color: #f7fafc;
  border-right: 1px solid #e2e8f0;
}

.cv-right-column {
  background-color: white;
  padding: 2rem 0;
}

/* Estilos para PDF - reducir tamaños */
.pdf-export {
  transform: scale(0.85);
  transform-origin: top left;
}

.pdf-export .cv-container {
  max-width: 1000px;
}

.pdf-export .cv-body {
  grid-template-columns: 300px 1fr;
}

.pdf-export .cv-header {
  padding: 1.5rem 1.5rem;
}

.pdf-export .photo {
  width: 120px;
  height: 120px;
}

.pdf-export .name {
  font-size: 2rem;
}

.pdf-export .profession {
  font-size: 1rem;
}

.pdf-export .section-title {
  font-size: 0.9rem;
  padding: 0.7rem 1rem;
}

.pdf-export .section-content {
  padding: 0 1.25rem 1rem 1.25rem;
  font-size: 0.9rem;
}

.pdf-export .contact-info {
  padding: 1.5rem 1.25rem;
  font-size: 0.9rem;
}

/* A4 Print Styles */
@media print {
  @page {
    size: A4;
    margin: 0;
  }
  
  #app {
    background-color: white;
    padding: 0;
  }
  
  .cv-container {
    box-shadow: none;
    max-width: 100%;
  }
  
  .cv-body {
    grid-template-columns: 350px 1fr;
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .cv-body {
    grid-template-columns: 1fr;
  }
  
  .cv-left-column {
    border-right: none;
    border-bottom: 1px solid #e2e8f0;
  }
}
</style>

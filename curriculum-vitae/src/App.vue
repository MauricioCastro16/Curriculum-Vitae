<template>
  <div id="app">
    <DownloadButton />
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

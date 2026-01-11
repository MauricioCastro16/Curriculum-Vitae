<template>
  <div class="section">
    <h3 class="section-title">Experiencia y Actividades Relevantes</h3>
    <div class="section-content">
      <div v-for="exp in visibleExperiences" :key="exp.title" class="experience-item">
        <div class="experience-header">
          <strong class="title">{{ exp.title }}</strong>
        </div>
        <div class="company">{{ exp.company }}</div>
        <div class="period">{{ exp.period }}</div>
        <div v-if="exp.customDescription" class="description" v-html="exp.customDescription"></div>
        <div v-else-if="exp.description" class="description">
          <div v-for="(desc, index) in exp.description" :key="index">{{ desc }}</div>
        </div>
      </div>
      
      <div v-if="visibleCongresses.length > 0" class="subsection">
        <strong class="subsection-title">Participación en Congresos:</strong>
        <div v-for="congress in visibleCongresses" :key="congress.name" class="congress-item">
          <div class="congress-name">{{ congress.name }}</div>
          <div v-if="congress.customDescription" class="congress-achievement" v-html="congress.customDescription"></div>
          <div v-else-if="congress.achievement" class="congress-achievement">{{ congress.achievement }}</div>
        </div>
      </div>
      
      <div v-if="visibleCompetitions.length > 0" class="subsection">
        <strong class="subsection-title">Competencias y Desafíos:</strong>
        <div v-for="competition in visibleCompetitions" :key="competition.name" class="competition-item">
          <div class="competition-name">{{ competition.name }}</div>
          <div v-if="competition.customDescription" class="competition-achievement" v-html="competition.customDescription"></div>
          <div v-else-if="competition.achievement" class="competition-achievement">{{ competition.achievement }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Experience, Congress, Competition } from '../types/cv'

const props = defineProps<{
  experiences: Experience[]
  congresses: Congress[]
  competitions: Competition[]
}>()

const visibleExperiences = computed(() => props.experiences.filter(exp => exp.visible))
const visibleCongresses = computed(() => props.congresses.filter(c => c.visible))
const visibleCompetitions = computed(() => props.competitions.filter(c => c.visible))
</script>

<style scoped>
.section {
  margin-bottom: 1.5rem;
}

.section-title {
  background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
  color: white;
  padding: 0.875rem 1.25rem;
  margin: 0 0 1.25rem 0;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.section-content {
  padding: 0 1.5rem 1.25rem 1.5rem;
}

.experience-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.experience-item:last-child {
  border-bottom: none;
}

.experience-header {
  margin-bottom: 0.5rem;
}

.title {
  color: #2d3748;
  font-size: 1.05rem;
}

.company {
  color: #4a5568;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.period {
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.description {
  color: #4a5568;
  margin-top: 0.5rem;
  line-height: 1.6;
}

.subsection {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.subsection-title {
  color: #2d3748;
  display: block;
  margin-bottom: 0.75rem;
  font-size: 1rem;
}

.congress-item,
.competition-item {
  margin-bottom: 1rem;
}

.congress-name,
.competition-name {
  color: #4a5568;
  font-weight: 500;
  margin-bottom: 0.25rem;
}

.congress-achievement,
.competition-achievement {
  color: #718096;
  font-size: 0.9rem;
  font-style: italic;
}
</style>


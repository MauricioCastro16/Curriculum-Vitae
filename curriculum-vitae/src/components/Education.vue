<template>
  <div class="section">
    <h3 class="section-title">Formación Académica</h3>
    <div class="section-content">
      <div v-for="edu in visibleEducation" :key="edu.degree" class="education-item">
        <div class="education-header">
          <strong class="degree">{{ edu.degree }}</strong>
        </div>
        <div class="institution">{{ edu.institution }}</div>
        <div class="period">{{ edu.period }}</div>
        <div v-if="edu.details" class="details">
          <div v-for="(detail, index) in edu.details" :key="index">{{ detail }}</div>
        </div>
        <div v-if="edu.average" class="average">
          Promedio sin aplazos: {{ edu.average }}
        </div>
        <div v-if="edu.averageWithFailures" class="average">
          Promedio con aplazos: {{ edu.averageWithFailures }}
        </div>
      </div>
      <div v-if="visibleWorkshops.length > 0" class="workshops-section">
        <strong>Asistencia a Talleres:</strong>
        <ul class="workshops-list">
          <li v-for="workshop in visibleWorkshops" :key="workshop.name">
            {{ workshop.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Education, Workshop } from '../types/cv'

const props = defineProps<{
  education: Education[]
  workshops: Workshop[]
}>()

const visibleEducation = computed(() => props.education.filter(edu => edu.visible))
const visibleWorkshops = computed(() => props.workshops.filter(w => w.visible))
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

.education-item {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e2e8f0;
  padding-left: 1rem;
  border-left: 3px solid #1a365d;
}

.education-item:last-child {
  border-bottom: none;
}

.education-header {
  margin-bottom: 0.75rem;
}

.degree {
  color: #1a202c;
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.5;
}

.institution {
  color: #2d3748;
  font-weight: 500;
  font-size: 1.05rem;
  margin-bottom: 0.4rem;
  margin-top: 0.25rem;
}

.period {
  color: #4a5568;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  font-style: italic;
}

.details {
  color: #2d3748;
  margin-top: 0.75rem;
  line-height: 1.8;
  font-size: 1rem;
  padding-left: 1rem;
}

.details div {
  margin-bottom: 0.4rem;
}

.average {
  color: #2d3748;
  font-size: 1rem;
  margin-top: 0.5rem;
  padding-left: 1rem;
}

.workshops-section {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid #e2e8f0;
  padding-left: 1rem;
}

.workshops-section strong {
  color: #1a202c;
  display: block;
  margin-bottom: 0.75rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.workshops-list {
  list-style: disc;
  padding-left: 2rem;
  color: #2d3748;
  margin: 0;
  line-height: 1.8;
}

.workshops-list li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}
</style>


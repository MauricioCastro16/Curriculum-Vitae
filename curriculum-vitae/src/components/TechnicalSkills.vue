<template>
  <div class="section">
    <h3 class="section-title">Habilidades Técnicas</h3>
    <div class="section-content">
      <div class="skill-category">
        <strong>Lenguajes de programación:</strong>
        <p>{{ skills.programmingLanguages.join(', ') }}.</p>
      </div>
      <div class="skill-category">
        <strong>Frameworks y herramientas:</strong>
        <p>{{ skills.frameworksAndTools.join(', ') }}.</p>
      </div>
      <div class="skill-category">
        <strong>Bases de datos:</strong>
        <p>{{ skills.databases.join(', ') }}.</p>
      </div>
      <div class="skill-category">
        <strong>Software y entornos:</strong>
        <p>{{ skills.softwareAndEnvironments.join(', ') }}.</p>
      </div>
      <div class="skill-category">
        <strong>Otros:</strong>
        <p>{{ skills.others.join(', ') }}.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TechnicalSkills as TechnicalSkillsType } from '../types/cv'

defineProps<{
  skills: TechnicalSkillsType
}>()
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
  padding: 0 1.25rem 1rem 1.25rem;
}

.skill-category {
  margin-bottom: 1rem;
}

.skill-category {
  margin-bottom: 1.25rem;
}

.skill-category strong {
  display: block;
  margin-bottom: 0.5rem;
  color: #1a202c;
  font-weight: 600;
  font-size: 1.05rem;
}

.skill-category p {
  margin: 0;
  padding-left: 1rem;
  color: #2d3748;
  line-height: 1.8;
  font-size: 1rem;
}
</style>


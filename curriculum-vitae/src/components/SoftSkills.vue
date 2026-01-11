<template>
  <div class="section">
    <h3 class="section-title">Competencias Blandas</h3>
    <div class="section-content">
      <ul class="skills-list">
        <li v-for="skill in visibleSkills" :key="skill.name">
          {{ skill.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SoftSkill } from '../types/cv'

const props = defineProps<{
  skills: SoftSkill[]
}>()

const visibleSkills = computed(() => props.skills.filter(skill => skill.visible))
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

.skills-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skills-list li {
  padding: 0.4rem 0;
  color: #4a5568;
  border-bottom: 1px solid #e2e8f0;
}

.skills-list li:last-child {
  border-bottom: none;
}
</style>


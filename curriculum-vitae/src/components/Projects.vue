<template>
  <div class="section">
    <h3 class="section-title">Proyectos y Logros Técnicos</h3>
    <div class="section-content">
      <ul class="projects-list">
        <li v-for="(project, index) in visibleProjects" :key="index" class="project-item">
          <span v-if="project.customDescription" v-html="project.customDescription"></span>
          <span v-else>{{ project.description }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from '../types/cv'

const props = defineProps<{
  projects: Project[]
}>()

const visibleProjects = computed(() => props.projects.filter(project => project.visible))
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

.projects-list {
  list-style: disc;
  padding-left: 1.5rem;
  margin: 0;
}

.project-item {
  color: #4a5568;
  margin-bottom: 0.5rem;
  line-height: 1.6;
}
</style>


<template>
  <div class="section">
    <h3 class="section-title">Idiomas</h3>
    <div class="section-content">
      <div v-for="language in visibleLanguages" :key="language.name" class="language-item">
        <strong>{{ language.name }}:</strong>
        <span>{{ language.level }}</span>
        <span v-if="language.certification" class="certification">({{ language.certification }})</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Language } from '../types/cv'

const props = defineProps<{
  languages: Language[]
}>()

const visibleLanguages = computed(() => props.languages.filter(lang => lang.visible))
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

.language-item {
  margin-bottom: 1rem;
  padding-left: 1rem;
  color: #2d3748;
  line-height: 1.7;
  font-size: 1rem;
}

.language-item strong {
  color: #1a202c;
  font-weight: 600;
  margin-right: 0.5rem;
}

.certification {
  font-style: italic;
  color: #4a5568;
  font-size: 0.95rem;
}
</style>


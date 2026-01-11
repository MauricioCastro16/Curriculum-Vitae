<template>
  <div class="contact-info">
    <div class="contact-item">
      <i class="fas fa-phone icon"></i>
      <span>{{ contact.phone }}</span>
    </div>
    <div class="contact-item">
      <i class="fas fa-envelope icon"></i>
      <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
    </div>
    <div class="contact-item">
      <i class="fab fa-linkedin icon"></i>
      <a href="https://www.linkedin.com/in/mauricio-nicol%C3%A1s-castro-5342092b8/" target="_blank">{{ contact.linkedin }}</a>
    </div>
    <div class="contact-item">
      <i class="fab fa-github icon"></i>
      <a :href="`https://github.com/${contact.github}`" target="_blank">{{ contact.github }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ContactInfo as ContactInfoType } from '../types/cv'

defineProps<{
  contact: ContactInfoType
}>()
</script>

<style scoped>
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border-bottom: 1px solid #e2e8f0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  padding: 0.6rem 0;
  transition: transform 0.2s ease;
  line-height: 1.6;
}

.contact-item:hover {
  transform: translateX(4px);
}

.icon {
  font-size: 1.1rem;
  flex-shrink: 0;
  width: 20px;
  text-align: center;
  color: #1a365d;
}

.contact-item a {
  color: #2d3748;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-item a:hover {
  color: #1a365d;
  text-decoration: underline;
}
</style>


<template>
  <div class="section">
    <h3 class="section-title">Perfil Profesional</h3>
    <div class="section-content">
      <p class="profile-text">{{ profile }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  profile: string
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
  padding: 0 1.5rem 1.25rem 1.5rem;
}

.profile-text {
  color: #2d3748;
  line-height: 1.85;
  text-align: justify;
  margin: 0;
  font-size: 1.05rem;
}
</style>


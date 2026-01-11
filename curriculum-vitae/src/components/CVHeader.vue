<template>
  <div class="cv-header">
    <div class="header-content">
      <div class="photo-container">
        <img :src="photoUrl || '/FotoPerfil.jpg'" alt="Foto profesional" class="photo" />
      </div>
      <div class="header-text">
        <h1 class="name">{{ name }}</h1>
        <h2 class="profession">{{ profession }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  profession: string
  photoUrl?: string
}>()
</script>

<style scoped>
.cv-header {
  background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
  padding: 2.5rem 2rem;
  margin-bottom: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.photo-container {
  flex-shrink: 0;
}

.photo {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.header-text {
  flex: 1;
}

.name {
  color: white;
  font-size: 2.75rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  text-align: left;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profession {
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0;
  text-align: left;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    text-align: center;
  }
  
  .name,
  .profession {
    text-align: center;
  }
}
</style>


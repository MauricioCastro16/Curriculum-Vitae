<template>
  <button @click="handleDownload" :disabled="isGenerating" class="download-button">
    <i class="fas fa-download"></i>
    <span>{{ isGenerating ? 'Generando...' : 'Descargar PDF' }}</span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { usePDF } from '../composables/usePDF'

const { generatePDF } = usePDF()
const isGenerating = ref(false)

const handleDownload = async () => {
  isGenerating.value = true
  try {
    await generatePDF()
  } finally {
    // Pequeño delay para que el usuario vea el feedback
    setTimeout(() => {
      isGenerating.value = false
    }, 500)
  }
}
</script>

<style scoped>
.download-button {
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%);
  color: white;
  border: none;
  padding: 0.875rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 4px 12px rgba(26, 54, 93, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
}

.download-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(26, 54, 93, 0.4);
  background: linear-gradient(135deg, #2c5282 0%, #3182ce 100%);
}

.download-button:active:not(:disabled) {
  transform: translateY(0);
}

.download-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.download-button i {
  font-size: 1.1rem;
}

@media print {
  .download-button {
    display: none;
  }
}

@media (max-width: 768px) {
  .download-button {
    top: 1rem;
    right: 1rem;
    padding: 0.75rem 1.25rem;
    font-size: 0.9rem;
  }
  
  .download-button span {
    display: none;
  }
  
  .download-button i {
    font-size: 1.2rem;
  }
}
</style>


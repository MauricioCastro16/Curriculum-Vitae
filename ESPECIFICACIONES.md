# Especificaciones del Proyecto - CV Interactivo

## Objetivo
Crear una página web interactiva para el CV de Mauricio Nicolás Castro que reemplace el diseño actual en Canva, con funcionalidades avanzadas de personalización y exportación.

## Funcionalidades Requeridas

### 1. Visualización y Compartir
- **Compartir como enlace**: La página debe ser accesible vía URL (Vercel)
- **Visualización completa**: Ver el CV completo sin ningún filtro aplicado

### 2. Exportación a PDF
- **Formato A4**: El PDF debe estar en formato A4
- **Descarga directa**: Botón/opción para descargar el CV como PDF

### 3. Personalización por Puesto
- **Integración con OpenRouter + DeepSeek**: 
  - Conectar a OpenRouter API para usar el modelo DeepSeek
  - Pasar lista completa de logros, experiencias, habilidades
  - Pasar descripción del cargo al que se aplica
  - Recibir recomendaciones de qué elementos mostrar y por qué
  - Mostrar explicación de por qué cada elemento es relevante para el puesto

### 4. Modo de Edición Manual
- **Edición completa**: Poder editar manualmente qué elementos mostrar/ocultar
- **Descripciones personalizadas**: Agregar descripciones personalizadas a cada elemento
- **Editar respuestas de IA**: Poder corregir/editar las respuestas y sugerencias de la IA
- **Guardar configuraciones**: Guardar diferentes configuraciones para diferentes puestos

### 5. Gestión de Contenido del CV
- **Agregar nuevos datos**: Poder ingresar nuevos elementos al curriculum (certificados, experiencias, habilidades, logros, etc.)
- **Organización automática con IA**: 
  - La IA analiza el nuevo contenido ingresado
  - Identifica automáticamente a qué sección del CV pertenece (Formación Académica, Experiencia, Habilidades Técnicas, Proyectos, etc.)
  - Sugiere la ubicación más apropiada y el formato adecuado
  - Permite revisar y confirmar la ubicación antes de agregarlo
- **Edición manual de ubicación**: Poder mover manualmente el contenido a otra sección si es necesario

## Estructura del CV

El CV debe mantener la misma estructura que el diseño actual:

### Header
1. **Foto profesional** (lado izquierdo)
2. **Nombre**: Mauricio Nicolás Castro
3. **Profesión**: Estudiante Ing. en Sistemas

### Datos Personales (4 elementos)
1. Teléfono: 3704643666
2. Email: castromauricionicolas@hotmail.com
3. LinkedIn: Mauricio Nicolás Castro (enlace)
4. GitHub: MauricioCastro16 (enlace)

### Columna Izquierda
1. **Habilidades Técnicas**
   - Lenguajes de programación
   - Frameworks y herramientas
   - Bases de datos
   - Software y entornos
   - Otros

2. **Competencias Blandas**
   - Lista de habilidades blandas

3. **Idiomas**
   - Español (Nativo)
   - Inglés (Nivel medio-alto, certificado)

### Columna Derecha
1. **Perfil Profesional**
   - Texto descriptivo

2. **Formación Académica**
   - Ingeniería en Sistemas de Información
   - Bachiller en Economía
   - Talleres asistidos

3. **Experiencia y Actividades Relevantes**
   - Investigador en CIATIC
   - Participación en Congresos
   - Competencias y Desafíos

4. **Proyectos y Logros Técnicos**
   - Lista detallada de proyectos y logros

## Requisitos Técnicos

### Stack Tecnológico Decidido
- **Frontend**: Vue 3 + TypeScript + Vite
- **Generación de PDF**: html2pdf.js
- **Plataforma de Deploy**: Vercel (con deploy automático desde GitHub)
- **Backend Serverless**: Vercel Functions (para OpenRouter API)

### Consideraciones
- La API key de OpenRouter NO debe exponerse en el frontend (usar Vercel Functions)
- Generación de PDF del lado del cliente con html2pdf.js
- Responsive design (aunque principalmente para impresión PDF)
- Deploy automático configurado en Vercel

## Notas Adicionales
- Mantener el diseño visual similar al actual (dos columnas, colores azul oscuro para secciones)
- Permitir alternar entre vista completa, vista filtrada por IA, y modo edición manual
- Las configuraciones guardadas pueden almacenarse en localStorage del navegador


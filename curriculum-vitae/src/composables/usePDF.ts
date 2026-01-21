import { jsPDF } from 'jspdf'
import type { CVData } from '../types/cv'

// Función auxiliar para cargar imagen a base64
const loadImageAsBase64 = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (!ctx) {
        reject(new Error('Could not get canvas context'))
        return
      }
      ctx.drawImage(img, 0, 0)
      try {
        const dataURL = canvas.toDataURL('image/jpeg', 0.9)
        resolve(dataURL)
      } catch (e) {
        reject(e)
      }
    }
    img.onerror = reject
    // Intentar cargar desde public
    img.src = url.startsWith('http') ? url : (window.location.origin + url)
  })
}

export function usePDF() {
  const generatePDF = async (cvData: CVData) => {
    try {
      // Crear documento PDF A4
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      })

      // Configuración
      const pageWidth = doc.internal.pageSize.getWidth()
      const pageHeight = doc.internal.pageSize.getHeight()
      const margin = 12
      const leftColWidth = 65
      const rightColStart = margin + leftColWidth + 8
      const rightColWidth = pageWidth - rightColStart - margin
      
      let yPos = margin

      // Header con fondo azul
      doc.setFillColor(26, 54, 93) // #1a365d
      doc.rect(0, 0, pageWidth, 42, 'F')
      
      // Intentar cargar y agregar foto
      let photoAdded = false
      const photoSize = 32
      if (cvData.photoUrl) {
        try {
          const photoBase64 = await loadImageAsBase64(cvData.photoUrl)
          const photoX = margin + 5
          const photoY = margin + 5
          doc.addImage(photoBase64, 'JPEG', photoX, photoY, photoSize, photoSize)
          photoAdded = true
        } catch (e) {
          console.warn('No se pudo cargar la foto:', e)
        }
      }
      
      // Nombre y profesión
      const nameX = photoAdded ? margin + photoSize + 10 : margin
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(22)
      doc.setFont('helvetica', 'bold')
      doc.text(cvData.name, nameX, yPos + 12)
      
      doc.setFontSize(11)
      doc.setFont('helvetica', 'normal')
      doc.text(cvData.profession, nameX, yPos + 19)
      
      yPos = 46

      // COLUMNA IZQUIERDA
      const leftX = margin
      let leftY = yPos

      // Contacto - con borde
      doc.setDrawColor(226, 232, 240) // #e2e8f0
      doc.setFillColor(247, 250, 252) // #f7fafc
      doc.setLineWidth(0.5)
      doc.roundedRect(leftX, leftY, leftColWidth, 35, 2, 2, 'FD')
      
      doc.setFontSize(9)
      doc.setTextColor(45, 55, 72) // #2d3748
      doc.setFont('helvetica', 'normal')
      
      let contactY = leftY + 6
      doc.setFont('helvetica', 'bold')
      doc.text('CONTACTO', leftX + 3, contactY)
      contactY += 7
      doc.setFont('helvetica', 'normal')
      doc.text(`Tel: ${cvData.contact.phone}`, leftX + 3, contactY)
      contactY += 5.5
      doc.text(cvData.contact.email, leftX + 3, contactY)
      contactY += 5.5
      doc.text(`LinkedIn: ${cvData.contact.linkedin}`, leftX + 3, contactY)
      contactY += 5.5
      doc.text(`GitHub: ${cvData.contact.github}`, leftX + 3, contactY)
      
      leftY = contactY + 12

      // Función auxiliar para secciones
      const addSection = (title: string, content: () => void) => {
        // Título de sección con fondo azul
        doc.setFillColor(26, 54, 93)
        doc.setDrawColor(26, 54, 93)
        doc.roundedRect(leftX, leftY, leftColWidth, 7, 1, 1, 'F')
        doc.setTextColor(255, 255, 255)
        doc.setFontSize(9)
        doc.setFont('helvetica', 'bold')
        doc.text(title, leftX + 3, leftY + 5)
        leftY += 11 // Aumentado de 9 a 11 para más espacio entre título y contenido
        
        // Contenido
        doc.setTextColor(45, 55, 72)
        doc.setFontSize(8)
        doc.setFont('helvetica', 'normal')
        content()
        leftY += 5
      }

      // Habilidades Técnicas
      addSection('HABILIDADES TÉCNICAS', () => {
        const addSkills = (title: string, items: string[]) => {
          doc.setFont('helvetica', 'bold')
          doc.setFontSize(8)
          doc.text(title, leftX + 3, leftY)
          leftY += 4.5
          doc.setFont('helvetica', 'normal')
          const text = items.join(', ')
          const lines = doc.splitTextToSize(text, leftColWidth - 6)
          doc.text(lines, leftX + 3, leftY)
          leftY += lines.length * 3.8 + 2
        }

        addSkills('Lenguajes:', cvData.technicalSkills.programmingLanguages)
        addSkills('Frameworks:', cvData.technicalSkills.frameworksAndTools)
        addSkills('Bases de datos:', cvData.technicalSkills.databases)
        addSkills('Software:', cvData.technicalSkills.softwareAndEnvironments)
        addSkills('Otros:', cvData.technicalSkills.others)
      })

      // Competencias Blandas
      addSection('COMPETENCIAS BLANDAS', () => {
        cvData.softSkills.filter(s => s.visible).forEach(skill => {
          doc.text(`• ${skill.name}`, leftX + 3, leftY)
          leftY += 4.2
        })
      })

      // Idiomas
      addSection('IDIOMAS', () => {
        cvData.languages.filter(l => l.visible).forEach(lang => {
          doc.setFont('helvetica', 'bold')
          doc.text(`${lang.name}:`, leftX + 3, leftY)
          doc.setFont('helvetica', 'normal')
          doc.text(lang.level, leftX + 12, leftY)
          leftY += 4.5
          if (lang.certification) {
            doc.setFontSize(7)
            const certLines = doc.splitTextToSize(`(${lang.certification})`, leftColWidth - 6)
            doc.text(certLines, leftX + 3, leftY)
            leftY += certLines.length * 3.5
            doc.setFontSize(8)
          }
        })
      })

      // COLUMNA DERECHA
      let rightY = yPos
      const rightX = rightColStart

      // Función para secciones derechas
      const addRightSection = (title: string, content: () => void) => {
        // Verificar si necesita nueva página
        if (rightY > pageHeight - 50) {
          doc.addPage()
          rightY = margin
        }

        // Título de sección
        doc.setFillColor(26, 54, 93)
        doc.roundedRect(rightX, rightY, rightColWidth, 7, 1, 1, 'F')
        doc.setTextColor(255, 255, 255)
        doc.setFontSize(9)
        doc.setFont('helvetica', 'bold')
        doc.text(title, rightX + 3, rightY + 5)
        rightY += 11 // Aumentado de 9 a 11 para más espacio entre título y contenido
        
        doc.setTextColor(45, 55, 72)
        doc.setFontSize(9)
        content()
        rightY += 6
      }

      // Perfil Profesional
      addRightSection('PERFIL PROFESIONAL', () => {
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(9)
        const profileLines = doc.splitTextToSize(cvData.professionalProfile, rightColWidth - 6)
        doc.text(profileLines, rightX + 3, rightY)
        rightY += profileLines.length * 5
      })

      // Formación Académica
      addRightSection('FORMACIÓN ACADÉMICA', () => {
        cvData.education.filter(e => e.visible).forEach((edu, idx) => {
          if (idx > 0) rightY += 3
          
          doc.setFont('helvetica', 'bold')
          doc.setFontSize(9.5)
          const degreeLines = doc.splitTextToSize(edu.degree, rightColWidth - 6)
          doc.text(degreeLines, rightX + 3, rightY)
          rightY += degreeLines.length * 4.5
          
          doc.setFont('helvetica', 'normal')
          doc.setFontSize(8.5)
          const instLines = doc.splitTextToSize(edu.institution, rightColWidth - 6)
          doc.text(instLines, rightX + 3, rightY)
          rightY += instLines.length * 4
          doc.text(edu.period, rightX + 3, rightY)
          rightY += 4
          
          if (edu.details) {
            edu.details.forEach(detail => {
              const detailLines = doc.splitTextToSize(detail, rightColWidth - 6)
              doc.text(detailLines, rightX + 5, rightY)
              rightY += detailLines.length * 4
            })
          }
          if (edu.average) {
            doc.text(`Promedio sin aplazos: ${edu.average}`, rightX + 5, rightY)
            rightY += 4
          }
          if (edu.averageWithFailures) {
            doc.text(`Promedio con aplazos: ${edu.averageWithFailures}`, rightX + 5, rightY)
            rightY += 4
          }
        })

        // Talleres
        const visibleWorkshops = cvData.workshops.filter(w => w.visible)
        if (visibleWorkshops.length > 0) {
          rightY += 3
          doc.setFont('helvetica', 'bold')
          doc.text('Asistencia a Talleres:', rightX + 3, rightY)
          rightY += 5
          doc.setFont('helvetica', 'normal')
          doc.setFontSize(8.5)
          visibleWorkshops.forEach(workshop => {
            const workshopLines = doc.splitTextToSize(`• ${workshop.name}`, rightColWidth - 6)
            doc.text(workshopLines, rightX + 3, rightY)
            rightY += workshopLines.length * 4
          })
        }
      })

      // Experiencia
      addRightSection('EXPERIENCIA Y ACTIVIDADES', () => {
        cvData.experiences.filter(e => e.visible).forEach(exp => {
          doc.setFont('helvetica', 'bold')
          doc.setFontSize(9.5)
          doc.text(exp.title, rightX + 3, rightY)
          rightY += 5
          doc.setFont('helvetica', 'normal')
          doc.setFontSize(8.5)
          const companyLines = doc.splitTextToSize(exp.company, rightColWidth - 6)
          doc.text(companyLines, rightX + 3, rightY)
          rightY += companyLines.length * 4
          doc.text(exp.period, rightX + 3, rightY)
          rightY += 4.5
          if (exp.description) {
            exp.description.forEach(desc => {
              const descLines = doc.splitTextToSize(desc, rightColWidth - 8)
              doc.text(descLines, rightX + 5, rightY)
              rightY += descLines.length * 4
            })
          }
          rightY += 3
        })

        // Congresos
        const visibleCongresses = cvData.congresses.filter(c => c.visible)
        if (visibleCongresses.length > 0) {
          rightY += 2
          doc.setFont('helvetica', 'bold')
          doc.text('Participación en Congresos:', rightX + 3, rightY)
          rightY += 5
          doc.setFont('helvetica', 'normal')
          doc.setFontSize(8.5)
          visibleCongresses.forEach(congress => {
            const congressLines = doc.splitTextToSize(`• ${congress.name}`, rightColWidth - 6)
            doc.text(congressLines, rightX + 3, rightY)
            rightY += congressLines.length * 4
            if (congress.achievement) {
              const achievementLines = doc.splitTextToSize(congress.achievement, rightColWidth - 8)
              doc.text(achievementLines, rightX + 5, rightY)
              rightY += achievementLines.length * 4
            }
          })
        }

        // Competencias
        const visibleCompetitions = cvData.competitions.filter(c => c.visible)
        if (visibleCompetitions.length > 0) {
          rightY += 2
          doc.setFont('helvetica', 'bold')
          doc.text('Competencias y Desafíos:', rightX + 3, rightY)
          rightY += 5
          doc.setFont('helvetica', 'normal')
          doc.setFontSize(8.5)
          visibleCompetitions.forEach(comp => {
            const compLines = doc.splitTextToSize(`• ${comp.name}`, rightColWidth - 6)
            doc.text(compLines, rightX + 3, rightY)
            rightY += compLines.length * 4
            if (comp.achievement) {
              const achievementLines = doc.splitTextToSize(comp.achievement, rightColWidth - 8)
              doc.text(achievementLines, rightX + 5, rightY)
              rightY += achievementLines.length * 4
            }
          })
        }
      })

      // Proyectos
      addRightSection('PROYECTOS Y LOGROS TÉCNICOS', () => {
        doc.setFontSize(8.5)
        doc.setFont('helvetica', 'normal')
        cvData.projects.filter(p => p.visible).forEach(project => {
          if (rightY > pageHeight - 15) {
            doc.addPage()
            rightY = margin
          }
          const projectLines = doc.splitTextToSize(`• ${project.description}`, rightColWidth - 6)
          doc.text(projectLines, rightX + 3, rightY)
          rightY += projectLines.length * 4
        })
      })

      // Metadata
      doc.setProperties({
        title: 'CV - Mauricio Nicolás Castro',
        subject: 'Curriculum Vitae - Ingeniería en Sistemas',
        author: 'Mauricio Nicolás Castro',
        keywords: 'CV, Curriculum Vitae, Ingeniería en Sistemas, Desarrollo de Software, Programación'
      })

      // Guardar PDF
      doc.save('CV_Mauricio_Nicolas_Castro.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error al generar el PDF. Por favor, intenta nuevamente.')
    }
  }

  return {
    generatePDF
  }
}

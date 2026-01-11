import html2pdf from 'html2pdf.js'

export function usePDF() {
  const generatePDF = async () => {
    const element = document.getElementById('cv-content')
    if (!element) {
      console.error('CV content element not found')
      return
    }

    const opt = {
      margin: [5, 5, 5, 5] as [number, number, number, number],
      filename: 'CV_Mauricio_Nicolas_Castro.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true,
        windowWidth: 1200
      },
      jsPDF: { 
        unit: 'mm' as const, 
        format: 'a4' as const, 
        orientation: 'portrait' as const,
        compress: true
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] as const }
    }

    try {
      await html2pdf().set(opt).from(element).save()
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error al generar el PDF. Por favor, intenta nuevamente.')
    }
  }

  return {
    generatePDF
  }
}


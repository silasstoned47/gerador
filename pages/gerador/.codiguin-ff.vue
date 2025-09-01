<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from 'vue'

// Import client-side only components
const BingoCard = defineAsyncComponent(() => import('../../components/BingoCard.vue'))

// Only import jsPDF and html2canvas on client-side
let jsPDF
let html2canvas

onMounted(async () => {
  if (process.client) {
    const jsPDFModule = await import('jspdf')
    jsPDF = jsPDFModule.default
    
    const html2canvasModule = await import('html2canvas')
    html2canvas = html2canvasModule.default
  }
})

// Main content
const config = ref({
  title: 'BINGO - JOGO 001',
  numCards: 10,
  colorMode: 'color', // 'color' or 'bw'
  pageSize: 'A4',
  layout: '2x2', // '2x2' or '3x3'
  cardsPerPage: 4 // Will be updated based on layout
})

// Computed properties
const cardsPerPage = computed(() => {
  return config.value.layout === '2x2' ? 4 : 9
})

const totalPages = computed(() => {
  return Math.ceil(config.value.numCards / cardsPerPage.value)
})

// Methods
const generatePDF = async () => {
  if (!jsPDF || !html2canvas) {
    alert('Aguarde os recursos carregarem completamente')
    return
  }
  
  const loading = document.createElement('div')
  loading.style.position = 'fixed'
  loading.style.top = '0'
  loading.style.left = '0'
  loading.style.width = '100%'
  loading.style.height = '100%'
  loading.style.backgroundColor = 'rgba(0,0,0,0.5)'
  loading.style.display = 'flex'
  loading.style.justifyContent = 'center'
  loading.style.alignItems = 'center'
  loading.style.zIndex = '9999'
  loading.innerHTML = `
    <div style="background: white; padding: 2rem; border-radius: 8px; text-align: center;">
      <p>Gerando PDF, aguarde...</p>
      <div class="spinner" style="margin: 1rem auto; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #e53e3e; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `
  document.body.appendChild(loading)
  
  try {
    const doc = new jsPDF({
      orientation: config.value.pageSize === 'A4' ? 'portrait' : 'landscape',
      unit: 'mm',
      format: config.value.pageSize.toLowerCase()
    })

    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 10
    const cardsPerRow = config.value.layout === '2x2' ? 2 : 3
    const cardWidth = (pageWidth - (margin * (cardsPerRow + 1))) / cardsPerRow
    const cardHeight = cardWidth * 1.4 // Maintain aspect ratio

    let currentPage = 1
    let cardCount = 0

    for (let i = 0; i < config.value.numCards; i++) {
      if (cardCount > 0 && cardCount % cardsPerPage.value === 0) {
        doc.addPage()
        currentPage++
      }

      const row = Math.floor((cardCount % cardsPerPage.value) / cardsPerRow)
      const col = cardCount % cardsPerRow
      
      const x = margin + (col * (cardWidth + margin))
      const y = margin + (row * (cardHeight + margin))

      // Create a temporary container for the card with reduced size
      const tempContainer = document.createElement('div')
      tempContainer.style.position = 'absolute'
      tempContainer.style.left = '-9999px'
      tempContainer.style.top = '0'
      tempContainer.style.width = '250px' // Reduced from 300px
      document.body.appendChild(tempContainer)
      
      // Create a new Vue app for each card
      const { createApp } = await import('vue')
      const cardApp = createApp(BingoCard, {
        title: config.value.title.split(' - ')[0],
        cardNumber: i + 1,
        colorMode: config.value.colorMode
      })
      
      // Mount the card
      const cardInstance = cardApp.mount(tempContainer)
      
      // Wait for the next tick to ensure the card is rendered
      await new Promise(resolve => setTimeout(resolve, 50)) // Reduced from 100ms
      
      // Get the card element
      const cardElement = tempContainer.firstElementChild
      
      // Convert to canvas with optimized settings
      const canvas = await html2canvas(cardElement, {
        scale: 1.5, // Reduced from 2
        useCORS: true,
        allowTaint: true,
        backgroundColor: 'white',
        logging: false, // Disable console logging
        imageTimeout: 15000, // Reduce timeout
        removeContainer: true // Clean up temporary container automatically
      })
      
      // Use JPEG with quality 0.8 for smaller file size
      const imgData = canvas.toDataURL('image/jpeg', 0.8)
      doc.addImage(imgData, 'JPEG', x, y, cardWidth, cardHeight)
      
      // Clean up
      cardApp.unmount()
      document.body.removeChild(tempContainer)
      
      // Add control sheet at the end after all cards are generated
      if (i === config.value.numCards - 1) {
        doc.addPage()
        
        // Add title
        doc.setFontSize(16)
        doc.setFont('helvetica', 'bold')
        doc.text('FOLHA CONTROLADORA DO BINGO', 105, 20, { align: 'center' })
        
        // Add caption
        doc.setFontSize(10)
        doc.setFont('helvetica', 'normal')
        doc.text('Impresso de forma gratuita em geradorii.com', 105, 28, { align: 'center' })
        
        // Table settings
        const startX = 20
        const startY = 40
        const cellWidth = 33
        const cellHeight = 12
        const headerHeight = 15
        
        // Draw table headers
        doc.setFont('helvetica', 'bold')
        const headers = ['B', 'I', 'N', 'G', 'O']
        headers.forEach((header, index) => {
          doc.rect(startX + (index * cellWidth), startY, cellWidth, headerHeight, 'S')
          doc.text(header, startX + (index * cellWidth) + (cellWidth / 2), startY + headerHeight - 4, { align: 'center' })
        })
        
        // Draw table cells with numbers
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(10)
        
        // Define number ranges for each column
        const numberRanges = [
          { start: 1, end: 15 },   // B
          { start: 16, end: 30 },  // I
          { start: 31, end: 45 },  // N
          { start: 46, end: 60 },  // G
          { start: 61, end: 75 }   // O
        ]
        
        // Draw 15 rows of numbers (3 per column)
        for (let row = 0; row < 15; row++) {
          for (let col = 0; col < 5; col++) {
            const x = startX + (col * cellWidth)
            const y = startY + headerHeight + (row * cellHeight)
            
            // Draw cell border
            doc.rect(x, y, cellWidth, cellHeight, 'S')
            
            // Calculate and draw number if within range
            const number = numberRanges[col].start + row
            if (number <= numberRanges[col].end) {
              doc.text(number.toString(), x + 5, y + cellHeight - 4)
            }
          }
        }
      }
      
      // Add footer URL to all pages
      const pageCount = doc.internal.getNumberOfPages()
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i)
        
        // Save current graphics state
        doc.saveGraphicsState()
        
        // Set footer style
        doc.setFontSize(10)
        doc.setTextColor(100)
        doc.setFont('helvetica', 'normal')
        
        // Add URL at bottom center of page
        const pageWidth = doc.internal.pageSize.getWidth()
        const text = 'https://geradorii.com/imprimir/cartela-bingo'
        const textWidth = doc.getTextWidth(text)
        doc.text(text, (pageWidth - textWidth) / 2, doc.internal.pageSize.getHeight() - 10)
        
        // Restore graphics state
        doc.restoreGraphicsState()
      }
      
      // Save PDF if this is the last card
      if (i === config.value.numCards - 1) {
        doc.save(`cartelas-bingo-${new Date().toISOString().slice(0, 10)}.pdf`)
        document.body.removeChild(loading)
      }
      
      cardCount++
    }
  } catch (error) {
    console.error('Error generating PDF:', error)
    alert('Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.')
    if (document.body.contains(loading)) {
      document.body.removeChild(loading)
    }
  }
}

// FAQ Data
const faqs = [
  {
    question: "Como imprimir as cartelas?",
    answer: "Após gerar o PDF, clique no botão de download que aparecerá no seu navegador. Em seguida, abra o arquivo e use a opção de impressão do seu leitor de PDF."
  },
  {
    question: "Quantas cartelas posso gerar?",
    answer: "Você pode gerar de 1 a 50 cartelas por arquivo. Se precisar de mais, basta gerar múltiplos arquivos."
  },
  {
    question: "As cartelas são realmente aleatórias?",
    answer: "Sim, cada cartela é gerada com números aleatórios dentro dos intervalos padrão do bingo (B: 1-15, I: 16-30, N: 31-45, G: 46-60, O: 61-75)."
  },
  {
    question: "Posso personalizar as cores?",
    answer: "Sim, você pode escolher entre o modo colorido ou preto e branco antes de gerar as cartelas."
  },
  {
    question: "Posso usar essas cartelas para eventos comerciais?",
    answer: "Sim, você pode usar as cartelas geradas para fins pessoais e comerciais sem restrições."
  }
]

// Update layout when config changes
watch(() => config.value.layout, (newVal) => {
  config.value.cardsPerPage = newVal === '2x2' ? 4 : 9
}, { immediate: true })

// Head metadata
useHead({
  title: 'Gerador de Cartela de Bingo Para Imprimir Grátis | Criar PDF',
  meta: [
    {
      name: 'description',
      content: 'Crie cartelas de bingo para imprimir em PDF gratuitamente. Gerador online fácil e rápido. Personalize cores, tamanhos e quantidade. Download instantâneo!'
    },
    {
      name: 'keywords',
      content: 'cartela de bingo para imprimir, gerador cartela bingo, cartela bingo pdf, bingo para imprimir gratis, criar cartela bingo online'
    },
    // Open Graph / Facebook
    {
      property: 'og:title',
      content: 'Gerador de Cartela de Bingo Para Imprimir Grátis'
    },
    {
      property: 'og:description',
      content: 'Crie cartelas de bingo para imprimir em PDF gratuitamente. Gerador online fácil e rápido.'
    },
    // Twitter
    {
      name: 'twitter:title',
      content: 'Gerador de Cartela de Bingo Para Imprimir Grátis'
    },
    {
      name: 'twitter:description',
      content: 'Crie cartelas de bingo para imprimir em PDF gratuitamente. Gerador online fácil e rápido.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Gerador de Cartela de Bingo",
        "description": "Ferramenta gratuita para criar cartelas de bingo para imprimir",
        "applicationCategory": "GameApplication",
        "operatingSystem": "Web Browser",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "BRL"
        }
      })
    }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
    <client-only>
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
            Gerador de Cartelas de Bingo
          </h1>
          <p class="text-base text-gray-600 max-w-3xl mx-auto">
            Crie e imprima cartelas de bingo personalizadas em segundos. Totalmente grátis!
          </p>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white rounded-xl shadow-lg p-6 mb-8">
          <!-- Configuration Panel -->
          <div class="lg:border-r lg:pr-6">
            <div class="sticky top-4">
              <h2 class="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                <i class="fas fa-cog mr-2 text-red-500"></i>Configurações
              </h2>
              <div class="space-y-5">
                <!-- Number of Cards -->
                <div class="relative">
                  <div class="flex justify-between items-center mb-1">
                    <label for="numCards" class="block text-sm font-medium text-gray-700">
                      Quantidade de cartelas
                    </label>
                    <span class="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Máx: 50</span>
                  </div>
                  <input
                    id="numCards"
                    v-model.number="config.numCards"
                    type="number"
                    min="1"
                    max="50"
                    class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                  <p class="mt-1 text-xs text-gray-500">Quantas cartelas deseja gerar?</p>
                </div>

                <!-- Title -->
                <div>
                  <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
                    Título da Cartela
                  </label>
                  <input
                    id="title"
                    v-model="config.title"
                    type="text"
                    placeholder="Ex: Bingo da Família - Aniversário"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  >
                  <p class="mt-1 text-xs text-gray-500">Aparecerá no topo de cada cartela</p>
                </div>

                <!-- Generate Button -->
                <button
                  @click="generatePDF"
                  class="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
                >
                  <i class="fas fa-magic mr-2"></i>
                  Gerar Cartelas para Imprimir
                </button>

                <!-- Info -->
                <div class="text-sm text-gray-500 mt-2 text-center">
                  <p>Total de páginas: {{ totalPages }}</p>
                  <p>Total de cartelas: {{ config.numCards }}</p>
                </div>
              </div>
            </div>
          </div>
                
                <!-- Preview -->
                <div class="lg:col-span-2">
                  <div class="bg-white p-1 rounded-xl shadow-inner">
                    <div class="flex justify-between items-center mb-4 px-4 pt-4">
                      <h2 class="text-xl font-bold text-gray-800">
                        <i class="fas fa-eye mr-2 text-red-500"></i>Prévia
                      </h2>
                      <div class="flex space-x-2">
                        <button 
                          @click="config.layout = '2x2'" 
                          class="px-3 py-1 text-sm rounded-md transition-colors"
                          :class="config.layout === '2x2' ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:bg-gray-100'"
                          title="2 cartelas por linha"
                        >
                          2x2
                        </button>
                        <button 
                          @click="config.layout = '3x3'" 
                          class="px-3 py-1 text-sm rounded-md transition-colors"
                          :class="config.layout === '3x3' ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:bg-gray-100'"
                          title="3 cartelas por linha"
                        >
                          3x3
                        </button>
                      </div>
                    </div>
                    <div class="p-4">
                      <div class="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-200 flex items-center justify-center min-h-[500px]">
                        <div class="w-full max-w-xs">
                          <BingoCard 
                            :title="config.title.split(' - ')[0]"
                            :card-number="1"
                            :color-mode="config.colorMode"
                          />
                          <p class="text-center text-sm text-gray-500 mt-4">
                            Esta é uma prévia da primeira cartela. O arquivo PDF conterá {{ config.numCards }} cartelas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        </div>
        
        <!-- FAQ Section -->
        <div class="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
            <i class="fas fa-question-circle text-red-500 mr-3"></i>
            Dúvidas Frequentes
          </h2>
          
          <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl class="space-y-8">
                <div v-for="(faq, index) in faqs" :key="index" class="border-b border-gray-200 pb-6">
                  <dt class="text-lg font-medium text-gray-900">{{ faq.question }}</dt>
                  <dd class="mt-2 text-base text-gray-600">{{ faq.answer }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<style scoped>
/* Custom styles */
.bg-gradient-red {
  background: linear-gradient(135deg, #e53e3e, #c53030);
}

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  body * {
    visibility: hidden;
  }
  
  .bingo-card, .bingo-card * {
    visibility: visible;
  }
  
  .bingo-card {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-shadow: none;
  }
  
  /* Control sheet styles */
  .wrapper-controller-sheet {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    page-break-after: always;
  }
  
  .controller-sheet-title {
    text-align: center;
    font-weight: bold;
    margin: 10px 0;
  }
  
  .controller-sheet-caption {
    text-align: center;
    font-size: 10px;
    margin-bottom: 10px;
  }
  
  .controller-sheet {
    width: 100%;
    border-collapse: collapse;
  }
  
  .controller-sheet th, 
  .controller-sheet td {
    border: 1px solid #000;
    padding: 5px;
    text-align: center;
  }
  
  .controller-sheet th {
    font-weight: bold;
    background-color: #f0f0f0;
  }
}
</style>

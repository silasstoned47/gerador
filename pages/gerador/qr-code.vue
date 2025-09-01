<script setup>
import { ref, computed, onMounted, defineAsyncComponent } from 'vue'

// Import client-side only components
const QRCodeCard = defineAsyncComponent({
  loader: () => import('../../components/QRCodeCard.vue'),
  loading: () => '<div class="text-center p-8">Carregando...</div>',
  error: () => '<div class="text-center p-8 text-red-500">Erro ao carregar o componente de QR Code</div>',
  delay: 200,
  timeout: 10000
})

// Client-side only import
const html2canvas = ref(null)

onMounted(async () => {
  if (process.client) {
    try {
      const html2canvasModule = await import('html2canvas')
      html2canvas.value = html2canvasModule.default
    } catch (error) {
      console.error('Error loading image generation library:', error)
    }
  }
})

// Main content
const config = ref({
  text: 'https://geradorii.com',
  title: 'QR CODE - GERADOR',
  colorMode: 'color', // 'color' or 'bw'
  size: 'medium', // 'small', 'medium', 'large'
  includeText: true
})

// Methods
const downloadQRCode = async () => {
  if (!html2canvas.value) {
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
      <p>Gerando imagem, aguarde...</p>
      <div class="spinner" style="margin: 1rem auto; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #3b82f6; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `
  document.body.appendChild(loading)

  let tempContainer = null

  try {
    // Create a temporary container for the QR code
    tempContainer = document.createElement('div')
    tempContainer.style.position = 'absolute'
    tempContainer.style.left = '-9999px'
    tempContainer.style.top = '0'
    tempContainer.style.width = '250px'
    document.body.appendChild(tempContainer)
    
    // Create a new Vue app for the QR code
    const { createApp } = await import('vue')
    const cardApp = createApp(QRCodeCard, {
      text: config.value.text,
      title: config.value.title.split(' - ')[0],
      codeNumber: null,
      colorMode: config.value.colorMode,
      size: 'large',
      includeText: config.value.includeText
    })
    
    // Mount the card
    const cardInstance = cardApp.mount(tempContainer)
    
    // Wait for the next tick to ensure the card is rendered
    await new Promise(resolve => setTimeout(resolve, 100))
    
    // Get the card element
    const element = tempContainer.querySelector('.qr-code-card')
    if (element) {
      const canvas = await html2canvas.value(element, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: null
      })
      
      // Convert to PNG and download
      const link = document.createElement('a')
      link.download = `qr-code-${config.value.text.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    }
  } catch (error) {
    console.error('Error generating QR code image:', error)
    alert('Ocorreu um erro ao gerar a imagem. Por favor, tente novamente.')
  } finally {
    // Clean up
    if (document.body.contains(loading)) {
      document.body.removeChild(loading)
    }
    if (tempContainer && document.body.contains(tempContainer)) {
      document.body.removeChild(tempContainer)
    }
  }
}

// FAQ Data
const faqs = [
  {
    question: "Como imprimir os QR codes?",
    answer: "Após gerar o PDF, clique no botão de download que aparecerá no seu navegador. Em seguida, abra o arquivo e use a opção de impressão do seu leitor de PDF."
  },
  {
    question: "Quantos QR codes posso gerar?",
    answer: "Você pode gerar de 1 a 50 QR codes por arquivo. Se precisar de mais, basta gerar múltiplos arquivos."
  },
  {
    question: "Que tipo de conteúdo posso colocar no QR code?",
    answer: "URLs, texto, números de telefone, emails, Wi-Fi, coordenadas GPS e praticamente qualquer texto. O QR code será gerado automaticamente."
  },
  {
    question: "Posso personalizar as cores?",
    answer: "Sim, você pode escolher entre o modo colorido ou preto e branco antes de gerar os QR codes."
  },
  {
    question: "Os QR codes funcionam em qualquer dispositivo?",
    answer: "Sim, QR codes são universais e podem ser lidos por qualquer smartphone ou tablet com câmera e um app leitor de QR code."
  },
  {
    question: "Posso usar esses QR codes comercialmente?",
    answer: "Sim, você pode usar os QR codes gerados para fins pessoais e comerciais sem restrições."
  }
]

// Update layout when config changes
// watch(() => config.value.layout, (newVal) => {
//   config.value.cardsPerPage = newVal === '2x2' ? 4 : 9
// }, { immediate: true })

// Head metadata
useHead({
  title: 'Gerador de QR Code Para Imprimir Grátis | Criar PDF',
  meta: [
    {
      name: 'description',
      content: 'Crie QR codes para imprimir em PDF gratuitamente. Gerador online fácil e rápido. Personalize tamanhos, cores e quantidade. Download instantâneo!'
    },
    {
      name: 'keywords',
      content: 'qr code para imprimir, gerador qr code, qr code pdf, qr code gratis, criar qr code online, imprimir qr code'
    },
    // Open Graph / Facebook
    {
      property: 'og:title',
      content: 'Gerador de QR Code Para Imprimir Grátis'
    },
    {
      property: 'og:description',
      content: 'Crie QR codes para imprimir em PDF gratuitamente. Gerador online fácil e rápido.'
    },
    // Twitter
    {
      name: 'twitter:title',
      content: 'Gerador de QR Code Para Imprimir Grátis'
    },
    {
      name: 'twitter:description',
      content: 'Crie QR codes para imprimir em PDF gratuitamente. Gerador online fácil e rápido.'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Gerador de QR Code",
        "description": "Ferramenta gratuita para criar QR codes para imprimir",
        "applicationCategory": "UtilityApplication",
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
            Gerador de QR Codes
          </h1>
          <p class="text-base text-gray-600 max-w-3xl mx-auto">
            Crie e imprima QR codes personalizados em segundos. Totalmente grátis!
          </p>
        </div>

        <!-- Main Content -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-white rounded-xl shadow-lg p-6 mb-8">
          <!-- Configuration Panel -->
          <div class="lg:border-r lg:pr-6">
            <div class="sticky top-4">
              <h2 class="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                <i class="fas fa-cog mr-2 text-blue-500"></i>Configurações
              </h2>
              <div class="space-y-5">
                <!-- QR Code Content -->
                <div>
                  <label for="qrText" class="block text-sm font-medium text-gray-700 mb-1">
                    Conteúdo do QR Code
                  </label>
                  <textarea
                    id="qrText"
                    v-model="config.text"
                    rows="3"
                    placeholder="Ex: https://seusite.com ou Texto personalizado"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  ></textarea>
                  <p class="mt-1 text-xs text-gray-500">URL, texto, email, telefone, etc.</p>
                </div>

                <!-- Title -->
                <div>
                  <label for="title" class="block text-sm font-medium text-gray-700 mb-1">
                    Título (opcional)
                  </label>
                  <input
                    id="title"
                    v-model="config.title"
                    type="text"
                    placeholder="Ex: QR Code - Meu Evento"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                  <p class="mt-1 text-xs text-gray-500">Aparecerá acima de cada QR code</p>
                </div>

                <!-- Color Mode -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Modo de Cores
                  </label>
                  <div class="grid grid-cols-2 gap-2">
                    <button
                      @click="config.colorMode = 'color'"
                      :class="config.colorMode === 'color' ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-gray-50 text-gray-700 border-gray-300'"
                      class="px-3 py-2 border rounded-lg text-sm font-medium transition-colors"
                    >
                      Colorido
                    </button>
                    <button
                      @click="config.colorMode = 'bw'"
                      :class="config.colorMode === 'bw' ? 'bg-blue-100 text-blue-700 border-blue-300' : 'bg-gray-50 text-gray-700 border-gray-300'"
                      class="px-3 py-2 border rounded-lg text-sm font-medium transition-colors"
                    >
                      P&B
                    </button>
                  </div>
                </div>

                <!-- Include Text -->
                <div class="space-y-4">
                  <div class="flex items-center">
                    <input
                      id="includeText"
                      v-model="config.includeText"
                      type="checkbox"
                      class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    >
                    <label for="includeText" class="ml-2 block text-sm text-gray-700">
                      Incluir texto abaixo do QR code
                    </label>
                  </div>
                </div>

                <!-- Download Button -->
                <button 
                  @click="downloadQRCode" 
                  class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <i class="fas fa-download mr-2"></i> Baixar QR Code
                </button>

                <!-- Info -->
                
              </div>
            </div>
          </div>
                
          <!-- Preview -->
          <div class="lg:col-span-2">
            <div class="bg-white p-1 rounded-xl shadow-inner">
              <div class="flex justify-between items-center mb-4 px-4 pt-4">
                <h2 class="text-xl font-bold text-gray-800">
                  <i class="fas fa-eye mr-2 text-blue-500"></i>Prévia
                </h2>
                
              </div>
              <div class="p-4">
                <div class="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-200 flex items-center justify-center min-h-[500px]">
                  <div class="w-full max-w-xs">
                    <QRCodeCard 
                      :text="config.text"
                      :title="config.title.split(' - ')[0]"
                      :code-number="1"
                      :color-mode="config.colorMode"
                      :size="config.size"
                      :include-text="config.includeText"
                    />
                    <p class="text-center text-sm text-gray-500 mt-4">
                      Esta é uma prévia do primeiro QR code. 
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
            <i class="fas fa-question-circle text-blue-500 mr-3"></i>
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
.bg-gradient-blue {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
}

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  body * {
    visibility: hidden;
  }
  
  .qr-code-card, .qr-code-card * {
    visibility: visible;
  }
  
  .qr-code-card {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-shadow: none;
  }
}
</style>
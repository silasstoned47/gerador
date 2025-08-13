<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Simplified Header -->
    <div class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center space-x-2 text-sm text-gray-500">
          <NuxtLink to="/" class="hover:text-blue-600">Home</NuxtLink>
          <span>/</span>
          <span>Gerador de CPF</span>
        </div>
        <h1 class="mt-2 text-2xl font-bold text-gray-900">Gerador de CPF</h1>
        <p class="mt-1 text-gray-500">Gere CPFs válidos para testes em desenvolvimento</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Generator Card -->
      <div class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div class="p-6">
          <!-- Quantity Selector -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Quantidade de CPFs
            </label>
            <div class="flex items-center space-x-4">
              <input
                v-model.number="quantity"
                type="number"
                min="1"
                max="20"
                class="w-20 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
              <span class="text-sm text-gray-500">máx. 20</span>
            </div>
          </div>

          <!-- Options -->
          <div class="space-y-4 mb-6">
            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input
                  v-model="formatted"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                >
                <span class="ml-2 text-sm text-gray-700">Formatado (000.000.000-00)</span>
              </label>
            </div>

            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input
                  v-model="unique"
                  type="checkbox"
                  class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                >
                <span class="ml-2 text-sm text-gray-700">Garantir CPFs únicos</span>
              </label>
            </div>
          </div>

          <!-- Generate Button -->
          <button
            @click="generateCPFs"
            class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Gerar CPF{{ quantity > 1 ? 's' : '' }}
          </button>

          <!-- Results -->
          <div v-if="results.length > 0" class="mt-8">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-medium text-gray-900">CPF{{ results.length > 1 ? 's' : '' }} Gerado{{ results.length > 1 ? 's' : '' }}</h3>
              <button
                @click="copyAllToClipboard"
                class="text-sm text-blue-600 hover:text-blue-800"
              >
                Copiar tudo
              </button>
            </div>
            
            <div class="space-y-3">
              <div 
                v-for="(result, index) in results" 
                :key="index"
                class="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200"
              >
                <span class="font-mono text-gray-800">{{ result.cpf }}</span>
                <button
                  @click="copyToClipboard(result.cpf, index)"
                  class="text-gray-400 hover:text-blue-600 p-1"
                  :title="'Copiar ' + result.cpf"
                >
                  <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-gray-200">
              <p class="text-xs text-gray-500 text-center">
                CPFs gerados são para fins de teste em desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Informative Section -->
      <div class="mt-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- What is CPF Generator -->
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 class="text-xl font-bold text-gray-900 mb-4">O que é o Gerador de CPF?</h2>
          <p class="text-gray-700 mb-4">
            O Gerador de CPF é uma ferramenta online que cria números de CPF (Cadastro de Pessoas Físicas) válidos para fins de teste em ambientes de desenvolvimento, homologação e aprendizado. Esses números são gerados seguindo as regras oficiais de validação do CPF brasileiro.
          </p>
          <p class="text-gray-700">
            Importante: Os CPFs gerados são para uso exclusivo em ambientes de teste e desenvolvimento. O uso indevido de números de CPF reais ou gerados pode ser considerado crime de falsificação de documentos.
          </p>
        </div>

        <!-- How to Use -->
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Como Usar o Gerador de CPF</h2>
          <ol class="list-decimal list-inside space-y-3 text-gray-700">
            <li>Selecione a quantidade de CPFs que deseja gerar (máximo 20 por vez)</li>
            <li>Escolha se deseja o CPF formatado (000.000.000-00) ou apenas números</li>
            <li>Marque a opção "Garantir CPFs únicos" se precisar que todos os números gerados sejam diferentes</li>
            <li>Clique em "Gerar CPF" (ou "Gerar CPFs" para múltiplos)</li>
            <li>Copie os CPFs gerados individualmente ou use o botão "Copiar tudo"</li>
          </ol>
        </div>

        <!-- FAQ Section -->
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="font-semibold text-gray-900">Os CPFs gerados são válidos?</h3>
              <p class="mt-1 text-gray-700">Sim, todos os CPFs gerados seguem as regras oficiais de validação do CPF brasileiro, incluindo dígitos verificadores corretos.</p>
            </div>
            
            <div>
              <h3 class="font-semibold text-gray-900">Posso usar esses CPFs para cadastros reais?</h3>
              <p class="mt-1 text-gray-700">Não. O uso de CPFs gerados para fins de cadastro em sistemas de produção é ilegal. Esta ferramenta é destinada exclusivamente para testes em ambientes de desenvolvimento.</p>
            </div>
            
            <div>
              <h3 class="font-semibold text-gray-900">Como funciona a geração de CPFs?</h3>
              <p class="mt-1 text-gray-700">O gerador cria números de 9 dígitos aleatórios e calcula os 2 dígitos verificadores finais usando o algoritmo oficial de validação de CPF.</p>
            </div>
          </div>
        </div>

        <!-- Use Cases -->
        <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Casos de Uso</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h3 class="font-semibold text-blue-800 mb-2">Desenvolvimento de Software</h3>
              <p class="text-blue-700">Teste de formulários de cadastro sem usar documentos reais durante o desenvolvimento de sistemas.</p>
            </div>
            
            <div class="bg-green-50 p-4 rounded-lg">
              <h3 class="font-semibold text-green-800 mb-2">Testes de Integração</h3>
              <p class="text-green-700">Automatize testes que requerem números de CPF válidos para simular diferentes cenários.</p>
            </div>
            
            <div class="bg-purple-50 p-4 rounded-lg">
              <h3 class="font-semibold text-purple-800 mb-2">Aprendizado</h3>
              <p class="text-purple-700">Estude o algoritmo de validação de CPF com exemplos reais gerados instantaneamente.</p>
            </div>
            
            <div class="bg-yellow-50 p-4 rounded-lg">
              <h3 class="font-semibold text-yellow-800 mb-2">Demonstrações</h3>
              <p class="text-yellow-700">Apresente funcionalidades do seu sistema usando dados fictícios mas realistas.</p>
            </div>
          </div>
          
          <div class="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p class="text-sm text-gray-600 text-center">
              Lembre-se: O uso responsável desta ferramenta é essencial. Nunca utilize CPFs gerados para fins ilegais ou que possam prejudicar terceiros.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO Meta tags
useSeoMeta({
  title: 'Gerador de CPF Online',
  description: 'Gere CPFs válidos instantaneamente para testes de desenvolvimento. Nosso gerador de CPF online é gratuito e gera números de CPF reais e válidos.',
  ogTitle: 'Gerador de CPF Online',
  ogDescription: 'Gere CPFs válidos instantaneamente para testes de desenvolvimento. Nosso gerador de CPF online é gratuito e gera números de CPF reais e válidos.',
  ogImage: 'https://geradorii.com/og-image.jpg',
  twitterCard: 'summary_large_image',
  keywords: 'gerador cpf, gerador de cpf, cpf válido, gerar cpf, cpf para teste, gerador cpf online, cpf gerador, cpf válido gerador',
  author: 'Gerador II'
})

// JSON-LD Schema
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        'name': 'Gerador de CPF Online',
        'url': 'https://geradorii.com/gerador/cpf',
        'description': 'Ferramenta online para geração de CPFs válidos para fins de teste em desenvolvimento.',
        'applicationCategory': 'DeveloperTools',
        'operatingSystem': 'Web',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'BRL',
          'description': 'Uso gratuito ilimitado'
        },
        'creator': {
          '@type': 'Organization',
          'name': 'Gerador II',
          'url': 'https://geradorii.com'
        },
        'mainEntity': {
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'Os CPFs gerados são válidos?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Sim, todos os CPFs gerados seguem as regras oficiais de validação do CPF brasileiro, incluindo dígitos verificadores corretos.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Posso usar esses CPFs para cadastros reais?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Não. O uso de CPFs gerados para fins de cadastro em sistemas de produção é ilegal. Esta ferramenta é destinada exclusivamente para testes em ambientes de desenvolvimento.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Como funciona a geração de CPFs?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'O gerador cria números de 9 dígitos aleatórios e calcula os 2 dígitos verificadores finais usando o algoritmo oficial de validação de CPF.'
              }
            }
          ]
        },
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://geradorii.com/buscar?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Início',
            'item': 'https://geradorii.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Geradores',
            'item': 'https://geradorii.com/geradores/'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Gerador de CPF',
            'item': 'https://geradorii.com/gerador/cpf/'
          }
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Como gerar CPFs para teste',
        'description': 'Aprenda a gerar CPFs válidos para testes em desenvolvimento',
        'step': [
          {
            '@type': 'HowToStep',
            'name': 'Selecione a quantidade',
            'text': 'Escolha quantos CPFs você precisa gerar (até 20 por vez).',
            'url': 'https://geradorii.com/gerador/cpf/#quantidade'
          },
          {
            '@type': 'HowToStep',
            'name': 'Escolha o formato',
            'text': 'Selecione se deseja o CPF formatado (000.000.000-00) ou apenas números.',
            'url': 'https://geradorii.com/gerador/cpf/#formato'
          },
          {
            '@type': 'HowToStep',
            'name': 'Gere os CPFs',
            'text': 'Clique no botão "Gerar CPF" para criar os números.',
            'url': 'https://geradorii.com/gerador/cpf/#gerar'
          },
          {
            '@type': 'HowToStep',
            'name': 'Copie os resultados',
            'text': 'Use os botões de cópia para copiar os CPFs gerados.',
            'url': 'https://geradorii.com/gerador/cpf/#resultados'
          }
        ]
      })
    }
  ]
})

// Reactive state
const quantity = ref(1)
const formatted = ref(true)
const unique = ref(true)
const results = ref([])
const isGenerating = ref(false)

// Generate a random CPF number
const generateCPF = () => {
  let cpf = ''
  
  // Generate 9 random digits
  for (let i = 0; i < 9; i++) {
    cpf += Math.floor(Math.random() * 10)
  }
  
  // Calculate first verification digit
  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i)
  }
  let remainder = sum % 11
  const firstDigit = remainder < 2 ? 0 : 11 - remainder
  cpf += firstDigit
  
  // Calculate second verification digit
  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i)
  }
  remainder = sum % 11
  const secondDigit = remainder < 2 ? 0 : 11 - remainder
  cpf += secondDigit
  
  // Format if needed
  if (formatted.value) {
    cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }
  
  return cpf
}

// Generate multiple CPFs
const generateCPFs = () => {
  isGenerating.value = true
  results.value = []
  
  const generatedCPFs = new Set()
  
  for (let i = 0; i < quantity.value; i++) {
    let cpf
    let attempts = 0
    const maxAttempts = 1000
    
    do {
      cpf = generateCPF()
      attempts++
      
      if (attempts > maxAttempts) {
        console.error('Maximum attempts reached to generate unique CPF')
        break
      }
    } while (unique.value && generatedCPFs.has(cpf) && attempts < maxAttempts)
    
    if (cpf) {
      generatedCPFs.add(cpf)
      results.value.push({
        cpf,
        copied: false
      })
    }
  }
  
  isGenerating.value = false
}

// Copy CPF to clipboard
const copyToClipboard = async (text, index) => {
  try {
    await navigator.clipboard.writeText(text)
    
    // Update the copied state for visual feedback
    if (index !== undefined) {
      results.value[index].copied = true
      setTimeout(() => {
        results.value[index].copied = false
      }, 2000)
    }
    
    return true
  } catch (err) {
    console.error('Failed to copy:', err)
    return false
  }
}

// Copy all CPFs to clipboard
const copyAllToClipboard = async () => {
  const text = results.value.map(r => r.cpf).join('\n')
  await copyToClipboard(text)
}

// Generate initial CPFs when component mounts
onMounted(() => {
  generateCPFs()
})
</script>

<style scoped>
/* Custom range input styles */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  border-radius: 3px;
  background: #e5e7eb;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #2563eb;
  cursor: pointer;
  transition: all 0.2s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  background: #1d4ed8;
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #2563eb;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease;
}

input[type="range"]::-moz-range-thumb:hover {
  transform: scale(1.1);
  background: #1d4ed8;
}

/* Animation keyframes */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(2px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.copied-feedback {
  animation: fadeIn 0.2s ease-out;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
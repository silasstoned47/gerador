<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Gerador de Celular Online</h1>
      <p class="text-gray-600 text-lg">
        Gere números de celular brasileiros válidos para testes. Todos os números seguem o padrão nacional com DDDs corretos.
      </p>
    </div>

    <!-- Generator Tool -->
    <div class="tool-card mb-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-6">Configurações do Gerador</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Formatação
          </label>
          <div class="space-y-2">
            <label class="flex items-center">
              <input 
                v-model="options.formatted" 
                :value="true" 
                type="radio" 
                name="formatted" 
                class="text-green-600 focus:ring-green-500"
              >
              <span class="ml-2 text-gray-700">Com formatação (11) 99999-9999</span>
            </label>
            <label class="flex items-center">
              <input 
                v-model="options.formatted" 
                :value="false" 
                type="radio" 
                name="formatted" 
                class="text-green-600 focus:ring-green-500"
              >
              <span class="ml-2 text-gray-700">Sem formatação 11999999999</span>
            </label>
          </div>
        </div>

        <div>
          <label for="region" class="block text-sm font-medium text-gray-700 mb-2">
            Região (opcional)
          </label>
          <select 
            v-model="options.region" 
            id="region"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          >
            <option value="">Qualquer região</option>
            <option v-for="region in regions" :key="region" :value="region">
              {{ region }}
            </option>
          </select>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-4">
        <button @click="generateCelular" class="btn-primary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          Gerar Celular
        </button>
        
        <button @click="generateMultiple" class="btn-secondary">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
          </svg>
          Gerar Vários (10)
        </button>
      </div>
    </div>

    <!-- Results -->
    <div v-if="generatedNumbers.length > 0" class="tool-card mb-8">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Números Gerados</h3>
      
      <div class="space-y-3">
        <div 
          v-for="(number, index) in generatedNumbers" 
          :key="index"
          class="result-box flex items-center justify-between"
        >
          <span class="font-mono text-lg">{{ number }}</span>
          <CopyButton :text="number" />
        </div>
      </div>

      <div class="mt-4 pt-4 border-t border-gray-200">
        <button @click="copyAllNumbers" class="btn-secondary">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
          </svg>
          Copiar Todos
        </button>
      </div>
    </div>

    <!-- Information Section -->
    <div class="tool-card mb-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Sobre os Números de Celular Brasileiros</h2>
      <div class="prose prose-gray max-w-none">
        <p class="text-gray-600 mb-4">
          No Brasil, os números de celular seguem o formato: (DDD) 9XXXX-XXXX, onde:
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">Estrutura do Número</h3>
            <ul class="space-y-1 text-gray-600">
              <li>• <strong>DDD:</strong> Código de área (11, 21, 85, etc.)</li>
              <li>• <strong>9:</strong> Primeiro dígito (sempre 9 para celular)</li>
              <li>• <strong>XXXX-XXXX:</strong> 8 dígitos restantes</li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-medium text-gray-900 mb-2">DDDs por Região</h3>
            <ul class="space-y-1 text-gray-600 text-sm">
              <li>• <strong>11:</strong> São Paulo (Capital)</li>
              <li>• <strong>21:</strong> Rio de Janeiro</li>
              <li>• <strong>31:</strong> Belo Horizonte</li>
              <li>• <strong>85:</strong> Fortaleza</li>
              <li>• E muitos outros...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="tool-card">
      <h2 class="text-xl font-semibold text-gray-900 mb-6">Perguntas Frequentes</h2>
      
      <div class="space-y-4">
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-medium text-gray-900 mb-2">Posso usar esses números para ligações reais?</h3>
          <p class="text-gray-600">
            Não! Os números são fictícios e não devem ser usados para ligações reais. 
            São destinados apenas para testes de sistema.
          </p>
        </div>
        
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-medium text-gray-900 mb-2">Por que todos os números começam com 9?</h3>
          <p class="text-gray-600">
            No Brasil, números de celular sempre começam com 9 após o DDD. 
            Isso os diferencia dos telefones fixos.
          </p>
        </div>
        
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-medium text-gray-900 mb-2">Como escolher a região?</h3>
          <p class="text-gray-600">
            Selecione uma região específica para gerar números com DDDs daquela área. 
            Deixe em branco para números de qualquer região do Brasil.
          </p>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-900 mb-2">Os números são verificados com operadoras?</h3>
          <p class="text-gray-600">
            Não. Os números seguem o padrão oficial mas não são verificados com operadoras. 
            São puramente fictícios para uso em testes.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CelularUtils } from '~/utils/celular.js'

const breadcrumbs = [
  { name: 'geradores', path: '/gerador' },
  { name: 'celular', path: '/gerador/celular' }
]

const options = ref({
  formatted: true,
  region: ''
})

const generatedNumbers = ref([])
const regions = CelularUtils.getRegions()
const showDisclaimer = inject('showDisclaimer')

const generateCelular = () => {
  showDisclaimer()
  const number = CelularUtils.generate(options.value)
  generatedNumbers.value = [number]
}

const generateMultiple = () => {
  showDisclaimer()
  const numbers = []
  for (let i = 0; i < 10; i++) {
    numbers.push(CelularUtils.generate(options.value))
  }
  generatedNumbers.value = numbers
}

const copyAllNumbers = async () => {
  const text = generatedNumbers.value.join('\n')
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    console.error('Failed to copy numbers: ', err)
  }
}

// SEO Meta tags
useSeoMeta({
  title: 'Gerador de Celular Online | Gerador II',
  description: 'Gere números de celular brasileiros válidos para testes com DDDs corretos por região. Dados fictícios seguindo padrão nacional.',
  keywords: 'gerador celular, numero celular, gerar celular, celular fictício, teste celular, celular online, ddd brasil',
  ogTitle: 'Gerador de Celular - Gerador II',
  ogDescription: 'Gere números de celular válidos para seus testes por região.'
})

// Schema Markup
useSchemaOrg([
  {
    '@type': 'SoftwareApplication',
    name: 'Gerador de Celular Online',
    description: 'Ferramenta online para gerar números de celular brasileiros para testes',
    url: 'https://geradorii.com/gerador/celular',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser'
  }
])
</script>
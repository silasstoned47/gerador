<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Validador de Celular Online</h1>
      <p class="text-gray-600 text-lg">
        Valide números de celular brasileiros e verifique se estão no formato correto com DDD válido.
      </p>
    </div>

    <!-- Validator Tool -->
    <div class="tool-card mb-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-6">Validar Número de Celular</h2>
      
      <div class="space-y-4">
        <div>
          <label for="celular-input" class="block text-sm font-medium text-gray-700 mb-2">
            Digite o número de celular para validar
          </label>
          <input
            v-model="celularInput"
            @input="formatInput"
            id="celular-input"
            type="text"
            placeholder="(11) 99999-9999 ou 11999999999"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-mono"
            maxlength="15"
          >
        </div>

        <button @click="validateCelular" class="btn-primary" :disabled="!celularInput.trim()">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Validar Celular
        </button>
      </div>
    </div>

    <!-- Validation Result -->
    <div v-if="validationResult" class="tool-card mb-8">
      <div class="flex items-center mb-4">
        <div 
          class="w-10 h-10 rounded-full flex items-center justify-center mr-3"
          :class="validationResult.isValid ? 'bg-green-100' : 'bg-red-100'"
        >
          <svg 
            v-if="validationResult.isValid"
            class="w-6 h-6 text-green-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <svg 
            v-else
            class="w-6 h-6 text-red-600" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold" :class="validationResult.isValid ? 'text-green-800' : 'text-red-800'">
          {{ validationResult.isValid ? 'Celular Válido' : 'Celular Inválido' }}
        </h3>
      </div>

      <div class="space-y-3">
        <div class="result-box">
          <div class="text-sm text-gray-600 mb-1">Número informado:</div>
          <div class="font-mono text-lg">{{ validationResult.original }}</div>
        </div>

        <div v-if="validationResult.isValid" class="result-box">
          <div class="text-sm text-gray-600 mb-1">Número formatado:</div>
          <div class="font-mono text-lg flex items-center justify-between">
            <span>{{ validationResult.formatted }}</span>
            <CopyButton :text="validationResult.formatted" />
          </div>
        </div>

        <div v-if="validationResult.isValid && validationResult.ddd" class="result-box">
          <div class="text-sm text-gray-600 mb-1">Informações do DDD:</div>
          <div class="font-medium text-gray-900">
            DDD {{ validationResult.ddd }} - {{ validationResult.region }}
          </div>
        </div>

        <div class="result-box">
          <div class="text-sm text-gray-600 mb-1">Status:</div>
          <div 
            class="font-medium"
            :class="validationResult.isValid ? 'text-green-700' : 'text-red-700'"
          >
            {{ validationResult.message }}
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Test -->
    <div class="tool-card mb-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Teste Rápido</h2>
      <p class="text-gray-600 mb-4">
        Clique em um dos números abaixo para testar o validador:
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 class="font-medium text-gray-900 mb-2">✅ Números Válidos</h3>
          <div class="space-y-2">
            <button 
              v-for="celular in validNumbers" 
              :key="celular"
              @click="testNumber(celular)"
              class="block w-full text-left p-2 rounded border border-gray-200 hover:bg-gray-50 font-mono text-sm"
            >
              {{ celular }}
            </button>
          </div>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-900 mb-2">❌ Números Inválidos</h3>
          <div class="space-y-2">
            <button 
              v-for="celular in invalidNumbers" 
              :key="celular"
              @click="testNumber(celular)"
              class="block w-full text-left p-2 rounded border border-gray-200 hover:bg-gray-50 font-mono text-sm"
            >
              {{ celular }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- DDD Information -->
    <div class="tool-card mb-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">DDDs Válidos por Região</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(ddds, region) in dddInfo" :key="region" class="p-3 bg-gray-50 rounded-lg">
          <h3 class="font-medium text-gray-900 mb-2 text-sm">{{ region }}</h3>
          <div class="flex flex-wrap gap-1">
            <span 
              v-for="ddd in ddds" 
              :key="ddd"
              class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-mono"
            >
              {{ ddd }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="tool-card">
      <h2 class="text-xl font-semibold text-gray-900 mb-6">Perguntas Frequentes</h2>
      
      <div class="space-y-4">
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-medium text-gray-900 mb-2">Como identificar se um número é de celular?</h3>
          <p class="text-gray-600">
            No Brasil, números de celular sempre começam com 9 após o DDD. 
            Exemplo: (11) 99999-9999. Números que começam com outros dígitos são telefones fixos.
          </p>
        </div>
        
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-medium text-gray-900 mb-2">Todos os DDDs são válidos?</h3>
          <p class="text-gray-600">
            Não. Existem DDDs específicos para cada região do Brasil. 
            Nossa ferramenta verifica se o DDD informado existe oficialmente.
          </p>
        </div>
        
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-medium text-gray-900 mb-2">O validador confirma se o número existe?</h3>
          <p class="text-gray-600">
            Não. Validamos apenas o formato e se o DDD é válido. 
            Para verificar se um número existe, seria necessário consultar as operadoras.
          </p>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-900 mb-2">Posso validar números com formatação?</h3>
          <p class="text-gray-600">
            Sim! Aceitamos números com ou sem formatação: (11) 99999-9999 ou 11999999999. 
            Nossa ferramenta remove a formatação automaticamente para validação.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CelularUtils } from '~/utils/celular.js'

const breadcrumbs = [
  { name: 'validadores', path: '/validadores' },
  { name: 'celular', path: '/validadores/celular' }
]

const celularInput = ref('')
const validationResult = ref(null)

// Números para teste rápido
const validNumbers = ['(11) 99999-9999', '(21) 98888-7777', '(85) 97777-6666']
const invalidNumbers = ['(99) 99999-9999', '11 89999-9999', '(11) 99999-999']

// DDDs organizados por região
const dddInfo = {
  'São Paulo': ['11', '12', '13', '14', '15', '16', '17', '18', '19'],
  'Rio de Janeiro': ['21', '22', '24'],
  'Minas Gerais': ['31', '32', '33', '34', '35', '37', '38'],
  'Paraná': ['41', '42', '43', '44', '45', '46'],
  'Rio Grande do Sul': ['51', '53', '54', '55'],
  'Nordeste': ['71', '73', '74', '75', '77', '79', '81', '82', '83', '84', '85', '86', '87', '88', '89'],
  'Centro-Oeste': ['61', '62', '64', '65', '67'],
  'Norte': ['68', '69', '91', '92', '93', '94', '95', '96', '97', '98', '99']
}

const formatInput = () => {
  let value = celularInput.value.replace(/[^\d]/g, '')
  if (value.length > 11) value = value.slice(0, 11)
  
  if (value.length > 2 && value.length <= 7) {
    celularInput.value = value.replace(/(\d{2})(\d+)/, '($1) $2')
  } else if (value.length > 7) {
    celularInput.value = value.replace(/(\d{2})(\d{5})(\d+)/, '($1) $2-$3')
  } else {
    celularInput.value = value
  }
}

const validateCelular = () => {
  if (!celularInput.value.trim()) return
  
  const isValid = CelularUtils.validate(celularInput.value)
  const cleanNumber = CelularUtils.unformat(celularInput.value)
  
  let ddd = null
  let region = null
  
  if (isValid && cleanNumber.length >= 2) {
    ddd = cleanNumber.substring(0, 2)
    // Find region for this DDD
    for (const [regionName, ddds] of Object.entries(dddInfo)) {
      if (ddds.includes(ddd)) {
        region = regionName
        break
      }
    }
  }
  
  validationResult.value = {
    isValid,
    original: celularInput.value,
    formatted: isValid ? CelularUtils.format(cleanNumber) : '',
    ddd,
    region,
    message: isValid 
      ? 'Este número de celular é válido e segue o padrão brasileiro.'
      : 'Este número de celular é inválido. Verifique o formato e o DDD.'
  }
}

const testNumber = (numero) => {
  celularInput.value = numero
  validateCelular()
}

// SEO Meta tags
useSeoMeta({
  title: 'Validador de Celular Online | Gerador II',
  description: 'Valide números de celular brasileiros online. Verificação de DDD e formato seguindo padrão nacional gratuito.',
  keywords: 'validador celular, validar celular, verificar celular, ddd válido, numero celular, celular brasil',
  ogTitle: 'Validador de Celular - Gerador II',
  ogDescription: 'Valide números de celular brasileiros com verificação de DDD.'
})

// Schema Markup
useSchemaOrg([
  {
    '@type': 'SoftwareApplication',
    name: 'Validador de Celular Online',
    description: 'Ferramenta online para validar números de celular brasileiros',
    url: 'https://geradorii.com/validadores/celular',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser'
  }
])
</script>
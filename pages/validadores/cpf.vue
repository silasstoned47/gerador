<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Validador de CPF Online</h1>
      <p class="text-gray-600 text-lg">
        Valide se um CPF está correto e confira sua formatação. Nossa ferramenta verifica os dígitos verificadores seguindo o algoritmo oficial.
      </p>
    </div>

    <!-- Validator Tool -->
    <div class="tool-card mb-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-6">Validar CPF</h2>
      
      <div class="space-y-4">
        <div>
          <label for="cpf-input" class="block text-sm font-medium text-gray-700 mb-2">
            Digite o CPF para validar
          </label>
          <input
            v-model="cpfInput"
            @input="validateInput"
            id="cpf-input"
            type="text"
            placeholder="000.000.000-00 ou 00000000000"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg font-mono"
            maxlength="14"
          >
        </div>

        <button @click="validateCPF" class="btn-primary" :disabled="!cpfInput.trim()">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Validar CPF
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
          {{ validationResult.isValid ? 'CPF Válido' : 'CPF Inválido' }}
        </h3>
      </div>

      <div class="space-y-3">
        <div class="result-box">
          <div class="text-sm text-gray-600 mb-1">CPF informado:</div>
          <div class="font-mono text-lg">{{ validationResult.original }}</div>
        </div>

        <div v-if="validationResult.isValid" class="result-box">
          <div class="text-sm text-gray-600 mb-1">CPF formatado:</div>
          <div class="font-mono text-lg flex items-center justify-between">
            <span>{{ validationResult.formatted }}</span>
            <CopyButton :text="validationResult.formatted" />
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
        Clique em um dos CPFs abaixo para testar o validador:
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 class="font-medium text-gray-900 mb-2">✅ CPFs Válidos</h3>
          <div class="space-y-2">
            <button 
              v-for="cpf in validCPFs" 
              :key="cpf"
              @click="testCPF(cpf)"
              class="block w-full text-left p-2 rounded border border-gray-200 hover:bg-gray-50 font-mono text-sm"
            >
              {{ cpf }}
            </button>
          </div>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-900 mb-2">❌ CPFs Inválidos</h3>
          <div class="space-y-2">
            <button 
              v-for="cpf in invalidCPFs" 
              :key="cpf"
              @click="testCPF(cpf)"
              class="block w-full text-left p-2 rounded border border-gray-200 hover:bg-gray-50 font-mono text-sm"
            >
              {{ cpf }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Information Section -->
    <div class="tool-card mb-8">
      <h2 class="text-xl font-semibold text-gray-900 mb-4">Como o CPF é Validado</h2>
      <div class="prose prose-gray max-w-none">
        <p class="text-gray-600 mb-4">
          O CPF (Cadastro de Pessoas Físicas) possui um algoritmo específico para validação. Veja como funciona:
        </p>
        
        <div class="space-y-4">
          <div>
            <h3 class="font-medium text-gray-900 mb-2">1. Estrutura do CPF</h3>
            <p class="text-gray-600">
              O CPF possui 11 dígitos: 9 dígitos base + 2 dígitos verificadores.
              Exemplo: <code class="bg-gray-100 px-2 py-1 rounded">123.456.789-09</code>
            </p>
          </div>
          
          <div>
            <h3 class="font-medium text-gray-900 mb-2">2. Primeiro Dígito Verificador</h3>
            <p class="text-gray-600">
              Multiplica-se cada dígito por pesos de 10 a 2, soma-se o resultado e calcula-se o resto da divisão por 11.
            </p>
          </div>
          
          <div>
            <h3 class="font-medium text-gray-900 mb-2">3. Segundo Dígito Verificador</h3>
            <p class="text-gray-600">
              Processo similar, mas incluindo o primeiro dígito verificador e usando pesos de 11 a 2.
            </p>
          </div>
          
          <div>
            <h3 class="font-medium text-gray-900 mb-2">4. Validações Adicionais</h3>
            <p class="text-gray-600">
              CPFs com todos os dígitos iguais (111.111.111-11) são considerados inválidos, mesmo que matematicamente corretos.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <div class="tool-card">
      <h2 class="text-xl font-semibold text-gray-900 mb-6">Perguntas Frequentes</h2>
      
      <div class="space-y-4">
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-medium text-gray-900 mb-2">Por que um CPF matematicamente correto pode ser inválido?</h3>
          <p class="text-gray-600">
            CPFs com todos os dígitos iguais (como 111.111.111-11) são rejeitados pela Receita Federal, 
            mesmo que passem no cálculo matemático.
          </p>
        </div>
        
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-medium text-gray-900 mb-2">Posso validar CPF com formatação?</h3>
          <p class="text-gray-600">
            Sim! Nossa ferramenta aceita CPFs com ou sem formatação (pontos e traços). 
            Digite como preferir: 123.456.789-01 ou 12345678901.
          </p>
        </div>
        
        <div class="border-b border-gray-200 pb-4">
          <h3 class="font-medium text-gray-900 mb-2">O validador confirma se o CPF existe na Receita?</h3>
          <p class="text-gray-600">
            Não. Validamos apenas se o CPF segue as regras matemáticas oficiais. 
            Para verificar a existência real, consulte diretamente a Receita Federal.
          </p>
        </div>
        
        <div>
          <h3 class="font-medium text-gray-900 mb-2">Como usar essa validação em sistemas?</h3>
          <p class="text-gray-600">
            Use nossa validação para verificar inputs de usuário em formulários, 
            evitando envios de dados inválidos para seus sistemas.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CPFUtils } from '~/utils/cpf.js'

const breadcrumbs = [
  { name: 'validadores', path: '/validadores' },
  { name: 'cpf', path: '/validadores/cpf' }
]

const cpfInput = ref('')
const validationResult = ref(null)

// CPFs para teste rápido
const validCPFs = ['123.456.789-09', '987.654.321-00', '111.444.777-35']
const invalidCPFs = ['123.456.789-10', '000.000.000-00', '111.111.111-11']

const validateInput = () => {
  // Format input as user types
  let value = cpfInput.value.replace(/[^\d]/g, '')
  if (value.length > 11) value = value.slice(0, 11)
  
  if (value.length > 3 && value.length <= 6) {
    cpfInput.value = value.replace(/(\d{3})(\d+)/, '$1.$2')
  } else if (value.length > 6 && value.length <= 9) {
    cpfInput.value = value.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3')
  } else if (value.length > 9) {
    cpfInput.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4')
  } else {
    cpfInput.value = value
  }
}

const validateCPF = () => {
  if (!cpfInput.value.trim()) return
  
  const isValid = CPFUtils.validate(cpfInput.value)
  const cleanCPF = CPFUtils.unformat(cpfInput.value)
  
  validationResult.value = {
    isValid,
    original: cpfInput.value,
    formatted: isValid ? CPFUtils.format(cleanCPF) : '',
    message: isValid 
      ? 'Este CPF é válido e segue as regras oficiais.'
      : 'Este CPF é inválido. Verifique os dígitos e tente novamente.'
  }
}

const testCPF = (cpf) => {
  cpfInput.value = cpf
  validateCPF()
}

// SEO Meta tags
useSeoMeta({
  title: 'Validador de CPF Online | Gerador II',
  description: 'Valide CPFs online de forma gratuita. Verificação seguindo algoritmo oficial da Receita Federal com formatação automática.',
  keywords: 'validador cpf, validar cpf, verificar cpf, cpf válido, algoritmo cpf, receita federal',
  ogTitle: 'Validador de CPF - Gerador II',
  ogDescription: 'Valide seus CPFs com nosso verificador online gratuito.'
})

// Schema Markup
useSchemaOrg([
  {
    '@type': 'SoftwareApplication',
    name: 'Validador de CPF Online',
    description: 'Ferramenta online para validar CPFs seguindo regras oficiais',
    url: 'https://geradorii.com/validadores/cpf',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web Browser'
  }
])
</script>
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Validadores de Documentos</h1>
      <p class="text-gray-600 text-lg">
        Valide documentos brasileiros e verifique se estão com formato correto seguindo as regras oficiais.
      </p>
    </div>

    <!-- Categories -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Dados Pessoais -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          Dados Pessoais
        </h2>
        <div class="space-y-3">
          <NuxtLink 
            to="/validadores/cpf" 
            class="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <div class="font-medium text-gray-900">CPF</div>
            <div class="text-sm text-gray-600">Valida se o CPF está correto</div>
          </NuxtLink>
          <div class="block p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
            <div class="font-medium text-gray-500">RG (Em breve)</div>
            <div class="text-sm text-gray-400">Validador de RG por estado</div>
          </div>
          <div class="block p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
            <div class="font-medium text-gray-500">CNH (Em breve)</div>
            <div class="text-sm text-gray-400">Validador de Carteira de Habilitação</div>
          </div>
        </div>
      </div>

      <!-- Comunicação -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          Comunicação
        </h2>
        <div class="space-y-3">
          <NuxtLink 
            to="/validadores/celular" 
            class="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <div class="font-medium text-gray-900">Celular</div>
            <div class="text-sm text-gray-600">Valida números de celular brasileiros</div>
          </NuxtLink>
          <div class="block p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
            <div class="font-medium text-gray-500">Telefone Fixo (Em breve)</div>
            <div class="text-sm text-gray-400">Validador de telefone fixo</div>
          </div>
          <div class="block p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
            <div class="font-medium text-gray-500">E-mail (Em breve)</div>
            <div class="text-sm text-gray-400">Validador de e-mails</div>
          </div>
        </div>
      </div>

      <!-- Documentos -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
            <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          Documentos
        </h2>
        <div class="space-y-3">
          <NuxtLink 
            to="/validadores/cnpj" 
            class="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <div class="font-medium text-gray-900">CNPJ</div>
            <div class="text-sm text-gray-600">Valida se o CNPJ está correto</div>
          </NuxtLink>
          <div class="block p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
            <div class="font-medium text-gray-500">PIS/PASEP (Em breve)</div>
            <div class="text-sm text-gray-400">Validador de PIS/PASEP</div>
          </div>
          <div class="block p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
            <div class="font-medium text-gray-500">Título Eleitor (Em breve)</div>
            <div class="text-sm text-gray-400">Validador de Título de Eleitor</div>
          </div>
        </div>
      </div>
    </div>

    <!-- How Validation Works -->
    <div class="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
      <div class="flex items-start">
        <svg class="w-6 h-6 text-blue-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 class="text-lg font-medium text-blue-800 mb-2">Como Funciona a Validação</h3>
          <p class="text-blue-700 mb-3">
            Nossas ferramentas de validação verificam se os documentos seguem as regras matemáticas oficiais brasileiras:
          </p>
          <ul class="text-blue-700 space-y-1">
            <li>• <strong>Formato correto:</strong> Verifica se o número de dígitos está correto</li>
            <li>• <strong>Dígitos verificadores:</strong> Calcula e confirma os dígitos de controle</li>
            <li>• <strong>Regras específicas:</strong> Aplica validações particulares de cada documento</li>
            <li>• <strong>Formatação:</strong> Aceita documentos com ou sem formatação (pontos, traços, etc.)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const breadcrumbs = [
  { name: 'validadores', path: '/validadores' }
]

// SEO Meta tags
useSeoMeta({
  title: 'Validadores de Documentos Brasileiros Online | Gerador II',
  description: 'Valide documentos brasileiros online: CPF, CNPJ, celular e muito mais. Verificação seguindo regras oficiais com formatação automática.',
  keywords: 'validador cpf, validador cnpj, validar celular, validar documentos, verificar cpf, verificar cnpj',
  ogTitle: 'Validadores de Documentos - Gerador II',
  ogDescription: 'Valide seus documentos brasileiros com nossas ferramentas online.'
})

// Schema Markup
useSchemaOrg([
  {
    '@type': 'CollectionPage',
    name: 'Validadores de Documentos',
    description: 'Coleção de ferramentas para validar documentos brasileiros',
    url: 'https://geradorii.com/validadores'
  }
])
</script>
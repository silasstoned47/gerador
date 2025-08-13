<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Geradores de Documentos</h1>
      <p class="text-gray-600 text-lg">
        Gere dados fictícios válidos para testes e desenvolvimento. Todos os documentos são criados seguindo as regras oficiais brasileiras.
      </p>
    </div>

    <!-- Categories -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Dados Pessoais -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
            <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          Dados Pessoais
        </h2>
        <div class="space-y-3">
          <NuxtLink 
            to="/gerador/cpf" 
            class="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <div class="font-medium text-gray-900">CPF</div>
            <div class="text-sm text-gray-600">Gera CPF válido com opções por estado</div>
          </NuxtLink>
          <div class="block p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
            <div class="font-medium text-gray-500">RG (Em breve)</div>
            <div class="text-sm text-gray-400">Gerador de RG por estado</div>
          </div>
          <div class="block p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
            <div class="font-medium text-gray-500">CNH (Em breve)</div>
            <div class="text-sm text-gray-400">Gerador de Carteira de Habilitação</div>
          </div>
        </div>
      </div>

      <!-- Comunicação -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
          <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          Comunicação
        </h2>
        <div class="space-y-3">
          <NuxtLink 
            to="/gerador/celular" 
            class="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <div class="font-medium text-gray-900">Celular</div>
            <div class="text-sm text-gray-600">Gera números de celular por região</div>
          </NuxtLink>
          <div class="block p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
            <div class="font-medium text-gray-500">Telefone Fixo (Em breve)</div>
            <div class="text-sm text-gray-400">Gerador de telefone fixo</div>
          </div>
          <div class="block p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
            <div class="font-medium text-gray-500">E-mail (Em breve)</div>
            <div class="text-sm text-gray-400">Gerador de e-mails fictícios</div>
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
            to="/gerador/cnpj" 
            class="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
          >
            <div class="font-medium text-gray-900">CNPJ</div>
            <div class="text-sm text-gray-600">Gera CNPJ válido para testes</div>
          </NuxtLink>
          <div class="block p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
            <div class="font-medium text-gray-500">PIS/PASEP (Em breve)</div>
            <div class="text-sm text-gray-400">Gerador de PIS/PASEP</div>
          </div>
          <div class="block p-3 rounded-lg bg-gray-50 border border-gray-200 opacity-50">
            <div class="font-medium text-gray-500">Título Eleitor (Em breve)</div>
            <div class="text-sm text-gray-400">Gerador de Título de Eleitor</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Disclaimer -->
    <div class="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
      <div class="flex items-start">
        <svg class="w-6 h-6 text-yellow-600 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
        </svg>
        <div>
          <h3 class="text-lg font-medium text-yellow-800 mb-2">Importante - Dados Fictícios</h3>
          <p class="text-yellow-700">
            Todos os dados gerados por nossas ferramentas são <strong>completamente fictícios</strong> e devem ser utilizados exclusivamente para testes, desenvolvimento de software e fins educacionais. É proibido utilizar esses dados para cadastros reais ou atividades fraudulentas.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const breadcrumbs = [
  { name: 'geradores', path: '/gerador' }
]

// SEO Meta tags
useSeoMeta({
  title: 'Geradores de Documentos Brasileiros Online | Gerador II',
  description: 'Gere documentos brasileiros válidos para testes: CPF, CNPJ, celular, RG e muito mais. Dados fictícios seguindo as regras oficiais.',
  keywords: 'gerador cpf, gerador cnpj, gerador celular, gerador rg, dados fictícios, teste documentos',
  ogTitle: 'Geradores de Documentos - Gerador II',
  ogDescription: 'Gere documentos brasileiros fictícios para seus testes e desenvolvimento.'
})

// Schema Markup
useSchemaOrg([
  {
    '@type': 'CollectionPage',
    name: 'Geradores de Documentos',
    description: 'Coleção de ferramentas para gerar documentos brasileiros fictícios',
    url: 'https://geradorii.com/gerador'
  }
])
</script>
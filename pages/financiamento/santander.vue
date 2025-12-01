<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <Head>
      <Title>Financiamento Santander: Carro Sem Entrada e Taxas Reduzidas</Title>
      <Meta name="description" content="Saiba como financiar seu veículo pelo Santander. Conheça as taxas, benefícios como Pula Parcela e o passo a passo para aprovação." />
    </Head>

    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Breadcrumbs -->
      <nav class="flex mb-4" aria-label="Breadcrumb">
        <ol class="flex items-center space-x-4">
          <li>
            <NuxtLink to="/" class="text-gray-400 hover:text-gray-500">Home</NuxtLink>
          </li>
          <li>
            <span class="text-gray-300">/</span>
          </li>
          <li>
            <NuxtLink to="/financiamento-veiculos-sem-entrada" class="text-gray-400 hover:text-gray-500">Simulador</NuxtLink>
          </li>
          <li>
            <span class="text-gray-300">/</span>
          </li>
          <li class="text-gray-500 font-medium">Santander</li>
        </ol>
      </nav>

      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-sm p-8 mb-8 text-center border-t-4 border-red-600">
        <div class="h-16 w-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 font-bold text-2xl">
          SAN
        </div>
        <h1 class="text-3xl font-extrabold text-gray-900 mb-2">
          Financiamento de Veículos Santander
        </h1>
        <p class="text-lg text-gray-600">
          Flexibilidade e rapidez na aprovação do seu crédito.
        </p>
      </div>

      <!-- AdSense -->
      <AdSense adSlot="6441683637" />

      <!-- Main Content -->
      <div class="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Por que escolher o Santander?</h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-lg font-medium text-gray-900">Até 100% Financiado</h3>
                <p class="mt-1 text-gray-500">Possibilidade de financiar sem entrada, dependendo do seu score e ano do veículo.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-lg font-medium text-gray-900">Até 60 meses para pagar</h3>
                <p class="mt-1 text-gray-500">Prazos longos para que a parcela caiba no seu bolso.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-lg font-medium text-gray-900">Pula Parcela</h3>
                <p class="mt-1 text-gray-500">Oferta exclusiva onde você pode pular o pagamento de uma parcela por ano.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-lg font-medium text-gray-900">Digital</h3>
                <p class="mt-1 text-gray-500">Todo o processo pode ser iniciado pelo app ou site.</p>
              </div>
            </div>
          </div>

          <div class="mt-10 border-t border-gray-100 pt-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Como Solicitar</h2>
            <ol class="list-decimal list-inside space-y-3 text-gray-600">
              <li>Clique no botão abaixo para acessar o site oficial do Santander.</li>
              <li>Simule o valor do veículo que deseja comprar.</li>
              <li>Preencha seus dados para análise de crédito (é rápido).</li>
              <li>Se aprovado, o crédito é liberado diretamente para o vendedor/loja.</li>
            </ol>
          </div>

          <div class="mt-10">
            <a 
              href="https://www.santander.com.br/hotsite/santanderfinanciamentos/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:text-xl transition-colors duration-200 shadow-lg"
            >
              Simular no Site Oficial Santander
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
            <p class="text-center text-xs text-gray-400 mt-3">
              Você será redirecionado para o ambiente seguro do banco. Não pedimos senhas.
            </p>
          </div>
        </div>
      </div>

      <!-- AdSense Bottom -->
      <AdSense adSlot="6441683637" />

    </div>
  </div>
</template>

<script setup>
// Page logic if needed
</script>

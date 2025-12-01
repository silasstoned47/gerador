<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <Head>
      <Title>Financiamento Banco Pan: Aprovação Facilitada</Title>
      <Meta name="description" content="O Banco Pan é conhecido por aprovar perfis diversos. Simule seu financiamento de veículo e veja as condições." />
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
          <li class="text-gray-500 font-medium">Banco Pan</li>
        </ol>
      </nav>

      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-sm p-8 mb-8 text-center border-t-4 border-cyan-500">
        <div class="h-16 w-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-600 font-bold text-2xl">
          PAN
        </div>
        <h1 class="text-3xl font-extrabold text-gray-900 mb-2">
          Financiamento Banco Pan
        </h1>
        <p class="text-lg text-gray-600">
          Soluções de crédito para realizar seu sonho.
        </p>
      </div>

      <!-- AdSense -->
      <AdSense adSlot="6441683637" />

      <!-- Main Content -->
      <div class="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Destaques do Pan</h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-lg font-medium text-gray-900">Agilidade</h3>
                <p class="mt-1 text-gray-500">Processo de análise rápido e desburocratizado.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-lg font-medium text-gray-900">Flexibilidade</h3>
                <p class="mt-1 text-gray-500">Opções para autônomos e profissionais liberais.</p>
              </div>
            </div>
          </div>

          <div class="mt-10 border-t border-gray-100 pt-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Como Funciona</h2>
            <p class="text-gray-600 mb-4">
              O Banco Pan oferece financiamento de até 100% do valor do veículo, com prazos de até 60 meses. A contratação pode ser feita diretamente nas lojas parceiras ou simulada online.
            </p>
          </div>

          <div class="mt-10">
            <a 
              href="https://www.bancopan.com.br/produtos/financiamento-de-veiculos/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 md:text-xl transition-colors duration-200 shadow-lg"
            >
              Ir para Banco Pan
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- AdSense Bottom -->
      <AdSense adSlot="6441683637" />

    </div>
  </div>
</template>

<script setup>
</script>

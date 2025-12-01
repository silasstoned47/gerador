<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <Head>
      <Title>Financiamento BV: Líder em Veículos Usados</Title>
      <Meta name="description" content="Conheça o financiamento de veículos da BV Financeira. Ideal para carros usados, com taxas competitivas e aprovação facilitada." />
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
          <li class="text-gray-500 font-medium">BV Financeira</li>
        </ol>
      </nav>

      <!-- Header -->
      <div class="bg-white rounded-2xl shadow-sm p-8 mb-8 text-center border-t-4 border-blue-600">
        <div class="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 font-bold text-2xl">
          BV
        </div>
        <h1 class="text-3xl font-extrabold text-gray-900 mb-2">
          BV Financeira Veículos
        </h1>
        <p class="text-lg text-gray-600">
          A marca líder em financiamento de usados no Brasil.
        </p>
      </div>

      <!-- AdSense -->
      <AdSense adSlot="6441683637" />

      <!-- Main Content -->
      <div class="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
        <div class="p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">Vantagens da BV</h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-lg font-medium text-gray-900">Especialista em Usados</h3>
                <p class="mt-1 text-gray-500">Aceita veículos com mais anos de uso que a média do mercado.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-lg font-medium text-gray-900">Financiamento Solar</h3>
                <p class="mt-1 text-gray-500">Além de carros, financiam projetos de energia solar.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-lg font-medium text-gray-900">Parceria com Lojas</h3>
                <p class="mt-1 text-gray-500">Presente em milhares de revendas em todo o Brasil.</p>
              </div>
            </div>
          </div>

          <div class="mt-10 border-t border-gray-100 pt-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Passo a Passo</h2>
            <ol class="list-decimal list-inside space-y-3 text-gray-600">
              <li>Acesse o simulador oficial da BV.</li>
              <li>Escolha se quer financiar um carro de loja ou particular.</li>
              <li>Envie seus dados e aguarde a análise.</li>
              <li>Assine o contrato digitalmente.</li>
            </ol>
          </div>

          <div class="mt-10">
            <a 
              href="https://www.bv.com.br/simulador/#/veiculo" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-xl transition-colors duration-200 shadow-lg"
            >
              Simular na BV Financeira
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </a>
            <p class="text-center text-xs text-gray-400 mt-3">
              Site oficial e seguro.
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
</script>

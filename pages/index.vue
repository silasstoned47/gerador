<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 md:py-28">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ferramentas Online Gratuitas para           <span class="text-blue-600">Facilitar Seu Dia</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Simuladores, geradores e ferramentas práticas para seu dia a dia de forma rápida, segura e totalmente gratuita
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NuxtLink 
              to="/financiamento-veiculos-sem-entrada" 
              class="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Simular Financiamento
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
            <NuxtLink 
              to="/gerador/curriculo" 
              class="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-lg font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Criar Currículo Grátis
            </NuxtLink>
          </div>
          
          <!-- Trust Indicators -->
          <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900">100% Gratuito</h3>
              <p class="text-sm text-gray-600">Sem taxas ou assinaturas</p>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900">Seguro e Privado</h3>
              <p class="text-sm text-gray-600">Sem registro necessário</p>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="font-semibold text-gray-900">Resultados Instantâneos</h3>
              <p class="text-sm text-gray-600">Geração em tempo real</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O que é o Gerador II?
          </h2>
          <p class="text-lg text-gray-600 mb-6">
            O Gerador II é uma plataforma completa de ferramentas online gratuitas para facilitar seu dia a dia. Nossa missão é oferecer soluções práticas e úteis, desde simuladores financeiros até geradores de conteúdo, tudo de forma rápida e gratuita.
          </p>
          <p class="text-lg text-gray-600">
            Todas as ferramentas são 100% gratuitas, não requerem cadastro e geram resultados instantâneos. Perfeito para quem busca praticidade e eficiência no dia a dia.
          </p>
        </div>

        <!-- Key Features -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Ferramentas Úteis</h3>
            <p class="text-sm text-gray-600">Soluções práticas para suas necessidades do dia a dia</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Economia de Tempo</h3>
            <p class="text-sm text-gray-600">Crie currículos, QR codes e simule financiamentos em segundos</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Fácil de Usar</h3>
            <p class="text-sm text-gray-600">Interface intuitiva e resultados instantâneos</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">Versátil</h3>
            <p class="text-sm text-gray-600">Diversas ferramentas para diferentes necessidades</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->   
    <section class="py-16 md:py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossas Ferramentas</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore nossas ferramentas gratuitas e facilite seu dia a dia com soluções práticas e eficientes
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Simulador de Financiamento -->
          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 hover:-translate-y-1">
            <NuxtLink to="/financiamento-veiculos-sem-entrada" class="block p-8">
              <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Simulador de Financiamento</h3>
              <p class="text-gray-600 mb-6">Simule financiamento de veículos sem entrada com análise completa de crédito e score.</p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Análise de Score
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Simulação Instantânea
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Comparação de Bancos
                </div>
              </div>
              <span class="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                Simular agora
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </NuxtLink>
          </div>

          <!-- Gerador de Currículo -->
          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100 hover:-translate-y-1">
            <NuxtLink to="/gerador/curriculo" class="block p-8">
              <div class="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                <svg class="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Gerador de Currículo</h3>
              <p class="text-gray-600 mb-6">Crie seu currículo profissional e exporte em PDF gratuitamente.</p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Modelos Profissionais
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Export em PDF
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  100% Gratuito
                </div>
              </div>
              <span class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                Criar currículo
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </NuxtLink>
          </div>

          <!-- Gerador de QR Code -->
          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-100 hover:-translate-y-1">
            <NuxtLink to="/gerador/qr-code" class="block p-8">
              <div class="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Gerador de QR Code</h3>
              <p class="text-gray-600 mb-6">Crie QR codes personalizados para URLs, textos e muito mais.</p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Personalizável
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Alta Qualidade
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Download Instantâneo
                </div>
              </div>
              <span class="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                Gerar QR Code
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </NuxtLink>
          </div>

          <!-- Cartelas de Bingo -->
          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-100 hover:-translate-y-1">
            <NuxtLink to="/imprimir/cartela-bingo" class="block p-8">
              <div class="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-100 transition-colors">
                <svg class="w-7 h-7 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Cartelas de Bingo</h3>
              <p class="text-gray-600 mb-6">Gere e imprima cartelas de bingo personalizadas em PDF.</p>
              <div class="space-y-2 mb-6">
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Números Aleatórios
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Pronto para Imprimir
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Folha Controladora
                </div>
              </div>
              <span class="text-red-600 hover:text-red-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                Gerar cartelas
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>

        
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
          <p class="text-lg text-gray-600">Tire suas dúvidas sobre o Gerador II</p>
        </div>

        <div class="space-y-6">
          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">As ferramentas são realmente gratuitas?</h3>
            <p class="text-gray-600">Sim, todas as nossas ferramentas são 100% gratuitas e sem limites de uso. Você pode criar currículos, simular financiamentos, gerar QR codes e cartelas de bingo quantas vezes precisar.</p>
          </div>

          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Posso usar as ferramentas para fins comerciais?</h3>
            <p class="text-gray-600">Sim! Você pode usar nossas ferramentas para fins pessoais e comerciais. Crie currículos para sua empresa, QR codes para seus produtos, cartelas de bingo para eventos, e muito mais.</p>
          </div>

          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Preciso me cadastrar para usar as ferramentas?</h3>
            <p class="text-gray-600">Não! Todas as ferramentas do Gerador II são completamente gratuitas e não requerem cadastro. Basta acessar a ferramenta desejada e começar a usar imediatamente.</p>
          </div>

          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">As ferramentas têm limite de uso?</h3>
            <p class="text-gray-600">Não há limites rígidos de uso. Você pode usar nossas ferramentas quantas vezes precisar. Pedimos apenas que use de forma responsável.</p>
          </div>

          <div class="bg-gray-50 rounded-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Vocês armazenam meus dados?</h3>
            <p class="text-gray-600">Não. Todas as ferramentas funcionam diretamente no seu navegador. Não armazenamos, rastreamos ou compartilhamos nenhum dado que você cria ou insere em nossas ferramentas.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Pronto para começar?
        </h2>
        <p class="text-xl text-blue-100 mb-8">
          Experimente nossas ferramentas gratuitamente e facilite seu dia a dia
        </p>
        <NuxtLink 
          to="/gerador/curriculo" 
          class="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-all"
        >
          Criar Currículo Gratis
          <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta tags
useSeoMeta({
  title: 'Gerador II - Ferramentas Gratuitas Online | Currículo, QR Code, Bingo e Financiamento',
  description: 'Plataforma completa e gratuita de ferramentas online: crie currículos profissionais, gere QR codes, cartelas de bingo e simule financiamentos. Sem cadastro, resultados instantâneos.',
  keywords: 'gerador currículo, gerador qr code, cartela bingo, simulador financiamento, ferramentas online gratis, criar currículo pdf, qr code personalizado',
  author: 'Gerador II',
  ogTitle: 'Gerador II - Ferramentas Gratuitas Online',
  ogDescription: 'Crie currículos, QR codes, cartelas de bingo e simule financiamentos. 100% gratuito, sem cadastro.',
  ogType: 'website',
  ogUrl: 'https://geradorii.com',
  twitterCard: 'summary_large_image'
})

// Schema Markup
useSchemaOrg([
  {
    '@type': 'WebSite',
    name: 'Gerador II',
    description: 'Plataforma gratuita de ferramentas online: currículos, QR codes, cartelas de bingo e simulador de financiamento',
    url: 'https://geradorii.com'
  },
  {
    '@type': 'Organization',
    name: 'Gerador II',
    description: 'Ferramentas online gratuitas para facilitar seu dia a dia',
    url: 'https://geradorii.com'
  },
  {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'As ferramentas são realmente gratuitas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim, todas as nossas ferramentas são 100% gratuitas e sem limites de uso. Você pode criar currículos, simular financiamentos, gerar QR codes e cartelas de bingo quantas vezes precisar.'
        }
      },
      {
        '@type': 'Question',
        name: 'Posso usar as ferramentas para fins comerciais?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim! Você pode usar nossas ferramentas para fins pessoais e comerciais. Crie currículos para sua empresa, QR codes para seus produtos, cartelas de bingo para eventos, e muito mais.'
        }
      },
      {
        '@type': 'Question',
        name: 'Preciso me cadastrar para usar as ferramentas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Não! Todas as ferramentas do Gerador II são completamente gratuitas e não requerem cadastro.'
        }
      }
    ]
  }
])
</script>



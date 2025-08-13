<template>
  <div class="min-h-screen bg-gray-50">
   
    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">DOCUMENTOS PESSOAIS</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ferramentas Essenciais</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">
            Soluções rápidas para suas necessidades de documentação
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Documentos Pessoais -->
          <div class="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
            <div class="p-6">
              <NuxtLink to="/gerador/cpf" class="block">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-indigo-100 transition-colors">
                    <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Gerador de CPF</h3>
                </div>
                <p class="text-gray-600 mb-6">Gere CPFs válidos para testes, com opções de formatação e estado específico.</p>
                <div class="flex justify-between items-center">
                  <span class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Usar Ferramenta
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                  <span class="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full">Popular</span>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Para Desenvolvedores -->
          <div class="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
            <div class="p-6">
              <NuxtLink to="/dev" class="block">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-100 transition-colors">
                    <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-gray-900">Para Desenvolvedores</h3>
                </div>
                <p class="text-gray-600 mb-6">APIs e ferramentas para integrar em seus projetos e aplicações.</p>
                <div class="flex justify-between items-center">
                  <span class="text-emerald-600 hover:text-emerald-800 font-medium flex items-center group-hover:translate-x-1 transition-transform">
                    Ver Documentação
                    <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                  <span class="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-full">API</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories Section -->   
    <section class="py-16 bg-gradient-to-b from-white to-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <span class="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 shadow-md">CATEGORIAS</span>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Encontre a Ferramenta Perfeita</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">Explore nossas categorias e descubra ferramentas úteis para suas necessidades</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Documentos Pessoais -->
          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-100 hover:-translate-y-1">
            <NuxtLink to="/categorias/documentos-pessoais" class="block p-8">
              <div class="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-100 transition-colors">
                <svg class="w-7 h-7 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Documentos Pessoais</h3>
              <p class="text-gray-600 mb-6">Gere e valide CPF, RG, CNH e outros documentos de identificação.</p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  CPF Gerador e Validador
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  RG Gerador
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  CNH Gerador
                </div>
              </div>
              <span class="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                Explorar ferramentas
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </NuxtLink>
          </div>

          <!-- Contatos -->
          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 hover:-translate-y-1">
            <NuxtLink to="/categorias/contatos" class="block p-8">
              <div class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
                <svg class="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Contatos</h3>
              <p class="text-gray-600 mb-6">Gere números de telefone, celular e e-mails para testes.</p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Gerador de Celular
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Gerador de Telefone
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Gerador de E-mail
                </div>
              </div>
              <span class="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                Explorar ferramentas
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </NuxtLink>
          </div>

          <!-- Veículos -->
          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-100 hover:-translate-y-1">
            <NuxtLink to="/categorias/veiculos" class="block p-8">
              <div class="w-14 h-14 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-100 transition-colors">
                <svg class="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M8 17l-1-4h10l-1 4m1-4h1a2 2 0 012 2v6a2 2 0 01-2 2h-1m-6 0H7a2 2 0 01-2-2v-6a2 2 0 012-2h1m-4-3h16v-2H4v2z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Veículos</h3>
              <p class="text-gray-600 mb-6">Gere e valide dados de veículos como placas, RENAVAM e chassi.</p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Gerador de Placa
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Gerador de RENAVAM
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Gerador de Chassi
                </div>
              </div>
              <span class="text-emerald-600 hover:text-emerald-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                Explorar ferramentas
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </NuxtLink>
          </div>

          <!-- Validação -->
          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-100 hover:-translate-y-1">
            <NuxtLink to="/validadores" class="block p-8">
              <div class="w-14 h-14 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors">
                <svg class="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Validação</h3>
              <p class="text-gray-600 mb-6">Verifique a validade e formate documentos de forma simples e rápida.</p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Validador de CPF/CNPJ
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Validador de E-mail
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Validador de Cartão de Crédito
                </div>
              </div>
              <span class="text-purple-600 hover:text-purple-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                Explorar validadores
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </NuxtLink>
          </div>

          <!-- Desenvolvedores -->
          <div class="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-100 hover:-translate-y-1">
            <NuxtLink to="/desenvolvedores" class="block p-8">
              <div class="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                <svg class="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Para Desenvolvedores</h3>
              <p class="text-gray-600 mb-6">APIs e ferramentas para integrar em seus projetos e aplicações.</p>
              <div class="space-y-3 mb-6">
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  API de Documentos
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Biblioteca JavaScript
                </div>
                <div class="flex items-center text-gray-700 text-sm">
                  <span class="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                  Documentação Completa
                </div>
              </div>
              <span class="text-amber-600 hover:text-amber-800 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                Ver documentação
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </NuxtLink>
          </div>
        </div>

        <div class="text-center mt-16">
          <NuxtLink to="/todas-ferramentas" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-colors">
            Ver Todas as Ferramentas
            <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// State for dropdown
const showDropdown = ref(false);
const selectedOption = ref('');

const options = [
  {
    value: 'cpf',
    label: 'Gerador de CPF',
    description: 'Gere CPFs válidos para testes',
    icon: 'document-text',
    path: '/gerador/cpf'
  },
  {
    value: 'cnpj',
    label: 'Gerador de CNPJ',
    description: 'Gere CNPJs válidos para testes',
    icon: 'briefcase',
    path: '/gerador/cnpj'
  },
  {
    value: 'celular',
    label: 'Gerador de Celular',
    description: 'Gere números de celular válidos',
    icon: 'device-mobile',
    path: '/gerador/celular'
  },
  {
    value: 'rg',
    label: 'Gerador de RG',
    description: 'Gere RGs válidos por estado',
    icon: 'identification',
    path: '/gerador/rg'
  }
];

const selectOption = (option) => {
  selectedOption.value = option.label;
  showDropdown.value = false;
  // In a real implementation, you would navigate to the selected path
  // navigateTo(option.path);
};

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  const dropdown = event.target.closest('.dropdown-container');
  if (!dropdown) {
    showDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
});

// SEO Meta tags
useSeoMeta({
  title: 'Gerador II - Geradores e Validadores de Documentos',
  description: 'Plataforma completa de ferramentas online para gerar e validar CPF, CNPJ, celular e outros documentos brasileiros. Dados fictícios para testes e desenvolvimento.',
  keywords: 'gerador cpf, validador cpf, gerador cnpj, gerador celular, Gerador II, dados fictícios, testes',
  author: 'Gerador II',
  ogTitle: 'Gerador II - Geradores e Validadores',
  ogDescription: 'Gere e valide documentos brasileiros para testes. CPF, CNPJ, celular e muito mais.',
  ogType: 'website',
  twitterCard: 'summary_large_image'
})

// Schema Markup
useSchemaOrg([
  {
    '@type': 'WebSite',
    name: 'Gerador II',
    description: 'Plataforma de geradores e validadores de documentos brasileiros',
    url: 'https://geradorii.com'
  },
  {
    '@type': 'Organization',
    name: 'Gerador II',
    description: 'Gerador II para geração e validação de documentos brasileiros',
    url: 'https://geradorii.com'
  }
])
</script>
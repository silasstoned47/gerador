<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">Página de Desenvolvimento</h1>
    
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 class="text-xl font-semibold mb-4">Links Rápidos</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NuxtLink 
          v-for="link in quickLinks" 
          :key="link.path" 
          :to="link.path"
          class="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
        >
          <h3 class="font-medium text-blue-600">{{ link.title }}</h3>
          <p class="text-sm text-gray-600">{{ link.description }}</p>
        </NuxtLink>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Informações do Sistema</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="font-medium text-gray-700 mb-2">Ambiente</h3>
          <ul class="space-y-2">
            <li class="flex justify-between">
              <span class="text-gray-600">Modo:</span>
              <span class="font-medium">{{ isDev ? 'Desenvolvimento' : 'Produção' }}</span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-600">Versão do Node:</span>
              <span class="font-mono">{{ nodeVersion }}</span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-600">Navegador:</span>
              <span class="font-mono">{{ userAgent }}</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-medium text-gray-700 mb-2">Estatísticas</h3>
          <ul class="space-y-2">
            <li class="flex justify-between">
              <span class="text-gray-600">Total de Ferramentas:</span>
              <span class="font-medium">{{ toolStats.totalTools }}</span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-600">Geradores:</span>
              <span class="font-medium">{{ toolStats.generators }}</span>
            </li>
            <li class="flex justify-between">
              <span class="text-gray-600">Validadores:</span>
              <span class="font-medium">{{ toolStats.validators }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $config } = useNuxtApp();

const quickLinks = [
  { 
    title: 'Gerador de CNPJ', 
    path: '/gerador/cnpj',
    description: 'Gere números de CNPJ válidos para testes'
  },
  { 
    title: 'Validador de CNPJ', 
    path: '/validadores/cnpj',
    description: 'Verifique se um CNPJ é válido'
  },
  { 
    title: 'Documentos Pessoais', 
    path: '/categorias/documentos-pessoais',
    description: 'Ferramentas para documentos pessoais'
  },
  { 
    title: 'Todas as Ferramentas', 
    path: '/todas-ferramentas',
    description: 'Lista completa de ferramentas disponíveis'
  },
  { 
    title: 'Termos de Uso', 
    path: '/termos',
    description: 'Termos e condições de uso do site'
  },
  { 
    title: 'Desenvolvedores', 
    path: '/desenvolvedores',
    description: 'Recursos para desenvolvedores'
  }
];

// Environment info
const isDev = process.dev;
const nodeVersion = process.server ? process.versions.node : 'Navegador';
const userAgent = process.client ? navigator.userAgent : 'Servidor';

// Tool statistics
const toolStats = {
  totalTools: 12, // Update this number based on your actual tools
  generators: 6,  // Update this number based on your actual generators
  validators: 6   // Update this number based on your actual validators
};
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Ferramentas para Documentos</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- CPF Tool Card -->
      <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 class="text-xl font-semibold text-gray-700 mb-3">Gerador de CPF</h2>
        <p class="text-gray-600 mb-4">Gere CPFs válidos para testes e desenvolvimento.</p>
        <NuxtLink 
          to="/gerador/cpf" 
          class="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
        >
          Acessar ferramenta
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>

      <!-- CNPJ Tool Card -->
      <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 class="text-xl font-semibold text-gray-700 mb-3">Gerador de CNPJ</h2>
        <p class="text-gray-600 mb-4">Gere CNPJs válidos para testes e desenvolvimento.</p>
        <NuxtLink 
          to="/gerador/cnpj" 
          class="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
        >
          Acessar ferramenta
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>

      <!-- Add more document-related tool cards as needed -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriaDocumentos',
  head() {
    return {
      title: 'Ferramentas para Documentos - Gerador II',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Diversas ferramentas úteis para geração e validação de documentos como CPF, CNPJ e outros documentos oficiais.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
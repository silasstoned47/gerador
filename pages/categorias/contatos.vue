<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Ferramentas de Contato</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Celular -->
      <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 class="text-xl font-semibold text-gray-700 mb-3">Gerador de Celular</h2>
        <p class="text-gray-600 mb-4">Gere números de celular válidos para testes.</p>
        <NuxtLink 
          to="/gerador/celular" 
          class="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
        >
          Acessar ferramenta
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>

      <!-- Telefone Fixo -->
      <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 class="text-xl font-semibold text-gray-700 mb-3">Gerador de Telefone</h2>
        <p class="text-gray-600 mb-4">Gere números de telefone fixo válidos para testes.</p>
        <NuxtLink 
          to="/gerador/telefone" 
          class="text-green-600 hover:text-green-700 font-medium inline-flex items-center"
        >
          Acessar ferramenta
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriaContatos',
  head() {
    return {
      title: 'Ferramentas de Contato - Gerador II',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Diversas ferramentas úteis para geração e validação de contatos como e-mails e números de telefone.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Ferramentas para Veículos</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Placeholder for future vehicle tools -->
      <div class="bg-white rounded-lg shadow-md p-6 border-2 border-dashed border-gray-200">
        <h2 class="text-xl font-semibold text-gray-400 mb-3">Em breve</h2>
        <p class="text-gray-400 mb-4">Novas ferramentas para veículos em desenvolvimento.</p>
        <span class="text-gray-400 font-medium inline-flex items-center">
          Em breve
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoriaVeiculos',
  head() {
    return {
      title: 'Ferramentas para Veículos - Gerador II',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Diversas ferramentas úteis para veículos, incluindo geradores de placas e outros utilitários automotivos.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
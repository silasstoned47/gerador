<template>
  <div class="container mx-auto px-4 py-12 max-w-4xl">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Sobre o Gerador II</h1>
      <p class="text-xl text-gray-600">Sua plataforma completa de ferramentas online gratuitas</p>
    </div>

    <div class="bg-white rounded-xl shadow-lg p-8 mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">Nossa Missão</h2>
      <p class="text-gray-700 mb-6 leading-relaxed">
        No Gerador II, acreditamos que a tecnologia deve ser acessível a todos. Nossa missão é fornecer ferramentas online gratuitas e fáceis de usar que ajudem pessoas e empresas em suas necessidades diárias.
      </p>
      
      <p class="text-gray-700 mb-6 leading-relaxed">
        Desde geradores de documentos até ferramentas de validação, nosso objetivo é simplificar tarefas complexas com soluções intuitivas e confiáveis.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <div class="bg-white rounded-xl shadow-lg p-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">O que oferecemos</h3>
        <ul class="space-y-3 text-gray-700">
          <li class="flex items-start">
            <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Ferramentas gratuitas e sem necessidade de cadastro
          </li>
          <li class="flex items-start">
            <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Interface simples e intuitiva
          </li>
          <li class="flex items-start">
            <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Resultados instantâneos
          </li>
          <li class="flex items-start">
            <svg class="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            Compatível com todos os dispositivos
          </li>
        </ul>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Nossos Valores</h3>
        <div class="space-y-4">
          <div>
            <h4 class="font-medium text-gray-800">Simplicidade</h4>
            <p class="text-gray-600 text-sm">Ferramentas fáceis de usar, sem complicações desnecessárias.</p>
          </div>
          <div>
            <h4 class="font-medium text-gray-800">Privacidade</h4>
            <p class="text-gray-600 text-sm">Respeitamos sua privacidade e não armazenamos seus dados.</p>
          </div>
          <div>
            <h4 class="font-medium text-gray-800">Qualidade</h4>
            <p class="text-gray-600 text-sm">Ferramentas precisas e confiáveis para todos os usuários.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-blue-50 rounded-xl p-8 text-center">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Precisa de ajuda?</h2>
      <p class="text-gray-700 mb-6">Tem alguma dúvida ou sugestão? Estamos aqui para ajudar!</p>
      <NuxtLink 
        to="/contato" 
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Fale Conosco
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sobre',
  head() {
    return {
      title: 'Sobre Nós - Gerador II',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Conheça mais sobre o Gerador II, sua plataforma de ferramentas online gratuitas. Nossa missão, valores e como podemos te ajudar.'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Custom styles can be added here */
</style>

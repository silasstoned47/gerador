<template>
  <div class="max-w-4xl mx-auto px-4 py-12">
    <!-- Cabeçalho -->
    <header class="text-center mb-12">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Fale Conosco</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">Tem alguma dúvida, sugestão ou precisa de suporte? Nossa equipe está pronta para ajudar!</p>
    </header>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Formulário de Contato -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Envie sua mensagem</h2>
        
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Seu nome completo"
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="seu@email.com"
            >
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Assunto</label>
            <select 
              id="subject" 
              name="subject"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Selecione um assunto</option>
              <option value="duvida">Dúvida</option>
              <option value="sugestao">Sugestão</option>
              <option value="parceria">Parceria</option>
              <option value="suporte">Suporte Técnico</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
            <textarea 
              id="message" 
              name="message" 
              rows="4" 
              required
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Como podemos ajudar?"
            ></textarea>
          </div>

          <div class="flex items-center">
            <input 
              type="checkbox" 
              id="privacy" 
              name="privacy" 
              required
              class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            >
            <label for="privacy" class="ml-2 block text-sm text-gray-700">
              Concordo com a <NuxtLink to="/politica-privacidade" class="text-blue-600 hover:underline">Política de Privacidade</NuxtLink>
            </label>
          </div>

          <button 
            type="submit" 
            class="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enviar Mensagem
          </button>
        </form>
      </div>

      <!-- Informações de Contato -->
      <div>
        <div class="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Informações de Contato</h2>
          <p class="text-gray-700 mb-4">Estamos aqui para ajudar! Entre em contato conosco através dos canais abaixo:</p>
          
          <div class="space-y-4">
            <div class="flex items-start">
              <div class="flex-shrink-0 h-6 w-6 text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-3">
                <h3 class="text-sm font-medium text-gray-900">E-mail</h3>
                <p class="text-sm text-gray-600">contato@geradorii.com</p>
              </div>
            </div>

          
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">Perguntas Frequentes</h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-medium text-gray-900">Preciso me cadastrar para usar as ferramentas?</h3>
              <p class="mt-1 text-sm text-gray-600">Não, todas as nossas ferramentas são gratuitas e não exigem cadastro.</p>
            </div>
            <div>
              <h3 class="font-medium text-gray-900">Posso usar os dados gerados em produção?</h3>
              <p class="mt-1 text-sm text-gray-600">Recomendamos o uso apenas em ambientes de teste. Consulte nossos <NuxtLink to="/termos" class="text-blue-600 hover:underline">Termos de Uso</NuxtLink> para mais informações.</p>
            </div>
            <div>
              <h3 class="font-medium text-gray-900">Como posso sugerir uma nova ferramenta?</h3>
              <p class="mt-1 text-sm text-gray-600">Envie sua sugestão pelo formulário ao lado ou por e-mail.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Fale Conosco | Gerador II',
  description: 'Entre em contato com a equipe do Gerador II. Tire suas dúvidas, envie sugestões ou solicite suporte técnico para nossas ferramentas online.',
  ogTitle: 'Fale Conosco - Gerador II',
  ogDescription: 'Entre em contato com nossa equipe para tirar dúvidas, enviar sugestões ou solicitar suporte técnico para nossas ferramentas online.',
  ogImage: '/images/og-contact.jpg'
});

// SEO adicional para a página
useHead({
  meta: [
    { name: 'keywords', content: 'contato, suporte, fale conosco, ajuda, dúvidas, gerador cpf, gerador cnpj' },
    { name: 'author', content: 'Gerador II' },
    { property: 'og:url', content: 'https://geradorii.com/contato/' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Fale Conosco - Gerador II' },
    { name: 'twitter:description', content: 'Entre em contato com nossa equipe para tirar dúvidas, enviar sugestões ou solicitar suporte técnico para nossas ferramentas online.' },
    { name: 'twitter:image', content: '/images/og-contact.jpg' }
  ]
});
</script>

<style scoped>
/* Estilos específicos para a página de contato */
form {
  scroll-margin-top: 2rem;
}

/* Melhorias de acessibilidade */
input:focus, textarea:focus, select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width, 0px) var(--tw-ring-offset-color, #fff);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width, 0px)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-opacity: 0.5;
  --tw-ring-color: rgba(59, 130, 246, var(--tw-ring-opacity));
}
</style>

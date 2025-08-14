<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <!-- Cabeçalho da Página -->
    <header class="mb-12 text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Recursos para Desenvolvedores</h1>
      <p class="text-xl text-gray-600">Ferramentas, APIs e documentação para integrar nossos serviços em suas aplicações</p>
    </header>

    <!-- Seção de APIs -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Nossas APIs</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-semibold text-blue-600 mb-3">API de Validação de CPF</h3>
          <p class="text-gray-600 mb-4">Valide números de CPF em tempo real em seus formulários e sistemas.</p>
          <NuxtLink to="/validadores/cpf" class="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center">
            Documentação da API <span class="ml-1">→</span>
          </NuxtLink>
        </div>
        
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-semibold text-blue-600 mb-3">API de Validação de CNPJ</h3>
          <p class="text-gray-600 mb-4">Verifique a validade de CNPJs diretamente em sua aplicação.</p>
          <NuxtLink to="/validadores/cnpj" class="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
            Documentação da API <span class="ml-1">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Seção de Ferramentas -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Ferramentas para Desenvolvedores</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <NuxtLink to="/gerador/cpf" class="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Gerador de CPF</h3>
          <p class="text-gray-600 text-sm">Gere CPFs válidos para testes em seus projetos.</p>
        </NuxtLink>
        
        <NuxtLink to="/gerador/cnpj" class="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Gerador de CNPJ</h3>
          <p class="text-gray-600 text-sm">Crie CNPJs para ambiente de desenvolvimento.</p>
        </NuxtLink>
        
        <NuxtLink to="/gerador/celular" class="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Gerador de Números de Celular</h3>
          <p class="text-gray-600 text-sm">Gere números de celular válidos para testes.</p>
        </NuxtLink>
      </div>
    </section>

    <!-- Seção de Documentação -->
    <section class="mb-16">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">Documentação</h2>
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Como integrar nossas APIs</h3>
        <div class="prose max-w-none">
          <p class="text-gray-700 mb-4">Nossas APIs RESTful são fáceis de integrar e podem ser acessadas através de requisições HTTP simples. Todas as respostas são retornadas em formato JSON.</p>
          
          <h4 class="font-semibold text-gray-800 mt-6 mb-3">Exemplo de Uso - Validação de CPF</h4>
          <pre class="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm"><code>// Exemplo em JavaScript
const cpf = '123.456.789-09';
const response = await fetch(`https://api.geradorii.com/validar/cpf?cpf=${cpf}`);
const data = await response.json();
console.log(data); // { valido: true, formatado: '123.456.789-09' }</code></pre>

          <h4 class="font-semibold text-gray-800 mt-6 mb-3">Códigos de Resposta</h4>
          <ul class="list-disc pl-5 space-y-2 text-gray-700">
            <li><span class="font-mono bg-gray-100 px-2 py-1 rounded">200</span> - Requisição bem-sucedida</li>
            <li><span class="font-mono bg-gray-100 px-2 py-1 rounded">400</span> - Parâmetros inválidos</li>
            <li><span class="font-mono bg-gray-100 px-2 py-1 rounded">429</span> - Muitas requisições</li>
            <li><span class="font-mono bg-gray-100 px-2 py-1 rounded">500</span> - Erro no servidor</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Seção de Contato -->
    <section class="bg-blue-50 p-8 rounded-lg">
      <h2 class="text-2xl font-semibold text-gray-800 mb-4">Precisa de ajuda?</h2>
      <p class="text-gray-700 mb-4">Nossa equipe de suporte está pronta para ajudar com qualquer dúvida sobre a integração.</p>
      <NuxtLink to="/contato" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
        Fale Conosco
      </NuxtLink>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Recursos para Desenvolvedores | Gerador II',
  description: 'Documentação, APIs e ferramentas para desenvolvedores que desejam integrar validações de documentos em suas aplicações. Aprenda a usar nossas APIs de CPF, CNPJ e mais.',
  ogTitle: 'Recursos para Desenvolvedores - Gerador II',
  ogDescription: 'Documentação completa e ferramentas para desenvolvedores que desejam integrar validações de documentos em suas aplicações.',
  ogImage: '/images/og-developers.jpg',
  twitterCard: 'summary_large_image'
});

// SEO adicional para a página
useHead({
  meta: [
    { name: 'keywords', content: 'api cpf, api cnpj, validação documentos, api validador, integração desenvolvedores, documentação api' },
    { name: 'author', content: 'Gerador II' },
    { property: 'og:url', content: 'https://geradorii.com/desenvolvedores/' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:title', content: 'Recursos para Desenvolvedores - Gerador II' },
    { name: 'twitter:description', content: 'Documentação completa e ferramentas para desenvolvedores que desejam integrar validações de documentos em suas aplicações.' },
    { name: 'twitter:image', content: '/images/og-developers.jpg' }
  ]
});
</script>

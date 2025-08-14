<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900 mb-2">Termos de Uso</h1>
      <p class="text-gray-600">Última atualização: 14 de Agosto de 2025</p>
    </header>

    <div class="prose max-w-none">
      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">1. Aceitação dos Termos</h2>
        <p class="text-gray-700 mb-4">Ao acessar e utilizar o site <strong>Gerador II</strong> (doravante denominado "nós", "nosso" ou "site"), você concorda em cumprir e ficar vinculado por estes Termos de Uso, todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">2. Uso das Ferramentas</h2>
        <p class="text-gray-700 mb-4">As ferramentas disponibilizadas em nosso site, incluindo mas não se limitando aos <NuxtLink to="/gerador/cpf" class="text-blue-600 hover:underline">geradores de CPF</NuxtLink> e <NuxtLink to="/gerador/cnpj" class="text-blue-600 hover:underline">geradores de CNPJ</NuxtLink>, são fornecidas exclusivamente para fins de:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-700">
          <li>Testes de desenvolvimento de software</li>
          <li>Preenchimento de formulários em ambientes de teste</li>
          <li>Estudos e pesquisas acadêmicas</li>
          <li>Outros fins lícitos e não fraudulentos</li>
        </ul>
        <p class="text-gray-700"><strong>É estritamente proibido</strong> o uso destas ferramentas para atividades ilegais, fraudes, falsificação de identidade ou qualquer finalidade que viole direitos de terceiros.</p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">3. Limitação de Responsabilidade</h2>
        <p class="text-gray-700 mb-4">O Gerador II atua como uma plataforma que fornece ferramentas para geração de dados de teste. Nós:</p>
        <ul class="list-disc pl-6 space-y-2 mb-4 text-gray-700">
          <li>Não armazenamos ou registramos os dados gerados</li>
          <li>Não nos responsabilizamos pelo uso indevido das ferramentas</li>
          <li>Não garantimos a exatidão ou adequação dos dados gerados para qualquer finalidade específica</li>
          <li>Não nos responsabilizamos por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou incapacidade de usar nossas ferramentas</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">4. Uso dos Dados Gerados</h2>
        <p class="text-gray-700 mb-4">Os dados gerados por nossas ferramentas, incluindo CPFs e CNPJs, são fictícios e gerados aleatoriamente. Embora sigam as regras de formatação oficiais, eles podem coincidir com números reais. Recomendamos o uso desses dados apenas em ambientes controlados de teste.</p>
        <p class="text-gray-700">Para fins de teste de sistemas, você pode estar interessado em nossos <NuxtLink to="/gerador/celular" class="text-blue-600 hover:underline">geradores de números de celular</NuxtLink> para completar seus cenários de teste.</p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">5. Direitos Autorais e Propriedade Intelectual</h2>
        <p class="text-gray-700 mb-4">Todo o conteúdo disponível no site, incluindo textos, gráficos, logotipos, ícones, imagens, compilações de dados e software, é de propriedade do Gerador II ou de seus fornecedores de conteúdo e está protegido pelas leis de direitos autorais.</p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">6. Modificações nos Termos</h2>
        <p class="text-gray-700 mb-4">Reservamos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso contínuo do site após tais modificações constitui sua concordância em ficar vinculado aos termos modificados.</p>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">7. Lei Aplicável</h2>
        <p class="text-gray-700">Estes Termos de Uso são regidos e interpretados de acordo com as leis do Brasil. Qualquer disputa relacionada a estes Termos será submetida à jurisdição exclusiva dos tribunais do Brasil.</p>
      </section>

      <section class="bg-gray-50 p-6 rounded-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-3">Dúvidas ou Preocupações?</h2>
        <p class="text-gray-700 mb-4">Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através da nossa <NuxtLink to="/contato" class="text-blue-600 hover:underline">página de contato</NuxtLink>.</p>
        <p class="text-gray-700">Para mais ferramentas úteis, confira nossa <NuxtLink to="/todas-ferramentas" class="text-blue-600 hover:underline">lista completa de ferramentas</NuxtLink>.</p>
      </section>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Termos de Uso | Gerador II',
  description: 'Termos de Uso do Gerador II - Ferramentas online para geração e validação de documentos. Conheça nossas políticas de uso e responsabilidade.',
  ogTitle: 'Termos de Uso - Gerador II',
  ogDescription: 'Leia os Termos de Uso do Gerador II e saiba como utilizar nossas ferramentas de forma responsável e dentro da lei.',
  ogImage: '/images/og-terms.jpg'
});

// SEO adicional para a página
useHead({
  meta: [
    { name: 'keywords', content: 'termos de uso, política de privacidade, gerador cpf, gerador cnpj, termos de serviço' },
    { name: 'author', content: 'Gerador II' },
    { property: 'og:url', content: 'https://geradorii.com/termos/' },
    { property: 'og:type', content: 'article' },
    { name: 'twitter:title', content: 'Termos de Uso - Gerador II' },
    { name: 'twitter:description', content: 'Leia os Termos de Uso do Gerador II e saiba como utilizar nossas ferramentas de forma responsável e dentro da lei.' },
    { name: 'twitter:image', content: '/images/og-terms.jpg' }
  ]
});
</script>

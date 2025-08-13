<template>
  <footer class="bg-gray-900 text-white mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">G</span>
            </div>
            <span class="text-xl font-bold">Gerador II</span>
          </div>
          <p class="text-gray-300 mb-4">
            Plataforma completa de ferramentas online para gerar e validar documentos brasileiros. 
            Todos os dados gerados são fictícios e devem ser usados apenas para testes.
          </p>
          <div class="bg-yellow-900 border border-yellow-600 rounded-lg p-4">
            <p class="text-yellow-200 text-sm">
              ⚠️ <strong>Aviso Legal:</strong> Dados fictícios - Uso exclusivo para testes. 
              Consulte nossos <NuxtLink to="/termos" class="underline hover:text-yellow-100">Termos de Uso</NuxtLink> antes de prosseguir.
            </p>
          </div>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Geradores</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/gerador/cpf" class="text-gray-300 hover:text-white transition-colors">Gerador de CPF</NuxtLink></li>
            <li><NuxtLink to="/gerador/celular" class="text-gray-300 hover:text-white transition-colors">Gerador de Celular</NuxtLink></li>
            <li><NuxtLink to="/gerador/cnpj" class="text-gray-300 hover:text-white transition-colors">Gerador de CNPJ</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Validadores</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/validadores/cpf" class="text-gray-300 hover:text-white transition-colors">Validador de CPF</NuxtLink></li>
            <li><NuxtLink to="/validadores/celular" class="text-gray-300 hover:text-white transition-colors">Validador de Celular</NuxtLink></li>
            <li><NuxtLink to="/validadores/cnpj" class="text-gray-300 hover:text-white transition-colors">Validador de CNPJ</NuxtLink></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-400">
          © 2025 Gerador II. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>
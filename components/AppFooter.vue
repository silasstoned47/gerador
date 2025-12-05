<template>
  <footer class="text-gray-900 mt-20 bg-white border-t border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">G</span>
            </div>
            <span class="text-xl font-bold">Gerador II</span>
          </div>
          <p class="text-gray-600 mb-4">
            CNPJ: 58.479.272/0001-04
          </p>
          
        </div>
        
        <div>
          <h3 class="text-lg font-semibold mb-4">Validadores</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/validadores/cpf" class="text-gray-600 hover:text-gray-900 transition-colors">Validador de CPF</NuxtLink></li>
            <li><NuxtLink to="/validadores/celular" class="text-gray-600 hover:text-gray-900 transition-colors">Validador de Celular</NuxtLink></li>
            <li><NuxtLink to="/validadores/cnpj" class="text-gray-600 hover:text-gray-900 transition-colors">Validador de CNPJ</NuxtLink></li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-500">
          © 2025 Gerador II. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
</template>

<template>
  <header class="bg-white shadow-sm border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-lg">G</span>
            </div>
            <span class="text-xl font-bold text-gray-900">Gerador II</span>
          </NuxtLink>
        </div>
        
        <nav class="hidden md:flex space-x-8">
          <NuxtLink 
            to="/gerador" 
            class="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            active-class="text-green-600"
          >
            Geradores
          </NuxtLink>
          <NuxtLink 
            to="/validadores" 
            class="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            active-class="text-green-600"
          >
            Validadores
          </NuxtLink>
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          <NuxtLink 
            to="/gerador" 
            class="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Geradores
          </NuxtLink>
          <NuxtLink 
            to="/validadores" 
            class="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
            @click="mobileMenuOpen = false"
          >
            Validadores
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false)
</script>
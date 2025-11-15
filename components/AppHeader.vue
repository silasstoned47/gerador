<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
      <div class="flex justify-between h-14 sm:h-16">
        <div class="flex items-center space-x-2">
          <!-- Mobile menu button -->
          <button 
            @click="toggleSidebar" 
            class="lg:hidden text-gray-500 hover:text-gray-600 focus:outline-none"
            aria-label="Abrir menu"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path 
                v-if="!isSidebarOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
          
          <!-- Logo -->
          <NuxtLink to="/" class="flex-shrink-0 flex items-center ml-2 lg:ml-0">
            <span class="text-xl font-bold text-green-600">Gerador<span class="text-blue-600">II</span></span>
          </NuxtLink>
          
          <!-- Desktop navigation -->
          <nav class="hidden lg:ml-10 lg:flex lg:space-x-8">
            <NuxtLink 
              to="/" 
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              :class="{ 'border-green-500 text-gray-900': $route.path === '/' }"
            >
              Início
            </NuxtLink>
            <NuxtLink 
              to="/sobre" 
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              :class="{ 'border-green-500 text-gray-900': $route.path === '/sobre' }"
            >
              Sobre
            </NuxtLink>
            <NuxtLink 
              to="/contato" 
              class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200"
              :class="{ 'border-green-500 text-gray-900': $route.path === '/contato' }"
            >
              Contato
            </NuxtLink>
          </nav>
        </div>
        
        <div class="flex items-center">
          <!-- Dark mode toggle -->
          <button 
            @click="toggleDarkMode" 
            class="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none transition-colors duration-200"
            aria-label="Alternar tema escuro"
          >
            <svg v-if="isDarkMode" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
            </svg>
            <svg v-else class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  isSidebarOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['toggle-sidebar']);
const isDarkMode = ref(false);

const toggleSidebar = () => {
  emit('toggle-sidebar');
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
};

onMounted(() => {
  // Check for saved user preference, if any, on load
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    isDarkMode.value = true;
  } else {
    document.documentElement.classList.remove('dark');
    isDarkMode.value = false;
  }
});
</script>
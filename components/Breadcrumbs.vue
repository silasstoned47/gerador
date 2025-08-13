<template>
  <nav class="flex items-center space-x-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
    <NuxtLink to="/" class="hover:text-green-600 transition-colors">Início</NuxtLink>
    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
    </svg>
    
    <template v-for="(crumb, index) in breadcrumbs" :key="index">
      <NuxtLink 
        v-if="index < breadcrumbs.length - 1"
        :to="crumb.path" 
        class="hover:text-green-600 transition-colors capitalize"
      >
        {{ crumb.name }}
      </NuxtLink>
      <span v-else class="text-gray-900 font-medium capitalize">
        {{ crumb.name }}
      </span>
      
      <svg 
        v-if="index < breadcrumbs.length - 1"
        class="w-4 h-4 text-gray-400" 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
      </svg>
    </template>
  </nav>
</template>

<script setup>
const props = defineProps({
  breadcrumbs: {
    type: Array,
    required: true
  }
})
</script>
<template>
  <div class="min-h-screen flex flex-col">
    <CookieConsent />
    
    <!-- Header -->
    <AppHeader 
      :is-sidebar-open="isSidebarOpen" 
      @toggle-sidebar="toggleSidebar" 
    />
    
    <div class="flex flex-1 overflow-hidden relative">
      <!-- Sidebar -->
      <AppSidebar 
        :is-open="isSidebarOpen" 
        @close="closeSidebar"
        class="fixed lg:sticky top-14 left-0 z-30 w-64 transform transition-transform duration-300 ease-in-out lg:translate-x-0"
        :class="{'-translate-x-full': !isSidebarOpen}"
      />
      
      <!-- Overlay for mobile -->
      <div 
        v-if="isSidebarOpen" 
        @click="closeSidebar"
        class="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
      ></div>
      
      <!-- Main content -->
      <main class="flex-1 overflow-auto focus:outline-none lg:ml-64 w-full bg-white pt-4">
        <div class="min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
          <div class="max-w-7xl mx-auto">
            <AdSense />
            <slot />
          </div>
        </div>
        
        <AppFooter class="bg-white border-t border-gray-200" />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, provide } from 'vue';
import { useRoute } from 'vue-router';
import CookieConsent from '~/components/CookieConsent.vue';
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
import AppSidebar from '~/components/AppSidebar.vue';

const route = useRoute();
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
  console.log('Sidebar toggled. New state:', isSidebarOpen.value);
};

const closeSidebar = () => {
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false;
    console.log('Sidebar closed');
  }
};

// Close sidebar when route changes
watch(() => route.path, () => {
  closeSidebar();
});

// Close sidebar when pressing escape key
const handleEscape = (e) => {
  if (e.key === 'Escape' && isSidebarOpen.value) {
    closeSidebar();
  }
};

// Handle window resize
const handleResize = () => {
  if (window.innerWidth >= 1024) {
    isSidebarOpen.value = true;
  } else {
    isSidebarOpen.value = false;
  }
  console.log('Window resized. Sidebar state:', isSidebarOpen.value);
};

// Set up event listeners
onMounted(() => {
  window.addEventListener('keydown', handleEscape);
  window.addEventListener('resize', handleResize);
  
  // Initialize sidebar state based on screen size
  handleResize();
  
  
});

// Clean up event listeners
onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape);
  window.removeEventListener('resize', handleResize);
});

</script>

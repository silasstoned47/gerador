<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <CookieConsent />
    
    <div class="flex flex-1 relative">
      <!-- Sidebar -->
      <AppSidebar 
        :is-open="isSidebarOpen" 
        @close="closeSidebar"
        class="z-50"
      />
      
      <!-- Overlay for mobile -->
      <div 
        v-if="isSidebarOpen" 
        class="lg:hidden fixed inset-0 bg-black/50 z-40"
        @click="closeSidebar"
      />
      
      <!-- Main content -->
      <main class="flex-1 min-w-0 w-full lg:pl-[280px] transition-all duration-300">
        <div class="max-w-full overflow-x-hidden">
          <NuxtPage />
        </div>
      </main>
    </div>
    
    <AppFooter class="lg:ml-[280px]" />
    <DisclaimerModal v-if="showDisclaimer" @close="showDisclaimer = false" />
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import CookieConsent from '~/components/CookieConsent.vue';

const route = useRoute();
const isSidebarOpen = ref(false);
const showDisclaimer = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  if (window.innerWidth < 1024) {
    isSidebarOpen.value = false;
  }
};

// Close sidebar when route changes (mobile)
watch(() => route.path, closeSidebar);

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
};

// Set up event listeners
onMounted(() => {
  window.addEventListener('keydown', handleEscape);
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape);
  window.removeEventListener('resize', handleResize);
});

// Global disclaimer state
provide('showDisclaimer', () => {
  showDisclaimer.value = true;
});
</script>

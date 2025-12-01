<template>
  <div class="adsense-container my-4 text-center">
    <!-- Content1 -->
    <ins class="adsbygoogle"
         style="display:block"
         :data-ad-client="adClient"
         :data-ad-slot="adSlot"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRuntimeConfig } from '#app';

const props = defineProps({
  adSlot: {
    type: String,
    required: true
  }
});

const config = useRuntimeConfig();
const adClient = config.public.adSenseClient;

onMounted(() => {
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.error('AdSense error:', e);
  }
});
</script>

<style scoped>
.adsense-container {
  min-height: 100px; /* Placeholder height to minimize CLS */
  width: 100%;
  overflow: hidden;
}
</style>

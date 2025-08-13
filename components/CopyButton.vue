<template>
  <button
    @click="copyToClipboard"
    class="btn-copy flex items-center space-x-1"
    :class="{ 'bg-green-100 text-green-700 border-green-300': copied }"
  >
    <svg v-if="!copied" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
    </svg>
    <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <span>{{ copied ? 'Copiado!' : 'Copiar' }}</span>
  </button>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

const copied = ref(false)

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.text)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
</script>
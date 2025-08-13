<template>
  <div class="min-h-screen bg-gray-50">
    <Head>
      <html lang="pt-br" />
      <title>Gerador II - Geradores e Validadores de Documentos</title>
      <meta name="description" content="Plataforma completa de ferramentas online para gerar e validar CPF, CNPJ, celular e outros documentos brasileiros." />
    </Head>
    <AppHeader />
    <main>
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </main>
    <AppFooter />
    <DisclaimerModal v-if="showDisclaimer" @close="showDisclaimer = false" />
  </div>
</template>

<script setup>
import { ref, provide } from 'vue';

const showDisclaimer = ref(false)

// Global disclaimer state
provide('showDisclaimer', () => {
  showDisclaimer.value = true
})
</script>
<template>
  <div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" @click="$emit('close')"></div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
        <div class="sm:flex sm:items-start">
          <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
            <svg class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
              Aviso Importante
            </h3>
            <div class="mt-2">
              <p class="text-sm text-gray-500 mb-3">
                Os dados gerados por esta ferramenta são <strong>completamente fictícios</strong> e devem ser utilizados exclusivamente para:
              </p>
              <ul class="text-sm text-gray-500 list-disc list-inside space-y-1 mb-3">
                <li>Testes de sistemas e aplicações</li>
                <li>Desenvolvimento de software</li>
                <li>Ambiente de homologação</li>
                <li>Fins educacionais</li>
              </ul>
              <div class="bg-red-50 border border-red-200 rounded-md p-3">
                <p class="text-sm text-red-800">
                  <strong>É PROIBIDO</strong> utilizar esses dados para cadastros em sistemas reais, 
                  fraudes ou qualquer atividade ilegal.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            type="button"
            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            @click="$emit('close')"
          >
            Compreendo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>
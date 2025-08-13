<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Validador de CNPJ</h1>
    
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <div class="space-y-4">
        <div>
          <label for="cnpjInput" class="block text-sm font-medium text-gray-700 mb-1">Digite o CNPJ:</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <input
              id="cnpjInput"
              v-model="cnpjInput"
              @input="formatCnpj"
              placeholder="00.000.000/0000-00"
              class="flex-1 min-w-0 block w-full px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              :class="{ 'border-red-500': cnpjInput && !isValid && cnpjInput.replace(/\D/g, '').length >= 14 }"
            >
            <button
              @click="validateCnpj"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Validar
            </button>
          </div>
          <p v-if="cnpjInput && !isValid && cnpjInput.replace(/\D/g, '').length >= 14" class="mt-1 text-sm text-red-600">
            CNPJ inválido. Por favor, verifique o número digitado.
          </p>
        </div>

        <div v-if="validationResult" class="p-4 rounded-md" :class="validationResult.valid ? 'bg-green-50' : 'bg-red-50'">
          <div class="flex items-start">
            <span v-if="validationResult.valid" class="text-green-500 mr-2">✓</span>
            <span v-else class="text-red-500 mr-2">✗</span>
            <div>
              <h3 class="text-sm font-medium" :class="validationResult.valid ? 'text-green-800' : 'text-red-800'">
                {{ validationResult.message }}
              </h3>
              <div v-if="validationResult.details" class="mt-1 text-sm" :class="validationResult.valid ? 'text-green-700' : 'text-red-700'">
                <p>{{ validationResult.details }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Como validar um CNPJ</h2>
      <p class="mb-4">
        Para validar um CNPJ, digite o número no campo acima e clique em "Validar". O validador verificará:
      </p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Se o CNPJ possui 14 dígitos numéricos</li>
        <li>Se os dígitos verificadores estão corretos</li>
        <li>Se não é uma sequência de números iguais</li>
      </ul>
      <p class="mt-4 text-sm text-gray-600">
        <strong>Observação:</strong> Este validador verifica apenas a estrutura numérica do CNPJ, não sua existência na Receita Federal.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const cnpjInput = ref('');
const validationResult = ref(null);

const isValid = computed(() => {
  if (!cnpjInput.value) return true;
  const cnpj = cnpjInput.value.replace(/\D/g, '');
  if (cnpj.length < 14) return true; // Don't show error until full CNPJ is entered
  return validateCnpjNumber(cnpj);
});

const formatCnpj = () => {
  // Remove non-numeric characters
  let numbers = cnpjInput.value.replace(/\D/g, '');
  
  // Limit to 14 digits
  numbers = numbers.substring(0, 14);
  
  // Format with dots, slash and dash
  let formatted = numbers;
  if (numbers.length > 12) {
    formatted = `${numbers.substring(0, 2)}.${numbers.substring(2, 5)}.${numbers.substring(5, 8)}/${numbers.substring(8, 12)}-${numbers.substring(12)}`;
  } else if (numbers.length > 8) {
    formatted = `${numbers.substring(0, 2)}.${numbers.substring(2, 5)}.${numbers.substring(5, 8)}/${numbers.substring(8)}`;
  } else if (numbers.length > 5) {
    formatted = `${numbers.substring(0, 2)}.${numbers.substring(2, 5)}.${numbers.substring(5)}`;
  } else if (numbers.length > 2) {
    formatted = `${numbers.substring(0, 2)}.${numbers.substring(2)}`;
  }
  
  cnpjInput.value = formatted;
};

const validateCnpj = () => {
  const cnpj = cnpjInput.value.replace(/\D/g, '');
  
  if (!cnpj) {
    validationResult.value = {
      valid: false,
      message: 'Por favor, digite um CNPJ',
      details: 'O campo não pode estar vazio.'
    };
    return;
  }
  
  if (cnpj.length !== 14) {
    validationResult.value = {
      valid: false,
      message: 'CNPJ inválido',
      details: 'O CNPJ deve conter 14 dígitos numéricos.'
    };
    return;
  }
  
  // Check if all digits are the same
  if (/^(\d)\1+$/.test(cnpj)) {
    validationResult.value = {
      valid: false,
      message: 'CNPJ inválido',
      details: 'CNPJ não pode conter todos os dígitos iguais.'
    };
    return;
  }
  
  const isValid = validateCnpjNumber(cnpj);
  
  if (isValid) {
    validationResult.value = {
      valid: true,
      message: 'CNPJ válido!',
      details: 'A estrutura do CNPJ está correta.'
    };
  } else {
    validationResult.value = {
      valid: false,
      message: 'CNPJ inválido',
      details: 'Os dígitos verificadores não conferem.'
    };
  }
};

const validateCnpjNumber = (cnpj) => {
  // Remove non-numeric characters
  cnpj = cnpj.replace(/[^\d]+/g, '');
  
  // Check length and invalid sequences
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
  
  // Calculate first verification digit
  let length = cnpj.length - 2;
  let numbers = cnpj.substring(0, length);
  const digits = cnpj.substring(length);
  let sum = 0;
  let pos = length - 7;
  
  for (let i = length; i >= 1; i--) {
    sum += numbers.charAt(length - i) * pos--;
    if (pos < 2) pos = 9;
  }
  
  let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result !== parseInt(digits.charAt(0))) return false;
  
  // Calculate second verification digit
  length = length + 1;
  numbers = cnpj.substring(0, length);
  sum = 0;
  pos = length - 7;
  
  for (let i = length; i >= 1; i--) {
    sum += numbers.charAt(length - i) * pos--;
    if (pos < 2) pos = 9;
  }
  
  result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result !== parseInt(digits.charAt(1))) return false;
  
  return true;
};
</script>

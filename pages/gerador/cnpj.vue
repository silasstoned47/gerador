<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Gerador de CNPJ</h1>
    
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <div class="flex flex-col space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">CNPJ Gerado:</label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <input 
              type="text"
              v-model="generatedCnpj"
              readonly
              class="flex-1 min-w-0 block w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
            <button 
              @click="copyToClipboard"
              class="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Copiar
            </button>
          </div>
        </div>

        <div class="flex space-x-4">
          <button 
            @click="generateCnpj"
            class="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Gerar Novo CNPJ
          </button>
          
          <button 
            @click="formatCnpj"
            class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {{ isFormatted ? 'Remover Formatação' : 'Formatar' }}
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Sobre o CNPJ</h2>
      <p class="mb-4">
        O Cadastro Nacional da Pessoa Jurídica (CNPJ) é o registro mantido pela Receita Federal do Brasil que identifica uma pessoa jurídica e outros tipos de arranjo jurídico sem personalidade jurídica perante a Receita Federal do Brasil.
      </p>
      <p class="text-sm text-gray-600">
        <strong>Importante:</strong> Este gerador produz números de CNPJ válidos, mas eles não estão registrados. Use apenas para fins de teste e desenvolvimento.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const generatedCnpj = ref('');
const isFormatted = ref(true);

const generateRandomDigits = (length) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 10)).join('');
};

const calculateVerificationDigit = (digits) => {
  const numbers = digits.split('').map(Number);
  const length = numbers.length + 1;
  
  const sum = numbers.reduce((acc, current, index) => {
    const weight = (length - index) % 8 || 2;
    return acc + (current * weight);
  }, 0);
  
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

const generateCnpj = () => {
  // Generate first 12 random digits
  const firstTwelve = generateRandomDigits(8) + '0001';
  
  // Calculate first verification digit
  const firstDigit = calculateVerificationDigit(firstTwelve);
  
  // Calculate second verification digit
  const secondDigit = calculateVerificationDigit(firstTwelve + firstDigit);
  
  // Combine all digits
  const cnpj = firstTwelve + firstDigit + secondDigit;
  
  // Format if needed
  generatedCnpj.value = isFormatted.value 
    ? cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5')
    : cnpj;
};

const formatCnpj = () => {
  if (!generatedCnpj.value) return;
  
  const digits = generatedCnpj.value.replace(/\D/g, '');
  
  if (isFormatted.value) {
    generatedCnpj.value = digits;
  } else {
    generatedCnpj.value = digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
  }
  
  isFormatted.value = !isFormatted.value;
};

const copyToClipboard = async () => {
  if (!generatedCnpj.value) return;
  
  try {
    await navigator.clipboard.writeText(generatedCnpj.value);
    alert('CNPJ copiado para a área de transferência!');
  } catch (err) {
    console.error('Erro ao copiar CNPJ:', err);
    alert('Não foi possível copiar o CNPJ');
  }
};

// Generate initial CNPJ on component mount
generateCnpj();
</script>

<style scoped>
/* Add any custom styles here */
</style>

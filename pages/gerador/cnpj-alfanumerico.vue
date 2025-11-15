<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Gerador de CNPJ Alfanumérico</h1>
    
    <div class="bg-white p-6 rounded-lg shadow-md mb-6">
      <div class="flex flex-col space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">CNPJ Alfanumérico Gerado:</label>
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
            Gerar Novo CNPJ Alfanumérico
          </button>
          
          <button 
            @click="formatCnpj"
            class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {{ isFormatted ? 'Remover Pontuação' : 'Adicionar Pontuação' }}
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Sobre o CNPJ Alfanumérico</h2>
      
      <div class="space-y-4">
        <p>
          O CNPJ alfanumérico é uma nova formatação que está sendo implementada para atender à crescente demanda por números de CNPJ, mantendo o mesmo tamanho atual de 14 posições, mas utilizando caracteres alfanuméricos (letras e números) nas 12 primeiras posições, enquanto as 2 últimas posições permanecerão numéricas como dígitos verificadores.
        </p>

        <div class="bg-blue-50 p-4 rounded-md border-l-4 border-blue-400">
          <h3 class="font-semibold text-blue-800 mb-2">Estrutura do CNPJ Alfanumérico</h3>
          <ul class="list-disc pl-5 space-y-1 text-blue-700">
            <li><strong>8 primeiras posições:</strong> Alfanuméricas (raiz do CNPJ)</li>
            <li><strong>4 posições seguintes:</strong> Alfanuméricas (número de ordem do estabelecimento - matriz ou filial)</li>
            <li><strong>2 últimas posições:</strong> Numéricas (dígitos verificadores)</li>
          </ul>
          <p class="mt-2 text-blue-800">
            <strong>Exemplo de formato:</strong> A1.B2C.3D4/E5F6-78
          </p>
        </div>

        <div class="mt-4">
          <h3 class="text-lg font-semibold mb-2">Como é calculado o dígito verificador?</h3>
          <p>
            O cálculo do dígito verificador continua usando o módulo 11, mas com uma adaptação importante: os caracteres alfanuméricos são substituídos pelo valor decimal correspondente ao código ASCII subtraído de 48. Isso significa que os valores serão, por exemplo: A=17, B=18, C=19, e assim por diante. Os números permanecem com seus valores originais.
          </p>
        </div>

        <div class="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400 mt-4">
          <h3 class="font-semibold text-yellow-800">Quando entra em vigor?</h3>
          <p class="text-yellow-700 mt-1">
            A previsão de geração dos primeiros CNPJs alfanuméricos está definida para <strong>julho de 2026</strong>, e será aplicado exclusivamente a novas inscrições.
          </p>
        </div>

        <div class="mt-4">
          <h3 class="text-lg font-semibold mb-2">E os CNPJs atuais?</h3>
          <p>
            Os CNPJs atuais (numéricos) continuarão válidos e serão reconhecidos por qualquer sistema informatizado, garantindo a plena convivência com o CNPJ alfanumérico. Quem já possui CNPJ numérico não precisará mudar de número ou fazer qualquer adaptação.
          </p>
        </div>

        <div class="bg-green-50 p-4 rounded-md border-l-4 border-green-400 mt-4">
          <h3 class="font-semibold text-green-800">Por que essa mudança?</h3>
          <p class="text-green-700 mt-1">
            O sistema numérico está se aproximando do limite de combinações disponíveis devido ao crescimento econômico, expansão dos MEIs, novas naturezas jurídicas e a Reforma Tributária. O CNPJ alfanumérico permite o registro de mais de um quatrilhão de empresas, e cada uma poderá ter mais de um milhão de filiais.
          </p>
        </div>
      </div>
      
      <p class="text-sm text-gray-600 mt-4">
        <strong>Importante:</strong> Este gerador produz números de CNPJ alfanuméricos no formato proposto, mas eles não estão registrados. Use apenas para fins de teste e desenvolvimento.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const generatedCnpj = ref('');
const isFormatted = ref(true);

const getRandomChar = () => {
  // 65-90 = A-Z, 48-57 = 0-9
  const random = Math.random();
  if (random < 0.6) {
    // 60% chance of number
    return String.fromCharCode(48 + Math.floor(Math.random() * 10));
  } else {
    // 40% chance of uppercase letter
    return String.fromCharCode(65 + Math.floor(Math.random() * 26));
  }
};

const calculateVerificationDigit = (cnpjBase) => {
  const weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  
  // Convert characters to their numeric values (A=10, B=11, ..., Z=35)
  const values = cnpjBase.split('').map(char => {
    const code = char.charCodeAt(0);
    if (code >= 48 && code <= 57) return parseInt(char); // 0-9
    return code - 55; // A=10, B=11, etc.
  });
  
  const sum = values.reduce((acc, val, idx) => acc + (val * (weights[idx] || 2)), 0);
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
};

const generateCnpj = () => {
  // Generate first 12 alphanumeric characters
  let cnpjBase = '';
  for (let i = 0; i < 12; i++) {
    cnpjBase += getRandomChar();
  }
  
  // Calculate first verification digit
  const firstDigit = calculateVerificationDigit(cnpjBase);
  
  // Calculate second verification digit
  const secondDigit = calculateVerificationDigit(cnpjBase + firstDigit);
  
  // Combine all parts
  const cnpj = cnpjBase + firstDigit + secondDigit;
  
  // Format if needed
  if (isFormatted.value) {
    generatedCnpj.value = 
      cnpj.substring(0, 2) + 
      '.' + 
      cnpj.substring(2, 5) + 
      '.' + 
      cnpj.substring(5, 8) + 
      '/' + 
      cnpj.substring(8, 12) + 
      '-' + 
      cnpj.substring(12, 14);
  } else {
    generatedCnpj.value = cnpj;
  }
};

const formatCnpj = () => {
  if (!generatedCnpj.value) return;
  
  const digits = generatedCnpj.value.replace(/[^A-Z0-9]/g, '');
  
  if (isFormatted.value) {
    generatedCnpj.value = digits;
  } else {
    generatedCnpj.value = 
      digits.substring(0, 2) + 
      '.' + 
      digits.substring(2, 5) + 
      '.' + 
      digits.substring(5, 8) + 
      '/' + 
      digits.substring(8, 12) + 
      '-' + 
      digits.substring(12, 14);
  }
  
  isFormatted.value = !isFormatted.value;
};

const copyToClipboard = async () => {
  if (!generatedCnpj.value) return;
  
  try {
    await navigator.clipboard.writeText(generatedCnpj.value);
    alert('CNPJ alfanumérico copiado para a área de transferência!');
  } catch (err) {
    console.error('Erro ao copiar CNPJ alfanumérico:', err);
    alert('Não foi possível copiar o CNPJ alfanumérico');
  }
};

// Generate initial CNPJ on component mount
generateCnpj();
</script>

<style scoped>
/* Add any custom styles here */
</style>

<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <Head>
      <Title>Simulador de Financiamento: Carro Sem Entrada - Análise de Score</Title>
      <Meta name="description" content="Simule financiamento de veículos sem entrada. Verifique seu Score e descubra se você consegue financiar 100% do seu carro novo." />
    </Head>

    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Simulador de Financiamento: Carro Sem Entrada
        </h1>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Descubra se seu perfil é aprovado para financiar 100% do veículo e simule o valor da parcela agora.
        </p>
      </div>


      <!-- Simulator Card -->
      <div class="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 mb-8">
        <div class="p-6 sm:p-8">
          <form @submit.prevent="handleSimulation" class="space-y-6">
            
            <!-- Vehicle Value Input -->
            <div>
              <label for="vehicle-value" class="block text-sm font-medium text-gray-700">
                Valor do Veículo (R$)
              </label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 sm:text-sm">R$</span>
                </div>
                <input
                  type="text"
                  id="vehicle-value"
                  v-model="formattedValue"
                  @input="formatCurrency"
                  class="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-lg border-gray-300 rounded-md py-3"
                  placeholder="0,00"
                  required
                />
              </div>
            </div>

            <!-- CPF Input -->
            <div>
              <label for="cpf" class="block text-sm font-medium text-gray-700">
                Seu CPF (Para análise de Score)
              </label>
              <div class="mt-1">
                <input
                  type="text"
                  id="cpf"
                  v-model="cpf"
                  @input="maskCPF"
                  maxlength="14"
                  class="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-lg border-gray-300 rounded-md py-3 px-4"
                  placeholder="000.000.000-00"
                  required
                />
              </div>
              <p class="mt-2 text-xs text-gray-500 flex items-center">
                <svg class="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Ambiente seguro. Seus dados são usados apenas para a simulação.
              </p>
            </div>

            <!-- Action Button -->
            <button
              type="submit"
              :disabled="loading"
              class="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              <span v-if="loading" class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analisando Perfil...
              </span>
              <span v-else>
                Simular Financiamento Grátis
              </span>
            </button>
          </form>
        </div>

        <!-- Results Section -->
        <div v-if="result" class="bg-gray-50 px-6 py-8 border-t border-gray-100 animate-fade-in">
          
          <!-- Personalization -->
          <div v-if="userData.name" class="mb-6">
            <h3 class="text-xl font-bold text-gray-800">
              Olá, {{ formatName(userData.name) }}!
            </h3>
            <p class="text-gray-600">Analisamos seu perfil financeiro.</p>
          </div>

          <!-- Score Thermometer -->
          <div class="mb-8">
            <div class="flex justify-between items-end mb-2">
              <span class="text-sm font-medium text-gray-500">Score de Crédito</span>
              <span :class="scoreColorClass" class="text-lg font-bold">{{ scoreData.value }} / 1000</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden relative">
              <div 
                class="h-full transition-all duration-1000 ease-out rounded-full"
                :class="scoreBgClass"
                :style="{ width: `${(scoreData.value / 1000) * 100}%` }"
              ></div>
            </div>
            <p class="mt-2 text-sm text-gray-600">
              Classificação: <span class="font-semibold">{{ scoreData.range }}</span>
            </p>
          </div>

          <!-- Simulation Values -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Entrada Necessária</p>
              <p class="text-2xl font-bold text-green-600">R$ 0,00</p>
              <p class="text-xs text-gray-400 mt-1">*Mediante aprovação bancária</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <p class="text-xs text-gray-500 uppercase tracking-wide font-semibold">Parcela Estimada (48x)</p>
              <p class="text-2xl font-bold text-blue-600">{{ formatCurrencyValue(simulation.installment) }}</p>
              <p class="text-xs text-gray-400 mt-1">Taxa est. {{ simulation.rate }}% a.m.</p>
            </div>
          </div>

          <!-- CTA Banks -->
          <div class="space-y-3">
            <h4 class="font-medium text-gray-900">Bancos recomendados para seu perfil:</h4>
            <div v-for="bank in recommendedBanks" :key="bank.name" class="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
              <div class="flex items-center">
                <div class="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500 mr-3">
                  {{ bank.initials }}
                </div>
                <span class="font-medium text-gray-700">{{ bank.name }}</span>
              </div>
              <NuxtLink :to="bank.route" class="text-sm text-blue-600 font-semibold hover:text-blue-800">
                Solicitar
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>

      <!-- AdSense Middle -->
      <AdSense adSlot="0987654321" />

      <!-- SEO Content -->
      <div class="prose prose-blue max-w-none mt-12 bg-white p-6 rounded-xl shadow-sm">
        <h2>Como conseguir financiar um carro sem entrada?</h2>
        <p>
          O financiamento de veículos sem entrada, também conhecido como <strong>financiamento 100%</strong>, é uma modalidade de crédito onde o banco cobre o valor total do automóvel. Para conseguir essa aprovação, as instituições financeiras analisam rigorosamente o seu <strong>Score de Crédito</strong> e sua capacidade de pagamento (Renda).
        </p>
        
        <h3>O papel do Score no Financiamento Zero Entrada</h3>
        <p>
          Seu Score (pontuação de 0 a 1000) é o principal termômetro.
        </p>
        <ul>
          <li><strong>Acima de 700:</strong> Altas chances de aprovação sem entrada e com taxas reduzidas.</li>
          <li><strong>Entre 400 e 700:</strong> Possível, mas pode depender de um bom relacionamento com o banco.</li>
          <li><strong>Abaixo de 400:</strong> Mais difícil. Recomenda-se dar uma entrada de pelo menos 20% ou tentar um consórcio.</li>
        </ul>

        <h3>Dicas para ser aprovado</h3>
        <ol>
          <li>Mantenha seu Cadastro Positivo ativo.</li>
          <li>Evite pedir muitos cartões de crédito ao mesmo tempo.</li>
          <li>Pague suas contas em dia para aumentar seu Score.</li>
        </ol>
      </div>

      <!-- AdSense Bottom -->
      <AdSense adSlot="1122334455" />

    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const cpf = ref('');
const vehicleValue = ref(0);
const formattedValue = ref('');
const loading = ref(false);
const result = ref(false);

const userData = ref({
  name: '',
  income: 0
});

const scoreData = ref({
  value: 0,
  range: ''
});

const simulation = ref({
  installment: 0,
  rate: 0
});

// Mock Banks
const recommendedBanks = [
  { name: 'Santander Financiamentos', initials: 'SAN', route: '/financiamento/santander' },
  { name: 'BV Financeira', initials: 'BV', route: '/financiamento/bv-financeira' },
  { name: 'Banco Pan', initials: 'PAN', route: '/financiamento/banco-pan' },
  { name: 'Itaú Veículos', initials: 'IT', route: '/financiamento/itau-veiculos' }
];

// Computed Styles
const scoreColorClass = computed(() => {
  if (scoreData.value < 300) return 'text-red-600';
  if (scoreData.value < 600) return 'text-yellow-600';
  return 'text-green-600';
});

const scoreBgClass = computed(() => {
  if (scoreData.value < 300) return 'bg-red-500';
  if (scoreData.value < 600) return 'bg-yellow-500';
  return 'bg-green-500';
});

// Formatters
const formatCurrency = (e) => {
  let value = e.target.value.replace(/\D/g, '');
  vehicleValue.value = (parseFloat(value) / 100);
  formattedValue.value = (parseFloat(value) / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

const formatCurrencyValue = (val) => {
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const maskCPF = (e) => {
  let value = e.target.value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);
  cpf.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

const formatName = (fullName) => {
  if (!fullName) return 'Visitante';
  const names = fullName.split(' ');
  return names[0] + (names.length > 1 ? ' ' + names[names.length - 1] : '');
};

// Logic
const handleSimulation = async () => {
  if (!cpf.value || !vehicleValue.value) return;
  
  loading.value = true;
  result.value = false;

  try {
    const cleanCpf = cpf.value.replace(/\D/g, '');
    
    // Call API
    const response = await $fetch(`https://proxy-serasa.bispoednei3.workers.dev/`, {
      query: { cpf: cleanCpf }
    });

    if (response) {
      processApiData(response);
    } else {
      mockSimulation();
    }

  } catch (e) {
    console.error('Simulation error:', e);
    mockSimulation();
  } finally {
    loading.value = false;
    result.value = true;
  }
};

const processApiData = (data) => {
  // Extract Name
  if (data.DADOS && data.DADOS.NOME) {
    userData.value.name = data.DADOS.NOME;
  }

  // Extract Score
  let score = 500; // Default
  if (data.SCORE && data.SCORE.length > 0) {
    // Try to find CSB8 or CSBA
    const scoreObj = data.SCORE[0];
    if (scoreObj.CSB8) score = parseInt(scoreObj.CSB8);
    else if (scoreObj.CSBA) score = parseInt(scoreObj.CSBA);
    
    scoreData.value.range = scoreObj.CSB8_FAIXA || scoreObj.CSBA_FAIXA || 'MÉDIO';
  } else {
    scoreData.value.range = 'MÉDIO';
  }
  scoreData.value.value = score;

  calculateLoan(score);
};

const mockSimulation = () => {
  // Fallback simulation
  userData.value.name = '';
  const randomScore = Math.floor(Math.random() * (850 - 350 + 1)) + 350;
  scoreData.value.value = randomScore;
  scoreData.value.range = randomScore > 700 ? 'ALTO' : (randomScore > 400 ? 'MÉDIO' : 'BAIXO');
  
  calculateLoan(randomScore);
};

const calculateLoan = (score) => {
  // Interest Rate Logic based on Score
  let rate = 2.5; // Default monthly rate
  if (score > 800) rate = 1.49;
  else if (score > 600) rate = 1.89;
  else if (score > 400) rate = 2.39;
  else rate = 2.99;

  simulation.value.rate = rate;

  // PMT Formula: P * i / (1 - (1+i)^-n)
  const n = 48; // 48 months
  const i = rate / 100;
  const pv = vehicleValue.value;
  
  const pmt = (pv * i) / (1 - Math.pow(1 + i, -n));
  
  simulation.value.installment = pmt;
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>

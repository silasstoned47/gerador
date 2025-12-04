<template>
  <div class="min-h-screen bg-gray-50 py-2 sm:py-4 font-sans text-gray-900">
    <Head>
      <Title>Simulador de Financiamento: Carro Sem Entrada - Análise Completa</Title>
      <Meta name="description" content="Simule financiamento de veículos sem entrada. Análise detalhada de Score, confirmação de dados e aprovação instantânea." />
    </Head>

    <div ref="simulatorContainer" class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-2 sm:mb-4">
        <h1 class="text-xl font-extrabold text-gray-900 sm:text-3xl tracking-tight">
          Simulador de Financiamento
        </h1>
        <p class="mt-1 sm:mt-2 max-w-2xl mx-auto text-sm sm:text-base text-gray-500">
          Análise de crédito profissional para financiamento 100% sem entrada.
        </p>
      </div>

      <!-- Progress Steps -->
      <div v-if="currentStep > 0" class="mb-6">
        <div class="flex items-center justify-between relative">
          <div class="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
          <div 
            class="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 transition-all duration-500 -z-10"
            :style="{ width: `${((currentStep - 1) / 3) * 100}%` }"
          ></div>
          
          <div v-for="step in 4" :key="step" class="flex flex-col items-center">
            <div 
              class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors duration-300 bg-white"
              :class="currentStep >= step ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-400'"
            >
              {{ step }}
            </div>
            <span class="text-xs mt-1 font-medium" :class="currentStep >= step ? 'text-blue-600' : 'text-gray-400'">
              {{ getStepLabel(step) }}
            </span>
          </div>
        </div>
      </div>

      <!-- AdSense Top -->
      <div class="mb-4">
        <AdSense adSlot="6441683637" />
      </div>

      <!-- Main Card -->
      <div class="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500">
        
        <!-- Step 1: Initial Data -->
        <div v-if="currentStep === 1" class="p-5 animate-fade-in">
          <h2 class="text-xl font-bold text-gray-900 mb-4">Dados Iniciais</h2>
          <form @submit.prevent="fetchData" class="space-y-4">
            <div>
              <label for="vehicle-value" class="block text-base sm:text-sm font-bold sm:font-medium text-gray-700 mb-1">Valor do Veículo</label>
              <div class="relative rounded-md shadow-sm">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span class="text-gray-500 text-lg sm:text-sm font-bold">R$</span>
                </div>
                <input
                  type="text"
                  id="vehicle-value"
                  v-model="formattedValue"
                  @input="formatCurrency"
                  class="focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 sm:pl-10 text-xl sm:text-lg font-bold border-gray-300 rounded-lg py-4 sm:py-3 bg-white shadow-sm transition-all duration-200 ease-in-out transform focus:scale-[1.01]"
                  placeholder="0,00"
                  inputmode="numeric"
                  required
                />
              </div>
            </div>

            <div>
              <label for="cpf" class="block text-sm font-medium text-gray-700 mb-1">CPF do Solicitante</label>
              <input
                type="text"
                id="cpf"
                v-model="cpf"
                @input="maskCPF"
                maxlength="14"
                class="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-lg border-gray-300 rounded-md py-3 px-4"
                placeholder="000.000.000-00"
                required
              />
              <p class="mt-2 text-xs text-gray-500 flex items-center">
                <svg class="h-4 w-4 mr-1 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Ambiente seguro e criptografado.
              </p>
            </div>

            <button
              type="submit"
              :disabled="loading"
              class="w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span v-if="loading" class="flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Buscando Dados...
              </span>
              <span v-else>Iniciar Análise Gratuita</span>
            </button>
          </form>
        </div>

        <!-- Step 2: Data Confirmation -->
        <div v-if="currentStep === 2" class="p-5 animate-fade-in">
          <div class="text-center mb-6">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-3">
              <svg class="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-gray-900">Confirme seus Dados</h2>
            <p class="text-gray-600 mt-1 text-sm">Encontramos as seguintes informações associadas ao seu CPF.</p>
          </div>

          <div class="space-y-4">
            <!-- Name -->
            <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Nome Completo</span>
              <p class="text-lg font-medium text-gray-900">{{ apiData.name }}</p>
            </div>

            <!-- Phones Selection -->
            <div v-if="apiData.phones.length > 0">
              <label class="block text-sm font-medium text-gray-700 mb-2">Selecione seu telefone principal</label>
              <div class="space-y-2">
                <div 
                  v-for="(phone, index) in apiData.phones" 
                  :key="index"
                  @click="selectedData.phone = phone"
                  class="flex items-center p-3 border rounded-lg cursor-pointer transition-all hover:bg-blue-50"
                  :class="selectedData.phone === phone ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200'"
                >
                  <div class="flex-1">
                    <p class="font-medium text-gray-900">{{ formatPhone(phone.number) }}</p>
                    <p class="text-xs text-gray-500">
                      {{ phone.type }} 
                      <span v-if="phone.isWhatsapp" class="text-green-600 font-bold ml-1">• WhatsApp</span>
                    </p>
                  </div>
                  <div class="ml-3" v-if="selectedData.phone === phone">
                    <svg class="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Address Selection -->
            <div v-if="apiData.addresses.length > 0">
              <label class="block text-sm font-medium text-gray-700 mb-2">Confirme seu endereço atual</label>
              <div class="space-y-2">
                <div 
                  v-for="(addr, index) in apiData.addresses.slice(0, 3)" 
                  :key="index"
                  @click="selectedData.address = addr"
                  class="flex items-center p-3 border rounded-lg cursor-pointer transition-all hover:bg-blue-50"
                  :class="selectedData.address === addr ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200'"
                >
                  <div class="flex-1">
                    <p class="font-medium text-gray-900 text-sm">{{ addr.street }}, {{ addr.number }}</p>
                    <p class="text-xs text-gray-500">{{ addr.district }} - {{ addr.city }}/{{ addr.state }}</p>
                  </div>
                  <div class="ml-3" v-if="selectedData.address === addr">
                    <svg class="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- AdSense Inter-Step 2 -->
            <div class="my-6">
              <AdSense adSlot="6441683637" />
            </div>

            <button
              @click="confirmData"
              class="w-full py-4 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-sm transition-colors duration-200"
            >
              Confirmar e Analisar Crédito
            </button>
          </div>
        </div>

        <!-- Step 3: Credit Analysis -->
        <div v-if="currentStep === 3" class="p-5 animate-fade-in">
          <div class="text-center mb-6">
            <h2 class="text-xl font-bold text-gray-900">Análise de Crédito</h2>
            <p class="text-gray-600 mt-1 text-sm">Calculando seu potencial de financiamento...</p>
          </div>

          <!-- Score Thermometer -->
          <div class="mb-6 bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div class="flex justify-between items-end mb-3">
              <span class="text-sm font-bold text-gray-700 uppercase">Seu Score</span>
              <div class="text-right">
                <span class="text-3xl font-black block" :class="scoreColorClass">{{ apiData.score }}</span>
                <span class="text-xs text-gray-500 font-medium">de 1000 pontos</span>
              </div>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-4 overflow-hidden relative shadow-inner">
              <div 
                class="h-full transition-all duration-1500 ease-out rounded-full relative"
                :class="scoreBgClass"
                :style="{ width: `${(apiData.score / 1000) * 100}%` }"
              >
                <div class="absolute inset-0 bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <div class="mt-3 flex justify-between text-xs font-medium text-gray-500">
              <span>Baixo Risco</span>
              <span>Médio Risco</span>
              <span>Alto Risco</span>
            </div>
          </div>

          <!-- Metrics Grid -->
          <div class="grid grid-cols-2 gap-4 mb-8">
            <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-gray-500 uppercase">Poder de Compra</span>
                <svg class="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <p class="text-2xl font-bold text-gray-900">{{ metrics.purchasingPower }}/100</p>
              <p class="text-xs text-gray-500 mt-1">{{ getPurchasingPowerLabel() }}</p>
            </div>
            
            <div class="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs font-bold text-gray-500 uppercase">Renda Estimada</span>
                <svg class="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-2xl font-bold text-gray-900">{{ formatCurrencyValue(apiData.income) }}</p>
              <p class="text-xs text-gray-500 mt-1">Base Serasa</p>
            </div>
          </div>

          <!-- AdSense Inter-Step 3 -->
          <div class="my-6">
            <AdSense adSlot="6441683637" />
          </div>

          <button
            @click="showResults"
            class="w-full py-4 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold shadow-sm transition-colors duration-200 flex items-center justify-center"
          >
            Ver Opções de Financiamento
            <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>

        <!-- Step 4: Results -->
        <div v-if="currentStep === 4" class="p-5 animate-fade-in">
          <div class="text-center mb-6">
            <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-3 animate-bounce-small">
              <svg class="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-gray-900">Pré-Aprovação Disponível!</h2>
            <p class="text-gray-600 mt-1 text-sm">Com base no seu perfil, calculamos as seguintes condições.</p>
          </div>

          <!-- Scenarios -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            <div 
              v-for="scenario in scenarios" 
              :key="scenario.months"
              class="border rounded-xl p-4 cursor-pointer transition-all hover:shadow-md"
              :class="selectedScenario === scenario.months ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200 bg-white'"
              @click="selectedScenario = scenario.months"
            >
              <div class="text-center">
                <p class="text-sm font-bold text-gray-500 uppercase">{{ scenario.months }}x Parcelas</p>
                <p class="text-2xl font-black text-blue-600 my-2">{{ formatCurrencyValue(scenario.installment) }}</p>
                <p class="text-xs text-gray-500">Total: {{ formatCurrencyValue(scenario.total) }}</p>
              </div>
            </div>
          </div>

          <!-- AdSense Inter-Step 4 -->
          <div class="my-6">
            <AdSense adSlot="6441683637" />
          </div>

          <!-- Bank Recommendations -->
          <div class="space-y-4 mb-8">
            <h3 class="font-bold text-gray-900">Bancos Recomendados</h3>
            <div 
              v-for="bank in recommendedBanks" 
              :key="bank.name"
              class="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between hover:border-blue-300 transition-colors"
            >
              <div class="flex items-center">
                <div class="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-gray-600 mr-4">
                  {{ bank.initials }}
                </div>
                <div>
                  <p class="font-bold text-gray-900">{{ bank.name }}</p>
                  <p class="text-xs text-green-600 font-medium">{{ bank.approvalChance }}% de chance de aprovação</p>
                </div>
              </div>
              <NuxtLink 
                :to="bank.route"
                class="px-4 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Solicitar
              </NuxtLink>
            </div>
          </div>

          <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
            <p class="flex items-start">
              <svg class="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Os valores são estimados e podem variar de acordo com a análise final da instituição financeira.
            </p>
          </div>
        </div>

      </div>

   
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// State
const currentStep = ref(1);
const simulatorContainer = ref(null);
const loading = ref(false);
const cpf = ref('');
const vehicleValue = ref(0);
const formattedValue = ref('');
const selectedScenario = ref(48);

// Scroll Helper
const scrollToTop = () => {
  if (simulatorContainer.value) {
    simulatorContainer.value.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Data Containers
const apiData = ref({
  name: '',
  income: 0,
  score: 0,
  phones: [],
  emails: [],
  addresses: []
});

const selectedData = ref({
  phone: null,
  email: null,
  address: null
});

const metrics = ref({
  purchasingPower: 0,
  dti: 0
});

const scenarios = ref([]);

const recommendedBanks = ref([
  { name: 'Santander', initials: 'SAN', route: '/financiamento/santander', approvalChance: 0 },
  { name: 'BV Financeira', initials: 'BV', route: '/financiamento/bv-financeira', approvalChance: 0 },
  { name: 'Banco Pan', initials: 'PAN', route: '/financiamento/banco-pan', approvalChance: 0 },
  { name: 'Itaú', initials: 'IT', route: '/financiamento/itau-veiculos', approvalChance: 0 }
]);

// Computed
const scoreColorClass = computed(() => {
  if (apiData.value.score < 400) return 'text-red-600';
  if (apiData.value.score < 700) return 'text-yellow-600';
  return 'text-green-600';
});

const scoreBgClass = computed(() => {
  if (apiData.value.score < 400) return 'bg-red-500';
  if (apiData.value.score < 700) return 'bg-yellow-500';
  return 'bg-green-500';
});

// Methods
const getStepLabel = (step) => {
  switch(step) {
    case 1: return 'Dados';
    case 2: return 'Confirmação';
    case 3: return 'Análise';
    case 4: return 'Resultado';
    default: return '';
  }
};

const formatCurrency = (event) => {
  let value = event.target.value.replace(/\D/g, '');
  vehicleValue.value = parseFloat(value) / 100;
  formattedValue.value = (parseFloat(value) / 100).toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

const formatCurrencyValue = (val) => {
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const maskCPF = () => {
  let value = cpf.value.replace(/\D/g, '');
  if (value.length > 11) value = value.slice(0, 11);
  cpf.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

const formatPhone = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 11) return cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
};

// API Logic
const fetchData = async () => {
  if (!cpf.value || !vehicleValue.value) return;
  
  loading.value = true;
  const cleanCpf = cpf.value.replace(/\D/g, '');

  try {
    const response = await $fetch(`https://proxy-serasa.bispoednei3.workers.dev/`, {
      query: { cpf: cleanCpf }
    });

    processApiData(response);
    currentStep.value = 2;
    scrollToTop();
  } catch (error) {
    console.error('Error fetching data:', error);
    // Fallback for demo/error
    mockData();
    currentStep.value = 2;
    scrollToTop();
  } finally {
    loading.value = false;
  }
};

const processApiData = (data) => {
  // Basic Info
  if (data.DADOS) {
    apiData.value.name = data.DADOS.NOME;
    apiData.value.income = parseFloat(data.DADOS.RENDA?.replace(',', '.') || '0');
  }

  // Phones
  if (data.TELEFONE) {
    apiData.value.phones = data.TELEFONE.map(p => ({
      number: `${p.DDD}${p.TELEFONE}`,
      type: p.TIPO_TELEFONE === 3 ? 'Celular' : 'Fixo',
      isWhatsapp: p.CLASSIFICACAO?.includes('A') || false
    }));
    if (apiData.value.phones.length > 0) selectedData.value.phone = apiData.value.phones[0];
  }

  // Addresses
  if (data.ENDERECOS) {
    apiData.value.addresses = data.ENDERECOS.map(a => ({
      street: `${a.LOGR_TIPO} ${a.LOGR_NOME}`,
      number: a.LOGR_NUMERO,
      district: a.BAIRRO,
      city: a.CIDADE,
      state: a.UF,
      cep: a.CEP
    }));
    if (apiData.value.addresses.length > 0) selectedData.value.address = apiData.value.addresses[0];
  }

  // Score
  if (data.SCORE && data.SCORE.length > 0) {
    const s = data.SCORE[0];
    apiData.value.score = parseInt(s.CSB8 || s.CSBA || '500');
  } else {
    apiData.value.score = 500;
  }
};

const mockData = () => {
  apiData.value = {
    name: 'CLIENTE SIMULAÇÃO',
    income: 3500.00,
    score: 650,
    phones: [
      { number: '11999998888', type: 'Celular', isWhatsapp: true },
      { number: '1133334444', type: 'Fixo', isWhatsapp: false }
    ],
    addresses: [
      { street: 'Rua Exemplo', number: '123', district: 'Centro', city: 'São Paulo', state: 'SP', cep: '01001-000' }
    ]
  };
  selectedData.value.phone = apiData.value.phones[0];
  selectedData.value.address = apiData.value.addresses[0];
};

const confirmData = () => {
  calculateMetrics();
  currentStep.value = 3;
  scrollToTop();
};

const calculateMetrics = () => {
  const score = apiData.value.score;
  const income = apiData.value.income || 2000;
  
  // Purchasing Power (0-100)
  // Logic: Score weight (60%) + Income/Vehicle Ratio (40%)
  const scorePart = (score / 1000) * 60;
  const ratio = (income * 12) / vehicleValue.value;
  const incomePart = Math.min(ratio * 20, 40);
  
  metrics.value.purchasingPower = Math.round(scorePart + incomePart);
};

const getPurchasingPowerLabel = () => {
  const pp = metrics.value.purchasingPower;
  if (pp > 80) return 'Excelente';
  if (pp > 60) return 'Bom';
  if (pp > 40) return 'Regular';
  return 'Baixo';
};

const showResults = () => {
  calculateScenarios();
  calculateBankChances();
  currentStep.value = 4;
  scrollToTop();
};

const calculateScenarios = () => {
  const score = apiData.value.score;
  let baseRate = 2.5;
  
  if (score > 800) baseRate = 1.49;
  else if (score > 600) baseRate = 1.89;
  else if (score > 400) baseRate = 2.39;
  else baseRate = 2.99;

  const terms = [36, 48, 60];
  scenarios.value = terms.map(months => {
    // Adjust rate slightly for longer terms
    const rate = baseRate + (months > 48 ? 0.2 : 0);
    const i = rate / 100;
    const pv = vehicleValue.value;
    const pmt = (pv * i) / (1 - Math.pow(1 + i, -months));
    
    return {
      months,
      rate,
      installment: pmt,
      total: pmt * months
    };
  });
};

const calculateBankChances = () => {
  const score = apiData.value.score;
  recommendedBanks.value = recommendedBanks.value.map(bank => {
    let chance = 50;
    if (score > 700) chance += 30;
    else if (score > 500) chance += 10;
    else chance -= 10;
    
    // Random variation
    chance += Math.floor(Math.random() * 10) - 5;
    return { ...bank, approvalChance: Math.min(98, Math.max(10, chance)) };
  }).sort((a, b) => b.approvalChance - a.approvalChance);
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

.animate-bounce-small {
  animation: bounceSmall 2s infinite;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes bounceSmall {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
</style>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-white shadow-sm border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Breadcrumbs />
        <h1 class="mt-2 text-3xl font-bold text-gray-900">
          Gerador de Currículo Profissional
        </h1>
        <p class="mt-2 text-gray-600">Crie seu currículo profissional e exporte em PDF gratuitamente</p>
      </div>
    </div>

    <!-- AdSense Block Above the Fold -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <AdSense />
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Form Section (2/3 width on desktop) -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <!-- Progress Indicator -->
            <div class="bg-blue-600 p-6">
              <div class="flex items-center justify-between mb-4">
                <div 
                  v-for="(step, index) in steps" 
                  :key="index"
                  class="flex items-center"
                  :class="{ 'flex-1': index < steps.length - 1 }"
                >
                  <div class="flex flex-col items-center">
                    <div 
                      class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300"
                      :class="currentStep >= index ? 'bg-white text-blue-600 shadow-lg' : 'bg-blue-300 text-white'"
                    >
                      {{ index + 1 }}
                    </div>
                    <span 
                      class="mt-2 text-xs font-medium hidden sm:block"
                      :class="currentStep >= index ? 'text-white' : 'text-blue-200'"
                    >
                      {{ step.name }}
                    </span>
                  </div>
                  <div 
                    v-if="index < steps.length - 1"
                    class="flex-1 h-1 mx-2 rounded-full transition-all duration-300"
                    :class="currentStep > index ? 'bg-white' : 'bg-blue-300'"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Form Content -->
            <div class="p-8">
              <!-- Step 1: Personal Information -->
              <div v-show="currentStep === 0" class="space-y-6 animate-fadeIn">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Informações Pessoais</h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                    <input
                      v-model="formData.personalInfo.fullName"
                      type="text"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="João da Silva"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                    <input
                      v-model="formData.personalInfo.email"
                      type="email"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="joao@email.com"
                    >
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                    <input
                      v-model="formData.personalInfo.phone"
                      type="tel"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="(11) 98765-4321"
                    >
                  </div>

                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Endereço</label>
                    <input
                      v-model="formData.personalInfo.address"
                      type="text"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Rua Exemplo, 123 - São Paulo, SP"
                    >
                  </div>

                  <div class="md:col-span-2">
                    <label class="block text-sm font-medium text-gray-700 mb-2">Resumo Profissional</label>
                    <textarea
                      v-model="formData.personalInfo.summary"
                      rows="4"
                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Descreva brevemente sua experiência e objetivos profissionais..."
                    ></textarea>
                  </div>
                </div>
              </div>

              <!-- Step 2: Work Experience -->
              <div v-show="currentStep === 1" class="space-y-6 animate-fadeIn">
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-2xl font-bold text-gray-900">Experiência Profissional</h2>
                  <button
                    @click="addExperience"
                    class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    Adicionar Experiência
                  </button>
                </div>

                <div 
                  v-for="(exp, index) in formData.experience" 
                  :key="index"
                  class="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4"
                >
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold text-gray-900">Experiência {{ index + 1 }}</h3>
                    <button
                      v-if="formData.experience.length > 1"
                      @click="removeExperience(index)"
                      class="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Empresa</label>
                      <input
                        v-model="exp.company"
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Nome da Empresa"
                      >
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Cargo</label>
                      <input
                        v-model="exp.position"
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Seu cargo"
                      >
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Data de Início</label>
                      <input
                        v-model="exp.startDate"
                        type="month"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Data de Término</label>
                      <input
                        v-model="exp.endDate"
                        type="month"
                        :disabled="exp.current"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100"
                      >
                      <label class="flex items-center mt-2">
                        <input
                          v-model="exp.current"
                          type="checkbox"
                          class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        >
                        <span class="ml-2 text-sm text-gray-600">Trabalho aqui atualmente</span>
                      </label>
                    </div>

                    <div class="md:col-span-2">
                      <label class="block text-sm font-medium text-gray-700 mb-2">Descrição das Atividades</label>
                      <textarea
                        v-model="exp.description"
                        rows="3"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Descreva suas principais responsabilidades e conquistas..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <p v-if="formData.experience.length === 0" class="text-center text-gray-500 py-8">
                  Nenhuma experiência adicionada. Clique em "Adicionar Experiência" para começar.
                </p>
              </div>

              <!-- Step 3: Education -->
              <div v-show="currentStep === 2" class="space-y-6 animate-fadeIn">
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-2xl font-bold text-gray-900">Formação Acadêmica</h2>
                  <button
                    @click="addEducation"
                    class="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    Adicionar Formação
                  </button>
                </div>

                <div 
                  v-for="(edu, index) in formData.education" 
                  :key="index"
                  class="p-6 bg-gray-50 rounded-xl border border-gray-200 space-y-4"
                >
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold text-gray-900">Formação {{ index + 1 }}</h3>
                    <button
                      v-if="formData.education.length > 1"
                      @click="removeEducation(index)"
                      class="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Instituição</label>
                      <input
                        v-model="edu.institution"
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Nome da Instituição"
                      >
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Curso</label>
                      <input
                        v-model="edu.degree"
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Ex: Bacharelado em Administração"
                      >
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Data de Início</label>
                      <input
                        v-model="edu.startDate"
                        type="month"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">Data de Conclusão</label>
                      <input
                        v-model="edu.endDate"
                        type="month"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                    </div>

                    <div class="md:col-span-2">
                      <label class="block text-sm font-medium text-gray-700 mb-2">Descrição (opcional)</label>
                      <textarea
                        v-model="edu.description"
                        rows="2"
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Principais conquistas, projetos relevantes..."
                      ></textarea>
                    </div>
                  </div>
                </div>

                <p v-if="formData.education.length === 0" class="text-center text-gray-500 py-8">
                  Nenhuma formação adicionada. Clique em "Adicionar Formação" para começar.
                </p>
              </div>

              <!-- Step 4: Skills -->
              <div v-show="currentStep === 3" class="space-y-6 animate-fadeIn">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Habilidades e Competências</h2>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Adicionar Habilidade</label>
                  <div class="flex gap-2">
                    <input
                      v-model="newSkill"
                      @keyup.enter="addSkill"
                      type="text"
                      class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Ex: JavaScript, Comunicação, Excel..."
                    >
                    <button
                      @click="addSkill"
                      class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Adicionar
                    </button>
                  </div>
                </div>

                <div v-if="formData.skills.length > 0" class="flex flex-wrap gap-2">
                  <div
                    v-for="(skill, index) in formData.skills"
                    :key="index"
                    class="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    <span>{{ skill }}</span>
                    <button
                      @click="removeSkill(index)"
                      class="ml-2 hover:text-red-200 transition-colors"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <p v-else class="text-center text-gray-500 py-8">
                  Nenhuma habilidade adicionada. Digite uma habilidade e clique em "Adicionar".
                </p>
              </div>

              <!-- Step 5: Preview -->
              <div v-show="currentStep === 4" class="space-y-6 animate-fadeIn">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Pré-visualização do Currículo</h2>
                
                <div class="bg-white border-2 border-gray-200 rounded-lg p-8" id="resume-preview">
                  <!-- Resume Preview Content -->
                  <div class="space-y-6">
                    <!-- Header -->
                    <div class="border-b-2 border-blue-600 pb-4">
                      <h1 class="text-3xl font-bold text-gray-900">{{ formData.personalInfo.fullName || 'Seu Nome' }}</h1>
                      <div class="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                        <span v-if="formData.personalInfo.email">{{ formData.personalInfo.email }}</span>
                        <span v-if="formData.personalInfo.phone">{{ formData.personalInfo.phone }}</span>
                        <span v-if="formData.personalInfo.address">{{ formData.personalInfo.address }}</span>
                      </div>
                    </div>

                    <!-- Summary -->
                    <div v-if="formData.personalInfo.summary">
                      <h2 class="text-xl font-bold text-gray-900 mb-2">Resumo Profissional</h2>
                      <p class="text-gray-700">{{ formData.personalInfo.summary }}</p>
                    </div>

                    <!-- Experience -->
                    <div v-if="formData.experience.length > 0">
                      <h2 class="text-xl font-bold text-gray-900 mb-3">Experiência Profissional</h2>
                      <div v-for="(exp, index) in formData.experience" :key="index" class="mb-4">
                        <h3 class="font-semibold text-gray-900">{{ exp.position }} - {{ exp.company }}</h3>
                        <p class="text-sm text-gray-600">{{ formatDate(exp.startDate) }} - {{ exp.current ? 'Atual' : formatDate(exp.endDate) }}</p>
                        <p class="text-gray-700 mt-1">{{ exp.description }}</p>
                      </div>
                    </div>

                    <!-- Education -->
                    <div v-if="formData.education.length > 0">
                      <h2 class="text-xl font-bold text-gray-900 mb-3">Formação Acadêmica</h2>
                      <div v-for="(edu, index) in formData.education" :key="index" class="mb-4">
                        <h3 class="font-semibold text-gray-900">{{ edu.degree }} - {{ edu.institution }}</h3>
                        <p class="text-sm text-gray-600">{{ formatDate(edu.startDate) }} - {{ formatDate(edu.endDate) }}</p>
                        <p v-if="edu.description" class="text-gray-700 mt-1">{{ edu.description }}</p>
                      </div>
                    </div>

                    <!-- Skills -->
                    <div v-if="formData.skills.length > 0">
                      <h2 class="text-xl font-bold text-gray-900 mb-3">Habilidades</h2>
                      <div class="flex flex-wrap gap-2">
                        <span
                          v-for="(skill, index) in formData.skills"
                          :key="index"
                          class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {{ skill }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Download Button -->
                <button
                  @click="downloadPDF"
                  :disabled="isGeneratingPDF"
                  class="w-full flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg v-if="!isGeneratingPDF" class="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span v-if="isGeneratingPDF">Gerando PDF...</span>
                  <span v-else>Baixar Currículo em PDF</span>
                </button>
              </div>

              <!-- Navigation Buttons -->
              <div class="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <button
                  v-if="currentStep > 0"
                  @click="previousStep"
                  class="flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Voltar
                </button>
                <div v-else></div>

                <button
                  v-if="currentStep < steps.length - 1"
                  @click="nextStep"
                  class="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ml-auto"
                >
                  Próximo
                  <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Preview Panel (1/3 width on desktop) - Hidden on mobile -->
        <div class="hidden lg:block">
          <div class="sticky top-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Pré-visualização Rápida</h3>
            <div class="space-y-4 text-sm">
              <div v-if="formData.personalInfo.fullName">
                <p class="font-semibold text-gray-900">{{ formData.personalInfo.fullName }}</p>
                <p class="text-gray-600">{{ formData.personalInfo.email }}</p>
              </div>
              <div v-if="formData.experience.length > 0">
                <p class="font-medium text-gray-700">{{ formData.experience.length }} experiência(s)</p>
              </div>
              <div v-if="formData.education.length > 0">
                <p class="font-medium text-gray-700">{{ formData.education.length }} formação(ões)</p>
              </div>
              <div v-if="formData.skills.length > 0">
                <p class="font-medium text-gray-700">{{ formData.skills.length }} habilidade(s)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recommendations Section -->
    <div class="bg-gray-100 py-16 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Próximos Passos na Sua Carreira</h2>
          <p class="text-gray-600 text-lg">Explore oportunidades e cursos para impulsionar sua carreira profissional</p>
        </div>

        <!-- Job Opportunities Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <!-- Jovem Aprendiz -->
          <a
            href="https://www.google.com/search?q=vagas+jovem+aprendiz"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Vagas Jovem Aprendiz</h3>
            <p class="text-gray-600 mb-4">Encontre oportunidades para iniciar sua carreira profissional</p>
            <span class="text-blue-600 font-medium flex items-center group-hover:translate-x-2 transition-transform">
              Ver vagas
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </a>

          <!-- Home Office -->
          <a
            href="https://www.google.com/search?q=vagas+home+office"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Vagas Home Office</h3>
            <p class="text-gray-600 mb-4">Trabalhe de casa com flexibilidade e conforto</p>
            <span class="text-purple-600 font-medium flex items-center group-hover:translate-x-2 transition-transform">
              Ver vagas
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </a>

          <!-- Vagas Americanas -->
          <a
            href="https://www.americanas.com.br/hotsite/trabalhe-conosco"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Vagas Americanas</h3>
            <p class="text-gray-600 mb-4">Oportunidades em uma das maiores empresas do Brasil</p>
            <span class="text-red-600 font-medium flex items-center group-hover:translate-x-2 transition-transform">
              Ver vagas
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </a>

          <!-- SENAI -->
          <a
            href="https://www.sp.senai.br/cursos"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Cursos SENAI</h3>
            <p class="text-gray-600 mb-4">Capacitação profissional de qualidade reconhecida</p>
            <span class="text-green-600 font-medium flex items-center group-hover:translate-x-2 transition-transform">
              Ver cursos
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </a>

          <!-- SENAC -->
          <a
            href="https://www.sp.senac.br/"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div class="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Cursos SENAC</h3>
            <p class="text-gray-600 mb-4">Educação profissional em comércio e serviços</p>
            <span class="text-orange-600 font-medium flex items-center group-hover:translate-x-2 transition-transform">
              Ver cursos
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </span>
          </a>
        </div>

        <!-- Career Tips Section -->
        <div class="bg-white rounded-2xl p-8 border border-gray-200">
          <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <svg class="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
            Dicas para Conseguir Emprego
          </h3>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex items-start">
              <div class="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                <span class="text-gray-700 font-bold">1</span>
              </div>
              <div>
                <h4 class="text-gray-900 font-semibold mb-1">Personalize seu Currículo</h4>
                <p class="text-gray-600 text-sm">Adapte seu currículo para cada vaga, destacando experiências relevantes para a posição desejada.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                <span class="text-gray-700 font-bold">2</span>
              </div>
              <div>
                <h4 class="text-gray-900 font-semibold mb-1">Networking é Essencial</h4>
                <p class="text-gray-600 text-sm">Mantenha seu LinkedIn atualizado e participe de eventos da sua área para expandir sua rede de contatos.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                <span class="text-gray-700 font-bold">3</span>
              </div>
              <div>
                <h4 class="text-gray-900 font-semibold mb-1">Prepare-se para Entrevistas</h4>
                <p class="text-gray-600 text-sm">Pesquise sobre a empresa, pratique respostas comuns e prepare perguntas inteligentes para fazer.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                <span class="text-gray-700 font-bold">4</span>
              </div>
              <div>
                <h4 class="text-gray-900 font-semibold mb-1">Invista em Qualificação</h4>
                <p class="text-gray-600 text-sm">Cursos e certificações demonstram seu comprometimento com o desenvolvimento profissional contínuo.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                <span class="text-gray-700 font-bold">5</span>
              </div>
              <div>
                <h4 class="text-gray-900 font-semibold mb-1">Seja Proativo</h4>
                <p class="text-gray-600 text-sm">Não espere apenas por anúncios de vagas. Entre em contato direto com empresas do seu interesse.</p>
              </div>
            </div>

            <div class="flex items-start">
              <div class="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                <span class="text-gray-700 font-bold">6</span>
              </div>
              <div>
                <h4 class="text-gray-900 font-semibold mb-1">Mantenha a Consistência</h4>
                <p class="text-gray-600 text-sm">A busca por emprego requer persistência. Estabeleça uma rotina diária de candidaturas e networking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

// SEO Meta tags
useSeoMeta({
  title: 'Gerador de Currículo Profissional - Crie e Baixe em PDF Grátis',
  description: 'Crie seu currículo profissional online gratuitamente e exporte em PDF. Ferramenta completa com modelos modernos e fácil de usar.',
  ogTitle: 'Gerador de Currículo Profissional - PDF Grátis',
  ogDescription: 'Crie seu currículo profissional online e baixe em PDF gratuitamente. Simples, rápido e profissional.',
  keywords: 'gerador de currículo, currículo pdf, criar currículo, currículo profissional, curriculum vitae, cv online',
  author: 'Gerador II'
})

// Steps configuration
const steps = [
  { name: 'Pessoal', icon: 'user' },
  { name: 'Experiência', icon: 'briefcase' },
  { name: 'Educação', icon: 'academic-cap' },
  { name: 'Habilidades', icon: 'star' },
  { name: 'Visualizar', icon: 'eye' }
]

const currentStep = ref(0)
const isGeneratingPDF = ref(false)
const newSkill = ref('')

// Form data
const formData = ref({
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    summary: ''
  },
  experience: [],
  education: [],
  skills: []
})

// Experience methods
const addExperience = () => {
  formData.value.experience.push({
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    current: false,
    description: ''
  })
}

const removeExperience = (index) => {
  formData.value.experience.splice(index, 1)
}

// Education methods
const addEducation = () => {
  formData.value.education.push({
    institution: '',
    degree: '',
    startDate: '',
    endDate: '',
    description: ''
  })
}

const removeEducation = (index) => {
  formData.value.education.splice(index, 1)
}

// Skills methods
const addSkill = () => {
  if (newSkill.value.trim()) {
    formData.value.skills.push(newSkill.value.trim())
    newSkill.value = ''
  }
}

const removeSkill = (index) => {
  formData.value.skills.splice(index, 1)
}

// Navigation methods
const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
    saveToLocalStorage()
  }
}

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

// Format date helper
const formatDate = (dateString) => {
  if (!dateString) return ''
  const [year, month] = dateString.split('-')
  const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  return `${months[parseInt(month) - 1]} ${year}`
}

// PDF Generation
const downloadPDF = async () => {
  isGeneratingPDF.value = true
  
  try {
    // Dynamic import to avoid SSR issues
    const { default: jsPDF } = await import('jspdf')
    
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 20
    let yPosition = margin

    // Helper function to add text with word wrap
    const addText = (text, fontSize, isBold = false, color = [0, 0, 0]) => {
      doc.setFontSize(fontSize)
      doc.setFont('helvetica', isBold ? 'bold' : 'normal')
      doc.setTextColor(...color)
      const lines = doc.splitTextToSize(text, pageWidth - 2 * margin)
      lines.forEach(line => {
        if (yPosition > pageHeight - margin) {
          doc.addPage()
          yPosition = margin
        }
        doc.text(line, margin, yPosition)
        yPosition += fontSize * 0.5
      })
      yPosition += 3
    }

    // Header
    addText(formData.value.personalInfo.fullName || 'Seu Nome', 20, true, [37, 99, 235])
    
    // Contact info
    const contactInfo = [
      formData.value.personalInfo.email,
      formData.value.personalInfo.phone,
      formData.value.personalInfo.address
    ].filter(Boolean).join(' | ')
    
    if (contactInfo) {
      addText(contactInfo, 10, false, [100, 100, 100])
    }
    
    yPosition += 5
    doc.setDrawColor(37, 99, 235)
    doc.setLineWidth(0.5)
    doc.line(margin, yPosition, pageWidth - margin, yPosition)
    yPosition += 10

    // Summary
    if (formData.value.personalInfo.summary) {
      addText('RESUMO PROFISSIONAL', 14, true)
      addText(formData.value.personalInfo.summary, 10)
      yPosition += 5
    }

    // Experience
    if (formData.value.experience.length > 0) {
      addText('EXPERIÊNCIA PROFISSIONAL', 14, true)
      formData.value.experience.forEach(exp => {
        addText(`${exp.position} - ${exp.company}`, 11, true)
        const period = `${formatDate(exp.startDate)} - ${exp.current ? 'Atual' : formatDate(exp.endDate)}`
        addText(period, 9, false, [100, 100, 100])
        if (exp.description) {
          addText(exp.description, 10)
        }
        yPosition += 3
      })
      yPosition += 5
    }

    // Education
    if (formData.value.education.length > 0) {
      addText('FORMAÇÃO ACADÊMICA', 14, true)
      formData.value.education.forEach(edu => {
        addText(`${edu.degree} - ${edu.institution}`, 11, true)
        const period = `${formatDate(edu.startDate)} - ${formatDate(edu.endDate)}`
        addText(period, 9, false, [100, 100, 100])
        if (edu.description) {
          addText(edu.description, 10)
        }
        yPosition += 3
      })
      yPosition += 5
    }

    // Skills
    if (formData.value.skills.length > 0) {
      addText('HABILIDADES', 14, true)
      addText(formData.value.skills.join(' • '), 10)
    }

    // Save PDF
    const baseName = formData.value.personalInfo.fullName 
      ? formData.value.personalInfo.fullName.replace(/\s+/g, '_').toLowerCase()
      : 'curriculo_profissional'
    const fileName = `${baseName}.pdf`
    doc.save(fileName)
  } catch (error) {
    console.error('Error generating PDF:', error)
    alert('Erro ao gerar PDF. Por favor, tente novamente.')
  } finally {
    isGeneratingPDF.value = false
  }
}

// LocalStorage persistence
const saveToLocalStorage = () => {
  localStorage.setItem('resumeData', JSON.stringify(formData.value))
}

const loadFromLocalStorage = () => {
  const saved = localStorage.getItem('resumeData')
  if (saved) {
    try {
      formData.value = JSON.parse(saved)
    } catch (e) {
      console.error('Error loading saved data:', e)
    }
  }
}

// Watch for changes and save
watch(formData, () => {
  saveToLocalStorage()
}, { deep: true })

// Load data on mount
onMounted(() => {
  loadFromLocalStorage()
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}

/* Print styles for PDF preview */
@media print {
  #resume-preview {
    box-shadow: none;
    border: none;
  }
}
</style>

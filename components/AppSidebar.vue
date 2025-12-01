<template>
  <div class="sidebar" :class="{ 'sidebar--open': isOpen }">
    <!-- Cabeçalho removido pois já temos o botão de fechar no AppHeader -->
    <div class="sidebar__header"></div>
    
    <nav class="sidebar__nav">
      <!-- Home Link -->
      <div class="px-4 py-3 border-b border-gray-100">
        
      </div>
     

      <div class="sidebar__section">
        <h3 class="sidebar__section-title">Documentos Pessoais</h3>
        <ul class="sidebar__menu">
          <li class="sidebar__menu-item">
            <NuxtLink to="/gerador/cpf" class="sidebar__link" @click.native="closeSidebar">
              Gerador de CPF
            </NuxtLink>
          </li>
          <li class="sidebar__menu-item">
            <NuxtLink to="/gerador/cnpj" class="sidebar__link" @click.native="closeSidebar">
              Gerador de CNPJ
            </NuxtLink>
          </li>
          <li class="sidebar__menu-item">
            <NuxtLink to="/gerador/cnpj-alfanumerico" class="sidebar__link" @click.native="closeSidebar">
              Gerador de CNPJ Alfanumérico
            </NuxtLink>
          </li>
          <li class="sidebar__menu-item">
            <span class="sidebar__link sidebar__link--disabled">
              Gerador de RG
              <span class="badge">Em breve</span>
            </span>
          </li>
        </ul>
      </div>

 <div class="sidebar__section">
        <h3 class="sidebar__section-title">Imprimir</h3>
        <ul class="sidebar__menu">
          <li class="sidebar__menu-item">
            <NuxtLink to="/imprimir/cartela-bingo" class="sidebar__link" @click.native="closeSidebar">
              Cartelas de Bingo
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="sidebar__section">
        <h3 class="sidebar__section-title">Contatos</h3>
        <ul class="sidebar__menu">
          <li class="sidebar__menu-item">
            <NuxtLink to="/gerador/celular" class="sidebar__link" @click.native="closeSidebar">
              Gerador de Celular
            </NuxtLink>
          </li>
          <li class="sidebar__menu-item">
            <NuxtLink to="/gerador/telefone" class="sidebar__link" @click.native="closeSidebar">
              Gerador de Telefone
            </NuxtLink> 
          </li>
          <li class="sidebar__menu-item">
            <NuxtLink to="/gerador/qr-code" class="sidebar__link" @click.native="closeSidebar">
              Gerador de QR Code
            </NuxtLink>
          </li>
          <li class="sidebar__menu-item">
            <span class="sidebar__link sidebar__link--disabled">
              Gerador de E-mail
              <span class="badge">Em breve</span>
            </span>
          </li>
        </ul>
      </div>

      <div class="sidebar__section">
        <h3 class="sidebar__section-title">Veículos</h3>
        <ul class="sidebar__menu">
          <li class="sidebar__menu-item">
            <NuxtLink to="/financiamento-veiculos-sem-entrada" class="sidebar__link" @click.native="closeSidebar">
              Simulador Financiamento
              <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                Novo
              </span>
            </NuxtLink>
          </li>
          <li class="sidebar__menu-item">
            <span class="sidebar__link sidebar__link--disabled">
              Gerador de Placa
              <span class="badge">Em breve</span>
            </span>
          </li>
          <li class="sidebar__menu-item">
            <span class="sidebar__link sidebar__link--disabled">
              Gerador de Renavam
              <span class="badge">Em breve</span>
            </span>
          </li>
        </ul>
      </div>

      <div class="sidebar__section">
        <h3 class="sidebar__section-title">Validadores</h3>
        <ul class="sidebar__menu">
          <li class="sidebar__menu-item">
            <NuxtLink to="/validadores/cpf" class="sidebar__link" @click.native="closeSidebar">
              Validador de CPF
            </NuxtLink>
          </li>
          <li class="sidebar__menu-item">
            <NuxtLink to="/validadores/cnpj" class="sidebar__link" @click.native="closeSidebar">
              Validador de CNPJ
            </NuxtLink>
          </li>
          <li class="sidebar__menu-item">
            <NuxtLink to="/validadores/celular" class="sidebar__link" @click.native="closeSidebar">
              Validador de Celular
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
// Define props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

// Define events
const emit = defineEmits(['close']);

// Close sidebar and emit event
const closeSidebar = () => {
  emit('close');
};
</script>

<style scoped>
/* Base sidebar styles */
.sidebar {
  @apply fixed left-0 w-64 h-[calc(100vh-3.5rem)] bg-white shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out z-40 overflow-y-auto;
  top: 3.5rem; /* 56px - altura do header */
}

.sidebar--open {
  @apply translate-x-0;
}

/* Desktop styles */
@screen lg {
  .sidebar {
    @apply h-[calc(100vh-3.5rem)] z-30;
    top: 3.5rem; /* 56px - altura do header */
    transform: none;
    transition: transform 0.3s ease-in-out;
  }
  
  .sidebar--open {
    @apply translate-x-0;
  }
}

.sidebar__header {
  @apply border-b border-gray-100;
  height: 0;
  overflow: hidden;
}

.sidebar__title {
  @apply text-xl font-bold text-gray-800;
}

.sidebar__close {
  @apply p-1 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500;
}

.sidebar__nav {
  @apply px-2 py-4;
}

.sidebar__section {
  @apply mb-6;
}

.sidebar__section-title {
  @apply px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2;
  color: var(--sidebar-section-text);
  margin: 0 0 0.5rem 0.75rem;
  font-weight: 600;
  line-height: 1.5;
}

/* Menu list */
.sidebar__menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar__menu-item {
  margin-bottom: 0.125rem;
}

/* Menu links */
.sidebar__link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.625rem 0.75rem;
  color: var(--sidebar-text);
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.15s ease-in-out;
  font-size: 0.9375rem;
  line-height: 1.5;
  font-weight: 500;
  margin: 0 0.25rem;
}

.sidebar__link:hover:not(.sidebar__link--disabled) {
  background-color: var(--sidebar-hover-bg);
  color: var(--sidebar-text);
}

.sidebar__link.router-link-active {
  background-color: var(--sidebar-active-bg);
  color: var(--sidebar-active-text);
  font-weight: 600;
}

.sidebar__link:focus {
  outline: 2px solid var(--sidebar-active-bg);
  outline-offset: 2px;
}

/* Disabled state */
.sidebar__link--disabled {
  color: var(--sidebar-disabled-text);
  cursor: not-allowed;
  background-color: transparent !important;
  opacity: 0.7;
}

/* Badge for "coming soon" items */
.badge {
  font-size: 0.6875rem;
  background-color: var(--sidebar-badge-bg);
  color: var(--sidebar-badge-text);
  padding: 0.125rem 0.5rem;
  border-radius: 9999px;
  font-weight: 500;
  margin-left: 0.5rem;
  line-height: 1.25;
  white-space: nowrap;
}

/* Screen reader only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Desktop styles */
@media (min-width: 1024px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    transform: none;
    height: 100vh;
    border-right: 1px solid var(--sidebar-border);
    box-shadow: none;
    padding-top: 1.5rem;
    z-index: 30;
  }
  
  .sidebar--open {
    transform: none;
  }
  
  .sidebar__close {
    display: none;
  }
  
  .sidebar__header {
    padding: 0 1.5rem 1.5rem;
  }
  
  .sidebar__section {
    padding: 0 1rem;
  }
  
  .sidebar__link {
    padding: 0.75rem 1rem;
  }
  
  /* Add padding to the main content */
  main {
    padding-left: var(--sidebar-width);
  }
}

/* Large desktop adjustments */
@media (min-width: 1280px) {
  .sidebar {
    --sidebar-width: 300px;
  }
}

/* Print styles */
@media print {
  .sidebar {
    display: none;
  }
}
</style>

<template>
  <div class="sidebar" :class="{ 'sidebar--open': isOpen }">
    <div class="sidebar__header">
      <h2 class="sidebar__title">Gerador II</h2>
      <button class="sidebar__close" @click="closeSidebar">
        <span class="sr-only">Fechar menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    
    <nav class="sidebar__nav">
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
            <span class="sidebar__link sidebar__link--disabled">
              Gerador de RG
              <span class="badge">Em breve</span>
            </span>
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
  @apply fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform -translate-x-full transition-transform duration-300 ease-in-out z-40 overflow-y-auto;
}

.sidebar--open {
  @apply translate-x-0;
}

.sidebar__header {
  @apply flex items-center justify-between px-6 py-4 border-b border-gray-100;
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

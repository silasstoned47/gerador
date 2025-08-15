<template>
  <div class="sidebar" :class="{ 'sidebar--open': isOpen }">
    <div class="sidebar__header">
      <h2 class="sidebar__title">Gerador II</h2>
      <button class="sidebar__close" @click="toggleSidebar">
        <span class="sr-only">Fechar menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    
    <nav class="sidebar__nav">
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

<script>
export default {
  name: 'AppSidebar',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle');
    },
    closeSidebar() {
      this.$emit('close');
    }
  }
}
</script>

<style scoped>
/* Base sidebar styles */
.sidebar {
  --sidebar-width: 280px;
  --sidebar-bg: #ffffff;
  --sidebar-text: #1f2937;
  --sidebar-hover-bg: #f3f4f6;
  --sidebar-active-bg: #e0f2fe;
  --sidebar-active-text: #0369a1;
  --sidebar-border: #e5e7eb;
  --sidebar-section-text: #6b7280;
  --sidebar-disabled-text: #9ca3af;
  --sidebar-badge-bg: #e5e7eb;
  --sidebar-badge-text: #4b5563;
  --sidebar-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  --sidebar-transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --sidebar-z-index: 40;
  
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--sidebar-width);
  background: var(--sidebar-bg);
  box-shadow: var(--sidebar-shadow);
  z-index: var(--sidebar-z-index);
  transition: var(--sidebar-transition);
  transform: translateX(-100%);
  overflow-y: auto;
  padding: 1.25rem 0;
  scrollbar-width: thin;
  scrollbar-color: #cbd5e1 #f1f5f9;
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .sidebar {
    --sidebar-bg: #1f2937;
    --sidebar-text: #f9fafb;
    --sidebar-hover-bg: #374151;
    --sidebar-active-bg: #1e40af;
    --sidebar-active-text: #bfdbfe;
    --sidebar-border: #4b5563;
    --sidebar-section-text: #9ca3af;
    --sidebar-disabled-text: #6b7280;
    --sidebar-badge-bg: #374151;
    --sidebar-badge-text: #e5e7eb;
    --sidebar-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
  }
  
  .sidebar::-webkit-scrollbar-thumb {
    background-color: #4b5563;
  }
  
  .sidebar::-webkit-scrollbar-track {
    background-color: #1f2937;
  }
}

/* Scrollbar styling for WebKit browsers */
.sidebar::-webkit-scrollbar {
  width: 6px;
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: #cbd5e1;
  border-radius: 3px;
}

.sidebar::-webkit-scrollbar-track {
  background-color: #f1f5f9;
}

/* Open state */
.sidebar--open {
  transform: translateX(0);
}

/* Header section */
.sidebar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.25rem 1.25rem;
  border-bottom: 1px solid var(--sidebar-border);
  margin-bottom: 0.75rem;
}

.sidebar__title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--sidebar-text);
  margin: 0;
  line-height: 1.5;
}

/* Close button */
.sidebar__close {
  background: transparent;
  border: 1px solid transparent;
  color: var(--sidebar-text);
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  transition: all 0.15s ease-in-out;
  opacity: 0.7;
}

.sidebar__close:hover {
  background-color: var(--sidebar-hover-bg);
  opacity: 1;
}

.sidebar__close:focus {
  outline: 2px solid var(--sidebar-active-bg);
  outline-offset: 2px;
}

/* Section styling */
.sidebar__section {
  margin-bottom: 1.5rem;
  padding: 0 0.75rem;
}

.sidebar__section:last-child {
  margin-bottom: 0;
}

.sidebar__section-title {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
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

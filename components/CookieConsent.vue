<template>
  <div 
    v-if="!consentGiven"
    id="cookie-consent"
    :class="{ 'compact': isMobile }"
    role="dialog"
    aria-live="polite"
    aria-label="Aviso de cookies"
  >
    <p>
      <span v-if="isMobile">
        Usamos cookies para melhorar sua experiência.
      </span>
      <span v-else>
        Usamos cookies para melhorar sua experiência e personalizar o conteúdo.
        <a href="/politica-privacidade" target="_blank" rel="noopener noreferrer">
          Aviso de privacidade
        </a>.
      </span>
    </p>
    <button @click="acceptCookies" type="button">
      Aceito
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const consentGiven = ref(true);
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 480;
};

const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
  }
  return null;
};

const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";};

const acceptCookies = () => {
  setCookie('cookieConsent', 'accepted', 365);
  consentGiven.value = true;
};

onMounted(() => {
  consentGiven.value = !!getCookie('cookieConsent');
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped>
#cookie-consent {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  max-width: 960px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  gap: 1rem;
  z-index: 99999;
  font-size: 14px;
  color: #222;
  box-sizing: border-box;
}

#cookie-consent p {
  flex: 1 1 300px;
  margin: 0;
  line-height: 1.5;
}

#cookie-consent a {
  color: #0066cc;
  text-decoration: none;
  font-weight: 600;
}

#cookie-consent a:hover,
#cookie-consent a:focus {
  text-decoration: underline;
}

#cookie-consent button {
  flex: 0 0 auto;
  background-color: #0069ff;
  color: #fff;
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 9999px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
  user-select: none;
  box-shadow: 0 2px 8px rgb(0 105 255 / 0.5);
  white-space: nowrap;
}

#cookie-consent button:hover,
#cookie-consent button:focus {
  background-color: #004fcc;
  outline: none;
  box-shadow: 0 2px 12px rgb(0 80 204 / 0.75);
}

#cookie-consent.compact {
  font-size: 13px;
  padding: 0.75rem 1rem; /* Reduced padding */
  bottom: 10px; /* Lower position */
  width: calc(100% - 20px);
  border-radius: 8px;
}

#cookie-consent.compact p {
  line-height: 1.3;
  font-size: 12px;
  flex: 1 1 auto; /* Allow text to shrink */
}

#cookie-consent.compact button {
  padding: 0.5rem 1rem; /* Smaller button */
  font-size: 13px;
}

@media (max-width: 768px) {
  #cookie-consent {
    align-items: center; /* Center align items */
    padding: 0.75rem 1rem;
    font-size: 12px;
    width: calc(100% - 20px);
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
    gap: 0.5rem; /* Reduce gap */
  }

  #cookie-consent p {
     flex: 1; /* Take available space */
  }

  #cookie-consent button {
    width: auto; /* Don't force full width */
    font-size: 13px;
    padding: 0.5rem 1.2rem;
  }
}
</style>

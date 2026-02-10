<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Menu mobile gestion état
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Fermer le menu avec la touche Escape (accessibilité)
const handleKeydown = (event) => {
  if (event.key === "Escape" && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full bg-primary-bg text-foreground border-b border-gray-200 transition-colors"
  >
    <nav
      class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      aria-label="Navigation principale"
    >
      <!-- Logo -->
      <NuxtLink
        to="/"
        class="flex items-center gap-2"
        aria-label="Retour à l'accueil"
        @click="closeMenu"
      >
        <NuxtImg
          src="/images/logo/logo-light-nuxt.svg"
          alt="Logo Nom du site"
          class="h-7 w-auto"
          loading="eager"
          decoding="async"
        />
      </NuxtLink>

      <!-- Navigation desktop -->
      <!-- Position: mx-auto (centré) | mr-auto ml-8 (collé au logo) | ml-auto mr-8 (collé à droite) -->
      <ul class="hidden md:flex items-center gap-8 font-semibold">
        <li>
          <NuxtLink
            to="/"
            class="hover:text-gray-600 transition"
          >
            Accueil
          </NuxtLink>
        </li>
     
       
        <li>
          <NuxtLink
            to="/contact"
            class="hover:text-gray-600 transition"
          >
            Contact
          </NuxtLink>
        </li>
      </ul>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <!-- CTA desktop -->
        <NuxtLink
          to="/contact"
          class="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover transition"
        >
          Contact
        </NuxtLink>

        <!-- Hamburger mobile -->
        <button
          type="button"
          class="md:hidden h-9 w-9 rounded-md hover:bg-gray-100 flex items-center justify-center transition-colors"
          :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          @click="toggleMenu"
        >
          <svg
            v-if="!isMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Menu mobile -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="absolute top-16 left-0 right-0 md:hidden bg-primary-bg border-t border-gray-200 shadow-lg"
        role="region"
        aria-label="Menu de navigation mobile"
      >
        <ul class="flex flex-col px-4 py-4 gap-2 text-sm font-medium">
          <li>
            <NuxtLink to="/" class="block py-2" @click="closeMenu">
              Accueil
            </NuxtLink>
          </li>
          
          <li>
            <NuxtLink to="/contact" class="block py-2" @click="closeMenu">
              Contact
            </NuxtLink>
          </li>

          <!-- CTA mobile -->
          <li class="pt-2">
            <NuxtLink
              to="/contact"
              class="inline-flex w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover transition"
              @click="closeMenu"
            >
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

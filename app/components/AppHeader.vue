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

// Gestion du scroll pour l'opacité du header
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 90;
};

// Fermer le menu avec la touche Escape (accessibilité)
const handleKeydown = (event) => {
  if (event.key === "Escape" && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Vérifier la position initiale
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 w-full backdrop-blur-md border-b border-gray-100 transition-all duration-300',
      isScrolled ? 'bg-white/80' : 'bg-white'
    ]"
  >
    <nav
      class="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between"
      aria-label="Navigation principale"
    >
      <div class="flex-shrink-0">
        <NuxtLink
          to="/"
          class="group flex items-center gap-1 text-2xl font-extrabold tracking-tight transition"
          aria-label="Retour à l'accueil"
          @click="closeMenu"
        >
          <span class="text-slate-900 group-hover:text-primary transition-colors">AVH</span>
          <span class="text-primary italic">Garden</span>
        </NuxtLink>
      </div>

      <ul class="hidden md:flex items-center gap-10">
        <li
v-for="item in [
          { name: 'Accueil', to: '/' },
          { name: 'Réalisations', to: '/realisations' },
          { name: 'Services', to: '/services' },
          { name: 'Contact', to: '/contact' }
        ]" :key="item.to">
          <NuxtLink
            :to="item.to"
            class="relative text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-primary transition-all duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>

      <div class="flex items-center gap-5">
        <NuxtLink
          to="/contact"
          class="hidden sm:inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-2.5 text-sm font-bold text-white shadow-xl shadow-slate-200 hover:bg-primary hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
        >
          Devis gratuit
        </NuxtLink>

        <button
          type="button"
          class="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-slate-900 hover:bg-gray-100 transition-all"
          :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <div class="relative w-5 h-5">
            <span :class="['absolute h-0.5 w-5 bg-current transform transition-all duration-300', isMenuOpen ? 'rotate-45 top-2' : 'top-1']"/>
            <span :class="['absolute h-0.5 w-5 bg-current top-2 transition-all duration-300', isMenuOpen ? 'opacity-0' : 'opacity-100']"/>
            <span :class="['absolute h-0.5 w-5 bg-current transform transition-all duration-300', isMenuOpen ? '-rotate-45 top-2' : 'top-3']"/>
          </div>
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMenuOpen"
        id="mobile-menu"
        class="absolute top-full left-0 right-0 md:hidden bg-white border-b border-gray-100 shadow-2xl overflow-hidden"
      >
        <ul class="flex flex-col p-6 gap-3">
          <li
v-for="item in [
            { name: 'Accueil', to: '/' },
            { name: 'Réalisations', to: '/realisations' },
            { name: 'Services', to: '/services' },
            { name: 'Contact', to: '/contact' }
          ]" :key="item.to">
            <NuxtLink 
              :to="item.to" 
              class="block py-3 px-4 rounded-xl text-base font-semibold text-slate-800 hover:bg-gray-50 hover:text-primary transition-all"
              @click="closeMenu"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
          <li class="pt-4 border-t border-gray-50">
            <NuxtLink
              to="/contact"
              class="flex w-full items-center justify-center rounded-xl bg-primary py-4 text-sm font-bold text-white shadow-lg shadow-primary/20"
              @click="closeMenu"
            >
              Demander un devis
            </NuxtLink>
          </li>
        </ul>
      </div>
    </Transition>
  </header>
</template>

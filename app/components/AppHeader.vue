<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const route = useRoute();

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

// Vérifie si lien actif
const isLinkActive = (to) => {
  if (to.includes('#')) {
    const [path, hash] = to.split('#');
    return (
      route.path === (path || '/') &&
      route.hash === `#${hash}`
    );
  }

  return route.path === to && !route.hash;
};

// Gestion opacité header
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 90;
};

// Accessibilité Escape
const handleKeydown = (event) => {
  if (event.key === "Escape" && isMenuOpen.value) {
    closeMenu();
  }
};

onMounted(() => {
  document.addEventListener("keydown", handleKeydown);
  window.addEventListener("scroll", handleScroll);
  handleScroll();
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
      class="max-w-[1440px] mx-auto px-6 lg:px-6 h-20 flex items-center justify-between"
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

      <ul class="hidden md:flex items-center gap-8">
        <li
v-for="item in [
          { name: 'Accueil', to: '/' },
          { name: 'Réalisations', to: '/realisations' },
          { name: 'Services', to: '/#services' },
          { name: 'Contact', to: '/contact' },

        ]" :key="item.to">
          <NuxtLink
  :to="item.to"
  class="relative text-[14px] font-bold uppercase tracking-[0.2em] transition-all duration-300 px-4 py-2.5 group"
  :class="[
    isLinkActive(item.to)
      ? 'text-primary' 
      : 'text-slate-700 hover:text-slate-900'
  ]"
  @click="closeMenu"

>
  <span class="relative z-10">{{ item.name }}</span>
  <span 
    class="absolute bottom-1.5 left-4 right-4 h-[2px] rounded-full transition-all duration-300"
    :class="[
      isLinkActive(item.to) 
        ? 'bg-primary w-[calc(100%-2rem)]' 
        : 'bg-slate-400 w-0 group-hover:w-[calc(100%-2rem)]'
    ]"
  />
</NuxtLink>
        </li>
      </ul>

      <div class="flex items-center gap-5">
        <NuxtLink
          to="/contact"
          class="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary px-8 py-2.5 text-sm font-bold text-white  hover:bg-primary-hover hover:scale-105 transition-all duration-300"
        >
          Devis gratuit
        </NuxtLink>

        <button
          type="button"
          class="md:hidden flex h-10 w-10 items-center justify-center text-slate-900 hover:text-primary transition-all"
          :aria-label="isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <div class="relative w-6 h-5">
            <span :class="['absolute h-[2.5px] w-6 bg-current rounded-full transform transition-all duration-300', isMenuOpen ? 'rotate-45 top-[9px]' : 'top-0']"/>
            <span :class="['absolute h-[2.5px] w-6 bg-current rounded-full top-[9px] transition-all duration-300', isMenuOpen ? 'opacity-0' : 'opacity-100']"/>
            <span :class="['absolute h-[2.5px] w-6 bg-current rounded-full transform transition-all duration-300', isMenuOpen ? '-rotate-45 top-[9px]' : 'top-[18px]']"/>
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
            { name: 'Services', to: '/#services' },
            { name: 'Contact', to: '/contact' }
          ]" :key="item.to">
            <NuxtLink 
              :to="item.to" 
              class="block py-3 px-4 rounded-xl text-base font-semibold text-slate-800 hover:bg-gray-50 hover:text-primary transition-all"
              :class="{
                '!bg-primary/10 !text-primary': isLinkActive(item.to)
              }"
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

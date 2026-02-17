<script setup>
import { Facebook, MapPin, Phone, Mail } from 'lucide-vue-next';

const route = useRoute();
const router = useRouter();
const year = new Date().getFullYear();

// État pour gérer l'ouverture des accordéons (mobile uniquement)
const openSections = ref({
  navigation: false,
  coordonnees: false,
});

const toggleSection = (section) => {
  openSections.value[section] = !openSections.value[section];
};

const handleLogoClick = async () => {
  if (route.path === '/') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    await router.push('/');
  }
};
</script>

<template>
  <footer
    class="w-full border-t border-white/10 bg-[#1A1A1A] text-white"
    aria-label="Pied de page"
  >
    <div class="mx-auto max-w-[1440px] px-6 pt-16 pb-8">
      <div class="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
        
        <div class="flex flex-col items-center md:items-start">
          <button
            class="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
            @click="handleLogoClick"
          >
            AVH <span class="text-primary">Garden</span>
          </button>
          <p class="mt-4 text-sm leading-relaxed text-white/60 text-center md:text-left">
            Entreprise spécialisée en aménagement extérieur et rénovation intérieure en Brabant Wallon et Province de Namur. 
            Terrassement, pavage, égouttage, carrelage, salles de bain & projets sur mesure.
          </p>
          <div class="mt-6">
            <a 
              href="https://www.facebook.com/p/Avh-garden-100064966030686/" 
              target="blank"
              rel="noopener"
              class="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300" 
              aria-label="Facebook"
            >
              <Facebook :size="20" />
            </a>
          </div>
        </div>

        <nav aria-label="Navigation du pied de page">
          <!-- Titre avec bouton toggle (mobile uniquement) -->
          <button
            type="button"
            class="flex w-full items-center justify-between text-sm font-bold uppercase tracking-widest text-primary md:cursor-default md:pointer-events-none"
            :aria-expanded="openSections.navigation"
            aria-controls="nav-links"
            @click="toggleSection('navigation')"
          >
            <span>Menu</span>
            <svg
              class="h-5 w-5 md:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <!-- Ligne horizontale (toujours visible = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
              <!-- Ligne verticale (visible = +, cachée = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16"
                class="transition-opacity duration-200"
                :class="openSections.navigation ? 'opacity-0' : 'opacity-100'"
              />
            </svg>
          </button>

          <!-- Liste de liens (accordéon sur mobile, toujours visible sur desktop) -->
          <div
            id="nav-links"
            class="grid overflow-hidden transition-all duration-300 ease-in-out md:block"
            :class="
              openSections.navigation
                ? 'mt-6 grid-rows-[1fr]'
                : 'grid-rows-[0fr] md:mt-6 md:grid-rows-[1fr]'
            "
          >
            <ul class="min-h-0 space-y-4 text-sm text-left">
              <li>
                <NuxtLink to="/" class="text-white/60 hover:text-primary-hover transition-colors">Accueil</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/realisations" class="text-white/60 hover:text-primary-hover transition-colors">Réalisations</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/#services" class="text-white/60 hover:text-primary-hover transition-colors">Services</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-white/60 hover:text-primary-hover transition-colors">Contact</NuxtLink>
              </li>
            </ul>
          </div>
        </nav>

        <div aria-label="Coordonnées">
          <!-- Titre avec bouton toggle (mobile uniquement) -->
          <button
            type="button"
            class="flex w-full items-center justify-between text-sm font-bold uppercase tracking-widest text-primary md:cursor-default md:pointer-events-none"
            :aria-expanded="openSections.coordonnees"
            aria-controls="coordonnees-info"
            @click="toggleSection('coordonnees')"
          >
            <span>Coordonnées</span>
            <svg
              class="h-5 w-5 md:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <!-- Ligne horizontale (toujours visible = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 12H4"
              />
              <!-- Ligne verticale (visible = +, cachée = -) -->
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16"
                class="transition-opacity duration-200"
                :class="openSections.coordonnees ? 'opacity-0' : 'opacity-100'"
              />
            </svg>
          </button>

          <!-- Informations de contact (accordéon sur mobile, toujours visible sur desktop) -->
          <div
            id="coordonnees-info"
            class="grid overflow-hidden transition-all duration-300 ease-in-out md:block"
            :class="
              openSections.coordonnees
                ? 'mt-6 grid-rows-[1fr]'
                : 'grid-rows-[0fr] md:mt-6 md:grid-rows-[1fr]'
            "
          >
            <ul class="min-h-0 space-y-4 text-sm text-white/60 text-left">
              <li class="flex items-start justify-start gap-3">
                <MapPin :size="20" class="text-primary shrink-0 mt-0.5" />
                <span>Rue Renier 11<br >5031 Grand Leez</span>
              </li>
              <li class="flex items-center justify-start gap-3">
                <Phone :size="20" class="text-primary shrink-0" />
                <a href="tel:+32494801596" class="hover:text-primary-hover transition-colors">+32 494 80 15 96</a>
              </li>
              <li class="flex items-center justify-start gap-3">
                <Mail :size="20" class="text-primary shrink-0" />
                <a href="mailto:avh-garden@hotmail.com" class="hover:text-primary-hover transition-colors">avh-garden@hotmail.com</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div class="mt-16 border-t border-white/5 pt-8">
        <div class="flex flex-col items-center justify-between gap-4 md:flex-row text-xs text-white/40">
          <p>© {{ year }} AVH Garden — Tous droits réservés.</p>
          
          <div class="flex gap-6">
            <NuxtLink to="/legal/mentions-legales" class="hover:text-primary-hover transition">Mentions légales</NuxtLink>
            <NuxtLink to="/legal/politique-confidentialite" class="hover:text-primary-hover transition">Confidentialité</NuxtLink>
          </div>

          <p>
            Site réalisé par 
            <a href="https://nicolasdeza.com" target="_blank" class="text-primary underline hover:no-underline">Nicolas Deza</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
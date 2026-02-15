<script setup>
import { realisations } from '@/data/realisations'

const canonical = useCanonical()

useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: canonical.value,
    },
  ],
}))

useSeoMeta({
  title: "Nos réalisations",
  description:
    "Découvrez nos réalisations en aménagement extérieur, pavage, terrasses et rénovation intérieure en Brabant Wallon et Province de Namur. Projets avant/après avec photos.",

  robots: "index, follow",

  ogTitle: "Nos réalisations – AVH Garden | Projets avant & après",
  ogDescription:
    "Parcourez nos chantiers réalisés : terrassement, pavage, rénovation intérieure et aménagements extérieurs en Belgique. Photos avant/après de nos projets.",
  ogImage: "https://www.avh-garden.be/og-avhgarden.jpg",
  ogUrl: canonical,
  ogType: "website",

  twitterCard: "summary_large_image",
  twitterTitle: "Réalisations AVH Garden – Avant & Après",
  twitterDescription:
    "Découvrez nos projets d'aménagement extérieur et rénovation intérieure en Brabant Wallon et Namur. Photos avant/après.",
  twitterImage: "https://www.avh-garden.be/og-avhgarden.jpg",
})
</script>

<template>
  <div class="w-full bg-white">
    <section class="relative w-full h-[400px] sm:h-[550px] flex items-center justify-center overflow-hidden">
      <NuxtImg
        src="/images/herorealisation.jpg"
        alt="Chantier réalisé par AVH Garden"
        loading="eager"
        format="webp"
        class="absolute inset-0 w-full h-full object-cover scale-105"
        aria-hidden="true"
      />

      <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div class="relative z-10 text-center px-6 max-w-4xl">
        <span class="inline-block px-4 py-1.5 mb-4 text-xs font-black tracking-[0.3em] uppercase text-primary bg-[[#1E1E1E]] backdrop-blur-md rounded-full">
          Portfolio
        </span>
        <h1 class="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
          Nos réalisations
        </h1>
        <p class="text-white/90 max-w-xl mx-auto text-base sm:text-xl font-medium leading-relaxed">
          Découvrez l'excellence de notre savoir-faire à travers nos projets de terrassement et rénovation.
        </p>
      </div>
    </section>

    <section class="w-full py-16 sm:py-24 border-b border-gray-50">
      <div class="mx-auto max-w-[1400px] px-6">
        <div class="text-center max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-[1.1]">
            La transformation <br>
            <span class="text-primary italic">Avant / Après</span>
          </h2>
          <div class="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"/>
          <p class="text-slate-500 text-lg sm:text-xl font-medium">
            Chaque chantier est une nouvelle histoire. Nous apportons une attention particulière aux finitions pour créer des espaces durables et esthétiques.
          </p>
        </div>
      </div>
    </section>

    <section class="w-full pb-24">
      <div class="mx-auto max-w-[1440px] px-6">
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="project in realisations.slice().reverse()"
            :key="project.slug"
            :to="`/realisations/${project.slug}`"
            class="group relative block overflow-hidden rounded-3xl bg-slate-100 aspect-[4/3.5] shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <NuxtImg
              :src="project.cover"
              :alt="project.title"
              format="webp"
              quality="85"
              width="800"
              height="600"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            <div class="absolute bottom-0 left-0 w-full p-8 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div class="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                 <span class="h-px w-8 bg-primary"/>
                 <span class="text-primary text-xs font-black uppercase tracking-widest">Voir le projet</span>
              </div>
              <h3 class="text-white text-xl md:text-2xl font-bold tracking-tight">
                {{ project.title }}
              </h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
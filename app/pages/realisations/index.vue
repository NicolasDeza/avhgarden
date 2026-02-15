<script setup>
import { realisations } from '@/data/realisations'

useSeoMeta({
  title: "Nos réalisations – AVH Garden",
  description:
    "Découvrez nos chantiers de rénovation et d’aménagement réalisés en Belgique.",
})
</script>

<template>
  <div class="w-full">

    <!-- HERO -->
    <section
      class="relative w-full h-[380px] sm:h-[500px] flex items-center justify-center overflow-hidden"
      aria-label="Nos réalisations"
    >
      <!-- Image -->
      <NuxtImg
        src="/images/herorealisation.jpg"
        alt="Chantier réalisé par AVH Garden"
        format="webp"
        quality="80"
        width="1800"
        height="900"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50" />

      <!-- Contenu -->
      <div class="relative z-10 text-center px-6">
        <h1 class="text-3xl sm:text-5xl font-bold text-white mb-4">
          Nos réalisations
        </h1>
        <p class="text-white/85 max-w-2xl mx-auto text-sm sm:text-lg">
          Des projets réalisés avec soin, précision et passion.
        </p>
      </div>
    </section>

    <!-- TITRE ET SOUS-TITRE -->
    <section class="w-full bg-white py-12 sm:py-16">
      <div class="mx-auto max-w-[1400px] px-6 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
          Nos réalisations avant et après
        </h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          Découvrez nos chantiers réalisés : terrassement, pavage, rénovation intérieure et aménagements extérieurs.
        </p>
      </div>
    </section>

    <!-- GRILLE -->
    <section class="w-full bg-white pb-16 sm:pb-24">
      <div class="mx-auto max-w-[1400px] px-6">

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <NuxtLink
            v-for="project in realisations.slice().reverse()"
            :key="project.slug"
            :to="`/realisations/${project.slug}`"
            class="group relative block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-300 aspect-[4/3.5]"
          >
            <!-- Image -->
            <NuxtImg
              :src="project.cover"
              :alt="project.title"
              format="webp"
              quality="80"
              width="800"
              height="600"
              sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
              class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />

            <!-- Texte -->
            <div class="absolute bottom-0 left-0 p-6 z-10">
              <h3 class="text-white text-lg font-semibold">
                {{ project.title }}
              </h3>
            </div>
          </NuxtLink>
        </div>

      </div>
    </section>

  </div>
</template>

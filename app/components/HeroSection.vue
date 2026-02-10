<script setup>
import { Drill } from "lucide-vue-next"
</script>

<template>
  <section
    class="relative w-full py-10 md:py-40 lg:py-[205px]"
    aria-label="Section d'accueil"
  >
    <!-- Image de fond -->
    <NuxtImg
      src="/images/hero/hero.jpg"
      alt=""
      class="absolute inset-0 w-full h-full object-cover"
      loading="eager"
    />

    <!-- Overlay sombre -->
    <div class="absolute inset-0 bg-black/55" />

    <!-- Wrapper 1440px pour le contenu -->
    <div
      class="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6"
    >
      <!-- Titre principal -->
      <h1 class="text-4xl sm:text-6xl lg:text-6xl font-bold tracking-tight text-white">
        Rénovation · Transformation · Aménagement
      </h1>

      <!-- Glass card (GROUP) -->
      <div
        class="group mt-8 max-w-3xl
               backdrop-blur-sm
               bg-white/5 has-[a:hover]:bg-white/10
               border border-white/15
               rounded-2xl
               px-8 py-8
               shadow-2xl
               transition-colors duration-500"
      >
        <!-- Sous-titre -->
        <p class="text-xl sm:text-2xl text-white font-semibold mb-6">
          Travaux <span class="text-primary font-bold">intérieurs</span> et
          <span class="text-primary font-bold">extérieurs</span> sur mesure,
          pour rénover et transformer vos espaces
        </p>

        <!-- Action -->
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2
                 rounded-md
                 bg-primary px-8 py-3 font-bold text-white
                 hover:scale-105 hover:bg-primary-hover
                 transition"
        >
          <Drill class="h-5 w-5" />
          Nous contacter
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

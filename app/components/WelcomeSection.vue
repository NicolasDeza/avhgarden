<script setup>
// Section purement présentation – aucune logique nécessaire
</script>

<template>
  <section class="w-full bg-[#252424] text-white" aria-label="Présentation de l'entreprise">
    <div
      class="mx-auto max-w-[1440px]
             px-6 py-16 md:py-24
             flex flex-col items-center text-center"
    >
      <!-- Eyebrow -->
      <span
        class="text-primary text-xl sm:text-3xl font-bold  uppercase mb-3"
      >
        Bienvenue chez
      </span>

      <!-- Titre -->
      <h2 class="text-2xl sm:text-3xl font-bold mb-6">
        AVH Garden
      </h2>

      <!-- Texte principal -->
      <p
        class="text-xl sm:text-3xl font-semibold leading-relaxed max-w-6xl mb-6 mt-3"
      >
        Rénovations intérieures, extérieures et aménagements réalisés avec
        savoir-faire
      </p>

      <!-- Description -->
      <p
        class="text-white/90 text-lg sm:text-xl max-w-5xl mb-10"
      >
        Découvrez nos chantiers : pavage, carrelage, salle de bain,
        aménagements intérieurs et travaux extérieurs
      </p>

      <!-- CTA -->
      <NuxtLink
        to="/realisations"
        class="inline-flex items-center justify-center
               bg-primary hover:bg-primary-hover
               text-white hover:scale-105 uppercase font-bold
               px-8 py-4 rounded-md
               transition
               focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Voir nos réalisations
      </NuxtLink>
    </div>
  </section>
</template>

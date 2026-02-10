<script setup>

</script>

<template>
  <section class="w-full bg-white pt-16 md:pt-24 pb-8 md:pb-12" aria-label="Nos services">
    <div class="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">

      <!-- Titre section -->
      <div class="mb-14 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Tous vos travaux, intérieurs et extérieurs
        </h2>
        <p class="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
          AVH Garden vous accompagne dans vos projets de rénovation,
          d’aménagement et de transformation, avec un seul interlocuteur.
        </p>
      </div>

      <!-- Grille services -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">

        <!-- Service extérieur -->
        <div
          class="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl
                 transition-all duration-300 hover:scale-[1.02]
                 border border-gray-100
                 h-[520px]">
          
          <!-- Image full card -->
          <NuxtImg
            src="/images/services/exterieur.jpg"
            alt=""
            class="absolute inset-0 w-full h-full object-cover
                   transition-transform duration-500 group-hover:scale-110"
          />
          
          <!-- Overlay sombre pour lisibilité -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"/>

          <!-- Contenu avec glassmorphism -->
          <div class="relative z-10 h-full flex flex-col justify-between p-6">
            
            <!-- Header -->
            <div>
              <h3 class="text-white text-2xl font-bold">
                Travaux extérieurs
              </h3>
            </div>

            <!-- Glassmorphism card en bas -->
            <div class="backdrop-blur-sm bg-white/15 border border-white/20 rounded-xl p-6 shadow-2xl">
              <ul class="space-y-3 text-white mb-6">
                <li class="flex items-start gap-2 font-semibold">
                  <span class="text-primary font-bold mt-1">✓</span>
                  <span>Terrassement & pavage</span>
                </li>
                <li class="flex items-start gap-2 font-semibold">
                  <span class="text-primary font-bold mt-1">✓</span>
                  <span>Création d'allées et parkings</span>
                </li>
                <li class="flex items-start gap-2 font-semibold">
                  <span class="text-primary font-bold mt-1">✓</span>
                  <span>Égouttage & drainage</span>
                </li>
                <li class="flex items-start gap-2 font-semibold">
                  <span class="text-primary font-bold mt-1">✓</span>
                  <span>Clôtures & aménagements extérieurs</span>
                </li>
              </ul>

              <NuxtLink
                to="/realisations"
                class="inline-flex items-center justify-center gap-2 w-full
                       bg-primary hover:bg-primary-hover
                       text-white font-bold
                       px-6 py-3 rounded-lg
                       transition-all hover:scale-105
                       shadow-md hover:shadow-lg
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Voir les réalisations
      
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Service intérieur -->
        <div
          class="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl
                 transition-all duration-300 hover:scale-[1.02]
                 border border-gray-100
                 h-[520px]">
          
          <!-- Image full card -->
          <NuxtImg
            src="/images/services/interieur.jpg"
            alt=""
            class="absolute inset-0 w-full h-full object-cover
                   transition-transform duration-500 group-hover:scale-110"
          />
          
          <!-- Overlay sombre pour lisibilité -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"/>

          <!-- Contenu avec glassmorphism -->
          <div class="relative z-10 h-full flex flex-col justify-between p-6">
            
            <!-- Header -->
            <div>
             
              <h3 class="text-white text-2xl font-bold">
                Travaux intérieurs
              </h3>
            </div>

            <!-- Glassmorphism card en bas -->
            <div class="backdrop-blur-sm bg-white/15 border border-white/20 rounded-xl p-6 shadow-2xl">
              <ul class="space-y-3 text-white mb-6">
                <li class="flex items-start gap-2 font-semibold">
                  <span class="text-primary font-bold mt-1">✓</span>
                  <span>Carrelage & pose de sols</span>
                </li>
                <li class="flex items-start gap-2 font-semibold">
                  <span class="text-primary font-bold mt-1">✓</span>
                  <span>Création ou rénovation de salle de bain</span>
                </li>
                <li class="flex items-start gap-2 font-semibold">
                  <span class="text-primary font-bold mt-1">✓</span>
                  <span>Aménagement intérieur</span>
                </li>
                <li class="flex items-start gap-2 font-semibold">
                  <span class="text-primary font-bold mt-1">✓</span>
                  <span>Petits travaux de plomberie</span>
                </li>
              </ul>

              <NuxtLink
                to="/realisations"
                class="inline-flex items-center justify-center gap-2 w-full
                       bg-primary hover:bg-primary-hover
                       text-white font-bold
                       px-6 py-3 rounded-lg
                       transition-all hover:scale-105
                       shadow-md hover:shadow-lg
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Voir les réalisations
         
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

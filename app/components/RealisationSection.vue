<template>
  <section class="w-full bg-white py-16 md:py-24" aria-label="Nos réalisations">
    <div class="mx-auto max-w-[1440px] px-6">
      
      <!-- En-tête -->
      <div class="mb-16 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tighter">
          Nos Réalisations
        </h2>
        <div class="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"/>
        <p class="text-gray-600 text-lg md:text-xl font-medium max-w-3xl mx-auto">
          Découvrez quelques-uns de nos projets réalisés avec passion et expertise.
        </p>
      </div>

      <!-- Grille de réalisations -->
      <div class="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
        
        <!-- Card 1 -->
        <article class="group relative overflow-hidden rounded-2xl shadow-xl bg-white transition-all duration-300 hover:shadow-2xl">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <NuxtImg 
                src="/images/realisations/realisation-1.jpg" 
                alt="Réalisation 1 - Aménagement extérieur"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div class="p-8 flex flex-col justify-center">
              <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                Extérieur
              </span>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Aménagement Extérieur</h3>
              <p class="text-gray-600 text-lg">
                Pavage complet, terrassement et création d'une allée moderne. Un projet qui allie esthétique et fonctionnalité.
              </p>
            </div>
          </div>
        </article>

        <!-- Card 2 -->
        <article class="group relative overflow-hidden rounded-2xl shadow-xl bg-white transition-all duration-300 hover:shadow-2xl">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <NuxtImg 
                src="/images/realisations/realisation-2.jpg" 
                alt="Réalisation 2 - Rénovation intérieure"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div class="p-8 flex flex-col justify-center">
              <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                Intérieur
              </span>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Rénovation Intérieure</h3>
              <p class="text-gray-600 text-lg">
                Transformation complète d'une salle de bain avec des matériaux haut de gamme et des finitions impeccables.
              </p>
            </div>
          </div>
        </article>

        <!-- Card 3 -->
        <article class="group relative overflow-hidden rounded-2xl shadow-xl bg-white transition-all duration-300 hover:shadow-2xl">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="relative aspect-[4/3] md:aspect-auto overflow-hidden">
              <NuxtImg 
                src="/images/realisations/realisation-3.jpg" 
                alt="Réalisation 3 - Aménagement jardin"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div class="p-8 flex flex-col justify-center">
              <span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">
                Jardin
              </span>
              <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Jardin & Clôture</h3>
              <p class="text-gray-600 text-lg">
                Création d'un espace extérieur harmonieux avec clôture, plantation et éclairage paysager.
              </p>
            </div>
          </div>
        </article>

      </div>

      <!-- CTA -->
      <div class="mt-12 text-center">
        <NuxtLink
          to="/realisations"
          class="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl
                 transition-all duration-300 transform hover:scale-105 shadow-lg
                 focus:outline-none focus:ring-4 focus:ring-primary/30"
        >
          Voir toutes nos réalisations

        </NuxtLink>
      </div>

    </div>
  </section>
</template>

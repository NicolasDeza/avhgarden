<template>
  <section 
    class="relative w-full py-10 sm:py-[150px] flex items-center justify-center overflow-hidden"
    aria-label="Section d'accueil - Présentation des services de rénovation"
  >
    <!-- Image -->
       <NuxtImg
          src="/images/hero/hero.jpg"
          alt=""
          width="1600"
          height="900"
          fetchpriority="high"
          loading="eager"
          format="webp"
          quality="75"
          preload
          class="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
       />


    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40" aria-hidden="true" />

    <!-- Contenu -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 text-center hero-anim">

      <!-- Titre -->
      <h1 
        class="text-4xl md:text-7xl font-extrabold tracking-tighter text-white mb-8 leading-tight hero-anim-delay-1"
      >
        Rénovez votre espace <br> 
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
          avec excellence
        </span>
      </h1>

      <!-- Bloc texte + CTA -->
      <div 
        class="max-w-2xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl hero-anim-delay-2"
      >
        <p class="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
          Travaux <strong class="text-white">intérieurs</strong> et 
          <strong class="text-white">extérieurs</strong> sur mesure. 
          Avec <strong class="text-white">AVH Garden</strong>, vos idées deviennent une réalité durable.
        </p>

        <nav 
          class="flex flex-col sm:flex-row gap-4 justify-center"
          aria-label="Actions principales"
        >
          <NuxtLink 
            to="/contact" 
            class="group flex items-center justify-center gap-3 
                   bg-primary hover:bg-primary-hover 
                   text-white px-10 py-4 rounded-lg font-bold 
                   transition-all duration-300 transform hover:scale-105
                   shadow-lg shadow-primary/20
                   focus:outline-none focus:ring-4 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Demander un devis gratuit - Accéder au formulaire de contact"
          >
            Mon devis gratuit
          </NuxtLink>
          
          <NuxtLink 
            to="/realisations" 
            class="flex items-center justify-center 
                   bg-white/10 hover:bg-white/20 
                   text-white px-10 py-4 rounded-lg font-bold 
                   backdrop-blur-md border border-white/10
                   transition-all duration-300 transform hover:scale-105
                   focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Découvrir nos réalisations - Voir la galerie de projets"
          >
            Voir nos projets
          </NuxtLink>
        </nav>
      </div>

    </div>
  </section>
</template>

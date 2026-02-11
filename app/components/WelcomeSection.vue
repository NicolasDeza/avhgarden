<template>
  <section class="w-full bg-[#1A1A1A] text-white overflow-hidden" aria-label="Présentation">
    <div class="mx-auto max-w-7xl px-6 py-16 md:py-24 flex flex-col items-center text-center">
      

      <span class="text-primary text-sm md:text-base font-black uppercase tracking-[0.2em] mb-4">
        Bienvenue chez
      </span>

      <h2 class="text-4xl md:text-5xl font-black mb-10 tracking-tighter">
        AVH <span class="text-primary">Garden</span>
      </h2>

      <p class="text-2xl md:text-4xl font-semibold leading-[1.2] max-w-4xl mb-8">
        Rénovations <span class="text-white/50 italic">intérieures</span>, 
        extérieures et aménagements réalisés avec savoir-faire
      </p>

      <p class="text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
        Du pavage à la salle de bain, nous transformons vos projets en espaces durables et soignés.
      </p>

      <NuxtLink
        to="/realisations"
        class="group relative inline-flex items-center justify-center
               bg-primary text-white font-bold uppercase tracking-wider
               px-10 py-5 rounded-lg transition-all duration-300
              "
      >
        Voir nos réalisations
        <span class="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
      </NuxtLink>
      
    </div>
  </section>
</template>
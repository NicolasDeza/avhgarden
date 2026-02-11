<script setup>
// Tu peux importer des icônes ici si nécessaire
</script>

<template>
  <section class="w-full min-h-[480px] grid grid-cols-1 lg:grid-cols-2 overflow-hidden" aria-label="Présentation">
    
    <div class="relative h-[320px] lg:h-auto overflow-hidden">
      <NuxtImg 
        src="/images/split/section-1.jpg" 
        alt="Notre expertise en action"
        class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
      />
      <div class="absolute inset-0 bg-black/10"/>
    </div>

    <div class="bg-primary flex items-center justify-center p-12 sm:p-16 lg:p-20">
      <div class="max-w-xl">
        <span class="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-bold uppercase tracking-widest mb-6">
          TVA : 0776.249.824 actif depuis 1997
        </span>
        
        <h2 class="text-4xl sm:text-5xl font-black text-white leading-[1.1] tracking-tighter mb-8">
          La qualité au service de votre habitat.
        </h2>
        
        <p class="text-orange-50 text-lg md:text-xl leading-relaxed mb-10 opacity-90">
          Nous ne nous contentons pas de construire, nous créons des espaces de vie qui vous ressemblent. Chaque détail est pensé pour durer et sublimer votre quotidien.
        </p>

        <NuxtLink 
          to="/realisations" 
          class="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg
                 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
                 focus:outline-none focus:ring-4 focus:ring-white/50"
        >
          Voir nos travaux
         
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optionnel : ajout d'un grain de texture sur le orange pour le côté premium */
.bg-gradient-to-br {
  position: relative;
}
.bg-gradient-to-br::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.05;
  background-image: url("https://www.transparenttextures.com/patterns/carbon-fibre.png");
  pointer-events: none;
}
</style>
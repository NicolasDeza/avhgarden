<script setup>

</script>

<template>
  <section class="w-full bg-white py-16 sm:py-24" aria-label="Nos réalisations">
    <div class="mx-auto max-w-[1440px] px-6">
      
      <div class="mb-16 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
          Nos Réalisations
        </h2>
        <div class="w-16 h-1 bg-primary mx-auto mb-6"/>
        <p class="text-slate-600 text-lg max-w-2xl mx-auto">
          Découvrez quelques-uns de nos projets réalisés avec passion et expertise.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[550px]">
        
        <article class="md:col-span-7 md:row-span-2 group relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm border border-slate-100">
          <NuxtImg 
            src="/images/realisations/terrasse.jpg" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-8">
        
            <h3 class="text-white text-2xl font-bold">Pavage & Terrasse Moderne</h3>
          </div>
        </article>

        <article class="md:col-span-5 md:row-span-1 group relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm border border-slate-100">
          <NuxtImg 
            src="/images/realisations/grenier.jpg" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
   
            <h3 class="text-white text-xl font-bold">Rénovation de Combles</h3>
          </div>
        </article>

        <article class="md:col-span-5 md:row-span-1 group relative overflow-hidden rounded-3xl bg-slate-100 shadow-sm border border-slate-100">
          <NuxtImg 
            src="/images/realisations/amenagement.jpg" 
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-6">
 
            <h3 class="text-white text-xl font-bold">Espace Paysager</h3>
          </div>
        </article>

      </div>

      <div class="mt-12 text-center">
        <NuxtLink 
          to="/realisations" 
          class="inline-block bg-primary hover:bg-primary-hover hover:scale-105 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
        >
          Découvrir toutes nos réalisations
        </NuxtLink>
      </div>

    </div>
  </section>
</template>



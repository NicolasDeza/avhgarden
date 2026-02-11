<template>
  <section class="w-full bg-white py-20" aria-label="Appel à l'action">
    <div class="mx-auto px-6">
      <div class="relative overflow-hidden bg-gradient-to-tr from-primary to-orange-400 rounded-[2rem] px-8 py-16 text-center shadow-2xl shadow-orange-900/20">
        
        <div class="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"/>
        <div class="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-black/10 blur-3xl"/>

        <div class="relative z-10">
          <h2 class="text-4xl md:text-5xl font-black tracking-tighter text-white">
            Un projet de rénovation en tête ?
          </h2>

          <p class="mx-auto mt-6 max-w-xl text-lg text-orange-50 font-medium">
            Confiez vos espaces à un expert. De la conception à la réalisation, nous donnons vie à vos idées.
          </p>

          <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <NuxtLink
              to="/contact"
              class="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-orange-600 transition-all hover:scale-105 hover:shadow-xl active:scale-95"
            >
              Demander mon devis gratuit
              <span class="transition-transform group-hover:translate-x-1">→</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
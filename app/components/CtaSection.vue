<template>
  <section
    class="w-full bg-primary py-12 md:py-16"
    aria-label="Appel à l'action"
  >
    <div class="mx-auto max-w-7xl px-6">
      <div class="rounded-lg px-6  text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Prêt à démarrer votre prochain projet Nuxt ?
        </h2>

        <p class="mx-auto mt-4 max-w-2xl text-white/80">
          Une base Nuxt moderne, performante et prête pour la production.
          Gagnez du temps et concentrez-vous sur l’essentiel.
        </p>

        <div
          class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 rounded-md
                   bg-white px-6 py-3 font-medium text-orange-600
                   transition hover:bg-orange-100"
          >
            Contactez-nous
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

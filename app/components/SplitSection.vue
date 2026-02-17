<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const sectionRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    {
      threshold: 0.2
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section class="w-full min-h-[500px] grid grid-cols-1 lg:grid-cols-2 bg-[#1E1E1E]" aria-label="Présentation">
    
    <div class="relative h-[400px] lg:h-auto overflow-hidden group">
      <NuxtImg 
        src="/images/split/section-1.jpg" 
        alt="Artisan BTP en action"
        class="absolute inset-0 w-full h-full object-cover"
      />
    
    </div>

    <div 
      ref="sectionRef"
      class="relative flex items-center justify-center p-10 sm:p-16"
    >
      <div 
        class="relative z-10 max-w-xl w-full transform transition-all duration-1000 ease-out"
        :class="isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'"
      >
        
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"/>
          </span>
          <span class="text-primary font-bold text-[10px] uppercase tracking-widest">
            TVA 0776.249.824 actif depuis 1997
          </span>
        </div>
        
        <h2 class="text-4xl font-black text-white leading-[1.05] tracking-tighter mb-8">
          La qualité au service de votre 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
            habitat.
          </span>
        </h2>
        
        <p class="text-slate-400 text-lg leading-relaxed mb-10 font-light">
          Nous ne nous contentons pas de construire, nous façonnons des espaces de vie durables. 
          Notre expertise certifiée est le gage d'une réalisation sans compromis.
        </p>

        <div class="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <NuxtLink 
            to="/realisations" 
            class="w-full sm:w-auto bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-md text-center transition-all hover:scale-105"
          >
            Voir nos travaux
          </NuxtLink>
        </div>

      </div>
    </div>
  </section>
</template>


<style scoped>

.bg-gradient-to-br {
  position: relative;
}
.bg-gradient-to-br::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.05;

  pointer-events: none;
}
</style>
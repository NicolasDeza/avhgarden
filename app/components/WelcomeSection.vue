<script setup>
import { ref, onMounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})
</script>

<template>
  <section ref="sectionRef" class="w-full bg-[#1A1A1A] text-white overflow-hidden" aria-label="Présentation">
    <div class="mx-auto max-w-7xl px-6 py-16 md:py-24 flex flex-col items-center text-center">
      

      <span :class="['text-primary text-sm md:text-base font-black uppercase tracking-[0.2em] mb-4 welcome-anim-1', { 'visible': isVisible }]">
        Bienvenue chez
      </span>

      <h2 :class="['text-4xl md:text-5xl font-black mb-10 tracking-tighter welcome-anim-2', { 'visible': isVisible }]">
        AVH <span class="text-primary">Garden</span>
      </h2>

      <p :class="['text-2xl md:text-4xl font-semibold leading-[1.2] max-w-4xl mb-8 welcome-anim-3', { 'visible': isVisible }]">
        Rénovations <span class="text-white/50 italic">intérieures</span>, 
        extérieures et aménagements réalisés avec savoir-faire
      </p>

      <p :class="['text-gray-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed welcome-anim-4', { 'visible': isVisible }]">
        Du pavage à la salle de bain, nous transformons vos projets en espaces durables et soignés.
      </p>

      <NuxtLink
        to="/realisations"
        :class="['group relative inline-flex items-center justify-center bg-primary hover:bg-primary-hover hover:scale-105 text-white font-bold uppercase tracking-wider px-10 py-4 rounded-lg transition-all duration-300 welcome-anim-5', { 'visible': isVisible }]"
      >
        Voir nos réalisations
      </NuxtLink>
      
    </div>
  </section>
</template>
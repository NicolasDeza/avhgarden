<script setup>
import { 
  Shovel, 
  Palmtree, 
  Droplets, 
  Fence, 
  LayoutGrid, 
  Bath, 
  Home, 
  Pipette 
} from "lucide-vue-next"
import { onMounted } from 'vue'

onMounted(() => {
  const elements = document.querySelectorAll('.service-anim')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  elements.forEach(el => observer.observe(el))
})
</script>

<template>
  <section id="services" class="w-full bg-white py-16 md:py-24" aria-label="Nos services">
    <div class="mx-auto max-w-[1440px] px-6">
      
      <div class="mb-20 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tighter">
          Tous vos travaux, intérieurs et extérieurs
        </h2>
        <div class="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"/>
        <p class="text-gray-600 text-lg md:text-xl font-medium max-w-3xl mx-auto">
          Du pavage aux rénovations complètes, nous réalisons vos projets avec expertise et savoir-faire.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        
        <div class="group service-anim">
          <div class="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8 shadow-2xl">
            <NuxtImg
  src="/images/services/exterieur.jpg"
  alt="Aménagements extérieurs : pavage, terrassement, allées et travaux de drainage"
  width="900"
  height="506"
  sizes="(max-width: 768px) 100vw, 700px"
  format="webp"
  quality="80"
  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
/>
            <div class="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-gray-900 uppercase tracking-widest">
              Extérieur
            </div>
          </div>

          <h3 class="text-3xl font-bold text-gray-900 mb-6 px-2">Aménagements Extérieurs</h3>
          
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 px-2">
            <li class="flex items-center gap-3 text-gray-700 font-medium hover:text-primary transition-colors">
              <div class="p-2 bg-primary/10 rounded-lg text-primary"><Shovel class="h-5 w-5" /></div>
              Pavage & Terrassement
            </li>
            <li class="flex items-center gap-3 text-gray-700 font-medium hover:text-primary transition-colors">
              <div class="p-2 bg-primary/10 rounded-lg text-primary"><Palmtree class="h-5 w-5" /></div>
              Allées & Parkings
            </li>
            <li class="flex items-center gap-3 text-gray-700 font-medium hover:text-primary transition-colors">
              <div class="p-2 bg-primary/10 rounded-lg text-primary"><Droplets class="h-5 w-5" /></div>
              Égouttage et drainage
            </li>
            <li class="flex items-center gap-3 text-gray-700 font-medium hover:text-primary transition-colors">
              <div class="p-2 bg-primary/10 rounded-lg text-primary"><Fence class="h-5 w-5" /></div>
              Clôtures et aménagements extérieurs
            </li>
          </ul>
        </div>

        <div class="group service-anim">
          <div class="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8 shadow-2xl">
            <NuxtImg
              src="/images/services/interieur.jpg"
              alt="Rénovation intérieure : carrelage, salles de bain, plomberie et aménagements"
              width="900"
              height="506"
              sizes="(max-width: 768px) 100vw, 700px"
              format="webp"
              quality="80"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
/>

            <div class="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-gray-900 uppercase tracking-widest">
              Intérieur
            </div>
          </div>

          <h3 class="text-3xl font-bold text-gray-900 mb-6 px-2">Rénovation Intérieure</h3>
          
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 px-2">
            <li class="flex items-center gap-3 text-gray-700 font-medium hover:text-primary transition-colors">
              <div class="p-2 bg-primary/10 rounded-lg text-primary"><LayoutGrid class="h-5 w-5" /></div>
              Sols & Carrelage
            </li>
            <li class="flex items-center gap-3 text-gray-700 font-medium hover:text-primary transition-colors">
              <div class="p-2 bg-primary/10 rounded-lg text-primary"><Bath class="h-5 w-5" /></div>
              Salles de bain
            </li>
            <li class="flex items-center gap-3 text-gray-700 font-medium hover:text-primary transition-colors">
              <div class="p-2 bg-primary/10 rounded-lg text-primary"><Home class="h-5 w-5" /></div>
              Aménagements et rénovation
            </li>
            <li class="flex items-center gap-3 text-gray-700 font-medium hover:text-primary transition-colors">
              <div class="p-2 bg-primary/10 rounded-lg text-primary"><Pipette class="h-5 w-5" /></div>
              Plomberie
            </li>
          </ul>
        </div>

      </div>

      <div class="mt-16 text-center">
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center px-10 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-lg
                 transition-all duration-300 transform hover:scale-105 shadow-lg
                 focus:outline-none focus:ring-4 focus:ring-primary/30"
        >
          Demander un devis gratuit
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
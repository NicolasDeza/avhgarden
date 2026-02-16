<script setup>
import { ref, onMounted } from 'vue'
import {
  Shield,
  Award,
  ThumbsUp,
} from "lucide-vue-next";

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
    { threshold: 0.15 }
  )
  
  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }
})

const features = [
  {
    title: "Garantie & Assurances",
    description:
      "Tous nos travaux sont garantis et couverts par nos assurances professionnelles. Votre tranquillité d'esprit est notre priorité.",
    icon: Shield,
  },
  {
    title: "Qualité Certifiée",
    description:
      "Matériaux premium, techniques éprouvées et finitions impeccables. Chaque chantier respecte les normes les plus strictes du secteur.",
    icon: Award,
  },
  {
    title: "100% Satisfaction",
    description:
      "Écoute, réactivité et respect des délais. Notre succès repose sur la satisfaction de nos clients et leur confiance renouvelée.",
    icon: ThumbsUp,
  },
];
</script>

<template>
  <section ref="sectionRef" class="w-full bg-slate-50 py-16 sm:py-24" aria-label="Pourquoi nous choisir">
    <div class="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <!-- Titre -->
      <header class="mx-auto max-w-3xl text-center mb-20">
  <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tighter">
    AVH Garden, l'expertise
  </h2>
  <div class="w-16 h-1 bg-primary mx-auto rounded-full mb-6"/>
  <p class="text-gray-600 text-lg md:text-xl font-medium">
    Découvrez notre engagement pour réaliser vos projets de rêve.
  </p>
</header>

      <!-- Grille -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <FeatureItem
          v-for="feature in features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
          :class="['feature-card', { 'visible': isVisible }]"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  Clock,
  Users,
  Heart,
} from "lucide-vue-next";

const features = [
  {
    title: "Notre Histoire",
    description:
      "Plus de 15 ans d'expérience dans la construction et la rénovation. Notre expertise s'est construite sur des centaines de projets réalisés.",
    icon: Clock,
  },
  {
    title: "Notre Équipe",
    description:
      "Une équipe passionnée d'experts qualifiés, architectes, ingénieurs et artisans dédiés à l'excellence de chaque projet.",
    icon: Users,
    dark: true,
  },
  {
    title: "Nos Valeurs",
    description:
      "Qualité, transparence, respect des délais et satisfaction client sont au cœur de notre démarche quotidienne.",
    icon: Heart,
  },
];
</script>

<template>
  <section class="w-full bg-gray-50 py-20" aria-label="Pourquoi nous choisir">
    <div class="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <!-- Titre -->
      <header class="mx-auto max-w-3xl text-center mb-14">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          AVH Garden, Votre expertise
        </h2>
        <p class="text-gray-600 text-lg md:text-xl">
          Découvrez notre expertise et notre engagement pour réaliser vos projets de rêve
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
          :dark="feature.dark"
        />
      </div>
    </div>
  </section>
</template>

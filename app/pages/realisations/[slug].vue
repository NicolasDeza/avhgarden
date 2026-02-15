<script setup>
import { realisations } from '@/data/realisations'

const route = useRoute()

const project = realisations.find(
  (item) => item.slug === route.params.slug
)

if (!project) {
  throw createError({ statusCode: 404 })
}

useSeoMeta({
  title: project.title + " – AVH Garden",
  description: project.description,
})

// Lightbox
const selectedImage = ref(null)
const selectedIndex = ref(null)

const openLightbox = (image, index) => {
  selectedImage.value = image
  selectedIndex.value = index
}

const closeLightbox = () => {
  selectedImage.value = null
  selectedIndex.value = null
}

const nextImage = () => {
  if (selectedIndex.value < project.images.length - 1) {
    selectedIndex.value++
    selectedImage.value = project.images[selectedIndex.value]
  }
}

const prevImage = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value--
    selectedImage.value = project.images[selectedIndex.value]
  }
}

// Gestion des touches clavier
const handleKeydown = (e) => {
  if (!selectedImage.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="w-full bg-white">

    <!-- HERO SIMPLE -->
    <section class="py-16 bg-gray-50 text-center">
      <div class="mx-auto max-w-[900px] px-6">
        <h1 class="text-3xl sm:text-4xl font-bold mb-4">
          {{ project.title }}
        </h1>
        <p class="text-gray-600">
          {{ project.description }}
        </p>
      </div>
    </section>

    <!-- GALERIE -->
    <section class="py-16">
      <div class="mx-auto max-w-[1400px] px-6">

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(image, index) in project.images"
            :key="index"
            class="relative aspect-[4/3.5] overflow-hidden rounded-xl cursor-pointer"
            @click="openLightbox(image, index)"
          >
            <NuxtImg
              :src="image"
              :alt="project.title + ' image ' + (index + 1)"
              width="1600"
              height="1200"
              format="webp"
              quality="80"
              sizes="(max-width:768px) 100vw,
                     (max-width:1200px) 50vw,
                     33vw"
              class="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

      </div>
    </section>

    <!-- BOUTON RETOUR -->
    <section class="py-8 pb-16">
      <div class="mx-auto max-w-[1400px] px-6 text-center">
        <NuxtLink
          to="/realisations"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-primary hover:text-white text-gray-700 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Retour aux réalisations
        </NuxtLink>
      </div>
    </section>

    <!-- LIGHTBOX -->
    <Teleport to="body">
      <Transition name="fade">
        <div
          v-if="selectedImage"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2"
          @click="closeLightbox"
        >
          <!-- Bouton fermer -->
          <button
            class="absolute top-4 right-4 z-10 text-white hover:text-primary transition-colors p-2"
            aria-label="Fermer la lightbox"
            @click.stop="closeLightbox"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Bouton précédent -->
          <button
            v-if="selectedIndex > 0"
            class="absolute left-4 text-white hover:text-primary transition-colors p-2 z-10"
            aria-label="Image précédente"
            @click.stop="prevImage"
          >
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Image -->
          <div class="relative max-w-[95vw] max-h-full" @click.stop>
            <NuxtImg
              :src="selectedImage"
              :alt="project.title + ' image ' + (selectedIndex + 1)"
              class="max-w-full max-h-[95vh] w-auto h-auto object-contain rounded-lg"
              quality="90"
            />
            <p class="text-white text-center mt-4 text-lg">
              {{ selectedIndex + 1 }} / {{ project.images.length }}
            </p>
          </div>

          <!-- Bouton suivant -->
          <button
            v-if="selectedIndex < project.images.length - 1"
            class="absolute right-4 text-white hover:text-primary transition-colors p-2 z-10"
            aria-label="Image suivante"
            @click.stop="nextImage"
          >
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
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
            class="relative aspect-[4/3] overflow-hidden rounded-xl"
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

  </div>
</template>

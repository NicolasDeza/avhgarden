<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: [Object, Function], required: true },
})
</script>

<template>
  <div
    class="group flex flex-col items-center text-center p-8 rounded-xl shadow-lg 
           transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer
           bg-[#252424] text-white"
  >
    <!-- Icône -->
    <div
      class="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg mb-4 
             transition-colors duration-300 bg-primary/20 text-primary"
    >
      <component :is="icon" class="h-8 w-8" />
    </div>

    <!-- Texte -->
    <div>
      <h3 class="font-bold text-xl mb-3 text-white text-center">
        {{ title }}
      </h3>
      <p class="leading-relaxed text-gray-300 text-left">
        {{ description }}
      </p>
    </div>
  </div>
</template>

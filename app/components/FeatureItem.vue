<script setup>
defineOptions({ inheritAttrs: false })

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: [Object, Function], required: true },
})
</script>

<template>
  <div
    :class="[
      'group relative flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl hover:-translate-y-2 bg-white border border-slate-200 hover:border-primary/30 shadow-lg hover:shadow-2xl overflow-hidden',
      $attrs.class
    ]"
  >
    <!-- Effet de fond subtil au hover -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div
      class="relative flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl mb-5 
             bg-gradient-to-br from-primary/10 to-orange-500/5 text-primary
             transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20
             border border-primary/10"
    >
      <component :is="icon" class="h-7 w-7 sm:h-8 sm:w-8" />
    </div>

    <div class="relative space-y-3">
      <h3 class="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900">
        {{ title }}
      </h3>
      <p class="leading-relaxed text-slate-600 text-sm sm:text-base">
        {{ description }}
      </p>
    </div>
    
    <!-- Accent décoratif en bas -->
    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
</template>

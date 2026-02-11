<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: [Object, Function], required: true },
})
</script>

<template>
  <div
    class="group flex flex-col items-center text-center p-10 rounded-3xl
           transition-all duration-500 hover:-translate-y-2
           bg-[#1E1E1E] border border-white/5 hover:border-primary/20 shadow-2xl shadow-black/20"
  >
    <div
      class="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl mb-8 
             bg-gradient-to-br from-primary/20 to-primary/5 text-primary
             transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
    >
      <component :is="icon" class="h-10 w-10" />
     
    </div>

    <div class="space-y-4">
      <h3 class="font-black text-2xl tracking-tight text-white">
        {{ title }}
      </h3>
      <p class="leading-relaxed text-gray-400 text-base">
        {{ description }}
      </p>
    </div>
  </div>
</template>

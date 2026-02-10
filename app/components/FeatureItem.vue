<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: [Object, Function], required: true },
  dark: { type: Boolean, default: false },
})
</script>

<template>
  <div
    :class="[
      'group flex flex-col items-center text-center p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer',
      dark 
        ? 'bg-gray-900 text-white' 
        : 'bg-white text-gray-900'
    ]"
  >
    <!-- Icône -->
    <div
      :class="[
        'flex h-16 w-16 shrink-0 items-center justify-center rounded-lg mb-4 transition-colors duration-300',
        dark
          ? 'bg-primary/20 text-primary'
          : 'bg-gray-100 text-primary group-hover:bg-primary/10'
      ]"
    >
      <component :is="icon" class="h-8 w-8" />
    </div>

    <!-- Texte -->
    <div>
      <h3 :class="['font-bold text-xl mb-3', dark ? 'text-white' : 'text-gray-900']">
        {{ title }}
      </h3>
      <p :class="['leading-relaxed', dark ? 'text-gray-300' : 'text-gray-600']">
        {{ description }}
      </p>
    </div>
  </div>
</template>

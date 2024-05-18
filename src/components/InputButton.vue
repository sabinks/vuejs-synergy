<template>
  <button
    class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
defineProps(['label'])
const emit = defineEmits(['update:modelValue'])
const handleClick = () => {
  emit('button-clicked')
}
</script>

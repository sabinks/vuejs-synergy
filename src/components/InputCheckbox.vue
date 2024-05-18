<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="checkbox">
      {{ labelName }}
    </label>
    <input
      class="shadow border rounded w-6 h-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="checkbox"
      type="checkbox"
      :placeholder="placeholder"
      :checked="modelValue"
      @input="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script setup>
defineProps(['labelName', 'modelValue', 'placeholder'])
defineEmits(['update:modelValue'])
</script>

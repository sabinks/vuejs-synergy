<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      {{ labelName }}
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps(['labelName', 'modelValue', 'placeholder'])
defineEmits(['update:modelValue'])
</script>

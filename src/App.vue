<template>
    <main>
        <RouterView />
    </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { store } from './store';
import { getUser } from './api';
const access_token = ref(localStorage.getItem('access_token') || sessionStorage.getItem('access_token') || '')
onMounted(() => {
    if (!store.state.isAuthenticated || access_token.value) {
        getUser(access_token.value)
    }
})
</script>

<template>
    <main>
        <RouterView />
    </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { store } from './store';
import { getUser } from './api';
// import { router } from './router';
const access_token = ref(localStorage.getItem('access_token') || sessionStorage.getItem('access_token') || '')
onMounted(() => {
    if (!store.state.isAuthenticated || access_token.value) {
        // if (router.currentRoute.value.path.startsWith('/auth')) {
        getUser(access_token.value)
        // }
    }
})
</script>

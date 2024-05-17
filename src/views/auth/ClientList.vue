<template>
    <div>

        <InputTable v-if="data" :data="data" :columns="columns" />
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import InputTable from '@/components/InputTable.vue';
import { createColumnHelper } from '@tanstack/vue-table'
import { store } from '@/store';
import type { Client } from '@/type/client';
const columnHelper = createColumnHelper<Client>()
let data = ref()
onMounted(() => {
    store.dispatch('fetchClients')
    data.value = store.state.clients.data
})
const columns = ref([
    columnHelper.accessor((row) => row.name, {
        id: "name",
        cell: (info) => info.getValue(),
        header: () => "Name",
    }),
    columnHelper.accessor((row) => row.email, {
        id: "email",
        cell: (info) => info.getValue(),
        header: () => "Email",
    }),
    columnHelper.accessor((row) => row.id, {
        id: "action",
        cell: (info) => info.getValue(),
        header: () => "Action",
        enableSorting: false
    }),
])
</script>
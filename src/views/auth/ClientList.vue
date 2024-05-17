<template>
    <div>
        Client List
        <InputTable :table="table" />
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import InputTable from '@/components/InputTable.vue';
import { createColumnHelper, getCoreRowModel, useVueTable } from '@tanstack/vue-table'
import { store } from '@/store';
import type { Client } from '@/type/client';
const columnHelper = createColumnHelper<Client>()
onMounted(() => {
    store.dispatch('fetchClients')
})
const columns = [
    columnHelper.accessor((row) => row.name, {
        id: "name",
        cell: (info) => info.getValue(),
        header: () => "Name",
    }),
]
console.log(store.state.clients.data);

const table = useVueTable({
    columns,
    data: store.state.clients.data,
    getCoreRowModel: getCoreRowModel()
})
</script>
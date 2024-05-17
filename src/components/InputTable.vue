<script setup lang="ts">
const props = defineProps(['table'])
</script>
<template>
    <table>
        <thead>
            <tr v-for="(headerGroup, index) in table.getHeaderGroups()" :key="index">
                <th v-for="(header, index) in headerGroup.headers" :key="header.id" :colspan="header.colSpan">
                    {{ header }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(row, index) in table.getRowModel().rows" :key="row.id">
                {{ row }}
            </tr>
        </tbody>
    </table>
</template>
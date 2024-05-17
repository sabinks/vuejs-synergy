<script setup lang="ts">
import { getCoreRowModel, useVueTable, FlexRender } from '@tanstack/vue-table';
const props = defineProps(['columns', 'data'])
const table = useVueTable({
    columns: props.columns,
    data: props.data,
    getCoreRowModel: getCoreRowModel()
})
console.log(props.data);

</script>
<template>
    <table>
        <thead>
            <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                <th v-for="header in headerGroup.headers" :key="header.id" :colSpan="header.colSpan">
                    <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                        :props="header.getContext()" />
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in table.getRowModel().rows" :key="row.id">
                <td v-for="cell in row.getVisibleCells()" :key="cell.id">
                    <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                </td>
            </tr>
        </tbody>
    </table>
</template>
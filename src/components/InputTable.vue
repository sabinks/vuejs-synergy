<script setup lang="ts">
import { getCoreRowModel, useVueTable, FlexRender } from '@tanstack/vue-table';
import { classNames } from '@/utils';
const props = defineProps(['columns', 'data'])
const table = useVueTable({
    columns: props.columns,
    data: props.data,
    getCoreRowModel: getCoreRowModel(),
})

</script>
<template>
    <div class=" w-full flex flex-col">
        <div class="relative  overflow-x-auto ">
            <div class=" divide-y  w-full divide-gray-200 border-separate border-spacing-0">
                <div class="">
                    <table>
                        <thead>
                            <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
                                <th v-for="header in headerGroup.headers" :key="header.id" :colSpan="header.colSpan"
                                    class="px-2 py-2 text-left text-xs font-medium text-white uppercase tracking-wider bg-primary1">
                                    <FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                                        :props="header.getContext()" />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in table.getRowModel().rows" :key="row.id"
                                class="hover:bg-slate-300 hover:cursor-pointer"
                                :class="index % 2 == 0 ? 'bg-gray-200' : ''">
                                <td v-for="cell in row.getVisibleCells()" :key="cell.id"
                                    class="px-2  py-1 whitespace-nowrap text-sm text-gray-700">
                                    <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
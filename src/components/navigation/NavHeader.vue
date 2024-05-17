<template>
    <div class="min-h-full">
        <Disclosure as="nav" class="bg-primary1">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img class="h-8 w-8" src="../../assets/logo-new.png" alt="Your Company" />
                        </div>
                        <!-- for large screen -->
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">

                                <RouterLink v-for="item in navigation" :key="item.name" :to="item.href"
                                    :class="[item.current ? 'bg-secondary text-white' : 'text-gray-300 hover:bg-secondary hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
                                    :aria-current="item.current ? 'page' : undefined">{{ item.name }}</RouterLink>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- for mobile screen -->
            <DisclosurePanel class="md:hidden">
                <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href"
                        :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
                        :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
                </div>
            </DisclosurePanel>
        </Disclosure>
        <main>
            <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <RouterView />
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import 'vue3-toastify/dist/index.css';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Login', href: '/login', current: false },
    { name: 'About', href: '/about', current: false },
    { name: 'Todo', href: '/todo', current: false },
]

</script>
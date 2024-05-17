<script setup lang="ts">
import NavHeader from '@/components/navigation/NavHeader.vue';
import NavFooter from '@/components/navigation/NavFooter.vue';
// import { v4 as uuidv4 } from 'uuid';
import { ref, onMounted } from 'vue'
import { db } from '../firebase'
import { collection, getDocs, query, where, onSnapshot } from "firebase/firestore";
const todos = ref<any>([])
onMounted(() => {

    const q = query(collection(db, "todos"));
    onSnapshot(q, (querySnapshot) => {
        const fbTodos: {
            id: string;
            content: any;
            done: boolean;
        }[] = []
        querySnapshot.forEach((doc) => {
            const todo = {
                id: doc.id,
                content: doc.data().content,
                done: doc.data().done
            }
            fbTodos.push(todo)
        });
        todos.value = fbTodos
    });

    // const querySnapshot = await getDocs(collection(db, "todos"));
    // querySnapshot.forEach((doc) => {
    //     fbTodos.push({
    //         id: doc.id,
    //         content: doc.data().content,
    //         done: doc.data().done
    //     })
    // });
    console.log(todos.value);

})

</script>

<template>
    <NavHeader />
    <div class="container mx-auto">
        Todo Page
        <section>
            {{ todos }}
        </section>
    </div>
    <NavFooter />
</template>

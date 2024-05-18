<script setup lang="ts">
import NavHeader from '@/components/navigation/NavHeader.vue'
import NavFooter from '@/components/navigation/NavFooter.vue'
import InputText from '../components/InputText.vue'
import InputCheckbox from '../components/InputCheckbox.vue'
import InputButton from '../components/InputButton.vue'
import { v4 as uuidv4 } from 'uuid'
import { ref, onMounted, computed } from 'vue'
import { db } from '../firebase'
import {
  doc,
  collection,
  getDocs,
  setDoc,
  query,
  orderBy,
  limit,
  where,
  updateDoc,
  deleteDoc,
  onSnapshot
} from 'firebase/firestore'
const todos = ref<any>([])
const content = ref('')
const done = ref(false)
onMounted(() => {
  const q = query(collection(db, 'todos'), orderBy('date', 'desc'))
  onSnapshot(q, (querySnapshot) => {
    const fbTodos: {
      id: string
      content: any
      done: boolean
    }[] = []
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        content: doc.data().content,
        done: doc.data().done
      }
      fbTodos.push(todo)
    })
    todos.value = fbTodos
  })

  // const querySnapshot = await getDocs(collection(db, "todos"));
  // querySnapshot.forEach((doc) => {
  //     fbTodos.push({
  //         id: doc.id,
  //         content: doc.data().content,
  //         done: doc.data().done
  //         date: Date.now()
  //     })
  // });
})
const handleAddTodo = () => {
  setDoc(doc(db, 'todos', uuidv4()), {
    content: content.value,
    done: done.value,
    date: Date.now()
  })
  content.value = ''
  done.value = false
}

const updateTodoDone = (e: any, todoId: any) => {
  const todoRef = doc(db, 'todos', todoId)
  const { checked } = e.target

  // Remove the 'capital' field from the document
  updateDoc(todoRef, {
    done: checked
  })
  //   todos.value = todos.value.map((todo: any) => {
  //     if (todo.id == todoId) {
  //       return { ...todo, done: checked }
  //     }
  //     return todo
  //   })
}
const handleTodoDelete = (todoId: any) => {
  deleteDoc(doc(db, 'todos', todoId))
  //   todos.value = todos.value.filter((todo: any) => todo.id != todoId)
}
</script>

<template>
  <NavHeader />
  <div class="container mx-auto">
    Todo Page

    <div class="flex gap-x-2 items-center">
      <InputText placeholder="Enter new todo name" labelName="Todo Name" v-model="content" />
      <InputCheckbox
        placeholder=""
        labelName=""
        v-model="done"
        @update:modelValue="($event: any) => (done = $event.target.checked)"
      />
      <InputButton @button-clicked="handleAddTodo" label="Add Todo" />
    </div>
    <section class="space-y-2">
      <div
        v-for="(todo, index) in todos"
        :key="index"
        class="flex justify-between border px-2 py-2 rounded-md"
      >
        <p class="">{{ todo.content }}</p>
        <div class="flex gap-x-2">
          <InputCheckbox
            placeholder=""
            labelName=""
            v-model="todo.done"
            @update:modelValue="($event: any) => updateTodoDone($event, todo.id)"
          />
          <InputButton @button-clicked="handleTodoDelete(todo.id)" label="Delete" />
        </div>
      </div>
    </section>
  </div>
  <NavFooter />
</template>

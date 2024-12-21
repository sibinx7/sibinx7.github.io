<template>
  <div class="home-page">
    <h1>Home Page, my Name is {{  fullName  }}</h1>

    <p>
      {{ company }}
    </p>


    <form action="" @submit="handleSubmit">
      <input type="text" v-model="employee.name">
      <button type="submit">Submit</button>
    </form>
  </div>
  <InfoCard/>
</template>
<script setup>
import useUserStore from "../store/user";
const userStore = useUserStore();
const employee = ref({
  name: ''
})
const company = ref('7chip')
const fullName = computed(() => {
  return userStore.getFullName
})

provide('name', 'John XXX')
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(employee.value);
}
</script>
<template>
  <div>
    <NuxtPage />
  </div>
  <div>
    {{  name  }}
  </div>
</template>
<script setup>
  import useUserStore from "./store/user";

  const userStore = useUserStore();

  const name = computed(() => {
    userStore.firstName
  })
</script>

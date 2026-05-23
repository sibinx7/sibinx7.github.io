<template>
	<div class="nuxt-markdown-content">
		<ContentRenderer v-if="page" :value="page">
			<template #not-found>
				<h1>Sorry! We don't find content</h1>
			</template>
		</ContentRenderer>
	</div>
</template>
<script setup lang="ts">
	const route  = useRoute();
	const { data: page } = await useAsyncData(route.path, () => {
		return queryCollection('content').path(route.path).first()
	})
  onMounted(() => {
    //
    console.log('VDOM-DOM mounted.');
  })

</script>
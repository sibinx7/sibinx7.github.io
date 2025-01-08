<template>
	<div class="nuxt-markdown-content">
		<ContentDoc>
			<template #not-found>
				<h1>Sorry! We don't find content</h1>
			</template>
		</ContentDoc>
	</div>
</template>
<script setup lang="ts">
  onMounted(() => {
    //
    console.log('VDOM-DOM mounted.');
  })

</script>
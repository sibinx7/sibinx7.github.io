<script setup>
	import Prism from "prismjs";
	import Breadcrumb from "~/common/breadcrumb/breadcrumb.vue";
	onMounted(() => {
		Prism.highlightAll();
	})
</script>

<template>
	<div class="main-interview-questions">
		<div class="main-interview-heading">
			<breadcrumb/>
		</div>
		<div class="main-interview-content">
			<NuxtPage/>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>
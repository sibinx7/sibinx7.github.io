<script setup>
	import Prism from "prismjs";
	onMounted(() => {
		Prism.highlightAll();
	})
</script>

<template>
	<div class="main-interview-questions">
		<div class="main-interview-heading">

		</div>
		<div class="main-interview-content">
			<NuxtPage/>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>
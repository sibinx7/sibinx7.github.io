<template>
	<div>
		<ul>
			<li v-for="link in listOfFiles" :key="link.id">
				<a :href="link.path">
					{{ link.name }}
				</a>
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
const listOfFiles = ref<Array<any>>([]);
onMounted(() => {
	const links: Array<any> = [];
	const files = import.meta.glob('./doc/*.vue', { eager: true });

	try{
		for(const file in files) {
			if (file.includes('_')) return; // Exclude files like '_files'

			const fileName = file.replace(/^\.\/?/i, '')   .replace(/\/index(\.vue)?$/, '').replace('.vue', '');
			const formattedName = fileName.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

			links.push({
				id: Date.now(),
				name: formattedName, // Convert 'basic-javascript' to 'Basic Javascript'
				path: `/interviews/javascript/${fileName.replaceAll(/\/index/g, '')}`,
			});
		}
		console.log('Links')
		console.log(links)
		listOfFiles.value = links;
	}catch(e){
		console.log('Error')
		console.log(e)
	}




})
</script>
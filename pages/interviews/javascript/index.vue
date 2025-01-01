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
import fs from "fs";
import path from "path";
import matter from 'gray-matter';
const listOfFiles = ref<Array<any>>([]);
onMounted(async () => {
	const links: Array<any> = [];
	const files = import.meta.glob('./doc/*.vue', { eager: true });
  const readMarkdownFiles: any = import.meta.glob('/content/interviews/javascript/doc/*.*', { eager: false });
	try{

		for(const file in files) {
      console.log('Looping files')

			if (file.includes('_')) return; // Exclude files like '_files'

			const fileName = file.replace(/^\.\/?/i, '')   .replace(/\/index(\.vue)?$/, '').replace('.vue', '');
			const formattedName = fileName.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());




      console.log('***')
      const selectedFiles: any = Object.keys(readMarkdownFiles).find((mFile) => {
        console.log(mFile);
        const existingVueFile = file ? ((file || '')?.split('/')?.pop().replace('.vue', '.md')) : null;
        return existingVueFile && mFile?.includes(existingVueFile);
      });

      const markdownFilePromise = await readMarkdownFiles[selectedFiles]();
      debugger
      if(markdownFilePromise){
        debugger
        const cleanedMarkdownFiles = markdownFilePromise?.replace(/\/\/# sourceMappingURL=.*?$/gm, '');
        const { data, content} =  matter(cleanedMarkdownFiles);
        console.log('This is my content')
        console.log(data)
      }

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
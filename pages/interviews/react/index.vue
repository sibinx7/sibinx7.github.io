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
const route = useRoute();


const processFiles = async () => {
  console.log('Start processing files before import.meta');
  const files = import.meta.glob('./doc/*.vue', { eager: true });
  const links: Array<any> = [];
  console.log('Process files');
  try{
    console.log('Inside process files');
    const contentsData  = await useAsyncData('markdown',  () => {
      console.log('Inside markdown useAsyncData')
      return queryContent('/').find()
    }, { server: true });
    console.log(contentsData);
    console.log('API calles');
    const dataContent: any = contentsData?.data?.value;
    console.log('Data content')
    console.log(dataContent);
    for(const file in files) {
      if (file.includes('_')) return; // Exclude files like '_files'
      const fileName = file.replace(/^\.\/?/i, '')   .replace(/\/index(\.vue)?$/, '').replace('.vue', '');
      const formattedName = fileName.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      const filePath = `/interviews/react/${fileName.replaceAll(/\/index/g, '')}`
      const selectedMD = dataContent?.find((item: any) => {
        return item._path === filePath
      });
      const selectedMDJSON = JSON.stringify(selectedMD);
      const selectedMDObject = JSON.parse(selectedMDJSON || '{}');

      links.push({
        id: Date.now(),
        name: selectedMDObject?.title || formattedName, // Convert 'basic-javascript' to 'Basic Javascript'
        title: selectedMDObject?.title,
        path: filePath,
      });
    }
    listOfFiles.value = links;
    // console.log(links);
  }catch(e){
    console.log('Error')
    console.log(e)
  }
}
try{
  processFiles();
}catch(e){

}

onMounted(async () => {
  await processFiles();
})
onServerPrefetch( async () => {
  await processFiles();
})


</script>
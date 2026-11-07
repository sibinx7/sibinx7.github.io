<script setup lang="ts">
  const RESUME_URL = "./documents/resume/SIBIN_XAVIER-2026-Q3.pdf";
  useHead({
    title: "Resume 2026 | Sibin Xavier",
    meta: {
      name: 'description',
      content: "View and Download Sibin Xavier's latest professional Resume"
    }
  })

</script>

<template>
  <main>
    <div class="w-full h-full resume-viewer">
      <iframe :src="RESUME_URL"
              title="Sibin Xavier resume"
              width="100%" height="100%" />
    </div>
    
  </main>
</template>

<style scoped lang="scss">
  .resume-viewer{
    min-height: 100vh;
    iframe{
      min-height: 100vh;
      height: 100%;
    }
  }
</style>
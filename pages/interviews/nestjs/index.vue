<template>
	<div>
		<topics :links="asyncFileList"/>
	</div>
</template>
<script setup lang="ts">
import Topics from "~/common/topics/topics.vue";
import type {TopicLink} from "~/types/common";

const route = useRoute();
const topicSlug = (route.path.split('/').filter(Boolean).pop() || 'nestjs').toString();
const docs = import.meta.glob('./doc/*.vue', { eager: true });

const asyncFileList = computed<TopicLink[]>(() => {
  return Object.keys(docs)
    .filter((file) => !file.includes('_'))
    .map((file) => {
      const fileName = file.replace(/^\.\/?/i, '').replace(/\/index(\.vue)?$/, '').replace('.vue', '');
      const slug = fileName.replaceAll(/\/index/g, '');
      const formattedName = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
      const filePath = `/interviews/${topicSlug}/${slug}`;

      return {
        id: `${topicSlug}-${slug}`,
        name: formattedName,
        title: formattedName,
        path: filePath,
      };
    });
});
</script>
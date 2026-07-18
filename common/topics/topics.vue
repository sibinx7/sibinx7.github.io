<script setup lang="ts">
import type {TopicLink} from "~/types/common";

const props = defineProps(['links']);
const listOfFiles = computed(() => (props.links || []) as TopicLink[]);
</script>

<template>
	<div class="list-group-topic">
		<ul class="list-group">
			<li v-for="link in listOfFiles" :key="link.id" class="list-group-item">
				<a :href="link?.path">
					{{ link?.name }}
				</a>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.list-group-topic{
	.list-group{
		.list-group-item{
			border: none;
			background-color: transparent;
			a{
				color: #aaa;
				text-decoration: none;
				&:hover{
					text-decoration: underline;
				}
			}
		}
	}
}
</style>
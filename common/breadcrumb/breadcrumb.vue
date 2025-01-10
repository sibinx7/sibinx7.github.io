<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const breadcrumbRoutes = computed(() => {
	let fullPath = '';
	const routes = route.fullPath.substring(1).split('/');
	return routes.map((route: string) => {
		if(route) {
			fullPath = `${fullPath}/${route}`;
			return {
				...(router.resolve(fullPath)),
				name: route.charAt(0).toUpperCase() + route.slice(1),
			};
		}
	}).filter(Boolean);
})
</script>

<template>
	<div class="common-breadcrumb">
		<ul class="breadcrumb">
			<li v-for="(breadcrumb, index) in breadcrumbRoutes" :key="`${String(breadcrumb?.name)}`" class="breadcrumb-item">
				<nuxt-link :to="`${breadcrumb?.path}`" class="breadcrumb-link">
					{{ (breadcrumb?.name)  }}
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.common-breadcrumb{
	.breadcrumb{
		list-style: none;
		padding: 0;
		.breadcrumb-item{
			+.breadcrumb-item{
				&:before{
					color: #666;
				}
			}
			.breadcrumb-link{
				text-decoration: none;
				color: #777;
				&:hover{
					color: #00cc97;
				}
			}
		}
	}
}
</style>
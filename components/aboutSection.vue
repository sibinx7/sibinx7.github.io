<script setup lang="ts">
import info from "../data/info.json";
const aboutInfo = ref(info);

const callAboutApi = async () => {
	const response = await fetch('/api/about');
	const result = await response.json();
	if(result){
		aboutInfo.value = result;
	}
}

const infoProperties = computed(() => {
	let properties: Array<any> = [];
	if(aboutInfo.value?.properties){
		properties = aboutInfo.value.properties
	}
	return properties;
})


onMounted(() => {
	// callAboutApi();/
})
</script>

<template>
	<div class="about-section section">
		<div class="section-title about-section-title title-right-line">
			<div class="title-box">
				<h1 class="title">
					About me.
				</h1>
			</div>
			<div class="line"></div>
		</div>

		<div v-html="aboutInfo.information">
		</div>
		<div>
			<div class="profile-properties">
				<div class="property-list">
					<div v-for="property in infoProperties" class="property-list-item">
						<div class="property-list-item-inner">
							<div class="p-item-content"> {{ property?.key}}</div>
							<div class="p-item-content"> {{ property?.value}}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>
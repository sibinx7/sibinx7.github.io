<script setup lang="ts">
import experienceInfo from "../data/experience.json";
const experiences = experienceInfo?.experiences;
const props = defineProps(['title'])
</script>

<template>
	<div class="education-component-wrapper">
		<div v-if="title"  class="common-section">
			<div class="section-title common-section-title title-right-line">
				<div class="title-box">
					<h1 class="title">
						{{ title }}
					</h1>
				</div>
				<div class="line"></div>
			</div>
		</div>

		<div class="education-component">
			<div v-for="experience in experiences" :key="experience.id" class="education-list-wrapper">
				<div class="education-item">
					<div class="edu-left-indicator">
						<div class="edu-left-indicator-pointer"></div>
						<div class="edu-left-indicator-track"></div>
					</div>
					<div class="education-item-inner">
						<div class="edu-title-wrapper"><h3 class="title">{{ experience?.position }}</h3></div>
						<div class="edu-institute-year">
							<span>{{  experience?.company }} </span>
							<span>&nbsp;#&nbsp;</span>
							<span>
                <span>{{  experience?.start_date }}</span>
								<span>&nbsp;-&nbsp;</span>
                <span>{{  experience?.end_date || 'Current' }}</span>
              </span>
						</div>
						<div v-if="experience?.description" class="edu-description">
							<div v-html="experience?.description"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">

</style>
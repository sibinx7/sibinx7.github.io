<script setup lang="ts">
import educationInfo from "../data/education.json";
const educations = educationInfo?.educations;
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
      <div v-for="education in educations" :key="education.id" class="education-list-wrapper">
        <div class="education-item">
	        <div class="edu-left-indicator">
		        <div class="edu-left-indicator-pointer"></div>
		        <div class="edu-left-indicator-track"></div>
	        </div>
          <div class="education-item-inner">
            <div class="edu-title-wrapper"><h3 class="title">{{ education?.course }}</h3></div>
            <div class="edu-institute-year">
              <span>{{  education.institute }} </span>
              <span>/</span>
              <span>
                <span>{{  education?.course_start }}</span>
	              <span>-&nbsp;-&nbsp;</span>
                <span>{{  education?.course_complete }}</span>
              </span>
            </div>
            <div v-if="education?.description" class="edu-description">
              <div v-html="education?.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
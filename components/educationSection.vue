<script setup lang="ts">
import educationInfo from "../data/education.json";
const educations = educationInfo?.educations;
</script>

<template>
  <div class="education-component-wrapper">
    <div class="education-component">
      <div v-for="education in educations" :key="education.id" class="edication-list-wrapper">
        <div class="education-item">
          <div class="education-item-inner">
            <div class="edu-title-wrapper"><h3 class="title">{{ education?.course }}</h3></div>
            <div class="edu-institute-year">
              <span>{{  education.institute }} </span>
              <span>/</span>
              <span>
                <span>{{  education?.course_start }}</span>
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
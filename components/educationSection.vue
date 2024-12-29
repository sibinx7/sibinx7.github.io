<script setup lang="ts">
import educationInfo from "../data/education.json";
const educations = educationInfo?.educations;
</script>

<template>
  <div class="education-component-wrapper">
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
.education-list-wrapper{
	.education-item{
		margin-bottom: 15px;
		padding: 0 30px 30px 60px;
		color: #909090;
		position: relative;
		.edu-left-indicator{
			position: absolute;
			left: 0;
			height: 100%;
			.edu-left-indicator-pointer{
				background-color: #000;
				padding: 12px;
				border: 2px solid #fff;
				border-radius: 100%;
				position: relative;
				box-sizing: border-box;
				&:after{
					content: '';
					position: absolute;
					width: 12px;
					height: 12px;
					border-radius: 100%;
					background-color: red;
					top: 6px;
					left: 6px;
				}
			}
			.edu-left-indicator-track{
				position: absolute;
				width: 2px;
				height: calc(100% - 28px);
				top: 28px;
				bottom: 0;
				background: #fff;
				left: calc(50% - 1px);
			}
		}
		&:hover{
			.edu-title-wrapper{
				.title{
					color: var(--main_primary_color);
				}
			}
		}
	}
	.edu-title-wrapper{
		.title{
			color: #fff;
			font-size: 22px;
			transition: all 0.3s;
		}
	}
}
</style>
<script setup lang="ts">
import codingSkills from "../data/coding-skill.json";
const skills = codingSkills?.skills || []
</script>

<template>
	<div class="common-section-wrapper coding-skills-wrapper">
		<div  class="common-section">
			<div class="section-title common-section-title title-right-line">
				<div class="title-box">
					<h1 class="title">
						Coding Skills
					</h1>
				</div>
				<div class="line"></div>
			</div>
		</div>
		<div class="common-content-section coding-skill-content-section">
			<div class="coding-skills-list">
				<div v-for="skill in skills " :key="skill.id"  class="coding-skill-item">
          <div class="progress-item skill-progress-item">
            <div class="skill-icon-content">
              <div class="skill-icon" >
                <span :class="skill.icon" :style="{color: skill.color}"></span>
              </div>
              <div class="skill-content">
                <div class="skill-name">
                  {{ skill.name }}
                </div>
                <div class="skill-percentage">
                  <div class="progress">
                    <div class="progress-bar" :style="{
                      width: `${skill.level}%`,
                      '--bs-progress-bar-bg': skill.color || '#ff0',
                    }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.coding-skill-item{
  +.coding-skill-item{
    margin-top: 30px;
  }
}
.skill-progress-item{
  .skill-icon-content{
    display: flex;
    .skill-icon {
      flex-shrink: 1;
      padding: 5px 10px 5px 0;
      span{
        font-size: 64px;
      }
    }
    .skill-content{
      width: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 5px 10px;
      justify-content: space-between;
      .skill-name{
        color: #eee;
        font-size: 18px;
      }
    }
    .progress{
      border-radius: 0;
      .progress-bar{

      }
    }
  }
}

</style>
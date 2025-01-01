<script setup lang="ts">
import technologies from "../../data/topics.json";
import type {TechnologyStack} from "~/types/common";
const technologyStacks = ref<Array<TechnologyStack>>([]);

onMounted(() => {
  technologyStacks.value = <Array<TechnologyStack>>technologies?.topics || [];
})

</script>

<template>
	<div class="interview-section">
    <div v-for="stack in technologyStacks" :key="stack.id" class="interview-section-list">
      <a :href="`/interviews/${stack.link}/`" class="interview-section-link" :style="{'--stack-icon-color': stack.color}">
        <div class="interview-section-content">
          <div class="language-icon" >
            <span :class="stack.icon" ></span>
          </div>
          <div>
            <span>{{ stack.name }}</span>
          </div>
        </div>
      </a>
    </div>

	</div>
</template>

<style scoped lang="scss">
.interview-section {
  display: grid;
  column-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  .interview-section-list {
    .interview-section-link{
      border: 1px solid #333;
      padding: 30px;
      margin-bottom: 20px;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: #fff;
      transition: all 0.3s linear .0s;
      .language-icon{
        font-size: 36px;
        color: var(--stack-icon-color)
      }
      &:hover{
        background-color: var(--stack-icon-color);
        transition: all 0.3s linear .0s;
        .language-icon{
          color: #fff;
        }
      }
    }
  }
}
</style>
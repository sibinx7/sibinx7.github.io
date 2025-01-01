<script setup lang="ts">
const technologyStacks = reactive([
  {
    id: 1,
    name: 'JavaScript',
    icon: "devicon-javascript-plain",
    type: 'language',
    link: 'javascript',
    color: '#00cc97'
  },
  {
    id: 2,
    name: 'TypeScript',
    icon: "devicon-typescript-plain",
    type: 'language',
    link: '',
    color: '#f8313e'
  },
  {
    id: 3,
    name: 'React',
    type: 'framework',
    icon: 'devicon-react-original',
    link:'',
    color: '#8224f3'
  },
  {
    id: 4,
    name: 'Vue JS',
    type: 'framework',
    icon: 'devicon-vuejs-plain',
    link: '',
    color: '#15e3a8'
  },
  {
    id: 5,
    name: 'Angular',
    type: 'framework',
    icon: 'devicon-angular-plain',
    link: '',
    color: '#856ded'
  },
  {
    id: 6,
    name: 'HTML',
    type: 'language',
    icon: 'devicon-html5-plain',
    link: '',
    color: '#65e84a'
  },
  {
    id: 7,
    name: 'CSS',
    type: 'language',
    icon: 'devicon-css3-plain',
    link: '',
    color: '#f97979'
  },
  {
    id: 8,
    name: 'Bootstrap',
    type: 'framework',
    icon: 'devicon-bootstrap-plain',
    link: '',
    color: '#06af4b'
  },
  {
    id: 9,
    name: 'SASS/SCSS',
    type: 'language',
    icon: 'devicon-sass-original',
    link: '',
    color: '#f8313e'
  },
  {
    id: 10,
    name: 'Database',
    type: 'database',
    icon: 'devicon-azuresqldatabase-plain',
    link: '',
    color: '#65e84a'
  },
  {
    id: 11,
    name: 'Node.js',
    type: 'sdk',
    icon: 'devicon-nodejs-plain',
    link: '',
    color: '#ff759c'
  },
  {
    id: 12,
    name: 'Express JS',
    type: 'framework',
    icon: 'devicon-express-original',
    link: '',
    color: '#01c9da'
  },
  // {
  //   id: 12,
  //   name: 'Git',
  //   type: 'versioning',
  //   icon: 'devicon-git-plain',
  //   link: ''
  // }
])

</script>

<template>
	<div class="interview-section">
    <div v-for="stack in technologyStacks" :key="stack.id" class="interview-section-list">
      <a :href="`interviews/${stack.link}/`" class="interview-section-link" :style="{'--stack-icon-color': stack.color}">
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
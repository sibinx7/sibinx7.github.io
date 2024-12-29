<template>
  <div class="home-content section-wrapper">
    <div class="home-profile-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class="main-heading">
              <h1 class="text-white">Sibin Xavier</h1>
            </div>
            <div class="profession-rolls">
              <h4 class="text-white">{{  profession  }}</h4>
            </div>
            <div class="resume-description">
              <p class="mb-0 text-white">
                I am an experienced frontend developer with 11+ years in web development, specializing in React JS, Angular, and Vue JS. With over 6 years of expertise in React (TypeScript, MUI, Redux, SSR, Next.js, Nuxt JS) and 4+ years in Angular and Vue, I excel in creating intuitive user interfaces and optimizing performance
              </p>
            </div>
            <div class="resume-contact">
              <ul class="d-flex contact-button">
                <li><a href="" class="btn btn-rounded btn-primary btn-view-work">
                 <span> View Work</span>
                </a></li>
                <li><a href="" class="btn btn-rounded btn-success btn">
                  Contact Me 
                </a></li>
              </ul>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <img :src="profileImage" alt="Sibin Xavier" class="home-profile-image">
          </div>
        </div>
      </div>
    </div>
    
  </div>
	<div class="section-wrapper">
		<about-section/>
	</div>
  <div class="section-wrapper">
    <education-section title="Education."/>
  </div>
  <div class="section-wrapper">
    <experience-section title="Experience."/>
  </div>
</template>
<script setup>
import useProfession from '~/composable/profession';
import profile from "~/assets/profile/sibin.jpg";
  
  const { profession } = useProfession();
  const profileImage = ref(profile)
</script>
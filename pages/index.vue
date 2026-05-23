<template>
  <div class="home-content section-wrapper">
    <div class="home-profile-section">
      <div class="container-fluid">
        <div class="row profile-content-image">
          <div class="col-12 col-lg-12">
						<div class="main-professional-section mb-4">
							<div class="main-heading">
								<h1 class="text-white">Sibin Xavier</h1>
							</div>
							<div class="profession-rolls">
								<h4 class="role-title">{{  profession  }}</h4>
							</div>
						</div>
            <div class="resume-description mb-5">
             <p class="mb-3 text-white">
                Experienced Frontend Developer with 12+ years of expertise in building scalable web and enterprise
                applications across healthcare, pharma, AI, automobile, HR, tourism, and business domains. Graduated in
                Electronics and Communication Engineering in 2012. Strong experience in JavaScript, HTML, CSS, and
                AngularJS during the early phase of career, followed by 5+ years of expertise in React including Redux,
                React Router, Redux Toolkit, chart libraries, and modern frontend architecture. Also possesses 3+ years
                of experience in both Angular and Vue.js, including Vue 3 and modern component-based development.
              </p>
              <p class="mb-3 text-white">
                Proficient in PHP, WordPress, Node.js, Python, and NestJS with strong problem-solving skills and a
                passion for continuous learning. Worked on AI-enabled document learning platforms where users can upload
                company documents, resumes, and other files for intelligent AI-based search and conversational
                interactions. Contributed to large-scale Dealer Management Systems (DMS) for US-based automobile
                industry clients, focusing on enterprise application development, performance optimization, and frontend
                architecture.
              </p>
              <p class="mb-3 text-white">
                Worked on healthcare and pharma-related applications including pharmacy management systems, hospital and
                dental appointment booking platforms, and online consultation systems for international clients from the
                US and Australia. Experienced in developing responsive dashboards, enterprise admin panels, real-time
                booking systems, and user-centric web applications using modern frontend technologies and agile
                development practices.
              </p>
              <p class="mb-0 text-white">
                Experienced in leading frontend teams, mentoring fresh graduates, collaborating with stakeholders,
                gathering requirements, and delivering high-quality enterprise solutions using modern development
                practices and agile methodologies.
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
  <div class="section-wrapper">
    <coding-skill/>
  </div>
</template>
<script setup>
import useProfession from '~/composable/profession';
import profile from "~/assets/profile/sibin.jpg";
  
  const { profession } = useProfession();
  const profileImage = ref(profile)
</script>
<template>
  <div class="fix-bg">
	  <div class="container">
	    <div class="main">
			  <div class="sidebar-wrapper">
				  <Sidebar/>
			  </div>
			  <div class="content-wrapper">
				  <NuxtPage />
			  </div>
		  </div>
	  </div>
  </div>
</template>
<script setup>
import Sidebar from "~/common/sidebar/sidebar.vue";
</script>

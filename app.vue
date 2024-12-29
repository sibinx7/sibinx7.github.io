<template>
  <div class="fix-bg">
	  <div class="container">
	    <div class="main">
			  <div class="sidebar-wrapper">
				  <div class="sidebar-wrapper-scrollable">
					  <Sidebar/>
				  </div>
			  </div>
			  <div class="content-wrapper">
				  <div class="content-wrapper-scrollable" data-bs-spy="scroll">
					  <NuxtPage />
				  </div>
			  </div>
		  </div>
	  </div>
  </div>
</template>
<script setup>
import Sidebar from "~/common/sidebar/sidebar.vue";
</script>

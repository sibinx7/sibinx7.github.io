<template>
  <div class="fix-bg">
	  <div class="container">
	    <div class="main">
		    <div class="sidebar-toggle open-action" :class="!isSidebarOpen && 'd-none'">
			    <button @click="handleClick()" class="btn btn-link">
				    <i class="bi bi-list"></i>
			    </button>
		    </div>
			  <div class="sidebar-wrapper" :class="isSidebarOpen && 'close'">
				  <div class="sidebar-toggle close-action">
					  <button @click="handleClick()" class="btn btn-link">
						  <i class="bi bi-x-lg"></i>
					  </button>
				  </div>
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
import { ref } from "vue";
const isSidebarOpen = ref(false);

const handleClick = () => {
	isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

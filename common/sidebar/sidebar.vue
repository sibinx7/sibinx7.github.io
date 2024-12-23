<script setup lang="ts">

</script>

<template>
	<div class="main-sidebar-wrapper">
		<div class="main-sidebar">
			<div class="main-sidebar-header">
				<div class="main-profile-section">
					<div class="profile-image"></div>
					<div class="profile-info-section">
						<h3 class="developer-name text-white text-center">
              Sibin Xavier 
            </h3>
            <h5 class="text-center">Full Stack Developer</h5>
					</div>
					<div class="profile-social-buttons">
						<ul class="social-icons">
							<li>
								<a href="">
									<span class="bi bi-linkedin"></span>
								</a>
							</li>
							<li>
								<a href="">
									<span class="bi bi-twitter-x"></span>
								</a>
							</li>
							<li><a href=""><span class="bi bi-whatsapp"></span></a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="main-sidebar-menus">
				<div class="list-group">
					<div class="list-group-item">
						<a href="">
							<span class="bi bi-house-door"></span>
							<span>Home</span>
						</a>
					</div>
					<div class="list-group-item"><a href="">
						<span class="bi bi-person"></span>
						<span>About</span>
					</a></div>
					<div class="list-group-item"><a href="">
						<span class="bi bi-person-vcard"></span>
						<span>Resume</span>
					</a></div>
					<div class="list-group-item"><a href="">
						<span class="bi bi-building"></span>
						<span>Services</span>
					</a></div>
					<div class="list-group-item"><a href="">
						<span class="bi bi-journals"></span>
						<span>Blog</span>
					</a></div>
					<div class="list-group-item"><a href="">
						<span class="bi bi-envelope"></span>
						<span>Contact</span>
					</a></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.main-sidebar{
	.list-group{
		background-color: transparent;
		border: none;
		.list-group-item{
			border: none;
			border-radius: 0;
			border-bottom: 1px solid #555;
			background-color: transparent;
			&:first-of-type{
				border-top: 1px solid #555;
			}
			a{
				color: white;
				text-decoration: none;
				span + span {
					margin-left: 5px;
				}
				&:hover{
					text-decoration: none;
				}
			}
		}
	}
}
.social-icons{
	display: flex;
	justify-content: center;
	padding: 0;
	li {
		list-style: none;
		+ li {
			margin-left: 15px;
		}
		a{
			color: white;
			text-decoration: none;
		}
	}
}
</style>
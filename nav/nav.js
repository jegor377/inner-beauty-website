function initNavigation(navigation_menu_btn_id = "hamburger-menu-btn", nav_links_id = "nav-links") {
	const hamburger_menu_btn = document.getElementById(navigation_menu_btn_id)
	const nav_links = document.getElementById(nav_links_id)

	const navigation_anim_time = 300;
	const small_screen_size = 930;

	for(let i = 0; i < nav_links.children.length; i++) {
		nav_links.children[i].addEventListener("click", (event) => {
			if(window.innerWidth <= small_screen_size) {
				hide_navigation()
			}
		})
	}

	hamburger_menu_btn.addEventListener("click", (event) => {
		show_navigation()
	})

	function show_navigation() {
		hamburger_menu_btn.classList.toggle("hamburger-menu-btn-toggled")
		nav_links.classList.add("nav-links-on-shown")
		nav_links.classList.remove("nav-links-on-hidden")
		nav_links.animate([
			{
				transform: 'translateY(100px)',
				opacity: 0,
			},
			{
				transform: 'translateY(0px)',
				opacity: 1,
			}
		], {
			easing: 'ease-out',
			duration: navigation_anim_time,
		})
		animate_showing_navigation_links();
	}

	function animate_showing_navigation_links() {
		const animation_delay = 100;

		for(let i = 0; i < nav_links.children.length; i++) {
			let nav_link = nav_links.children[i];
			nav_link.style.opacity = 0;
			setTimeout(() => {
				let anim = nav_link.animate([
					{
						transform: 'translateX(-100px)',
						opacity: 0,
					},
					{
						transform: 'translateX(0px)',
						opacity: 1,
					}
				], {
					easing: 'ease-out',
					duration: navigation_anim_time,
				})
				anim.onfinish = () => {
					nav_link.style.opacity = 1;
				}
			}, (i + 1) * animation_delay)
		}
	}

	function hide_navigation() {
		hamburger_menu_btn.classList.toggle("hamburger-menu-btn-toggled")
		let anim = nav_links.animate([
			{
				transform: 'translateY(0px)',
				opacity: 1,
			},
			{
				transform: 'translateY(100px)',
				opacity: 0,
			}
		], {
			easing: 'ease-out',
			duration: navigation_anim_time,
		})
		anim.onfinish = () => {
			nav_links.classList.remove("nav-links-on-shown")
			nav_links.classList.add("nav-links-on-hidden")
		}
	}
}
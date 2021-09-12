function handle_floating_contact_btn() {
	const invitation_text_container = document.querySelector('#invitation-text')
	const floating_contact_btn = document.querySelector('#floating-contact-btn')
	const contact_btn = invitation_text_container.querySelector('a')

	floating_contact_btn.addEventListener('click', (e) => {
		const value_before_animation = floating_contact_btn.style.transform
		floating_contact_btn.animate([
		{
			transform: value_before_animation
		},
		{
			transform: 'scale(0.9)'
		},
		{
			transform: value_before_animation
		}], {
			easing: 'ease-out',
			duration: 200
		})
	})

	window.addEventListener('scroll', (e) => {
		const rect = invitation_text_container.getBoundingClientRect()
		const delta = rect.y + rect.height

		const contact_btn_rect = contact_btn.getBoundingClientRect()

		const should_btn_be_shown = delta <= 0

		if(should_btn_be_shown) {
			floating_contact_btn.classList.add('floating-contact-btn-shown')
			floating_contact_btn.classList.remove('floating-contact-btn-hidden')
		} else {
			floating_contact_btn.classList.remove('floating-contact-btn-shown')
			floating_contact_btn.classList.add('floating-contact-btn-hidden')
		}
	})
}

window.addEventListener('load', () => {
	AOS.init()
	initNavigation()
})

handle_floating_contact_btn()
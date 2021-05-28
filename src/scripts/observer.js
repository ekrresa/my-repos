// Observes the profile picture avatar
// to show the temp avatar when profile avatar is out of view
// hide the temp avatar when profile avatar is in view
export function observeProfileAvatar() {
	const profileAvatar = document.querySelector('#profile-avatar');
	const tempInfo = document.querySelector('#temp-info');

	const observerInstance = new IntersectionObserver((entries, observer) => {
		entries.map(entry => {
			if (entry.intersectionRatio > 0) {
				tempInfo.classList.remove('temp__open');
			} else {
				tempInfo.classList.add('temp__open');
			}
		});
	});

	observerInstance.observe(profileAvatar);
}

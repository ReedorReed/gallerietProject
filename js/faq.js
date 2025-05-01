document.addEventListener('DOMContentLoaded', function () {
	const toggleBtns = document.querySelectorAll('.toggleBtn');
	const faqSection = document.querySelector('.faq-section');

	toggleBtns.forEach((btn) => {
		btn.addEventListener('click', function () {
			const foldBox = this.nextElementSibling;

			// Find the icons within this button
			const plusIcon = this.querySelector('.plus-icon');
			const minusIcon = this.querySelector('.minus-icon');

			// Check if it's a foldBox
			if (foldBox && foldBox.classList.contains('foldBox')) {

				if (window.getComputedStyle(foldBox).display === 'none') {
					foldBox.style.display = 'block';
					// Give a small delay for the display change to take effect
					setTimeout(() => {
						// Continue with height transition
						toggleFoldBox();
					}, 10);
				} else {
					toggleFoldBox();
				}

				function toggleFoldBox() {
					// Toggle the height
					if (foldBox.style.height === '0px' || foldBox.clientHeight === 0) {
						// Opening the foldBox
						foldBox.style.height = foldBox.scrollHeight + 'px';

						// Show minus icon, hide plus icon
						if (plusIcon) plusIcon.style.display = 'none';
						if (minusIcon) minusIcon.style.display = 'inline';

						// Update the faq-section height
						setTimeout(() => {
							updateSectionHeight();
						}, 200);
					} else {
						// Closing the foldBox
						foldBox.style.height = '0px';
						foldBox.style.display = 'none';

						// Show plus icon, hide minus icon
						if (plusIcon) plusIcon.style.display = 'inline';
						if (minusIcon) minusIcon.style.display = 'none';

						// Update section height after animation
						setTimeout(() => {
							updateSectionHeight();
						}, 200);
					}
				}
			}
		});
	});

	function updateSectionHeight() {
		let totalHeight = 0;
		const elements = faqSection.children;

		for (let el of elements) {
			if (el.classList.contains('foldBox')) {
				totalHeight += el.clientHeight;
			} else {
				totalHeight += el.offsetHeight;
			}
			// Add margins
			const style = window.getComputedStyle(el);
			totalHeight += parseInt(style.marginTop) + parseInt(style.marginBottom);
		}

		// Add padding
		totalHeight += 120;

		faqSection.style.height = `${totalHeight}px`;
	}

	toggleBtns.forEach((btn) => {
		const plusIcon = btn.querySelector('.plus-icon');
		const minusIcon = btn.querySelector('.minus-icon');

		// Show plus icon, hide minus icon
		if (plusIcon) plusIcon.style.display = 'inline';
		if (minusIcon) minusIcon.style.display = 'none';
	});

	updateSectionHeight();
});

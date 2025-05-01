document.addEventListener('DOMContentLoaded', function () {
	// Modal functionality for shops
	const shops = document.querySelectorAll('.founder-card');
	const closeButtons = document.querySelectorAll('.close');

	shops.forEach((shop) => {
		shop.addEventListener('click', function () {
			const shopId = this.id;
			const modal = document.getElementById('modal-' + shopId);

			if (modal) {
				modal.style.display = 'block';
			}
		});
	});

	closeButtons.forEach((button) => {
		button.addEventListener('click', function () {
			const modal = this.closest('.modal');
			if (modal) {
				modal.style.display = 'none';
			}
		});
	});

	window.addEventListener('click', function (event) {
		if (event.target.classList.contains('modal')) {
			event.target.style.display = 'none';
		}
	});
});

//Underline for menu items

//Get current page filename
const currentPage = window.location.pathname.split('/').pop();

//Selecting the menu items
const desktopMenuItem = document.querySelectorAll('.desktop-menu-item');

//Looping through each menu item and adding a div
desktopMenuItem.forEach((menuItem) => {
	//Get href
	const menuItemsHref = menuItem.getAttribute('href');

	//Chech if the menu item links to the current page
	if (menuItemsHref === currentPage) {
		const underLineDiv = document.createElement('div');

		//Style the line
		underLineDiv.style.height = '8px';
		underLineDiv.style.width = '32px';
		underLineDiv.style.backgroundColor = '#7be3c4';
		//underLineDiv.style.marginTop = '5px';

		underLineDiv.classList.add('active-desktop-menu-line');

		//append the divs to the menu items
		menuItem.parentNode.appendChild(underLineDiv);
	}
});



// Variables
const openSideBarBtn = document.querySelector('.sidebar-toggle');
const closeSideBarBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// Événements
openSideBarBtn.addEventListener('click', () => {
	// if (sidebar.classList.contains('show-sidebar')){
	// 	sidebar.classList.remove('show-sidebar');
	// } else {
	// 	sidebar.classList.add('show-sidebar');
	// }
	sidebar.classList.toggle('show-sidebar');
});
closeSideBarBtn.addEventListener('click', () => {
	sidebar.classList.remove('show-sidebar');
});
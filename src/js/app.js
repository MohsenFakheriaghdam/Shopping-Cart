const modal = document.querySelector("#modal");

function cartModal() {
	modal.classList.remove("hidden");
	modal.classList.add("flex");
}

function closeModal() {
	modal.classList.remove("flex");
	modal.classList.add("hidden");
}

document.querySelector("#cartModal").addEventListener("click", cartModal);
document.querySelector("#closeModal").addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
	if (event.target === modal) {
		closeModal();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		closeModal();
	}
});

const menu = document.getElementById("mobile-menu");
const sidebar = document.getElementById("sidebar");

const SIDEBAR_DURATION = 300;

function openMenu() {
	menu.classList.remove("hidden");

	requestAnimationFrame(() => {
		sidebar.classList.remove("-translate-x-full");
	});
}

function closeMenu() {
	sidebar.classList.add("-translate-x-full");

	setTimeout(() => {
		menu.classList.add("hidden");
	}, SIDEBAR_DURATION);
}

menu.addEventListener("click", (e) => {
	if (e.target === menu) {
		closeMenu();
	}
});

const mediaQuery = window.matchMedia("(min-width: 768px)");

mediaQuery.addEventListener("change", (e) => {
	if (e.matches) {
		closeMenu();
	}
});

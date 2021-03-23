const hamburgerMenu = document.querySelector(".nav-toggle");

hamburgerMenu.addEventListener("click", hamburgerEffect);

function hamburgerEffect() {
	hamburgerMenu.classList.toggle("change");

	let aside = document.querySelector(".dashboard-nav");
	let span = document.querySelector("span.brand");
	aside.classList.toggle("change");
	span.classList.toggle("change");

	let linkSpans = document.querySelectorAll(".link-span");
	for (let i = 0; i < linkSpans.length; i++) {
		linkSpans[i].classList.toggle("change");
	}

	let main = document.querySelector(".dashboard-main");
	main.classList.toggle("change");
}

// const links = document.querySelectorAll(".navbar-link");

// links.forEach((link) => {
// 	link.addEventListener("click", () => {
// 		hamburgerMenu.classList.toggle("change");

// 		let aside = document.querySelector(".navbar-menu");
// 		aside.classList.toggle("change");
// 	});
// });

// Toggle Menu
const hamburgerMenu = document.querySelector(".nav-toggle");

hamburgerMenu.addEventListener("click", hamburgerEffect);

function hamburgerEffect() {
  hamburgerMenu.classList.toggle("change");

  let aside = document.querySelector(".dashboard-nav");
  let span = document.querySelector(".brand");
  aside.classList.toggle("change");
  span.classList.toggle("change");

  let linkSpans = document.querySelectorAll(".nav-href-span");
  for (let i = 0; i < linkSpans.length; i++) {
    linkSpans[i].classList.toggle("change");
  }

  let navIcons = document.querySelectorAll(".nav-icon");
  for (let i = 0; i < navIcons.length; i++) {
    navIcons[i].classList.toggle("change");
  }

  let main = document.querySelector(".dashboard-main");
  main.classList.toggle("change");
}

const darkBtn = document.querySelector(".dark-icon");
const body = document.body;
const darkMeta = document.querySelector(".dark-meta");
darkBtn.addEventListener("click", (e) => {
  if (darkBtn.classList.contains("fa-moon-o")) {
    darkBtn.classList.remove("fa-moon-o");
    darkBtn.classList.add("fa-sun-o");

    body.classList.add("dark");

    localStorage.setItem("theme", "dark");

    if (darkMeta.getAttribute("content") === "royalblue") {
      darkMeta.removeAttribute("content");
      darkMeta.setAttribute("content", "rgb(36, 42, 58)")
    }
  } else if (darkBtn.classList.contains("fa-sun-o")) {
    darkBtn.classList.remove("fa-sun-o");
    darkBtn.classList.add("fa-moon-o");

    body.classList.remove("dark");

    localStorage.setItem("theme", "light");

    if (darkMeta.getAttribute("content") === "rgb(36, 42, 58)") {
      darkMeta.removeAttribute("content");
      darkMeta.setAttribute("content", "royalblue")
  }
}
});

window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "light") {
    darkBtn.classList.remove("fa-sun-o");
    darkBtn.classList.add("fa-moon-o");

    body.classList.remove("dark");
  } else if (localStorage.getItem("theme") === "dark") {
    darkBtn.classList.remove("fa-moon-o");
    darkBtn.classList.add("fa-sun-o");

    body.classList.add("dark");
  }
});

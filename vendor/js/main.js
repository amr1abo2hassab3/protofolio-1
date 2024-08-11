// -------------------------------------
let menuIcon = document.getElementById("menu-icon");
let navBar = document.querySelector(".navbar");
// this fufnction open and close navbar and on click list add icons X
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("navbarActive");
});

// -------------------------------------

//  هذه الداله تحذف اولا class active ثم تضيف للعنصر الي ضغت عليه
let clickActive = document.querySelectorAll(".navbar a");

function AddActive(e) {
  // إزالة الصنف "active" من جميع الروابط
  for (let i = 0; i < clickActive.length; i++) {
    clickActive[i].classList.remove("active");
  }

  // إضافة الصنف "active" للعنصر الذي تم النقر عليه
  e.target.classList.add("active");
  menuIcon.classList.toggle("bx-x");
  navBar.classList.toggle("navbarActive");
}

// ربط الدالة بحدث النقر على كل رابط
for (let i = 0; i < clickActive.length; i++) {
  clickActive[i].addEventListener("click", AddActive);
}

// ----------- scroll reveal --------------//
ScrollReveal({
  //   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content ,.heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img ,.services-container , .contact form , .project-card",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1 ,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p ,.about-content", { origin: "right" });

// ------------- typed js  -------------  //

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Developer", "Learn Backend Now ", "Frontend Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  backDelay: 1000,
  loop: true,
});

///////////////////////////////////////////////////

btnColor = document.querySelector(".color-switcher-icon");
boxColor = document.querySelector(".change-color");
iconColor = document.querySelectorAll(".color-switcher-icon i");

// show button
btnColor?.addEventListener("click", () => {
  boxColor?.classList.toggle("showBtn");
  if (iconColor.length > 1) {
    iconColor[1].classList.toggle("bx-chevron-right");
  }
});

// change color in page

let colorPage = document.querySelectorAll(".change-color div");

// this function change color to  < blue  -  default >
colorPage[0].addEventListener("click", () => {
  document.documentElement.style.setProperty("--main-color", "#0ef");
  document.documentElement.style.setProperty("--text-color", "#fff");
  document.documentElement.style.setProperty("--second-bg-color", "#323946");
  document.documentElement.style.setProperty("--bg-color", "#1f242d");
});
// this function change color to  < green >
colorPage[1].addEventListener("click", () => {
  document.documentElement.style.setProperty("--main-color", "#00ff51");
  document.documentElement.style.setProperty("--text-color", "#fff");
  document.documentElement.style.setProperty("--second-bg-color", "#001005");
  document.documentElement.style.setProperty("--bg-color", "#080808");
});
// this function change color to  < red >
colorPage[2].addEventListener("click", () => {
  document.documentElement.style.setProperty("--main-color", "#f60b0b");
  document.documentElement.style.setProperty("--text-color", "#fff");
  document.documentElement.style.setProperty("--second-bg-color", "#1b0000");
  document.documentElement.style.setProperty("--bg-color", "#080808");
});
// this function change color to  < yellow >
colorPage[3].addEventListener("click", () => {
  document.documentElement.style.setProperty("--main-color", "#ea580c");
  document.documentElement.style.setProperty("--text-color", "#fff");
  document.documentElement.style.setProperty("--second-bg-color", "#101010");
  document.documentElement.style.setProperty("--bg-color", "#080808");
});

// go to the top page

let btnTop = document.getElementById("btn-top");

window.onscroll = function () {
  if (scrollY >= 993) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

btnTop.onclick = () => {
  scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  for (let i = 0; i < clickActive.length; i++) {
    clickActive[i].classList.remove("active");
  }
  clickActive[0].classList.add("active");
};

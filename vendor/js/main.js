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

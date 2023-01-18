const toggle_btn = document.querySelector("#hamburger_icon");
const nav_links = document.querySelectorAll(".links");
const sponsors = document.querySelector(".sponsors ");

toggle_btn.addEventListener("click", () => {
  toggle_btn.classList.toggle("open");
  nav_links.forEach((link) => link.classList.toggle("open"));
});

const img_files = [
  `<div>
    <img src="Assets/Facebook Logo.png">
  </div>`,
  `<div>
    <img src="Assets/Dribbble Logo.png">
  </div>`,
  `<div>
    <img src="Assets/Youtube Logo.png">
  </div>`,
  `<div>
    <img src="Assets/Pinterest Logo.png">
  </div>`,
  `<div>
    <img src="Assets/Twitter Logo.png">
    </div>`,
  `<div>
    <img src="Assets/Reddit Logo.png">
  </div>`,
  `<div>
    <img src="Assets/Google Logo.png">
  </div>`,
  `<div>
    <img src="Assets/Slack Logo.png">
  </div>`,
];
window.addEventListener("resize", changeImages);
function changeImages() {
  if (window.innerWidth > 480 && window.innerWidth < 769) {
    const images = img_files.slice(0, 5);
    sponsors.innerHTML = images.join("");
  } else if (window.innerWidth < 480) {
    const images = img_files.slice(0, 3);
    sponsors.innerHTML = images.join("");
  } else {
    sponsors.innerHTML = img_files.join("");
  }
}
changeImages();

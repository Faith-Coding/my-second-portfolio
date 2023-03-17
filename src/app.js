/*================toggle icon navba=======*/

/*let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.add("fa-x");
  navBar.classList.add('active');
}*/
let menuIcon = document.querySelector("#menu-icon");
 
menuIcon.onclick = function() {
  let navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active")
}
/*================srcol selections active link=======*/

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*================sticky navbar=======*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

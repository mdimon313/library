
window.addEventListener("scroll", ()=> {
      const header = document.getElementById("header");
      const scrollPos = window.pageYOffset;
      
      if (300 <= scrollPos) {
            header.classList.add("fixed");
      }

      if (0 >= scrollPos) {
            header.classList.remove("fixed");
      }
});

const open = document.getElementById("bars");

const navigation = document.getElementById("nav");
const close = document.querySelector(".hide");

open.addEventListener("click", ()=> {
	navigation.classList.add("show");
});

close.addEventListener("click", ()=> {
	navigation.classList.remove("show");
});

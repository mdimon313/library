window.addEventListener("scroll", ()=> {
      const header = document.getElementById("header");
      const scrollPos = window.pageYOffset;
      
      if (40 <= scrollPos) {
            header.classList.add("fixed");
      }

      if (0 >= scrollPos) {
            header.classList.remove("fixed");
      }
});
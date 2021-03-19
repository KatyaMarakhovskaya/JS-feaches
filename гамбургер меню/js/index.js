

function menuToggler(){
      document.querySelector(".menu__box").classList.toggle("none");
      document.querySelector(".menu__box").classList.toggle("open");

      document.querySelector(".hamburger-menu-btn_open").classList.toggle("open");
      document.querySelector(".hamburger-menu-btn_close").classList.toggle("open");
      document.querySelector(".hamburger-menu-btn_open").classList.toggle("none");
      document.querySelector(".hamburger-menu-btn_close").classList.toggle("none");
};

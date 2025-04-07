$(function () {
    if (window.innerWidth < 1200) {
      $('[data-aos-delay]').removeAttr('data-aos-delay');
    }
    AOS.init({ duration: 1500 });
  });
  
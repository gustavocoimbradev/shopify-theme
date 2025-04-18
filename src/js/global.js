$(function () {

    // AOS
    AOS.init({ duration: 1500 });

    // Links
    $('a').filter(function () {
      const href = $(this).attr('href');
      return href === '#' || href === '';
    }).attr('href', 'javascript:void(0)');

    // Header
    function checkScroll() {
      const header = document.querySelector('.js-header');
      if (!header) return;
      if (window.scrollY > 100) {
        header.classList.add('is-active');
      } else {
        header.classList.remove('is-active');
      }
    }
  
    window.addEventListener('load', checkScroll);
    window.addEventListener('resize', checkScroll);
    window.addEventListener('scroll', checkScroll);

});
   
$(function () {

  // Links
  $('a').filter(function () {
    const href = $(this).attr('href');
    return href === '#' || href === '';
  }).attr('href', 'javascript:void(0)');

  // Header
  function checkScroll() {
    const header = document.querySelector('.js-header');
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('is-active');
    } else {
      header.classList.remove('is-active');
    }
  }

  $(".js-toggle-search").on("click", function () {
    $(".js-search").toggleClass("is-active");
    $("html,body").toggleClass("no-scroll-mobile");
  })

  setInterval(function () {
    if ($(".js-header").hasClass("is-active")) {
      if ($(".js-search").hasClass("is-active")) {
        $(".js-avoid-search").addClass("is-avoiding");
      } else {
        $(".js-avoid-search").removeClass("is-avoiding");
      }
    } else {
      $(".js-avoid-search").removeClass("is-avoiding");
    }
  }, 100);

  window.addEventListener('load', checkScroll);
  window.addEventListener('resize', checkScroll);
  window.addEventListener('scroll', checkScroll);

});

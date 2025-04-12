$(function () {
    AOS.init({ duration: 1500 });
    $('a').filter(function () {
      const href = $(this).attr('href');
      return href === '#' || href === '';
    }).attr('href', 'javascript:void(0)');
});
   
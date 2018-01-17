$(document).ready(function() {
  $("a").on("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      let hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });

  $(".glyphicon-small-nav").on("click", function(e) {
    const headerId = `#${$(this).attr('id').match(/\w+/g)[0]}-header`;
    const headerPos = $(headerId).position();
    console.log(headerPos);
    $('html, body').animate({
      scrollTop: headerPos.top - 67
    }, 800);
  });
});

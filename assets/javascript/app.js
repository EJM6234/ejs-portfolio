$(document).ready(function() {
  $("a").on("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      let hash = this.hash;

      console.log($(hash).offset().top)
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
});

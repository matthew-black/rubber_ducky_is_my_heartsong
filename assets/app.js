$( document ).ready(function() {
  console.log("ugh.")
  $("#duck-toggle").on("click", function() {
    console.log("what?")
    $(".ducky").toggleClass("hide-this");
  });

});
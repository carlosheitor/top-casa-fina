$("#navbarNav").on("show.bs.collapse", function () {
  $("#topCasaFina-banner").css("transform", "translate(-50%, 10%)");
});

$("#navbarNav").on("hidden.bs.collapse", function () {
  $("#topCasaFina-banner").css("transform", "translate(-50%, -50%)");
});

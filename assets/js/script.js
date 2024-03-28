function functionMostrar() {
    var x = document.getElementById("alert-ocultar");
  
    x.style.display = "block";
  }

  $(document).ready(function () {
    $("#name").on("click", function () {
      $("#name").css("color", "red");
    });
  });
  
  $(document).ready(function () {
    $("#subject").on("click", function () {
      $("#subject").css("color", "green");
    });
  });
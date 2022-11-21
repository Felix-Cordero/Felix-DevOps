$("body").on("contextmenu", function(e) {
  return false;
});







$("body").on("contextmenu", function(e) {
  return false;
});


var el_up = document.getElementById("GFG_UP");
            var el_down = document.getElementById("GFG_DOWN");
            el_up.innerHTML =
                "How to disable right click on image by button click using JavaScript";

            function gfg_Run() {
                document.addEventListener("contextmenu",

                function(e) {
                    if (e.target.nodeName === "IMG") {
                        e.preventDefault();
                    }
                }, false);

                el_down.innerHTML = "Right click is disabled on the image";
            }


            $(document).ready(function() {
              $("body").on("contextmenu", function(e) {
                  return false;
                });
            });
const { findLastKey } = require("lodash");

document.getElementById("https://devops.felix-z.com/").disabled = true;

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });
  
  document.addEventListener('keydown', function() {
    if (event.keyCode == 123) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 65) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    } else if (event.ctrlKey && event.keyCode == 73) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    } else if (event.ctrlKey && event.keyCode == 80) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    } else if (event.ctrlKey && event.keyCode == 86) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
    } else if (event.ctrlKey && event.keyCode == 88) {
      alert("This function has been disabled to prevent you from stealing my code!");
      return false;
  } false );
  if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
      alert("This function has been disabled to prevent you from stealing my code!");
      e.preventDefault();
    }, false);
  } else {
    document.attachEvent('oncontextmenu', function() {
      alert("This function has been disabled to prevent you from stealing my code!");
      window.event.returnValue = false;
    });
  }


  // This is the DIV you'd like to disable
// Use the CSS selector to pin dow nthe exact DIV
var div = document.querySelector('div');

// Choose either 1, 2 or 3
// (1) Sets the disabled attribute
div.setAttribute('disabled', true);

// (2) Makes the DIV half transparent
// And changes the cursor to a "not allowed" symbol
div.style.opacity = '0.5';
div.style.cursor = 'not-allowed';

// (3) Delete the DIV
div.remove();


$(document).ready(function() {
  var ctrlDown = false,
      ctrlKey = 17,
      cmdKey = 91,
      vKey = 86,
      cKey = 67;

  $(document).keydown(function(e) {
      if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = true;
  }).keyup(function(e) {
      if (e.keyCode == ctrlKey || e.keyCode == cmdKey) ctrlDown = false;
  });

  $(".ncp-felix").keydown(function(e) {
      if (ctrlDown && (e.keyCode == vKey || e.keyCode == cKey)) return false;
  });
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
/**
 * Function to handle bootstrap card element reordering when screen width gets too small
 */
function orderCardContents() {
  var mobile_width = 768;
  var device_width = window.screen.width;
  if(device_width <= mobile_width) {
    var elements = document.getElementsByClassName("row-col-changeable");
    console.log(elements.length);
    var i;
    for(i = 0; i < elements.length; i++) {
      var element = elements[i];
      console.log(typeof(element));

      if (width_percent <= min_percent) {
        element.classList.remove("flex-row");
        element.classList.add("flex-column");
      } else {
        element.classList.add("flex-row");
        element.classList.remove("flex-column");
      }
    }
  } else {
    // get window dims / device dims percentage
    var width_percent = window.outerWidth / device_width;
    var min_percent = 0.7254758418740849;
    var elements = document.getElementsByClassName("row-col-changeable");
    console.log(elements.length);
    var i;
    for(i = 0; i < elements.length; i++) {
      var element = elements[i];
      console.log(typeof(element));

      if (width_percent <= min_percent) {
        element.classList.remove("flex-row");
        element.classList.add("flex-column");
      } else {
        element.classList.add("flex-row");
        element.classList.remove("flex-column");
      }
    }
  }
}
window.addEventListener("resize", orderCardContents);
$(document).ready(orderCardContents);
/**
 * Function to handle bootstrap card element reordering when screen width gets too small
 */
function orderCardContents() {
  var mobile_width = 40;
  // hacky way of using CSS media queries to find device width
  var el = document.getElementsByClassName("name");
  console.log(el.length);
  var device_width = parseInt(window.getComputedStyle(el[0], null).getPropertyValue('font-size'));
  console.log(device_width);
  
  if(device_width <= mobile_width) {
    var elements = document.getElementsByClassName("row-col-changeable");
    var i;
    for(i = 0; i < elements.length; i++) {
      var element = elements[i];
      element.classList.remove("flex-row");
      element.classList.add("flex-column");
    }
  } else {
    // get window dims / device dims percentage
    var width_percent = window.outerWidth / device_width;
    var min_percent = 0.7254758418740849;
    var elements = document.getElementsByClassName("row-col-changeable");
    var i;
    for(i = 0; i < elements.length; i++) {
      var element = elements[i];
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
/**
 * Function to handle bootstrap card element reordering when screen width gets too small
 * // dont need this anymore becuase I made the CSS suck less
function orderCardContents() {
  let mobile_width = 40;
  // hacky way of using CSS media queries to find device width
  let el = document.getElementsByClassName("name");
  let device_width = parseInt(window.getComputedStyle(el[0], null).getPropertyValue('font-size'));
  
  if(device_width <= mobile_width) {
    let elements = document.getElementsByClassName("row-col-changeable");
    let i;
    for(i = 0; i < elements.length; i++) {
      let element = elements[i];
      element.classList.remove("flex-row");
      element.classList.add("flex-column");
    }
  } else {
    // get window dims / device dims percentage
    let width_percent = window.outerWidth / device_width;
    let min_percent = 0.7254758418740849;
    let elements = document.getElementsByClassName("row-col-changeable");
    let i;
    for(i = 0; i < elements.length; i++) {
      let element = elements[i];
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
 */

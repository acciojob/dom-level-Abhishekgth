//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
  const targetElement = document.getElementById('level');
  let domLevel = 0;

  if (targetElement) {
    let parent = targetElement.parentElement;

    while (parent) {
      domLevel++;
      parent = parent.parentElement;
    }

    
    domLevel++;

    alert(`The level of the element is: ${domLevel}`);
  } else {
    alert('Element with id "level" not found.');
  }
});

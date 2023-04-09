// const dodger = document.getElementById('dodger');
// dodger.style.background = '#FF69B4';
// dodger.style.bottom = '0px';
// dodger.style.left = '0px';

const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (event.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
import {backTrackingAlgorithm} from './backTrackingAlgorithm'

var ANIMATION_SPEED_SECONDS = 0.2;
const size = 8;
const SAFE = '#2ECC71';
const CROWN_COLOR = "PINK "

function visualization() {

  const arrayTiles = document.getElementsByClassName("q-array-tile");
  const crown = document.getElementsByClassName("fa-crown");
  const resultsDiv = document.getElementById("Iterations");
  const NQueensAnimations = [];

  backTrackingAlgorithm(size, NQueensAnimations);
  let count = 0;
  for (let i = 0; i < NQueensAnimations.length; i++) {
    count++;
    const [row, col, isQueenSafe] = NQueensAnimations[i];
    const idx = size *  row +  col;

    // alert Message Box
    let alert = document.createElement("div");
    alert.classList.add("alert");
    alert.classList.add("animate__animated");
    alert.classList.add("animate__slideInDown");

    setTimeout(() => {
      if (isQueenSafe) {
        console.log(isQueenSafe + " " +  idx);
        arrayTiles[idx].classList.add("safe-queen");
        crown[idx].style.color = CROWN_COLOR;
        crown[idx].classList.add("Queen");
        alert.innerHTML = `Trying Queen at row  ${row} and col at ${col}`;
        alert.classList.add("alert-success");
      }
      else {
        console.log(isQueenSafe + " " +  idx + " " + arrayTiles[idx].style.backgroundColor);
        arrayTiles[idx].classList.remove("safe-queen");
        if (arrayTiles[idx].style.backgroundColor === 'rgb(255, 255, 255)') {
          console.log("hello");
          crown[idx].style.color = "white";       
        }
        else {
          crown[idx].style.color = "black";
        }
        // crown[idx].style.color="white";
        crown[idx].classList.remove("Queen");
        alert.innerHTML = `row ${row} and col ${col} didn't work out . Backtracking`;
        alert.classList.add("alert-danger");
      }
      resultsDiv.prepend(alert);
      arrayTiles[idx].style.transition = "200ms all";
    }, ANIMATION_SPEED_SECONDS * 1000 * i);
  }

  const trueValues = document.getElementsByClassName("safe-queen");
  setTimeout(() => {
    for(let i = 0  ; i < trueValues.length ; i++)
    {
    trueValues[i].style.backgroundColor = SAFE;
    trueValues[i].style.transition= "300ms all";
    if(i === trueValues.length-1)
    {
      let alert = document.createElement("div");
      alert.classList.add("alert");
      alert.classList.add("animate__animated");
      alert.classList.add("animate__slideInUp");
      alert.innerHTML = `All Queens have been placed on valid positon`;
      alert.classList.add("alert-primary");
      resultsDiv.prepend(alert);
    }
  }
  
  
  }, (count+1 ) * ANIMATION_SPEED_SECONDS * 1000); 





}

  export default visualization;
const Cell_COLOR_WHITE = '#fff';
const Cell_COLOR_Black = '#000000';

export function board  (SIZE)  {
let padding  = 19;
let fontSize = 19;
document.getElementById("Board").innerHTML = "";
document.getElementById("Iterations").innerHTML = "";
const container = document.getElementById("Board");
// The setProperty() method sets a new or modifies an existing CSS property in a CSS declaration block.
container.style.setProperty("--Qgrid-rows", SIZE);
container.style.setProperty("--Qgrid-cols", SIZE);

 for(let j = 0 ; j < 64 ; j++)
 {
  let cell = document.createElement("div");
  let item = document.createElement("i");
  cell.appendChild(item).className = "fas fa-crown";
  container.appendChild(cell).className = "Qgrid-item q-array-tile"; 
 }
 const arrayTiles = document.getElementsByClassName("q-array-tile");
 const crownsI =   document.getElementsByClassName("fa-crown");
 for(let i = 0 ; i < arrayTiles.length ; i++)
 {
  arrayTiles[i].style.padding = `${padding}px`;
 

  
  crownsI[i].style.fontSize= `${fontSize}px`;
  
}
var c = 0 ;
for(var a = 0 ; a< 8 ; a++)
{
  for(var b =  0 ; b < 8 ; b++)

  // c++;
  // arrayTiles[c].style.backgroundColor = Cell_COLOR_Black ;
  {
    if( (a+b) % 2 === 0 ) 
    {

      arrayTiles[c].style.backgroundColor = Cell_COLOR_Black;
        crownsI[c].style.color =Cell_COLOR_Black;
        c++;
    }
    else{

      arrayTiles[c].style.backgroundColor = Cell_COLOR_WHITE;
      crownsI[c].style.color = Cell_COLOR_WHITE;
      c++;
    }
  }
 }

}




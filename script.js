//Set up variables
const container = document.getElementById("container");
const gridSquare = document.createElement("div");

//set gridSquareAttributes
gridSquare.setAttribute("style", "height: 30px; width: 30px; border: orange solid 1px; margin: 0px");

for(let i = 0; i < (16*16); i++){
    container.innerHTML += `<div class="gridSquare"></div>`;
}
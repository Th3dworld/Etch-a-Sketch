//Set up variables
const container = document.getElementById("container");
const changeGridBtn = document.getElementById("sizer");
const divLine =  document.createElement("div");

//Add class to divLine
divLine.setAttribute("id", "divline")

//This function draws the grids
function addGrids(gridSize){
    //reset parent nodes
    container.innerHTML = "";
    divLine.innerHTML = "";

    for(let i = 0; i < dimensions; i++){
        divLine.innerHTML += `<div class="gridSquare"></div>`;
    }
    for(let i = 0; i < dimensions; i++){
        container.appendChild(divLine.cloneNode(true));
    }

    const gridSquares = document.querySelectorAll('.gridSquare');


    gridSquares.forEach(grid => {
        grid.addEventListener("mouseover", () => {
            grid.setAttribute("style", "background-color:#30F2F2;")
        });
    });
}


let dimensions = 16;//Variable used to set dimensions initialized at 16
 
changeGridBtn.addEventListener("click", ()=>{
    dimensions = parseInt(prompt("How many squares do you want per side?"))
    console.log(dimensions);
    //
    while(dimensions > 100 || dimensions <= 0 || !dimensions){
        dimensions = parseInt(prompt("ERROR!\nYou can only have between 1-100 squares per side.\nPlease input a correct value:"));
    }
    addGrids(dimensions);
});

//Change button color on click
changeGridBtn.addEventListener("mousedown", () =>{
    changeGridBtn.setAttribute("style", "background-color:white;")
});

changeGridBtn.addEventListener("mouseup", () =>{
    changeGridBtn.setAttribute("style", "background-color:#AF9AB2 ;")
});

addGrids(dimensions);



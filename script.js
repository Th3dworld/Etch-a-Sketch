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
        grid.addEventListener('mouseleave', () => {
            setTimeout(() => {
                grid.setAttribute("style", `background-color:white;`)
            },
            250);
    
        });
    });
}


let dimensions = 16;//Variable used to set dimensions initialized at 16
 
changeGridBtn.addEventListener("click", ()=>{
    dimensions = parseInt(prompt("How many squared do you want per side?"))
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



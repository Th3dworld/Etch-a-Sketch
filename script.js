//Set up variables
const container = document.getElementById("container");

for(let i = 0; i < (16*16); i++){
    container.innerHTML += `<div class="gridSquare"></div>`;
}

const gridSquares = document.querySelectorAll('.gridSquare');

gridSquares.forEach(grid => {
    grid.addEventListener("mouseover", () => {
        grid.setAttribute("style", "background-color:yellow;")
    });
    grid.addEventListener('mouseleave', () => {
        setTimeout(() => {
            grid.setAttribute("style", `background-color:white;`)
        },
        250);

    });
});
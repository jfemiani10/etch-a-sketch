const square = document.createElement('div');
const container = document.getElementById('container')
const clear = document.getElementById('clear')

clear.addEventListener("click", function() {
    container.innerHTML = ""
    createGrid()
})


function createGrid() {
    let dimension = Number(prompt("How many squares would you like in the canvas?\n(max = 100)"));

    if (!Number.isInteger(dimension) || dimension > 100 || dimension < 1) {
        alert("Please enter an integer between 1 and 100");
        createGrid();
        return;
    }

    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${dimension}, 1fr)`;

    for (let i = 0; i < dimension * dimension; i++) {
        const square = document.createElement('div');
        square.classList.add('pixel');
        container.appendChild(square);

        let drawing = false;

        document.body.addEventListener("mousedown", () => drawing = true);
        document.body.addEventListener("mouseup", () => drawing = false);

        square.addEventListener("mouseenter", () => {
            if (drawing) square.classList.add("written");
        })
    }


}

createGrid()

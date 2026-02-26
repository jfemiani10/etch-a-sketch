const square = document.createElement('div');
const container = document.getElementById('container')
const clear = document.getElementById('clear')

clear.addEventListener("click", function() {
    container.innerHTML = ""
    createGrid()
})


function createGrid() {
    dimension = Number(prompt("How many squares??"))
    if (dimension >= 100) {dimension = 100}

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
            if (drawing) square.classList.add("written")
        })
    }


}

createGrid()

document.addEventListener('DOMContentLoaded', function() {
    let gridSize = prompt("Enter a number between 1 and 50:");
    gridSize = parseInt(gridSize);
    
    if (isNaN(gridSize) || gridSize < 1 || gridSize > 50) {
        alert("Invalid input. Please refresh and enter a number between 1 and 50.");
        return;
    }

    const grid = document.getElementById('grid');
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 50px)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 50px)`;

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }

    let logo = document.createElement('img');
    logo.src = 'angrybird.png';  // Change to the path of your logo
    logo.classList.add('logo');
    grid.children[0].appendChild(logo);

    let logoPosition = { row: 0, col: 0 };

    window.move = function(direction) {
        grid.children[logoPosition.row * gridSize + logoPosition.col].removeChild(logo);

        if (direction === 'up') {
            if (logoPosition.row > 0) {
                logoPosition.row--;
            } else {
                alert("Cannot move up further!");
            }
        } else if (direction === 'down') {
            if (logoPosition.row < gridSize - 1) {
                logoPosition.row++;
            } else {
                alert("Cannot move down further!");
            }
        } else if (direction === 'left') {
            if (logoPosition.col > 0) {
                logoPosition.col--;
            } else {
                alert("Cannot move left further!");
            }
        } else if (direction === 'right') {
            if (logoPosition.col < gridSize - 1) {
                logoPosition.col++;
            } else {
                alert("Cannot move right further!");
            }
        }

        grid.children[logoPosition.row * gridSize + logoPosition.col].appendChild(logo);
    }
});

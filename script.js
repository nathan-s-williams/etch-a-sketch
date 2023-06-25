let dimension = '16x16'
document.querySelector('#dimension-text').textContent = dimension;

const updateDimensionText = () => {
    document.querySelector('#dimension-text').textContent = dimension;
}

const createGrid = (cellNumber = 16) => {
    let grid = document.querySelector('#grid-area');
    
    for (let i = 0; i < cellNumber; i++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.textContent = 'test'; //Test
        grid.appendChild(cell);
    }
}

createGrid();
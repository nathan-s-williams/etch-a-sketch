let dimension = '16x16'
document.querySelector('#dimension-text').textContent = dimension;

const updateDimensionText = () => {
    document.querySelector('#dimension-text').textContent = dimension;
}

const createGrid = (cellNumber = 16) => {
    let grid = document.querySelector('#grid-area');
    for (let i = 0; i < cellNumber; i++) {
        let cellColumn = document.createElement('div');
        cellColumn.classList.add('grid-cell-column');
        grid.appendChild(cellColumn);
        for (let i = 0; i < cellNumber; i++) {
            let cellRow = document.createElement('div');
            cellRow.classList.add('grid-cell-row');
            cellRow.textContent = 'test'; //Test
            grid.lastChild.appendChild(cellRow);
        }
    }
}

createGrid();
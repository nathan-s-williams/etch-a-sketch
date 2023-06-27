/**************************************************
 * SCRIPT FUNCTIONS
 **************************************************/

const dimensionButton = document.querySelector('#create-grid-button');

dimensionButton.addEventListener('click', () => {
    let dimension = 0;
    do {
        try {
            dimension = parseInt(prompt('Choose a dimension from 1-100 for the grid.'));
        } catch (error) {
            console.error(error);
            dimension = -1;
        }
    } while (dimension < 0 || dimension > 100);

    updateDimensionText(dimension)
    createGrid(dimension);
})

const updateDimensionText = (dimension) => {
    document.querySelector('#dimension-text').textContent = `${dimension}x${dimension}`;
}

const createGrid = (dimension) => {
    let grid = document.querySelector('#grid-area');

    while (grid.hasChildNodes()) {
        let child = grid.lastChild;
        grid.removeChild(child);
    }

    for (let i = 0; i < dimension; i++) {
        let cellColumn = document.createElement('div');
        cellColumn.classList.add('grid-cell-column');
        grid.appendChild(cellColumn);
        for (let i = 0; i < dimension; i++) {
            let cellRow = document.createElement('div');
            cellRow.classList.add('grid-cell-row');
            cellRow.textContent = '';
            grid.lastChild.appendChild(cellRow);
        }
    }

    let gridCell = document.querySelectorAll('.grid-cell-row');
    for (let i = 0; i < gridCell.length; i++) {
        gridCell[i].addEventListener('mouseover', (event) => {
        gridCell[i].classList.add('grid-cell-row-shaded');
        })
    }
}


/**************************************************
 * SCRIPTS TO RUN ON FIRST RENDER
 **************************************************/
updateDimensionText(16);
createGrid(16);
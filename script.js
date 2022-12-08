
const grid = document.querySelector("div");

function makeGrid(n) {
    for (i = 0; i < n; i++){
        for(j = 0; j < n; j++){
            grid.appendChild(makeBlock(n));
        }
    }
}

function makeBlock(n) {
    const block = document.createElement('div');
    block.classList.add('block');
    let dims = 500/n;
    block.setAttribute('style', `width: ${dims}px`, `height: ${dims}px`);
    return block;
}

function clearGrid(){
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    return;
}


const slider = document.querySelector('.slider');
const display = document.querySelector('.display');

//slider.addEventListener('input', () => {
//    clearGrid();
//    makeGrid(slider.value);
//    display.textContent = `${slider.value} x ${slider.value}`;
//})

slider.onchange = () => {
    clearGrid();
    makeGrid(slider.value);
}

slider.oninput = () => {
    display.textContent = `${slider.value} x ${slider.value}`;
}
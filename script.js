
const grid = document.querySelector("div");
const slider = document.querySelector('.slider');
const display = document.querySelector('.display');
const reset = document.querySelector('.reset');

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
    block.onmouseover = () => {
        block.classList.add('hovered');
    }
    return block;
}

function clearGrid(){
    while (grid.firstChild){
        grid.removeChild(grid.firstChild);
    }
    return;
}

reset.addEventListener('click', () => {
    clearGrid();
    makeGrid(slider.value);
});

slider.onchange = () => {
    clearGrid();
    makeGrid(slider.value);
}

slider.oninput = () => {
    display.textContent = `${slider.value} x ${slider.value}`;
}

makeGrid(16);
display.textContent = "16 x 16";
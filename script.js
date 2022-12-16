
const grid = document.querySelector(".grid");
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
        fillBlock(block);
    }
    return block;
}

function fillBlock(block){
    if (block.classList.length === 1){
        block.classList.add('fill1');
        return;
    }
    switch(block.classList.length) {
        case 2:
            block.classList.add('fill2');
            break;
        case 3:
            block.classList.add('fill3');
            break;
        case 4:
            block.classList.add('fill4');
            break;
        case 5:
            block.classList.add('fill5');
            break;
        case 6:
            block.classList.add('fill6');
            break;
        case 7:
            block.classList.add('fill7');
            break;
        case 8:
            block.classList.add('fill8');
            break;
        case 9:
            block.classList.add('fill9');
            break;
    }
    return;
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
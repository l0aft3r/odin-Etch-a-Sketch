const container = document.querySelector('#container');
const btn = document.querySelector('#btn');

btn.addEventListener('click', (event) => {
    const input = window.prompt("Number of squares per side for the new grid(has to be less than 100):");
    if (isNaN(input) || parseInt(input)>100){
        window.alert("Invalid prompt or number given is more than 100")
    } else {
        container.innerHTML = '';
        createGrid(parseInt(input))
    }
});

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function onHover(dv){
    dv.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
    dv.setAttribute('opacity', parseFloat(dv.getAttribute('opacity'))+1);
    console.log(dv.getAttribute('opacity'))
    dv.style.opacity = dv.getAttribute('opacity')*0.1;
};

function createGrid(gridSize){
    for (let i = 0; i<gridSize; i++){
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        for (let j = 0; j<gridSize; j++){
            const box = document.createElement('div');
            box.setAttribute('class', 'box');
            box.setAttribute('opacity', 0);
            box.addEventListener("mouseover", (event) => {
                onHover(event.target);
            })
            row.appendChild(box);
        }
    }
};

createGrid(16);
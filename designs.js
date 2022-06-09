const table = document.querySelector('#pixelCanvas')
const color = document.getElementById('colorPicker')

// A code to change the height and width of the grid by the user input:
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth')
const sizePicker = document.getElementById('sizePicker')
let height = gridHeight.value;
let width = gridWidth.value;


// A function to build a grid depend on the user number input:
function makeGrid(height, width){
    sizePicker.addEventListener('submit', event => {
        event.preventDefault();
        table.innerHTML = "";
        makeGrid(gridHeight.value, gridWidth.value);
      });
    for ( let r = 0; r < height; ++r){
        let tr = document.createElement('tr');
            table.appendChild(tr);
        for(let c = 0; c<width; ++c){
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    };
}; makeGrid(height, width)

// A code to color the cell by the user selected color
table.addEventListener('click', function(evt){
    if (evt.target.tagName === "TD") {
        let td = evt.target;
        td.style.backgroundColor = color.value;
    }
    
});
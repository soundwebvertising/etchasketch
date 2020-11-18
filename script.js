let theDiv;
let userInput;
let size;


//create the divs for the grid, then call a mouseover event to darken grid-items
function createGrid(size) {
  container.innerHTML = "";
  if (size == null) {
    size = 16;
  }

  container.style.setProperty('--size', size); 
 
  for (var columns = 0; columns < size * size; columns++) { 
    theDiv = document.createElement('div');
    theDiv.classList.add('grid-item');
    container.appendChild(theDiv);
    gridItems = document.querySelectorAll('.grid-item')
  }
  mouseOver();
}   

// Add a button to the top of the screen which will clear the current grid 
// and send the user a popup asking for how many squares per side to make the new grid. 
// Once entered the new grid should be generated in the same total space as 
// before (e.g. 960px wide)
function userPrompt() {
  container.innerHTML = "";
  userInput = prompt("Please enter the grid size");
  // for the user input to a maximum of 100.
  if (userInput > 99) {
    alert("Please enter a number less that 99!!");
    userInput = "";
    userFunction();
  }
  createGrid(userInput);
} 

//mouse over function to turn grid items different color
function mouseOver() {
  gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover', () => {
      gridItem.classList.add('img-darken')
    })
  });
}
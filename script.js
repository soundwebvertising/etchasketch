let gridNum = 0;
let theDiv;
let myNodes;
let mybkground;
let gridItems;

function myFunction() {
  let x = 16;
  for (var rows = 0; rows < x; rows++) {  
    for (var columns = 0; columns < x; columns++) {
      gridNum++;
      let theDiv = document.getElementById("container");
      let myDiv = document.createElement("DIV");
      myDiv.className = "grid-item";
      theDiv.appendChild(myDiv);
      gridItems = document.querySelectorAll('.grid-item')
    }
  }
  gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover', () => {
      console.log(gridItem);
      gridItem.classList.add('img-darken')
    })
  });
}    



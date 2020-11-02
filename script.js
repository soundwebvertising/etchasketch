function myFunction() {
  let x = 16;
  for (var rows = 0; rows < x; rows++) {  
    for (var columns = 0; columns < x; columns++) {
      let theDiv = document.getElementById("container");
      let myDiv = document.createElement("DIV");
      myDiv.className = "grid-item";
      theDiv.appendChild(myDiv);
    }
  }
  console.log("running my function");
}         // Append <div grid item> to <div> with id="container"



//myFunction();

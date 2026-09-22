
grid = document.getElementById("container")

cellsize = 64

gridheight = 4
gridwidth = 4
grid.style = "--columns: " + gridwidth.toString()
console.log(grid.style)
grid.style.width = (gridwidth * cellsize).toString() + "px"
grid.style.height = (gridheight * cellsize).toString() + "px"


cells = []

function changecolor(cell){
    if(cell.style.background != "red"){
        cell.style.background = "red"
    } else {
        cell.style.background = "white"
    }
}

function cellclicked(cell){
    let index = cells.indexOf(cell)
    
    changecolor(cell)
    if(index % 4 == 0){
        
    } else {
        changecolor(cells[index+1])
    }
    changecolor(cells[index-1])
    
    changecolor(cells[index-gridwidth])
    changecolor(cells[index-gridwidth+1])
    changecolor(cells[index-gridwidth-1])

    changecolor(cells[index+gridwidth])
    changecolor(cells[index+gridwidth+1])
    changecolor(cells[index+gridwidth-1])
}

for(let i = 0; i < gridheight * gridwidth; i++){
    var gridcell = document.createElement("div");
    gridcell.style.height =  cellsize.toString + "px";
    gridcell.style.width = cellsize.toString() + "px";
    gridcell.style.margin = "0px"
    gridcell.style.borderStyle = "Solid";
    gridcell.style.borderWidth = "1px"
    grid.appendChild(gridcell)
    cells.push(gridcell)
}
for(let i of cells){
    i.addEventListener("click", () => cellclicked(i))
}
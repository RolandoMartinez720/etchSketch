let gridContainer=document.getElementById('grid-container');

let element;
    for(let i=0;i<400;i++){
    element=document.createElement('div');//create div and appendchild it 400 times
    element.classList.add('grid-item');
    gridContainer.appendChild(element);
}


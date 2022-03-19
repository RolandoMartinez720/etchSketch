//create a number of elements automatically
//give them a class name and also an event listener

let container=document.getElementById('container');
let textBox=document.getElementById('grid-size-input-box');
let clears=document.getElementById('clearBtn');
let gridSubmitBtn=document.getElementById('grid-submit');
let colorPicker=document.getElementById('colorPicker');
let rainbow=document.getElementById('rainbow');//SELECT BOX RAINBOW OPTION ID
let color='black';
let size=16;
textBox.placeholder=size;

populateBoard(size);
createElements(size);

//EVENT LISTENERS
colorPicker.addEventListener('change', changeColor);//SETS COLOR
gridSubmitBtn.addEventListener('click',changeSize)//CHANGES GRID SIZE
clears.onclick=function(){clearBoard()}; //CLEARS BOARD

//FUNCTION
//============ Changes size of grid
function changeSize(){
    if(typeof Number(textBox.value)==='number'&& textBox.value<=100){
    size=textBox.value;
    clearBoard();
    createElements(size);
    populateBoard(size);}
    else alert('invalid input: only numbers less than 100')
}
//FUNCTION
//creates the elements based on input squared
//creates event mouseover listener for each element
//gives each element bgColor of default grey clr
//adds element to container element
function createElements(size){
    for(let i=0;i<(size**2);i++){
        gridItem=document.createElement('div');
        gridItem.className='grid-item';
        gridItem.style.backgroundColor='grey';
        gridItem.addEventListener('mouseover',coloring);
        container.appendChild(gridItem);
    }
}
 
//FUNCTION
//---------CREATES BOARD OF SIZE ${SIZE}
function populateBoard(size){
container.style.gridTemplateColumns= `repeat(${size} ,1fr)`;
container.style.gridTemplateRows= `repeat(${size} ,1fr)`;
}

//FUNCTION
//--CHANGES VALUE OF EVENTLISTENER COLOR FOR ELEMENT TARGET CALLING FUNCTION
//--TO THE CURRENT VALUE OF VAR COLOR
function coloring(e){
if(e.altKey)
{setRainbow();//sets the value of rainbow
changeColor();//changes the color to be the drop down box value
e.target.style.backgroundColor=color;}
}

//FUNCTION
//---------- CLEAR BOARD FUNCTION
function clearBoard()
{
   let itemArr= document.getElementsByClassName('grid-item');
    for(element of itemArr){
        element.style.backgroundColor='grey';
    }
}
//FUNCTION
//SETS VALUE OF VARIABLE 'COLOR'
function changeColor(){
color=colorPicker.value;
}

//FUNCTION
//---SETS RANDOM COLOR

function setRainbow(){
let r=Math.floor(Math.random()*255);
let g=Math.floor(Math.random()*255);
let b=Math.floor(Math.random()*255);
rainbow.value=`rgb(${r},${g},${b})`;
}

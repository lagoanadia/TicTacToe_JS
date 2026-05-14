let container = document.getElementsByClassName("container");
let fields = document.querySelectorAll("td");
let table = document.createElement("table");

let currentPlayer = "X";
let choices = ["O","X"];
let turn = 0;

function setUp()
{
    for(let i = 0; i<9; i++)
    {
        fields[i].classList.add("unactive");  
    }
}

//EventListener for when field is clicked
for(let i = 0; i<9; i++)
{
    fields[i].addEventListener("click",()=>
    {
        fields[i].classList.toggle("unactive"); 
        let chosenField = fields[i];

        changeTurn(event);
    });  
}

function changeTurn(event)
{
    turn = 1 - turn; //switches between 0 and 1
    currentPlayer = choices[turn];
    
///// for para cambiar todas las fields a turn + un array de chosen fields !
}


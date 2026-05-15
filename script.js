let container = document.getElementsByClassName("container");
let fields = document.querySelectorAll("td");
let table = document.createElement("table");

let currentPlayer = "X";
let choices = ["X","O"];
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
        fields[i].classList.remove("unactive"); 
        fields[i].classList.add("played");

        changeTurn(event);
    });  
}

function changeTurn(event)
{
    turn = (turn +1) % 2 ; //switches between 0 and 1
    currentPlayer = choices[turn];
    for(let i=0; i<fields.length; i++)
    {
        if(!fields[i].classList.contains("played"))
        {
            fields[i].textContent = choices[turn];
            console.log("holi");
        }
    }

}


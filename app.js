let boxes = documentquerySelectorAll("box");
let restBtn = document.querySelector("#reset-btn");
let GameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector( "#msg");  
let turn0 = true; // playerX  player O

const win_patterns=[
    [ 0,1,2],
    [ 0,3,6],
    [ 0,4,8],
    [ 1,4,7],
    [ 2,5,8],
    [ 2,4,6],
    [ 3,4,5],
    [ 6,7,8],
];
const resetGame = () =>  {
    turn0 = true;
    boxes.forEach(box => {
        box.innerText = ''; // Clear the text content of each box
        box.disabled = false; // Re-enable the box
    });
    msgContainer.classList.add("hide");     
};




boxes.forEach(( box) => { 
    box.addEventListener("click", () => {
    if ( turn0 ) {
         // player 0
     box.innerText = " O ";
     turn0= false;         
    } else { 
         // player X
        box.innerText = " X ";
        turn0= true ;
    }
     box.disabled = true;
     checkWinner();
    });


});


const showWinner= (winner) => {
    msg.innerText=`congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");  

};

const checkWinner = () => {
    for (let pattern of win_patterns) {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
         
        if(pos1Val!= "" && pos2Val != "" &&pos3Val != ""){
         if (pos1Val=== pos2Val && pos2Val === pos3Val) {   
            showWinner(pos1Val); 
         } 

        }
    }   
};
   
restBtn.addEventListener("click", resetGame);
GameBtn.addEventListener("click", resetGame);

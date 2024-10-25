
let boxes = document.querySelectorAll(".box");
let restBtn = document.querySelector("#reset");
let truno = true; 
let newGameBtn = document.querySelector("#new");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let moveCount = 0; 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    truno = true;
    moveCount = 0; 
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (truno) { 
            box.innerText = "O";
            truno = false;
        } else { 
            box.innerText = "X";
            truno = true;
        }
        box.disabled = true;
        moveCount++; 
        cheeckWinner();
    });
});

const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const showDraw = () => {
    msg.innerText = "It's a draw!";
    msgContainer.classList.remove("hide");
};

const cheeckWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return;
            }
        }
    }

    


    
    if (moveCount === 9) {
        showDraw();
    }
};

newGameBtn.addEventListener("click", resetGame);
restBtn.addEventListener("click", resetGame);
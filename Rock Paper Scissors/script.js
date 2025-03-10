let user_score = 0;
let comp_score = 0;

let moves = document.querySelectorAll(".move");
let result = document.querySelector("#status");
let user_fscore = document.querySelector("#user-score");
let comp_fscore = document.querySelector("#comp-score");

const compchoice = () => {
    const option = ["rock", "paper", "scissor"];
    const index = Math.floor(Math.random() * 3);
    return option[index];
}

const show_winner = (userwin, user_choice, comp_choice) => {
    if(userwin == true){
        result.innerText = `Congratulation! You win, ${user_choice} beats ${comp_choice}.`;
        result.style.backgroundColor = "#688E26";  
        result.style.color = "white";  
        user_score++;
        user_fscore.innerText = user_score;
    }
    else{
        result.innerText = `Oops! Computer wins, ${comp_choice} beats ${user_choice}.`;
        result.style.backgroundColor = "#A10702"; 
        result.style.color = "white";  
        comp_score++;
        comp_fscore.innerText = comp_score;
    }
}

const playgame = (user_choice) => {
    console.log("user choice = ", user_choice);
    let comp_choice = compchoice();
    console.log("comp choice = ", comp_choice);
    
    if(user_choice == comp_choice){
        result.innerText = "Play again, It was a Draw!"
        result.style.backgroundColor = "#FAA613";
    }
    
    else{
        let userwin = true;
        if(user_choice == "rock"){
            userwin = (comp_choice == "paper")? false : true;
        }
        else if(user_choice == "paper"){
            userwin = (comp_choice == "rock")? true : false;
        }
        else{
            userwin = (comp_choice == "rock")? false : true; 
        }
        show_winner(userwin, user_choice, comp_choice);
    }
    

}

moves.forEach((move) => {
    move.addEventListener("click", ()=>{
        const user_choice = move.getAttribute("id");
        playgame(user_choice);
    })
});

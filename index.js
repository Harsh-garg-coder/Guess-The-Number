const input = document.querySelector("#input");
const checkbtn = document.getElementById("check");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const again = document.getElementById("again");
const highScoreDisplay = document.getElementById("high-score");

let myNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

checkbtn.addEventListener("click", function() {
    const guessedNumber = Number(input.value);
    
    if(guessedNumber === 0) 
    {
        console.log("Enter something!");
    }
    else if(guessedNumber === myNumber) 
    {
        document.querySelector(".header-result").textContent = myNumber;
        result.textContent = "🎉 Correct number..";
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".header-result").style.width = "200px";
        if(score > highScore)
        {
            highScore = score;
            highScoreDisplay.textContent = `🏅 Highscore: ${highScore}`;
        }
        
    }
    else 
    {
        if(score > 1)
        {
            result.textContent = guessedNumber > myNumber ? "📉 Too high.." : "📈 Too low..";
            score--;
            scoreDisplay.textContent = `💯 Score: ${score}`;
        }
        else
        {
            result.textContent = "😢 You lost!";
        }
    }
    
})

again.addEventListener("click", function() {
    myNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    result.textContent = "🏁 Start Gueesing...";
    scoreDisplay.textContent = `💯 Score: ${score}`;
    document.querySelector(".header-result").style.width = "100px";
    document.querySelector("body").style.backgroundColor = "rgb(25 23 23)";
    document.querySelector(".header-result").textContent = "?";
    input.value = "";
})
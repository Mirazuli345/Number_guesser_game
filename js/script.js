let btn = document.getElementById("btn-form");
//random value

let low =1;
let high = 10

let y = Math.floor(Math.random() * 10 + 1);
console.log(y);



let guess = 3;

btn.addEventListener('click',button);

function button() {
    console.log("Clicked");

    let x = document.getElementById("inputField").value;

    if(x == ""){

        alert("Enter your number please! You have 3 guesses");
    }
    
    
    else if(x>y && guess--){
        
        alert("Sorry!Try a smaller number. You have more "+guess+" Guess");
        while(guess == 0){
            alert("You loose! no more Chances! Play Again.. ");
            document.getElementById("inputField").disabled = true;
            break;
        }
        
    
    }
    else if(x<y &&  guess--){
       
        alert("Sorry! Try a greater Number.You have more " + guess+" Guess");

        while(guess == 0){
            alert("You loose! no more Chances! Play Again.. ");
            document.getElementById("inputField").disabled = true;
            break;
        }

    }
    else if(x == y ){

        while(guess<=3){
            alert("Hurrah! You win! Let's play again..");
            document.getElementById("inputField").disabled = true;
            guess++;
            break;
        }
        
        
    }
    else{
        
        alert("Wrong input! Please enter a number");
        
    }
         
       
    
}

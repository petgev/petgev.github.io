
// alert("Խաղը սկսվում է. Գուշակիր թիվը 1-ից 100!");


// let guess;
// let attempts = 1

// let pordzer = +prompt("Քանի՞ անգամից կգուշակես");
// let max = +prompt("Մաքսիմում թիվ");
// let secretNumber = Math.floor(Math.random() * max ) + 1;
// while (guess !== secretNumber && pordzer >= attempts) {
//   guess = Number(prompt("Քո գուշակումը՝"));
//   attempts++;

//   if (guess > secretNumber) {
//     alert("Փորձիր ավելի փոքր թիվ");
//   } else if (guess < secretNumber) {
//     alert("Փորձիր ավելի մեծ թիվ");
    
//   } 

//   else if (guess === secretNumber){
//     alert("Դու ճիշտ գուշակեցիր " + attempts + "/" + pordzer +  " փորձից!");
//   }
//   else{
//     alert("Մուտքագրեք թիվ")
//   }
// }
// if(attempts >= pordzer){
// alert("Վսյո, ավարտվեց փորձերի քանակը")}

// let guess;
// let attempts = 1


let secret;
let max;
let attempts = 0
let maxattempts = 0;
function random(){
  let tiv = Math.random() * max
  tiv = Math.round(tiv)
  return tiv
}

document.getElementById("checkButton").addEventListener("click", function() {
  let userGuess = document.getElementById("guessInput").value;
  document.getElementById("kyanq").style = "color: red;";
 
   

if(attempts <= (maxattempts - 2)){
  if(userGuess >= 0){
    
    attempts++
    document.getElementById("qanak").value = (maxattempts - attempts);
    document.getElementById("message").style = "color: black;";
    if(userGuess == secret){
    document.getElementById("message").innerText = "Այո, դուք գուշակեցիք, դա " + "( " + userGuess + " )" + " թիվն է!";
    document.getElementById("kyanq").style = "color: #7ebc0a;";
    document.getElementById("kyanq").innerText = "Գուշակեցիք ընդամենը " + attempts + " փորձերից! Սեղմեք 'Նոր Խաղ' կոճակին՝ կրկին խաղալու համար։";
    disableGame()
    document.getElementById("guessInput").style = "background-color: #7ebc0a;";
    }
    else if(userGuess > secret){
    document.getElementById("message").innerText = "Մոտ եք, " + "( " + userGuess + " )" + " թիվը մեծ է X թվից";
    document.getElementById("kyanq").innerText = "Ձեզ մնաց " + (maxattempts - attempts) + " փորձ";
    }
    else if(userGuess < secret){
    document.getElementById("message").innerText = "Մոտ եք, " + "( " + userGuess + " )" + " թիվը փոքր է X թվից";
    document.getElementById("kyanq").innerText = "Ձեզ մնաց " + (maxattempts - attempts) + " փորձ";
    }

  }
  else{
    document.getElementById("message").style = "color: red;";
    document.getElementById("message").innerText = "Ձեր մուտքագրած թիվը փոքր է զրոից, խնդրում ենք կրկին փորձել։ " + "( " + userGuess + " )";
  }
  

  }
  else if(userGuess == secret){
    attempts++
    document.getElementById("message").style = "color: black;";
    document.getElementById("kyanq").style = "color: #7ebc0a;";
    document.getElementById("message").innerText = "Այո, դուք գուշակեցիք, դա " + "( " + userGuess + " )" + " թիվն է!";
    document.getElementById("kyanq").innerText = "Գուշակեցիք ընդամենը " + (attempts + 1) + " փորձերից! Սեղմեք 'Նոր Խաղ' կոճակին՝ կրկին խաղալու համար։";
    disableGame()
    document.getElementById("guessInput").style = "background-color: #7ebc0a;";
    document.getElementById("qanak").value = (maxattempts - attempts);
    }
    else if(userGuess < 0){

    document.getElementById("message").style = "color: red;";
    document.getElementById("message").innerText = "Ձեր մուտքագրած թիվը փոքր է զրոից, խնդրում ենք կրկին փորձել։ " + "( " + userGuess + " )";
  }
  else{
   document.getElementById("kyanq").style = "color: red;";
    document.getElementById("kyanq").innerText = "Ձեր փորձերի քանակը ավարտվեց։ X թիվն էր` " + "( " + secret + " )" + ": Սեղմեք 'Նոր Խաղ' կոճակին՝ կրկին խաղալու համար։ " ;
    disableGame()
    document.getElementById("qanak").value = (maxattempts - attempts);
}

  });
document.getElementById("nortiv").addEventListener("click", function() {
  document.getElementById("message").style = "color: red;";
   document.getElementById("message").innerText = "Ուշադրություն! Սկսվել է Նոր Խաղ:" ;
   document.getElementById("kyanq").innerText = "" ;
   attempts = 0
   maxattempts = 0
   max = 0
   disableGame()
   document.getElementById("sbmt1").disabled = false;
  document.getElementById("qanak").disabled = false;
  document.getElementById("sbmt2").disabled = true;
  document.getElementById("mijakayq").disabled = true;
   document.getElementById("guessInput").value = "";
   document.getElementById("mijakayq").value = "";
   document.getElementById("qanak").value = "";
   document.getElementById("d1").style.backgroundColor = "white";
   document.getElementById("d2").style.backgroundColor = "";
   document.getElementById("d3").style.backgroundColor = "";
   document.getElementById("qanak").style = "background-color: ;";
   document.getElementById("mijakayq").style = "background-color: ;";
   document.getElementById("guessInput").style = "background-color: ;";
})
document.getElementById("jnjel").addEventListener("click", function() {
  document.getElementById("guessInput").value = "";
   
})
document.getElementById("randomtiv").addEventListener("click", function() {
 document.getElementById("guessInput").value = Math.round(Math.random() * max);
})
function disableGame() {
  document.getElementById("guessInput").disabled = true;
  document.getElementById("checkButton").disabled = true;
  document.getElementById("jnjel").disabled = true;
  document.getElementById("randomtiv").disabled = true;
}
function enableGame() {
  document.getElementById("guessInput").disabled = false;
  document.getElementById("checkButton").disabled = false;
  document.getElementById("jnjel").disabled = false;
  document.getElementById("randomtiv").disabled = false;
}




document.getElementById("sbmt1").addEventListener("click", function() {
   maxattempts = document.getElementById("qanak").value
   document.getElementById("message").innerText = "" ;
   if(maxattempts <= 0){
    document.getElementById("kyanq").style = "color: red;";
     document.getElementById("kyanq").innerText = "Մուտքագրված թիվը սխալ է կամ ոչ լիարժեք:"
  
}
else{
  document.getElementById("sbmt1").disabled = true;
  document.getElementById("qanak").disabled = true;
  document.getElementById("sbmt2").disabled = false;
  document.getElementById("mijakayq").disabled = false;
  console.log("Attempts: " + maxattempts)
  document.getElementById("qanak").style = "background-color: #7ebc0a;";
  document.getElementById("d1").style.backgroundColor = "";
  document.getElementById("d2").style.backgroundColor = "white";
  document.getElementById("kyanq").innerText = ""
}
})

document.getElementById("sbmt2").addEventListener("click", function() {
    max = document.getElementById("mijakayq").value
    if(max <= 0){
      document.getElementById("kyanq").style = "color: red;";
     document.getElementById("kyanq").innerText = "Մուտքագրված թիվը սխալ է կամ ոչ լիարժեք:"
    }
    else{
    secret = random()
    console.log("Max: 0 - " + max)
    console.log("Secret: " + secret)
    document.getElementById("sbmt2").disabled = true;
     document.getElementById("mijakayq").disabled = true;
     document.getElementById("d1").style.backgroundColor = "";
     document.getElementById("d2").style.backgroundColor = "";
     document.getElementById("d3").style.backgroundColor = "white";
     document.getElementById("mijakayq").style = "background-color: #7ebc0a;";
    enableGame();
   }
})


function norxax(){
if(maxattempts <= 0){
  document.getElementById("guessInput").disabled = true;
  document.getElementById("checkButton").disabled = true;
  document.getElementById("jnjel").disabled = true;
  document.getElementById("randomtiv").disabled = true;
  document.getElementById("sbmt2").disabled = true;
  document.getElementById("mijakayq").disabled = true;
  document.getElementById("d1").style.backgroundColor = "white";
   document.getElementById("d2").style.backgroundColor = "";
   document.getElementById("d3").style.backgroundColor = "";
  
}
else{
  document.getElementById("guessInput").disabled = false;
  document.getElementById("checkButton").disabled = false;
  document.getElementById("jnjel").disabled = false;
  document.getElementById("randomtiv").disabled = false;
  document.getElementById("sbmt2").disabled = false;
  document.getElementById("mijakayq").disabled = false;
  console.log(maxattempts)
}
}
norxax()
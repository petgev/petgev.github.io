
function mobile() {
    document.getElementById('frame').src = 'https://mobile.ucom.am/';
    document.getElementById("mm").style.backgroundColor = "#7ebc0a"; 
    document.getElementById("kap").style.backgroundColor = "";
    document.getElementById("ff").style.backgroundColor = "";
    document.getElementById("nham").style.backgroundColor = "";
    document.getElementById("xax").style.backgroundColor = "";
  }
  function fixed() {
    document.getElementById('frame').src = 'https://fixed.ucom.am/';
    document.getElementById("ff").style.backgroundColor = "#7ebc0a";
    document.getElementById("kap").style.backgroundColor = "";
     document.getElementById("mm").style.backgroundColor = "";
     document.getElementById("nham").style.backgroundColor = "";
     document.getElementById("xax").style.backgroundColor = "";
  }
  function elq(){
    document.getElementById('frame').src = 'vochmiban.html';
    document.getElementById("mm").style.backgroundColor = "";
    document.getElementById("ff").style.backgroundColor = "";
    document.getElementById("kap").style.backgroundColor = "";
    document.getElementById("nham").style.backgroundColor = "";
    document.getElementById("xax").style.backgroundColor = "";
  }
  function g5() {
    document.getElementById('frame').src = 'http://5g.ucom.am';
    document.getElementById("ff").style.backgroundColor = "";
    document.getElementById("kap").style.backgroundColor = "";
     document.getElementById("mm").style.backgroundColor = "";
     document.getElementById("nham").style.backgroundColor = "";
     document.getElementById("xax").style.backgroundColor = "";
  }
  function kap() {
    document.getElementById('frame').src = 'kap.html';
    document.getElementById("ff").style.backgroundColor = ""; 
    document.getElementById("kap").style.backgroundColor = "#7ebc0a";
    document.getElementById("mm").style.backgroundColor = "";
    document.getElementById("nham").style.backgroundColor = "";
    document.getElementById("xax").style.backgroundColor = "";
  }
//   alert("Խաղը սկսվում է, պատրա՛ստվիր!");
// let startTime = Date.now();
// let score = 0;

// let q1 = prompt("Արևը դուրս է գալիս արևելքից? (այո/ոչ)");
// if (q1.toLowerCase() === "այո") {
//   score++;
// }

// let q2 = prompt("Ջուրը եռում է 50°C-ում? (այո/ոչ)");
// if (q2.toLowerCase() === "ոչ") {
//   score++;
// }

// let q3 = prompt("Ավինյանը Գորիսի քաղաքապետն է՞");
// if (q3.toLowerCase() === "ոչ") {
//   score++;
// }

// let q4 = prompt("Գոյություն ունի 'ֆիժմա' բառը");
// if (q4.toLowerCase() === "ոչ") {
//   score++;
// }

// let q5 = prompt("Excel-ը  Microsoft ի ծրագիրն է՞");
// if (q5.toLowerCase() === "այո") {
//   score++;
// }

// let q6 = prompt("Շմոլ Գազը հրկիզվում է՞");
// if (q6.toLowerCase() === "այո") {
//   score++;
// }

// let q7 = prompt("Գորիսում հայփոստ կա՞");
// if (q7.toLowerCase() === "այո") {
//   score++;
// }

// let q8 = prompt("Գորիսում թումո կա");
// if (q8.toLowerCase() === "այո") {
//   score++;
// }

// let q9 = prompt("Սիրում եք Գորիսը՞");
// if (q9.toLowerCase() === "այո") {
//   score++;
// }
// let q10 = prompt("Պաշտում եք Գորիսը՞");
// if (q10.toLowerCase() === "այո") {
//   score++;
// }
// let endTime = Date.now();
// let timeTaken = Math.floor((endTime - startTime) / 1000); // վայրկյաններով

// alert("Խաղն ավարտվեց!\nՃիշտ պատասխաններ: " + score + "/10\nԺամանակը: " + timeTaken + " վայրկյան");


// for(let i = 200; i >=15; i--){
//   if(i % 7 === 0){
//   console.log(i);
//   }
// }
function hrandom(){
  let erkutiv = (Math.floor(Math.random() * 100)) 
  
  if(erkutiv < 10){
    erkutiv = "0" + erkutiv
    return erkutiv
    console.log(erkutiv)
  }
  else{
    return erkutiv
    console.log(erkutiv)
  }
}
function norhamar() {
            document.getElementById("1").textContent = hrandom();
          document.getElementById("2").textContent = hrandom();
        document.getElementById("3").textContent = hrandom();}
function xax(){
document.getElementById('frame').src = 'xax.html';
    document.getElementById("mm").style.backgroundColor = "";
    document.getElementById("ff").style.backgroundColor = "";
    document.getElementById("kap").style.backgroundColor = "";
    document.getElementById("nham").style.backgroundColor = "";
    document.getElementById("xax").style.backgroundColor = "#7ebc0a";
}
function nhamar(){
document.getElementById('frame').src = 'norhamar.html';
    document.getElementById("mm").style.backgroundColor = "";
    document.getElementById("ff").style.backgroundColor = "";
    document.getElementById("kap").style.backgroundColor = "";
    document.getElementById("nham").style.backgroundColor = "#7ebc0a";
    document.getElementById("xax").style.backgroundColor = "";
}



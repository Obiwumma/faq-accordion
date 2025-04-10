const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");

const plus = document.getElementsByClassName("plus");
const minus = document.getElementsByClassName("minus");

const ans1 = document.getElementsByClassName("answer1");
const ans2 = document.getElementsByClassName("answer2");
const ans3 = document.getElementsByClassName("answer3");
const ans4 = document.getElementsByClassName("answer4");


const buttons = [btn1, btn2, btn3, btn4];
const answers = [ans1[0], ans2[0], ans3[0], ans4[0]];


function toggleAnswer(index, answers, plusIcons, minusIcons) {
  const isCollapsed = minusIcons[index].style.display === "none";

  if (isCollapsed) {
    answers[index].style.display = "block";
    plusIcons[index].style.display = "none";
    minusIcons[index].style.display = "block";
  } else {
    answers[index].style.display = "none";
    plusIcons[index].style.display = "block";
    minusIcons[index].style.display = "none";
  }
}

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => toggleAnswer(i, answers, plus, minus));
});




// The code I wrote here was too redundant so I improved it above

/*
btn1.addEventListener("click", () => {
  if ( minus[0].style.display === "none" ) {
    ans1[0].style.display = "none"
    plus[0].style.display = "none"
    minus[0].style.display = "block"
  } else {
    ans1[0].style.display = "block"
    plus[0].style.display = "block"
    minus[0].style.display = "none"
  }

})
btn2.addEventListener("click", () => {
  if ( minus[1].style.display === "none" ) {
    ans2[0].style.display = "none"
    plus[1].style.display = "none"
    minus[1].style.display = "block"
  } else {
    ans2[0].style.display = "block"
    plus[1].style.display = "block"
    minus[1].style.display = "none"
  }

})
btn3.addEventListener("click", () => {
  if ( minus[2].style.display === "none" ) {
    ans3[0].style.display = "none"
    plus[2].style.display = "none"
    minus[2].style.display = "block"
  } else {
    ans3[0].style.display = "block"
    plus[2].style.display = "block"
    minus[2].style.display = "none"
  }

})
btn4.addEventListener("click", () => {
  if ( minus[3].style.display === "none" ) {
    ans4[0].style.display = "none"
    plus[3].style.display = "none"
    minus[3].style.display = "block"
  } else {
    ans4[0].style.display = "block"
    plus[3].style.display = "block"
    minus[3].style.display = "none"
  }

}

*/
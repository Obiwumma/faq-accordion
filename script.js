const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");

const plus = document.querySelectorAll("#plus");
const minus = document.querySelectorAll("#minus");

const ans1 = document.getElementsByClassName("answer1");
const ans2 = document.getElementsByClassName("answer2");
const ans3 = document.getElementsByClassName("answer3");
const ans4 = document.getElementsByClassName("answer4");

// console.log(ans1[0].innerText)
// ans1[0].style.display = "none"

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

})
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");
const btn4 = document.getElementById("button4");

const ans1 = document.getElementsByClassName("answer1");
const ans2 = document.getElementsByClassName("answer2");
const ans3 = document.getElementsByClassName("answer3");
const ans4 = document.getElementsByClassName("answer4");

// console.log(ans1[0].innerText)
// ans1[0].style.display = "none"

btn1.addEventListener("click", () => {
  ans1[0].style.display = "none"
})
btn2.addEventListener("click", () => {
  ans2[0].style.display = "none"
})
btn3.addEventListener("click", () => {
  ans3[0].style.display = "none"
})
btn4.addEventListener("click", () => {
  ans4[0].style.display = "none"
})
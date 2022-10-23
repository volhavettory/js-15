let a = ""; //first number
let b = ""; //second number
let sign = ""; //знак операуии
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "*", "/"];

//экран
const out = document.querySelector(".calc-screen p");

function clearAll() {
  let a = ""; //first number
  let b = ""; //second number
  let sign = ""; //знак операуии
  let finish = false;
  out.textContent = 0;
}
document.querySelector(".ac").onclic = clearAll;

document.querySelector(".button").onclick = (event) => {
  //нажата не кнопка
  if (!event.target.classList.contains("btn")) return;
  //нажата кнопка ас

  // получаю нажатую кнопку
  const key = event.target.textContent;

  // если нажата клавиша 0-9 или .
  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      out.textContent = a;
      console.log(a, b, sign);
    } else if (a !== "" && b !== "" && finish) {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b += key;
      out.textContent = b;
    }
  }

  // если нажата клавиша + - / *
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
  }

  // нажата =
  if (key === "=") {
    if (b === "") b = a;
    switch (sign) {
      case "+":
        a = +a + +b;
        break;
      case "-":
        a = a - b;
        break;
      case "X":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          out.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    out.textContent = a;
    console.log(a, b, sign);
  }
};
// смена цвета
let switchMode = document.getElementById("switchMode");
switchMode.onclick = function () {
  let tema = document.getElementById("tema");
  if (tema.getAttribute("href") == "bly.css") {
    tema.href = "orang.css";
  } else {
    tema.href = "bly.css";
  }
};

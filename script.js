class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }
}

let num1ElementNode = document.querySelector(".num1");
let num2ElementNode = document.querySelector(".num2");
let btnAdd = document.querySelector(".btn-add");
let display = document.querySelector(".display");

btnAdd.addEventListener("click", () => {
  let num1 = parseInt(num1ElementNode.value);
  let num2 = parseInt(num2ElementNode.value);

  display.innerHTML = Calculator.add(num1, num2);
  console.log(Calculator.add(num1, num2));
});

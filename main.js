const result = document.getElementById("result")
const start = document.getElementById("start")

const createParagraph = (text) => {
  let paragraph = document.createElement("p");
  paragraph.innerHTML = text;
  result.appendChild(paragraph);
};

const calculator = (operation, first, second) => {
  switch (operation) {
    case "add":
      createParagraph(`${first} + ${second} = ${first + second}`)
      break
      case "sub":
      createParagraph(`${first} - ${second} = ${first - second}`)
      break
      case "mult":
      createParagraph(`${first} * ${second} = ${first * second}`)
      break
      case "div":
      createParagraph(`${first} / ${second} = ${first / second}`)
      break
  }
}

start.addEventListener("click", () => {
  const toDo = prompt("What ypo want to do? (add, sub, mult, div)", "add");
  const firstNum = +prompt("Write first number", "2");
  const secondNum = +prompt("Write second number", "5");
  calculator(toDo, firstNum, secondNum)
})
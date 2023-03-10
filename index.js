const readline = require('readline');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start();

async function start() {
  console.log(`Game Started`);
let answer = await ask(`Welcome to Dog, the new shelter adventure. Use the code "Comet" to enter and see all the rescues!`);

if ("Comet"){
  return console.log(`You enter a room with 5 dogs on the left, and 5 on the right. All of these are small dogs. There is a door to the North with a big red button that says "DO NOT PUSH". Above it is a window that is slightly cracked. In the corner is a ladder, some dogFood, and tennisBall`);
} else if (state) {
  return "I don't understand"
}

  console.log(answer);
  // process.exit();
}

  if ("Pick up dogFood", "Get ladder", "Get tennisBall", "Get dogFood", "Pick up ladder", "Pick up tennisBall"){
  return "TAKEN";
  } else if (state) {
    return "I don't understand"
  }


import inquirer from "inquirer";
inquirer
  .prompt([{ message: "hi, whats your name?", name: "name" }])
  .then((answers) => {
    const name = answers;
    console.log(name);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Tty Error");
    } else {
      console.log("something went wrong");
    }
  });

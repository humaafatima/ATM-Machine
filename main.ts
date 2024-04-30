import inquirer from "inquirer"

let accountBalance: number  = 45000;
let pinCode: number = 5678;

let pinReply = await inquirer.prompt(
    [
    {
    name: "pin",
    message: "enter your pin",
    type: "number"
    }
]
)

if (pinReply.pin === pinCode) {
console.log("Correct pin code");

let operationAns = await inquirer.prompt(
    [
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["whithdraw", "check balance"]
        }
    ]
)
if (operationAns.operation === "whithdraw") {
    let amountAns = await inquirer.prompt( 
        [
        {
                name: "amountOptions",
                message: "click your desired amount",
                type: "list",
                choices: [2000, 5000, 10000, 20000, "other amount"]
            }
        ]
    )

if (amountAns.amountOptions === 2000) {
accountBalance -= amountAns.amountOptions;    
  console.log(`Your remaining balance is ${accountBalance}`);
}

else if (amountAns.amountOptions === 5000) {
accountBalance -= amountAns.amountOptions;    
  console.log(`Your remaining balance is ${accountBalance}`);
}
 
else if (amountAns.amountOptions === 10000) {
accountBalance -= amountAns.amountOptions;    
  console.log(`Your remaining balance is ${accountBalance}`);
}

else if (amountAns.amountOptions === 20000) {
accountBalance -= amountAns.amountOptions;    
  console.log(`Your remaining balance is ${accountBalance}`);
}

else if (amountAns.amountOptions === "other amount") {
       let otherAmount = await inquirer.prompt(
    [
    {
        name: "amount",
        message1: "enter your amount",
        type: "number" 
        }
    ]
)

accountBalance -= otherAmount.amount;
console.log(`Your remaining balance is ${accountBalance}`);
};

}
if (operationAns.operation === "check balance") {
    console.log(`Your account balance is ${accountBalance}`);
}
}
 else {
    if (pinReply.pin != pinCode)
 (console.log("Incorrect pin code"));
};

  
   



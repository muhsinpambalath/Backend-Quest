import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function printTask(){
    let numOfTasks = 0;
    console.log("\nYour Tasks : \n")
    tasks.forEach((taskObj)=>{
        numOfTasks++;
        console.log(`${numOfTasks}. ${taskObj.name}`);
    });
    
    console.log("\nTasks added!\n")
}

function addTask(n){
    if(n<1){
        printTask();
        rl.close();
    }
    else{
        rl.question("Task : ",(task)=>{
            let taskObj = {
                name: task
            }
            tasks.push(taskObj);
            fs.appendFileSync("notes.txt",`${tasks.length}. ${task}\n`);
            n--;
            addTask(n);
        });
    }
}

const tasks = [];

rl.question("How Many Task?\n" ,(n)=>{
    if(n<1){
        console.log("Enter a valid number!!");
        rl.close();
    }
    else{
        addTask(n);
    }
});

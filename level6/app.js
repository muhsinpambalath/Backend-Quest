import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let tasks = [];

function saveTask(){
    fs.writeFileSync("./tasks.txt",JSON.stringify(tasks));
}

function loadTask(){
    let existingTask;
    try{
        existingTask = JSON.parse(fs.readFileSync("./tasks.txt","utf-8"));
    }
    catch{
        console.log("\nNo saved tasks found\nStarting with an empty list");
        showMenu();
        return;
    }
    if(existingTask)
        tasks=existingTask;
    showMenu();
}

function viewTasks(){
    if(tasks.length===0)
        console.log("No Tasks Yet, Try Creating One");
    else{
        tasks.forEach((taskObj,index)=>{
            console.log(`${index+1}. ${taskObj.name}`);
        });
    }
}

function showTasks(){
    console.log("\nYour Tasks :\n");
    viewTasks();
    askGoBack();
}

function askGoBack(){
    rl.question("\nGoto Main Menu?(Press Enter)",(choice)=>{
        if(choice==="")
            showMenu();
        else
            askGoBack();
    })
}

function showMenu(){
    console.log("\n========================");
    console.log("\n      TaskFlowCLI\n")
    console.log("========================\n")
    console.log("1. Add a Task\n2. Show Tasks\n3. Delete Task\n4. Exit");
    
    rl.question("\nChoose: ",(choice)=>{
        switch(choice){
            case "1" :{
                addTask();
                break;
            }
            case "2":{
                showTasks();
                break;
            }
            case "3":{
                viewTasks();
                taskToDelete();
                break;
            }
            case "4":{
                console.log("\nWhat a Shame -_- \n")
                rl.close();
                break;
            }
            default:{
                console.log("\nHey! Are You Blind!");
                showMenu();
            }
        }
    });
}

function addTask(){
    rl.question("Enter the Task : ",(task)=>{
        let taskObj = {
            name: task
        };
        tasks.push(taskObj);
        saveTask();
        askContinue();
    })
}

function askContinue(){
    rl.question("\nAdd another Task? (y/n)\n",(choice)=>{
        switch(choice){
            case "y":{
                addTask();
                break;
            }
            case "n":{
                console.log("\nTask Added!!\n");
                showMenu();
                break;
            }
            default:{
                console.log("\nI gave you Two Option and You Choose a Third One?!?!\n");
                askContinue();
            }
        }
    });
}

function taskToDelete(){
    if(tasks.length===0){
        askGoBack();
    }else{
        rl.question("Which task you want to delete?\nChoose: ",(choice)=>{
            if(isNaN(choice) || Number(choice)>tasks.length || Number(choice)<=0)
            {
                console.log("Bro...Choose The Given Choices ಥ_ಥ\n");
                taskToDelete();
            }
            else{
                let index = Number(choice);
                deleteTask(index);
            }
        })
    }
}

function askContinueDel(){
    rl.question("\Continue Deletion? (y/n)\n",(choice)=>{
        switch(choice){
            case "y":{
                taskToDelete();
                break;
            }
            case "n":{
                askGoBack();
                break;
            }
            default:{
                console.log("\nYou Better Not Mess With ME!!##@??\n")
                askContinueDel();
            }
        }
    })
}

function deleteTask(index){
    tasks.splice(index-1,1);
    saveTask();
    console.log("\nTask Deleted!");
    askContinueDel();
}

loadTask();

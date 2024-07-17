#! /usr/bin/env node

import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js";

//todos array 
//operation 
//function

let todos: string[]=  ["breakfast", "shopping", "cooking"] 
let condition = true;

async function createtodo(todos:string[]) {

    while(condition)
    {
        let ans = await inquirer.prompt({
            name: "select",
            type: "list",
            message: "select an operation",
            choices: ["add" ,"delete","update","view" ,"exit"]
                
        });
    
    
    if (ans.select === "add") {
          let addTodo = await  inquirer.prompt({
          
                name: "add",
                type: "input",
                message: "What would you like to add in your todos?"
            });
            todos.push(addTodo.add)  
        }
        if (ans.select === "update") {
            let updateTodo = await  inquirer.prompt({
             
                 name: "update",
                 type: "list",
                 message: "Which one would you like to update from list",
                 choices: todos.map(item => item)
            })
            let addTodo = await  inquirer.prompt({
          
                name: "add",
                type: "input",
                message: "What would you like to add in your todos?"
            });
    
            let newTodo =  todos.filter(val => val !== updateTodo.update)
        
            todos = [...newTodo,addTodo.add]
        
            console.log(todos)
        }
    if (ans.select === "view") {
        console.log(todos) 
    }
    if (ans.select == "delete") {
        let deleteTodo = await  inquirer.prompt({
         
             name: "delete",
             type: "list",
             message: "Which one would you like to delete from list",
             choices: todos.map(item => item)
        })
        let newTodo =  todos.filter(val => val!== deleteTodo.delete);
        todos = [...newTodo];
        console.log(todos);
    }

    if (ans.select === "exit") {
        let exitTodo = await inquirer.prompt({
            name: "exitTask",
            type: "confirm",
            message: "Are you sure you want to exit?",
            default: "true"
            
        });
            if (exitTodo.exitTask) {
                condition = false
            }
        console.log(todos);
    }
    else{

    }
};
}
    createtodo(todos)


    
   //READ , UPDATE , ADD , DELETE AND EXIT
    
   
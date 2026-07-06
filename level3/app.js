import fs from "fs";

fs.writeFileSync("./notes.txt","Backend Quest Level 3");
fs.appendFileSync("./notes.txt","\nHello");
let data = fs.readFileSync("./notes.txt","utf-8");

console.log(data);
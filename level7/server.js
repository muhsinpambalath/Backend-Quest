import http from "http";
import fs from "fs";

const html = fs.readFileSync("./index.html","utf-8");

const server = http.createServer((req,res)=>{
    res.end(html);
});

server.listen(3000);

console.log("Server running at http://localhost:3000");
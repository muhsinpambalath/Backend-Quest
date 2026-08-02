import http from "http";
import fs from "fs";

const home = fs.readFileSync("./index.html","utf-8");
const about = fs.readFileSync("./about.html","utf-8");
const contact = fs.readFileSync("./contact.html","utf-8");

const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    if(req.url === "/"){
        res.end(home);
    }
    else if(req.url==="/about"){
        res.end(about);
    }
    else if(req.url === "/contact"){
        res.end(contact);
    }
    else{
        res.end(`<h2 style="text-align: center;"> <b> 404 ERROR </b> </h2>`);
    }
});

server.listen(3000);

console.log("Server running at http://localhost:3000");
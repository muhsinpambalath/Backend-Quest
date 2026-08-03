import express from "express";
import fs from "fs";

const home = fs.readFileSync("./index.html","utf-8");
const about = fs.readFileSync("./about.html","utf-8");
const contact = fs.readFileSync("./contact.html","utf-8");
const products = [
    {
        id: 1, name: "Phone"
    },
    {
        id: 2, name: "Laptop"
    },
    {
        id: 3, name: "Car"
    },
    {
        id: 4, name: "Scooter"
    },
    {
        id: 5, name: "Keyboard"
    },
    {
        id: 6, name: "Computer"
    }
];


const app = express();

app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
})
app.get("/",(req,res)=>{
    res.send(home);
});
app.get("/about",(req,res)=>{
    res.send(about);
});
app.get("/contact",(req,res)=>{
    res.send(contact);
});
app.get("/products",(req,res)=>{
    if(req.query.search){
        res.send(products.filter(product=>
            product.name.toLowerCase().includes(req.query.search.toLowerCase())
        ));
    }
    else{
        res.send(products);
    }
});
app.get("/products/:id",(req,res)=>{
    res.send(products.find(product=>
        Number(req.params.id) === product.id
    ));
});
app.listen(3000,()=>{
    console.log("Server Running....");
});
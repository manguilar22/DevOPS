const express=require("express");
const path=require("path");

let app=express();

app.use(express.static(path.join(__dirname + "/public")));

// Send File Template
let html=(file) => path.join(__dirname,`public/topics/${file}.html`);

// Routes
app.get("/",(req,res) => res.sendFile(`${html("index")}`));
app.get("/BuildAutomation",(req,res) => res.sendFile(`${html("BuildAutomation")}`));
app.get("/ContinousIntegration",(req,res) => res.sendFile(`${html("ContinousIntegration")}`));
app.get("/ContinousDeliveryDeployment",(req,res) => res.sendFile(`${html("ContinousIntegration")}`));
app.get("/InfastructureCode",(req,res) => res.sendFile(`${html("InfastructureCode")}`));


// Ports and Config
const port=process.env.PORT || 5000;
app.listen(port,() => console.log(`Port:\t${port}`));

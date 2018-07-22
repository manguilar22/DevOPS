const express=require("express");
const path=require("path");

let app=express();

app.use(express.static(path.join(__dirname + "/public")));

// Send File Template
let html=(file) => path.join(__dirname,`public/topics/${file}.html`);

// Routes
app.get("/",(req,res) => res.sendFile(`${html("index")}`));
app.get("/Devops",(req,res) => res.sendFile(`${html("Devops")}`));
app.get("/DevopCulture", (req,res) => res.sendFile(`${html("DevopCulture")}`));
app.get("/ContinousIntegration",(req,res) => res.sendFile(`${html("ContinousIntegration")}`));
app.get("/Orchestration",(req,res) => res.sendFile(`${html("Orchestration")}`));
app.get("/Container",(req,res) => res.sendFile(`${html("Container")}`));
app.get("/ServerlessIntroduction",(req,res) => res.sendFile(`${html("ServerlessIntroduction")}`));
app.get("/ServerlessOfferings",(req,res) => res.sendFile(`${html("ServerlessOfferings")}`));


// Ports and Config
const port=process.env.PORT || 5000;
app.listen(port,() => console.log(`Port:\t${port}`));

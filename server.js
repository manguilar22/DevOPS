const express=require("express");
const path=require("path");
const port=process.env.PORT || 5000;

let app=express();

app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"/public/index.html"));
});

// Routes
const BuildAutomation=require("./routes/BuildAutomation");
const ContinousIntegration=require("./routes/ContinousIntegration");
const ContinousDeliveryDeployment=require("./routes/ContinousDeliveryDeployment");
const InfastructureCode=require("./routes/InfastructureCode");

app.use("/BuildAutomation",BuildAutomation);
app.use("/ContinousIntegration",ContinousIntegration);
app.use("/ContinousDeliveryDeployment",ContinousDeliveryDeployment);
app.use("/InfastructureCode",InfastructureCode);

// Ports and Config
app.listen(port,() => {
    console.log(`\nDir_name:\t${__dirname}\nListen:\t${port}`);
});

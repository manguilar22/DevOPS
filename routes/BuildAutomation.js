const express=require("express");
const router=express.Router();

router.get("/",(req,res) => {
    res.sendFile(require("path").join(__dirname,"/BuildAutomation.html"));
});

module.exports=router;

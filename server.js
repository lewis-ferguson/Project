const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));


app.get("/",function(req, res) {
    res.sendFile("home.html",{"root":"public"});
})


app.listen(9000, function(){
    console.log("App is running on port " + this.address);
});

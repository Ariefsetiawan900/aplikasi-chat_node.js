var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket){

    // kalo ada message baru
    socket.on("newMessage", function(msg){
        io.emit("newMessage", msg);
        console.log("Chat baru: " + msg);
    });

    // kalo user disconnet
    socket.on("disconnect", function(msg){
        console.log("user disconnected");
    });
});

http.listen(3000, function(){
    console.log("listening on 3000...");
});
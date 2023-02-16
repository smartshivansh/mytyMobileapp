const express = require("express");
const PORT = process.env.PORT || 8091;
const {createServer} = require("http");
const { Server } = require("socket.io");


const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
    cors: "http://localhost:3001"
})



io.on("connect", (socket)=>{
    console.log("connected")

    socket.on("news-res", ()=>{

        socket.emit("news-res", {
            type: "news",
            url: "https://economictimes.indiatimes.com/industry/banking/finance/adani-credit-flashes-warnings-after-group-gorged-on-cheap-debt/articleshow/97967258.cms"
        })
    })
})


// app.listen(PORT);
io.listen(PORT)

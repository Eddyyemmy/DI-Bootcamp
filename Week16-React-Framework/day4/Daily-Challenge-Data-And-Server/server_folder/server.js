const exp = require("express");
const cors = require("cors");

const app = exp();

const PORT = 3001;

app.use(cors());

app.use(exp.json());

app.get ("/api/hello", (req,res) => {
    res.send("Hello From Express")
});

app.post("/api/world", (req,res) => {
    const body = req.body;
    res.send({ message: `I recieved your POST request. This is what you sent me: ${body.message}`})
});

app.listen(PORT, () => {
    console.log("LISTENING ON PORT ", PORT);
})
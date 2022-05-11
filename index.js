const express = require('express')
const app = express()
const cors = require('cors');
require("dotenv").config();
const port = process.env.PORT || 5000;


//middleware 
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.post('/login', async (req, res) => {
    const user = req.body;
    console.log(user);
    res.send({ success: true });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
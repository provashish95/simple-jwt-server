const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
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

    if (user.email === 'user@gmail.com' && user.password === '123456') {
        const accessToken = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
        res.send({
            success: true,
            accessToken: accessToken
        });

    } else {
        res.send({ success: false });
    }


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
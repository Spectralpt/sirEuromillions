const express = require('express')
const path = require('path')
const app = express()

app.get('/hello', (req, res) => {
    res.send('test')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/euro', (req, res) => {
    res.header("Content-Type", "application/json")

    let numbers = []

    for (let i = 0; i < 5; i++){
        let n
        do {
            n = Math.floor(Math.random() * (50-1) + 1)
        } while (numbers.includes(n))

        numbers.push(n)

    }

    let stars = []

    for (let i = 0; i < 2; i++) {
        let n;
        do {
            n = Math.floor(Math.random() * (12 - 1) + 1);
        } while (stars.includes(n));

        stars.push(n);
    }

    res.end(JSON.stringify({
        key: {
            numbers: numbers,
            stars: stars
        }
    }));

})

app.use(express.static(path.join(__dirname,'public')))
app.listen(8000, () => {console.log("Listening on port 8000:")})

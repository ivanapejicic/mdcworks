const PORT = process.env.PORT || 8080;

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from home/updated')
})

app.post('/api/postings', (req, res) => {
    res.send('Data received')
})

mongoose.connect('mongodb+srv://admin:9PIHj2w7lSQ8abYM@mdcworksbackend.3k2uqbc.mongodb.net/?retryWrites=true&w=majority&appName=MDCWorksBackend')
        .then(() => {
            console.log("Connected to the database")
            app.listen(PORT, () => {
                console.log(`Server is running on port ${PORT}`);
            });
        })
        .catch(() => {
            console.log("Connection failed");
        });




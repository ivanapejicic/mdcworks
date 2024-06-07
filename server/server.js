const PORT = process.env.PORT || 8080;

const Posting = require('./models/Posting.js')
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from home')
})

//get all job postings
app.get('/api/postings', async (req, res) => {
    try {
        const postings = await Posting.find({});
        res.status(200).json(postings)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get a specific job posting 
app.get('/api/postings/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const posting = await Posting.findById(id);
        res.status(200).json(posting)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//create a new job posting
app.post('/api/postings', async (req, res) => {
    try {
        const posting = await Posting.create(req.body);
        res.status(200).json(posting)
    } catch (error) {
        res.status.json({message: error.message})
    }
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




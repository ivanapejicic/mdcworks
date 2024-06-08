const express = require('express');
const Posting = require('./../models/Posting.js');
const { getPostings, getActivePostings, getPostingById, addPosting, updatePosting, deletePosting } = require('./../controllers/posting.controller.js')
const router = express.Router();

//get all job postings
router.get('/', getPostings);

//get only active job postings
router.get('/active', getActivePostings);

//get a single job posting
router.get('/:id', getPostingById);

//add a job posting
router.post('/', addPosting);

//update a job posting
router.put('/:id', updatePosting);

router.delete('/:id', deletePosting);

module.exports = router;
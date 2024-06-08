const Posting = require('./../models/Posting.js');

const getPostings = async (_req, res) => {
    try {
        const postings = await Posting.find({});
        res.status(200).json(postings)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getActivePostings = async (_req, res) => {
    try {
        const postings = await Posting.find({ isExpired: false });
        res.status(200).json(postings)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getPostingById = async (req, res) => {
    try {
        const { id } = req.params;
        const posting = await Posting.findById(id);
        res.status(200).json(posting)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addPosting = async (req, res) => {
    try {
        const posting = await Posting.create(req.body);
        res.status(200).json(posting)
    } catch (error) {
        res.status.json({ message: error.message })
    }
}

const updatePosting = async (req, res) => {
    try {
        const { id } = req.params;
        const posting = await Posting.findByIdAndUpdate(id, req.body)

        if (!posting) {
            return res.status(404).json({ message: 'Posting not found' });
        }

        const updatedPosting = await Posting.findById(id);
        res.status(200).json(updatedPosting);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deletePosting = async (req, res) => {
    try {
        const { id } = req.params;
        const posting = await Posting.findByIdAndDelete(id)

        if (!posting) {
            return res.status(404).json({ message: 'Posting not found' });
        }

        res.status(200).json({ message: 'Job posting deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getPostings,
    getActivePostings,
    getPostingById,
    addPosting,
    updatePosting,
    deletePosting
}
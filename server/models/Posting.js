const mongoose = require('mongoose');

const PostingSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: [true, 'Please enter a company name.']
    },
    companyLogo: {
        type: String,
        required: false
    },
    jobCategory: {
        type: String,
        required: [true, 'Please enter a job category.']
    },
    jobDescription: {
        type: String,
        required: [true, 'Please enter a job description.']
    },
    jobApplicationURL: {
        type: String,
        required: [true, 'Please enter the job application URL.'],
        validate: {
            validator: function (v) {
                return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
            },
            message: 'Please enter a valid URL.'
        }
    },
    isExpired: {
        type: Boolean,
        required: [true, 'Please specify if the job posting is still active.']
    },
    jobType: {
        type: String,
        required: [true, 'Please enter the job type.']
    },
    jobLocation: {
        type: String,
        required: [true, 'Please enter the job location.']
    },
    positionName: {
        type: String,
        required: [true, 'Please enter the position name.']
    },
    jobPostingDate: {
        type: Date,
        required: [true, 'Please enter the job posting date.']
    },
    jobRating: {
        type: Number,
        required: [true, 'Please enter the company rating.']
    },
    positionSalary: {
        type: Number,
        required: false
    }},
    {
        timestamps: true
    });

const Posting = mongoose.model('Posting', PostingSchema);

module.exports = Posting;

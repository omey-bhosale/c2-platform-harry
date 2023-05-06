const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    prn_no: {
        type: String,
        required: true

    },
    student_name: {
        type: String,
        required: true
    },
    instituteCode: {
        type: Number,
        required: true

    },
    departmentCode: {
        type: String,
        required: true

    },
    gfg_easy: {
        type: Number,
        required: false
    },
    gfg_med: {
        type: Number,
        required: false
    },
    gfg_hard: {
        type: Number,
        required: false
    },
    leet_easy: {
        type: Number,
        required: false
    },
    leet_med: {
        type: Number,
        required: false
    },
    leet_hard: {
        type: Number,
        required: false
    },
    github_commit_count: {
        type: Number,
        required: false
    },
    linkedin_internship_count: {
        type: Number,
        required: false
    },
    hackerrank_all_sum_count: {
        type: Number,
        required: false
    },

    userName: {
        type: String,
        required: true
    },
    mobile_no: {
        type: Number,
        required: true
    },
    email_id: {
        type: String,
        required: true
    },

});

const Student = mongoose.model("Studnet", studentSchema);
module.exports = Student;
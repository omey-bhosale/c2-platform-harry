const mongoose = require("mongoose");
const departmentSchema = new mongoose.Schema({

    department_name: {
        type: String,
        required: true

    },
    departmentCode: {
        type: string,
        required: true

    },
    students_count: {
        type: Number,
        required: true

    },
    
});

const department = mongoose.model("institute", departmentSchema);
module.exports = department;
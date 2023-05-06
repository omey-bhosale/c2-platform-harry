const mongoose = require("mongoose");
const instituteSchema = new mongoose.Schema({

    institute_name: {
        type: String,
        required: true

    },
    instituteCode: {
        type: Number,
        required: true

    },
    department_count: {
        type: String,
        required: true

    },
    
});

const institute = mongoose.model("institute", instituteSchema);
module.exports = institute;
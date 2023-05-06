const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./model/Student-Model");

app.use(express.json());

//connection to mongoDB

mongoose.connect("mongodb+srv://admin:admin%40123@cluster0.aqord2t.mongodb.net", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {

    console.log("Connected to MongoDB");

}).catch((err) => {

    console.log(err);

});

app.get("/profile/:userName", async (req, res) => {
    try {
        //const id = req.params.id;
        const body = req.body;
        const userName=req.params.userName;

        const result = await Student.findOneAndUpdate({ userName: userName }, body, { new: true });

        res.status(200).json({
            status: "ok",
            data: result
        });
    } catch (err) {
        console.log(err);
    }


    // res.send("Hello World ... omkar "); 
    //console.log(req);
});

app.get("/dashboard/:instituteCode", async (req, res) => {
    try {
       // const id = req.params.id;
        const body = req.body;
        const instituteCode=req.params.instituteCode;

        const result = await Student.findOneAndUpdate({ instituteCode:instituteCode }, body, { new: true });

        res.status(200).json({
            status: "ok",
            data: result
        });
    } catch (err) {
        console.log(err);
    }


    // res.send("Hello World ... omkar "); 
    //console.log(req);
});


app.post("/create-user", async (req, res) => {
    const { prn_no,student_name,instituteCode,departmentCode,gfg_easy,gfg_med,gfg_hard,leet_easy,leet_med,leet_hard,github_commit_count,linkedin_internship_count,hackerrank_all_sum_count,userName,mobile_no,email_id} = req.body;

    console.log(prn_no,student_name,instituteCode,departmentCode,gfg_easy,gfg_med,gfg_hard,leet_easy,leet_med,leet_hard,github_commit_count,linkedin_internship_count,hackerrank_all_sum_count,userName,mobile_no,email_id);
    try {
        const data = await Student.create({prn_no,student_name,instituteCode,departmentCode,gfg_easy,gfg_med,gfg_hard,leet_easy,leet_med,leet_hard,github_commit_count,linkedin_internship_count,hackerrank_all_sum_count,userName,mobile_no,email_id});
        res.status(201).json({
            status: "ok",
            data: data
        });

    } catch (err) {
        console.log(err);
    }

});
app.patch("/edit-user/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const result = await Student.findOneAndUpdate({ _id: id }, body, { new: true });

        res.status(200).json({
            status: "ok",
            data: result
        });

    } catch (err) {
        console.log(err);
    }



});
app.delete("/delete-student/:id", async (req, res) => {

    const id = req.params.id;
    const result = await Student.deleteOne({ _id: id });

    res.status(200).json({
        status: "ok",
        message: "Student Data has been deleted.."
    });

});

app.listen(3000, () => {
    console.log("Server has been started..");
});


const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const StudentsModel = require('./models/students')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://leoputtiwutanon25:puttiwutanon25112552@school-datatable.yxglkx3.mongodb.net/?retryWrites=true&w=majority&appName=school-datatable", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  
app.get('/getstudents', (req, res) => {
    StudentsModel.find()
    .then(Students => res.json(Students))
    .catch(err => res.json(err))
})

app.listen(5173, () => {
    console.log("server is running")
})
// const express = require("express");
// const teacherRoute=require("./router/teacher-router");
// const bodyParse = require("body-parser");
// const cookieParser = require("cookie-parser");
// const student=require("./model/StudentData")

// const app = express();
//  app.use(bodyParse.urlencoded({ extended: true }));
//  app.use(cookieParser());

// //HomePage
// app.get('/', async (req, res) => {

//     let flag='false';
//     if(req.cookies.admin=='true'){
//       flag='true';
//       const students=await student.find({});
//       res.render('all_student',{loggedin:flag, sts:students});
//     }
//     else{
//       res.render('home',{loggedin:flag});
//     }
//   })

// //mongoDb Connection
// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://adityabhatnagar:ivHRpf4MqMskIWSd@cluster0.6bh5q1s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() =>
//  console.log('Connected to database'))
// .catch((err) => { console.error(err); });

// //view engine
// app.set('view engine', 'ejs');

// app.use('/views/images', express.static('./views/images'));


// //teacher router
// app.use('/Product',teacherRoute);



// //server creation
// app.listen(8080, () =>{
//     console.log("Server running")
// });
const express = require("express");
const teacherRoute = require("./router/teacher-router");
const bodyParse = require("body-parser");
const cookieParser = require("cookie-parser");
const Student = require("./model/StudentData");

const app = express();
app.use(bodyParse.urlencoded({ extended: true }));
app.use(cookieParser());

// HomePage
app.get('/', async (req, res) => {
    let flag = 'false';
    if (req.cookies.admin == 'true') {
        flag = 'true';
        try {
            const students = await Student.findAll();
            res.render('all_student', { loggedin: flag, sts: students });
        } catch (error) {
            console.error('Error fetching students:', error);
            res.status(500).send('Error fetching students');
        }
    } else {
        res.render('home', { loggedin: flag });
    }
});

// View engine
app.set('view engine', 'ejs');
app.use('/views/images', express.static('./views/images'));

// Teacher router
app.use('/Product', teacherRoute);

// Server creation
app.listen(8080, () => {
    console.log("Server running")
});

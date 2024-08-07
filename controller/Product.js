// const studentdata = require("../model/StudentData");

// //get login page 

// const teacher_get_login = (req,res)=>{
//     try {
//         res.render('teacher_login');
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// };

// // login functionality
// const teacher_post_login = async (req,res) => {
//     const { username, password } = req.body;
//     try {
//         if (username == "test123@gmail.com" && password == "pass@123") { 
//             res.cookie('admin','true');
//             const data = await studentdata.find();
//             res.render('all_student', { students: data,success_message:"Login Successfully!" });
//         }
//         else {
//             res.render('teacher_login', { message: "Invalid username or password, Please try again." })
//         }
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// };

// //Logout Functionality 

// const teacher_logout = async (req,res) => {
//      try {
//          if(req.cookies.admin=='true'){
//             res.clearCookie('admin');
//             res.render('home');
//           }
//           else{
//             res.redirect('back');
//           }
//       }
//     catch (err) {
//         console.error(err.message);
//         res.status(500).send('Internal Server Error');
//     }
// };


// // get all students
// const all_students = async (req, res) => {
//     try {
//          if (req.cookies.admin == 'true') {
//             const allStudents = await studentdata.find();
//             res.render('all_student', { students: allStudents,edit:'false'});
//         }
//         else {
//            res.render('home');
//         }
//     }
//     catch (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//     }
// };

// const addrecord =  (req,res) => {
//     try
//     {
//     if(req.cookies.admin == 'true')
//     {
//         res.render('add_record',{edit:'false'})
//     }
//     else{
//         res.redirect('back');
//     }
//   }
//   catch(error)
//   {
//     console.log(error)
//     res.redirect('back');
//   }
// }
// const student_post = async (req, res) => {
//      const {  ProductId } = req.body;
//     try {
//         const st = await studentdata.findOne({ ProductId });
//         if (st) {
//             return res.render('add_record', { message: "Product Id is already present",edit:'false'  });
//         }
//         await studentdata.create(req.body);
//         const newstudent=await studentdata.find({});
//         return res.redirect('/Product/allstudents');
//     }
//     catch (err) {
//         console.error(err.message);
//         res.status(500).send('Internal Server Error');

//     }
// };

// //delete student

// const deleteData = async (req, res) => {
//     try {
//          if (req.cookies.admin == 'true') {
//              await studentdata.findByIdAndDelete(req.params.id)
//             res.redirect('/Product/allstudents');
//         }
//         else {
//             res.render('home');
//         }
//     }
//     catch (err) {
//         console.error(err.message);
//         res.status(500).send('Internal Server Error');
//     }
// };

// //update student details
// const get_edit_student = async (req,res)=>{
  
//     try {
//       const {id} = req.params;  
//       const st=await studentdata.findById(id);
//       res.render('add_record',{edit:'true', st});
//     } 
//     catch (error) {
//       console.log(error);
//       res.send(error);
//     }    
//   }

// const post_edit_student =  async(req,res)=>{
//     const{rollNumber} = req.body
//    try {
//      const id=req.body.Id;
//      const std = await studentdata.findById(id);
//      const std_rollno = await studentdata.findOne({ rollNumber,_id: {$ne: std } });
//      if(std_rollno)
//      {
//       return  res.render('add_record',{edit:'true',message : 'Roll Number is already exist',st:std});
//      }
     
//      delete (req.body.Id);
//      const st = await studentdata.findByIdAndUpdate(id,req.body);
     
//      if(!st){
//        res.send('Data not found with this id')
//        return;
//      }
//      const students=await studentdata.find({});
        
//        res.redirect('/Product/allstudents');
 
     
//    } catch (error) {
//      console.log(error);    
//    }
//  }    




// module.exports = {
//     teacher_get_login,
//     teacher_post_login,
//     teacher_logout,
//     all_students,
//     addrecord,
//     student_post,
//     deleteData,
//     get_edit_student,
//     post_edit_student

// }
const Student = require("../model/StudentData");

// Get login page
const teacher_get_login = (req, res) => {
    try {
        res.render('teacher_login');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

// Login functionality
const teacher_post_login = async (req, res) => {
    const { username, password } = req.body;
    try {
        if (username === "test123@gmail.com" && password === "pass@123") {
            res.cookie('admin', 'true');
            const data = await Student.findAll();
            res.render('all_student', { students: data, success_message: "Login Successfully!" });
        } else {
            res.render('teacher_login', { message: "Invalid username or password, Please try again." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

// Logout functionality
const teacher_logout = async (req, res) => {
    try {
        if (req.cookies.admin === 'true') {
            res.clearCookie('admin');
            res.render('home');
        } else {
            res.redirect('back');
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
    }
};

// Get all students
const all_students = async (req, res) => {
    try {
        if (req.cookies.admin === 'true') {
            const allStudents = await Student.findAll();
            res.render('all_student', { students: allStudents, edit: 'false' });
        } else {
            res.render('home');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

// Render add record page
const addrecord = (req, res) => {
    try {
        if (req.cookies.admin === 'true') {
            res.render('add_record', { edit: 'false' });
        } else {
            res.redirect('back');
        }
    } catch (error) {
        console.log(error);
        res.redirect('back');
    }
};

// Create new student record
const student_post = async (req, res) => {
    const { ProductId } = req.body;
    try {
        const existingStudent = await Student.findOne({ where: { ProductId } });
        if (existingStudent) {
            return res.render('add_record', { message: "Product Id is already present", edit: 'false' });
        }
        await Student.create(req.body);
        const newStudents = await Student.findAll();
        return res.redirect('/Product/allstudents');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
    }
};

// Delete student record
const deleteData = async (req, res) => {
    try {
        if (req.cookies.admin === 'true') {
            await Student.destroy({ where: { ProductId: req.params.id } });
            res.redirect('/Product/allstudents');
        } else {
            res.render('home');
        }
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Internal Server Error');
    }
};

// Get student record for editing
const get_edit_student = async (req, res) => {
    try {
        const st = await Student.findOne({ where: { ProductId: req.params.id } });
        res.render('add_record', { edit: 'true', st });
    } catch (error) {
        console.log(error);
        res.send(error);
    }
};

// Update student record
const post_edit_student = async (req, res) => {
    const { ProductId } = req.body;
    try {
        const id = req.body.ProductId;
        const student = await Student.findOne({ where: { ProductId: id } });
        const existingStudent = await Student.findOne({ where: { ProductId, id: { [Op.ne]: student.id } } });
        if (existingStudent) {
            return res.render('add_record', { edit: 'true', message: 'Product Id is already exist', st: student });
        }

        await Student.update(req.body, { where: { ProductId: id } });
        const students = await Student.findAll();
        res.redirect('/Product/allstudents');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    teacher_get_login,
    teacher_post_login,
    teacher_logout,
    all_students,
    addrecord,
    student_post,
    deleteData,
    get_edit_student,
    post_edit_student
};

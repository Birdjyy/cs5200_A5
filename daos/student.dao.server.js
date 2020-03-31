const studentModel = require('../models/student/student.model.server')

function createStudent(student) {
    return studentModel.create(student);
}

const deleteStudentByName = (name) => {
    studentModel.deleteOne({firstName: name}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Deleted');
        }
    })
}

function deleteStudent(id){
    return studentModel.delete({_id: id})
}

function findAllStudents(){
    return studentModel.find();
}

function findStudentById(id){
    return studentModel.findById(id)
}

module.exports = {
    createStudent,
    deleteStudent,
    findAllStudents,
    findStudentById,
    deleteStudentByName
}
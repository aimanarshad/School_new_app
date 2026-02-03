import bcrypt from "bcrypt";
import Student from "../models/student.model.mjs";
import "dotenv/config";
import JWT from "jsonwebtoken";
// import userSchema from "../schema/userSchema.mjs";

const getAllStudents = async (req, res) => {

  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  }

};

const createStudent = async (req, res) => {
    try {

        const newStudent = await Student.create(req.body);
        await newStudent.save();
        res.json({ message: "Student created successfully", student: newStudent });

    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
}

const getOneStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    res.json(student);
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  } 
};


const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.json({ message: "Student deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  }
};

const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Teacher updated successfully", student });
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  }
};

export { getAllStudents, createStudent, getOneStudent, deleteStudent, updateStudent };
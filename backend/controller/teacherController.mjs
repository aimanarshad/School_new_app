import bcrypt from "bcrypt";
import Teacher from "../models/teacher.model.mjs";
import "dotenv/config";
import JWT from "jsonwebtoken";
// import userSchema from "../schema/userSchema.mjs";

const getAllTeachers = async (req, res) => {

  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  }

};

const createTeacher = async (req, res) => {
    try {

        const newTeacher = await Teacher.create(req.body);
        await newTeacher.save();
        res.json({ message: "Teacher created successfully", teacher: newTeacher });

    } catch (err) {
        res.status(400).json({ error: err, status: 400 });
    }
}

const getOneTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findById(id);
    res.json(teacher);
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  } 
};


const deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    await Teacher.findByIdAndDelete(id);
    res.json({ message: "Teacher deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  }
};

const updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await Teacher.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Teacher updated successfully", teacher });
  } catch (err) {
    res.status(400).json({ error: err, status: 400 });
  }
};

export { getAllTeachers, createTeacher, getOneTeacher, deleteTeacher, updateTeacher };
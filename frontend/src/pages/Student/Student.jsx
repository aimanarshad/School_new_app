// src/pages/Student.jsx

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Cards from "../../componenets/Cards/Cards";
import AddStudent from "../../assets/AddStudent.png";
import DeleteStudent from "../../assets/DeleteStudent.png";
import UpdateStudent from "../../assets/UpdateStudent.png";
import StudentDataTable from "../../componenets/Table/StudentDataTable/StudentDataTable";
import Modal from "../../componenets/Modal(Popup_Window)/Modal";

import {
  addStudentAPI,
  getAllStudentsAPI,
  updateStudentAPI,
  deleteStudentAPI,
} from "../../API call/StudentAPI";

function Student() {
  const [students, setStudents] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    Class: "",
    Address: "",
  });

  const [deleteRollNo, setDeleteRollNo] = useState("");
  const [editingStudentId, setEditingStudentId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const data = await getAllStudentsAPI();
      setStudents(data || []);
    } catch (err) {
      // toast.error is already handled in your API interceptor
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.rollNo || !formData.Class || !formData.Address) {
      toast.warn("Please fill all required fields");
      return;
    }

    const roll = Number(formData.rollNo);
    if (isNaN(roll) || roll < 1 || roll > 30) {
      toast.warn("Roll No must be between 1 and 30");
      return;
    }

    if (!["6", "7", "8", "9", "10"].includes(formData.Class)) {
      toast.warn("Class must be 6, 7, 8, 9 or 10");
      return;
    }

    try {
      setLoading(true);
      await addStudentAPI(formData);
      resetForm();
      setActiveModal(null);
      toast.success("Student added successfully");
      fetchStudents();
    } catch (err) {
      // error toast handled in interceptor
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!editingStudentId) return;

    try {
      setLoading(true);
      await updateStudentAPI(editingStudentId, formData);
      resetForm();
      setActiveModal(null);
      toast.success("Student updated successfully");
      fetchStudents();
    } catch (err) {
      // error toast handled in interceptor
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteRollNo) {
      toast.warn("Please enter Roll No");
      return;
    }

    const student = students.find((s) => String(s.rollNo) === deleteRollNo);
    if (!student) {
      toast.error("No student found with this Roll No");
      return;
    }

    if (!window.confirm(`Delete ${student.name} (Roll ${student.rollNo})?`)) return;

    try {
      setLoading(true);
      await deleteStudentAPI(student._id);
      setDeleteRollNo("");
      setActiveModal(null);
      toast.success("Student deleted successfully");
      fetchStudents();
    } catch (err) {
      // error toast handled in interceptor
    } finally {
      setLoading(false);
    }
  };

  const openUpdateModal = (student) => {
    setFormData({
      name: student.name || "",
      rollNo: String(student.rollNo || ""),
      Class: student.Class || "",
      Address: student.Address || "",
    });
    setEditingStudentId(student._id);
    setActiveModal("update");
  };

  const resetForm = () => {
    setFormData({ name: "", rollNo: "", Class: "", Address: "" });
    setEditingStudentId(null);
  };

  return (
    <div>
      <h1 className="main-title mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="black"
          className="bi bi-person-arms-up me-3"
          viewBox="0 0 16 16"
        >
          <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z" />
        </svg>
        Student Management
      </h1>

      <div className="cards d-flex justify-content-center justify-content-md-start flex-wrap text-center gap-4">
        <Cards
          heading="Add Student"
          photo={AddStudent}
          colour="#38abb869"
          onClick={() => {
            resetForm();
            setActiveModal("add");
          }}
        />

        <Cards
          heading="Delete Student"
          photo={DeleteStudent}
          colour="#38abb869"
          onClick={() => setActiveModal("delete")}
        />

        {/* No onClick → user should use the Edit button in the table */}
        <Cards
          heading="Update Student"
          photo={UpdateStudent}
          colour="#38abb869"
          // onClick removed - edit is now done via table row buttons
        />
      </div>

      {/* ────────────────────────────────────────────── */}
      {/*                  MODALS                        */}
      {/* ────────────────────────────────────────────── */}

      {/* Add Modal */}
      <Modal
        show={activeModal === "add"}
        onClose={() => setActiveModal(null)}
        title="Add New Student"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setActiveModal(null)}>
              Close
            </button>
            <button
              className="btn btn-primary"
              type="submit"
              form="addStudentForm"
              disabled={loading}
            >
              {loading ? "Saving..." : "Add"}
            </button>
          </>
        }
      >
        <form id="addStudentForm" onSubmit={handleAddSubmit}>
          <div className="mb-3">
            <label className="form-label">Name *</label>
            <input name="name" value={formData.name} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Roll No (1–30) *</label>
            <input
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              className="form-control"
              required
              type="number"
              min="1"
              max="30"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Class (6–10) *</label>
            <input name="Class" value={formData.Class} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address *</label>
            <input name="Address" value={formData.Address} onChange={handleChange} className="form-control" required />
          </div>
        </form>
      </Modal>

      {/* Update Modal */}
      <Modal
        show={activeModal === "update"}
        onClose={() => setActiveModal(null)}
        title="Update Student"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setActiveModal(null)}>
              Close
            </button>
            <button
              className="btn btn-primary"
              type="submit"
              form="updateStudentForm"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </button>
          </>
        }
      >
        <form id="updateStudentForm" onSubmit={handleUpdateSubmit}>
          <div className="mb-3">
            <label className="form-label">Name *</label>
            <input name="name" value={formData.name} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Roll No (1–30) *</label>
            <input
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              className="form-control"
              required
              type="number"
              min="1"
              max="30"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Class (6–10) *</label>
            <input name="Class" value={formData.Class} onChange={handleChange} className="form-control" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address *</label>
            <input name="Address" value={formData.Address} onChange={handleChange} className="form-control" required />
          </div>
        </form>
      </Modal>

      {/* Delete Modal */}
      <Modal
        show={activeModal === "delete"}
        onClose={() => setActiveModal(null)}
        title="Delete Student"
        footer={
          <>
            <button className="btn btn-secondary" onClick={() => setActiveModal(null)}>
              Close
            </button>
            <button
              className="btn btn-danger"
              onClick={handleDelete}
              disabled={loading || !deleteRollNo.trim()}
            >
              {loading ? "Deleting..." : "Delete"}
            </button>
          </>
        }
      >
        <div className="mb-3">
          <label className="form-label">Roll No to delete</label>
          <input
            className="form-control"
            value={deleteRollNo}
            onChange={(e) => setDeleteRollNo(e.target.value.trim())}
            placeholder="e.g. 14"
          />
        </div>
      </Modal>

      <h2 className="main-title mt-5">Students List</h2>

      {loading ? (
        <p className="text-center py-5">Loading students...</p>
      ) : (
        <StudentDataTable
          data={students}
          onEdit={openUpdateModal}
          onDelete={(student) => {
            setDeleteRollNo(String(student.rollNo));
            setActiveModal("delete");
          }}
        />
      )}
    </div>
  );
}

export default Student;



































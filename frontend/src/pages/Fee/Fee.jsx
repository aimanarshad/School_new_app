import StudentDataTable from '../../componenets/Table/StudentDataTable/StudentDataTable'
import VerticalBarChart from '../../componenets/Charts/VerticalBarChart'
const students = [
  { rollNo: 1, className: "10-A", name: "Ali", feesStatus: "Paid" },
  { rollNo: 2, className: "10-B", name: "Sara", feesStatus: "Pending" },
  { rollNo: 3, className: "9-C", name: "Ahmed", feesStatus: "Paid" },
];
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";


const Fee = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([]);
const dueDate = "20-02-2026";

  // Sample fee data
  // const feeRecords = [
  //   { id: 1, rollNo: "001", name: "Ahmed Ali", class: "Class 10", monthlyFee: 5000, paid: 5000, status: "Paid", dueDate: "2025-12-10" },
  //   { id: 2, rollNo: "002", name: "Ayesha Khan", class: "Class 9", monthlyFee: 5000, paid: 4500, status: "Pending", dueDate: "2025-12-10" },
  //   { id: 3, rollNo: "003", name: "Bilal Ahmed", class: "Class 10", monthlyFee: 5000, paid: 3000, status: "Partial", dueDate: "2025-12-10" },
  //   { id: 4, rollNo: "004", name: "Fatima Zahra", class: "Class 8", monthlyFee: 4500, paid: 4500, status: "Paid", dueDate: "2025-12-10" },
  //   { id: 5, rollNo: "005", name: "Hassan Raza", class: "Class 7", monthlyFee: 4500, paid: 0, status: "Pending", dueDate: "2025-12-08" },
  // ];

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students/fees");
      setStudents(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFeeToggle = async (student) => {
    const newStatus =
      student.feeStatus === "Paid" ? "Pending" : "Paid";

    try {
      await axios.put(
        `http://localhost:5000/api/students/fees/${student._id}`,
        { feeStatus: newStatus }
      );

      fetchStudents();
    } catch (error) {
      console.error(error);
    }
  };


const filtered = students.filter((item) =>
  item.name?.toLowerCase().includes(search.toLowerCase()) ||
  String(item.rollNo).includes(search) ||
  String(item.Class).toLowerCase().includes(search.toLowerCase())
);



  const totalCollected = students.filter(s => s.feeStatus === "Paid").length;
const totalDue = students.filter(s => s.feeStatus === "Pending").length;


  return (
    <div>
      <h1 className='main-title mt-4'><i className="bi bi-receipt me-2"></i>Fees Overview</h1>
      <VerticalBarChart />

      {/* <h1 className='main-title'>Student Fees Status </h1>
      <StudentDataTable data={students}/> */}
      <div style={{ padding: "2rem", backgroundColor: "#f8fff9", minHeight: "100vh" }}>

        {/* Summary Cards */}
        <Row className="g-4 mb-4">
          <Col md={4} lg={4}>
            <Card className="text-white shadow border-0 py-5" style={{ background: "linear-gradient(135deg, #2E8B57, #3CB371)", borderRadius: "16px" }}>
              <Card.Body className="text-center">
                <h5>Student with paid fees</h5>
                <h3 className="fw-bold">{totalCollected.toLocaleString()}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={4}>
            <Card className="shadow border-0 py-5" style={{ borderRadius: "16px" }}>
              <Card.Body className="text-center">
                <h5 className="text-muted">Total no. of Students</h5>
                <h3 className="fw-bold text-success">{students.length}</h3>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={4}>
            <Card className="text-white shadow border-0 py-5" style={{ background: "linear-gradient(135deg, #DAA520, #FFB84D)", borderRadius: "16px" }}>
              <Card.Body className="text-center">
                <h5>Students with Unpaid Fees</h5>
                <h3 className="fw-bold">{totalDue.toLocaleString()}</h3>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Search & Table */}
        <Card className="shadow border-0" style={{ borderRadius: "16px" }}>
          <Card.Body className="p-4">
            <Row className="mb-4">
              <Col lg={12}>
                <Form.Control
                  type="text"
                  placeholder="Search by name, roll no or class..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ borderRadius: "12px" }}
                />
              </Col>
              
            </Row>

            <div className="table-responsive">
              <Table hover className="align-middle">
                <thead className="table-success">
                  <tr>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Monthly Fee</th>
                    <th>Paid</th>
                    <th>Status</th>
                    <th>Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((student) => (
                    <tr key={student._id}>
                      <td className="fw-semibold">{student.rollNo}</td>
                      <td>{student.name}</td>
                      <td>{student.Class}</td>
                      <td>Rs. {student.monthlyFee.toLocaleString()}</td>
                      {/* Checkbox Column */}
                      <td>
                        <Form.Check
                          type="checkbox"
                          checked={student.feeStatus === "Paid"}
                          onChange={() => handleFeeToggle(student)}
                        />
                      </td>
                      <td>
                        <span
                          className={`badge ${student.feeStatus === "Paid"
                              ? "bg-success"
                              : "bg-danger"
                            }`}
                        >
                          {student.feeStatus}
                        </span>
                      </td>
                      <td>{dueDate}</td>
                    </tr>


                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </div>   {/* closes styled div */}

    </div>

  );
}
export default Fee;
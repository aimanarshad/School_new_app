// import React from "react";
// import './TeacherDataTable.css'
// function TeacherDataTable({ data }) {
//   return (
//     <div className="table-responsive">
//       <table className="table table-striped table-hover border border-2">
//         <thead>
//           <tr>

//             <th scope="col">Name</th>
//             <th scope="col">Subject</th>
//             <th scope="col">Phone</th>
//             <th scope="col">Salary</th>
//             <th scope="col">Joining Date</th>
//             <th scope="col">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((teacher) => (
//             <tr key={teacher.id}>
//               <td>{teacher.name}</td>
//               <td>{teacher.subject}</td>
//               <td>{teacher.phone}</td>
//               <td>{teacher.salary}</td>
//               <td>{new Date(teacher.joiningDate).toLocaleDateString()}</td>
//               <td>{teacher.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default TeacherDataTable;



// src/componenets/Table/TeacherDataTable/TeachersDataTble.jsx

import React from "react";
import "./TeacherDataTable.css";

function TeacherDataTable({ data, onEdit, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover border border-2">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Subject</th>
            <th scope="col">Phone</th>
            <th scope="col">Salary</th>
            <th scope="col">Joining Date</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center py-4 text-muted fst-italic">
                No teachers found
              </td>
            </tr>
          ) : (
            data.map((teacher) => (
              <tr key={teacher._id}>
                <td>{teacher.name || "-"}</td>
                <td>{teacher.subject || "-"}</td>
                <td>{teacher.phone || "-"}</td>
                <td>{teacher.salary || "-"}</td>
                <td>
                  {teacher.joiningDate
                    ? new Date(teacher.joiningDate).toLocaleDateString()
                    : "-"}
                </td>
                <td>{teacher.status || "Active"}</td>
                <td>
                  <div className="d-flex gap-2 flex-wrap">
                    <button
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => onEdit(teacher)}
                      title="Edit teacher"
                    >
                      <i className="bi bi-pencil-square me-1"></i>Edit
                    </button>

                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => onDelete(teacher)}
                      title="Delete teacher"
                    >
                      <i className="bi bi-trash me-1"></i>Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherDataTable;
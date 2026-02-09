// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './StudentDataTable'
// function StudentDataTable({ data }) {
//   return (
//     <div className="table-responsive"> {/* Important for responsiveness */}
//       <table className="table table-striped table-hover border border-2">
//         <thead style={{fontWeight:'bold'}}>
//           <tr>
//             <th scope="col">Roll No</th>
//             <th scope="col">Name</th>
//             <th scope="col">Class</th>
//             <th scope="col">Fees Status</th>
//             <th scope="col">Address</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((student) => (
//             <tr key={student.rollNo}>
//               <th scope="row">{student.rollNo}</th>
//               <td>{student.name}</td>
//               <td>{student.Class}</td>
//               <td>{student.status}</td>
//               <td>{student.Address}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default StudentDataTable;























// src/components/Table/StudentDataTable/StudentDataTable.jsx
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentDataTable.css';   // ← make sure this file is imported

function StudentDataTable({ data, onEdit, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead style={{ fontWeight: 'bold', backgroundColor: '#0d6efd', color: 'white' }}>
          <tr>
            <th scope="col">Roll No</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Fees Status</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center py-4 text-muted fst-italic">
                No students found in the database
              </td>
            </tr>
          ) : (
            data.map((student) => (
              <tr key={student._id || student.rollNo}>
                <th scope="row">{student.rollNo}</th>
                <td>{student.name || '-'}</td>
                <td>{student.Class || '-'}</td>
                <td>{student.status || student.feesStatus || 'Pending'}</td>
                <td>{student.Address || '-'}</td>
                <td>
                  <div className="d-flex gap-2 flex-wrap action-buttons">
                    <button
                      className="btn btn-sm btn-outline-primary edit-btn"
                      onClick={() => onEdit(student)}
                      title="Edit student details"
                    >
                      <i className="bi bi-pencil-square"></i> Edit
                    </button>

                    <button
                      className="btn btn-sm btn-outline-danger delete-btn"
                      onClick={() => onDelete(student)}
                      title="Delete this student"
                    >
                      <i className="bi bi-trash"></i> Delete
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

export default StudentDataTable;

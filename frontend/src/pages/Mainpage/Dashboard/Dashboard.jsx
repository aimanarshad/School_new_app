
// import React from 'react';

// import student from '../../../assets/students.png';
// // You can import more icons if needed later

// function Dashboard() {
//   return (
//     <>
//       <style>{`
//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: 'Segoe UI', system-ui, sans-serif;
//           background: #f8fafc;
//         }

//         .dashboard {
//           display: flex;
//           min-height: 100vh;
//         }

//         .sidebar {
//           width: 260px;
//           background: linear-gradient(180deg, #1e40af 0%, #1e3a8a 100%);
//           color: white;
//           padding-top: 24px;
//           flex-shrink: 0;
//         }

//         .sidebar-logo {
//           font-size: 28px;
//           font-weight: 700;
//           padding: 0 24px 32px 24px;
//           letter-spacing: -0.5px;
//         }

//         .sidebar ul {
//           list-style: none;
//         }

//         .sidebar li {
//           padding: 14px 24px;
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           cursor: pointer;
//           font-size: 15px;
//           font-weight: 500;
//           transition: all 0.25s ease;
//         }

//         .sidebar li:hover,
//         .sidebar li.active {
//           background: rgba(255,255,255,0.12);
//           transform: translateX(4px);
//         }

//         .sidebar i {
//           font-size: 22px;
//           width: 24px;
//           text-align: center;
//         }

//         .main-content {
//           flex: 1;
//           padding: 32px;
//           background: #ffffff;
//         }

//         .top-bar {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 40px;
//           padding-bottom: 20px;
//           border-bottom: 1px solid #e2e8f0;
//         }

//         .top-bar h1 {
//           font-size: 34px;
//           font-weight: 700;
//           color: #0f172a;
//         }

//         .top-icons {
//           display: flex;
//           gap: 24px;
//         }

//         .top-icons i {
//           font-size: 24px;
//           color: #64748b;
//           cursor: pointer;
//           transition: color 0.2s;
//         }

//         .top-icons i:hover {
//           color: #3b82f6;
//         }

//         .stats-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//           gap: 24px;
//           margin-bottom: 48px;
//         }

//         .stat-card {
//           padding: 28px 24px;
//           border-radius: 20px;
//           color: white;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.08);
//           transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
//         }

//         .stat-card:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 40px rgba(0,0,0,0.14);
//         }

//         .stat-card .info h3 {
//           font-size: 42px;
//           font-weight: 800;
//           line-height: 1;
//         }

//         .stat-card .info p {
//           font-size: 16px;
//           font-weight: 500;
//           opacity: 0.92;
//           margin-top: 6px;
//         }

//         .stat-card i {
//           font-size: 52px;
//           opacity: 0.88;
//         }

//         .section-title {
//           font-size: 26px;
//           font-weight: 700;
//           color: #1e293b;
//           margin-bottom: 20px;
//         }

//         .recent-students {
//           margin-bottom: 48px;
//         }

//         .avatars {
//           display: flex;
//           gap: 20px;
//           overflow-x: auto;
//           padding-bottom: 12px;
//           scrollbar-width: thin;
//         }

//         .avatars::-webkit-scrollbar {
//           height: 6px;
//         }

//         .avatars::-webkit-scrollbar-thumb {
//           background: #cbd5e1;
//           border-radius: 3px;
//         }

//         .avatar {
//           width: 72px;
//           height: 72px;
//           border-radius: 50%;
//           flex-shrink: 0;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           font-weight: bold;
//           font-size: 26px;
//           box-shadow: 0 8px 20px rgba(0,0,0,0.12);
//           transition: all 0.3s ease;
//           background-size: cover;
//           background-position: center;
//         }

//         .avatar:hover {
//           transform: scale(1.12) translateY(-4px);
//           box-shadow: 0 12px 28px rgba(0,0,0,0.18);
//         }

//         .pie-section {
//           text-align: center;
//           max-width: 400px;
//           margin: 0 auto;
//         }

//         .donut-container {
//           position: relative;
//           width: 220px;
//           height: 220px;
//           margin: 0 auto 20px;
//         }

//         .donut {
//           width: 100%;
//           height: 100%;
//           border-radius: 50%;
//           background: conic-gradient(
//             #10b981 0deg 280deg,
//             #e2e8f0 280deg 360deg
//           );
//           box-shadow: inset 0 4px 12px rgba(0,0,0,0.06);
//         }

//         .donut-center {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           width: 110px;
//           height: 110px;
//           background: white;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 42px;
//           font-weight: 800;
//           color: #10b981;
//           box-shadow: 0 6px 18px rgba(0,0,0,0.08);
//         }

//         @media (max-width: 1024px) {
//           .stats-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (max-width: 640px) {
//           .stats-grid {
//             grid-template-columns: 1fr;
//           }
//           .main-content {
//             padding: 20px;
//           }
//         }
//       `}</style>

//       <div className="dashboard">
//         {/* Sidebar */}
        

//         {/* Main Content */}
//         <div className="main-content">
//           <div className="top-bar">
//             <h1> Dashboard</h1>
//             <div className="top-icons">
//               <i className="bi bi-search"></i>
//               <i className="bi bi-bell"></i>
//               <i className="bi bi-chat"></i>
//               <i className="bi bi-grid-3x3-gap"></i>
//               <i className="bi bi-person-circle"></i>
//             </div>
//           </div>

//           {/* Stats Cards */}
//           <div className="stats-grid">
//             <div className="stat-card" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
//               <div className="info">
//                 <h3>8</h3>
//                 <p>Teachers</p>
//               </div>
//               <i className="bi bi-person-badge-fill"></i>
//             </div>

//             <div className="stat-card" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
//               <div className="info">
//                 <h3>7</h3>
//                 <p>Students</p>
//               </div>
//               <i className="bi bi-people-fill"></i>
//             </div>

//             <div className="stat-card" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
//               <div className="info">
//                 <h3>1</h3>
//                 <p>Class</p>
//               </div>
//               <i className="bi bi-building"></i>
//             </div>

//             <div className="stat-card" style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}>
//               <div className="info">
//                 <h3>100%</h3>
//                 <p>Attendance</p>
//               </div>
//               <i className="bi bi-check-circle-fill"></i>
//             </div>
//           </div>

//           {/* Recent Students */}
//           <div className="recent-students">
//             <h2 className="section-title">Recent Students</h2>
//             <div className="avatars">
//               <div className="avatar" style={{ backgroundColor: '#ef4444' }}>A</div>
//               <div className="avatar" style={{ backgroundColor: '#10b981' }}>B</div>
//               <div className="avatar" style={{ backgroundColor: '#f59e0b' }}>C</div>
//               <div className="avatar" style={{ backgroundImage: `url(${student})` }}></div>
//               <div className="avatar" style={{ backgroundColor: '#3b82f6' }}>E</div>
//               <div className="avatar" style={{ backgroundColor: '#ec4899' }}>F</div>
//             </div>
//           </div>

//           {/* Present Statistics */}
//           <div className="pie-section">
//             <h2 className="section-title">Present Statistics</h2>
//             <div className="donut-container">
//               <div className="donut"></div>
//               <div className="donut-center">5</div>
//             </div>
//             <p style={{ color: '#64748b', fontSize: '16px', fontWeight: 500 }}>
//               5 out of 7 students present today
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Dashboard;













import React, { useState, useEffect } from 'react';

import student from '../../../assets/students.png';
// You can import more icons if needed later

function Dashboard() {
  // State for counts
  const [teacherCount, setTeacherCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch teachers
        const teachersRes = await fetch('http://localhost:5000/api/teachers/getAll-teachers');
        if (!teachersRes.ok) throw new Error('Failed to fetch teachers');
        const teachersData = await teachersRes.json();
        setTeacherCount(Array.isArray(teachersData) ? teachersData.length : 0);

        // Fetch students
        const studentsRes = await fetch('http://localhost:5000/api/students/getAll-students');
        if (!studentsRes.ok) throw new Error('Failed to fetch students');
        const studentsData = await studentsRes.json();
        setStudentCount(Array.isArray(studentsData) ? studentsData.length : 0);

      } catch (err) {
        console.error(err);
        setError(err.message || 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Runs once on mount

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', system-ui, sans-serif;
          background: #f8fafc;
        }

        .dashboard {
          display: flex;
          min-height: 100vh;
        }

        .sidebar {
          width: 260px;
          background: linear-gradient(180deg, #1e40af 0%, #1e3a8a 100%);
          color: white;
          padding-top: 24px;
          flex-shrink: 0;
        }

        .sidebar-logo {
          font-size: 28px;
          font-weight: 700;
          padding: 0 24px 32px 24px;
          letter-spacing: -0.5px;
        }

        .sidebar ul {
          list-style: none;
        }

        .sidebar li {
          padding: 14px 24px;
          display: flex;
          align-items: center;
          gap: 14px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.25s ease;
        }

        .sidebar li:hover,
        .sidebar li.active {
          background: rgba(255,255,255,0.12);
          transform: translateX(4px);
        }

        .sidebar i {
          font-size: 22px;
          width: 24px;
          text-align: center;
        }

        .main-content {
          flex: 1;
          padding: 32px;
          background: #ffffff;
        }

        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e2e8f0;
        }

        .top-bar h1 {
          font-size: 34px;
          font-weight: 700;
          color: #0f172a;
        }

        .top-icons {
          display: flex;
          gap: 24px;
        }

        .top-icons i {
          font-size: 24px;
          color: #64748b;
          cursor: pointer;
          transition: color 0.2s;
        }

        .top-icons i:hover {
          color: #3b82f6;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
          margin-bottom: 48px;
        }

        .stat-card {
          padding: 28px 24px;
          border-radius: 20px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.14);
        }

        .stat-card .info h3 {
          font-size: 42px;
          font-weight: 800;
          line-height: 1;
        }

        .stat-card .info p {
          font-size: 16px;
          font-weight: 500;
          opacity: 0.92;
          margin-top: 6px;
        }

        .stat-card i {
          font-size: 52px;
          opacity: 0.88;
        }

        .section-title {
          font-size: 26px;
          font-weight: 700;
          color: #1e293b;
          margin-bottom: 20px;
        }

        .recent-students {
          margin-bottom: 48px;
        }

        .avatars {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          padding-bottom: 12px;
          scrollbar-width: thin;
        }

        .avatars::-webkit-scrollbar {
          height: 6px;
        }

        .avatars::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        .avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 26px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.12);
          transition: all 0.3s ease;
          background-size: cover;
          background-position: center;
        }

        .avatar:hover {
          transform: scale(1.12) translateY(-4px);
          box-shadow: 0 12px 28px rgba(0,0,0,0.18);
        }

        .pie-section {
          text-align: center;
          max-width: 400px;
          margin: 0 auto;
        }

        .donut-container {
          position: relative;
          width: 220px;
          height: 220px;
          margin: 0 auto 20px;
        }

        .donut {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: conic-gradient(
            #10b981 0deg 280deg,
            #e2e8f0 280deg 360deg
          );
          box-shadow: inset 0 4px 12px rgba(0,0,0,0.06);
        }

        .donut-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 110px;
          height: 110px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 42px;
          font-weight: 800;
          color: #10b981;
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .main-content {
            padding: 20px;
          }
        }
      `}</style>

      <div className="dashboard">
        {/* Sidebar */}
        

        {/* Main Content */}
        <div className="main-content">
          <div className="top-bar">
            <h1> Dashboard</h1>
            <div className="top-icons">
              <i className="bi bi-search"></i>
              <i className="bi bi-bell"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-grid-3x3-gap"></i>
              <i className="bi bi-person-circle"></i>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}>
              <div className="info">
                <h3>{loading ? '...' : teacherCount}</h3>
                <p>Teachers</p>
              </div>
              <i className="bi bi-person-badge-fill"></i>
            </div>

            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
              <div className="info">
                <h3>{loading ? '...' : studentCount}</h3>
                <p>Students</p>
              </div>
              <i className="bi bi-people-fill"></i>
            </div>

            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
              <div className="info">
                <h3>1</h3>
                <p>Class</p>
              </div>
              <i className="bi bi-building"></i>
            </div>

            <div className="stat-card" style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}>
              <div className="info">
                <h3>100%</h3>
                <p>Attendance</p>
              </div>
              <i className="bi bi-check-circle-fill"></i>
            </div>
          </div>

          {error && (
            <div style={{
              color: '#ef4444',
              padding: '16px',
              background: '#fee2e2',
              borderRadius: '12px',
              marginBottom: '24px'
            }}>
              {error}
            </div>
          )}

          {/* Recent Students */}
          <div className="recent-students">
            <h2 className="section-title">Recent Students</h2>
            <div className="avatars">
              <div className="avatar" style={{ backgroundColor: '#ef4444' }}>A</div>
              <div className="avatar" style={{ backgroundColor: '#10b981' }}>B</div>
              <div className="avatar" style={{ backgroundColor: '#f59e0b' }}>C</div>
              <div className="avatar" style={{ backgroundImage: `url(${student})` }}></div>
              <div className="avatar" style={{ backgroundColor: '#3b82f6' }}>E</div>
              <div className="avatar" style={{ backgroundColor: '#ec4899' }}>F</div>
            </div>
          </div>

          {/* Present Statistics */}
          <div className="pie-section">
            <h2 className="section-title">Present Statistics</h2>
            <div className="donut-container">
              <div className="donut"></div>
              <div className="donut-center">5</div>
            </div>
            <p style={{ color: '#64748b', fontSize: '16px', fontWeight: 500 }}>
              5 out of 7 students present today
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

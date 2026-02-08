import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Stats.css"; // CSS for donut chart

const Stats = () => {
  const [stats, setStats] = useState({ present: 0, absent: 0, leave: 0, total: 0 });

  useEffect(() => {
    fetchAttendanceStats();
  }, []);

  const fetchAttendanceStats = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students/show-attendance"); // fetch all students
      const students = res.data;

      const presentCount = students.filter((s) => s.status === "Present").length;
      const absentCount = students.filter((s) => s.status === "Absent").length;
      const leaveCount = students.filter((s) => s.status === "Leave").length;
      const totalCount = students.length;

      setStats({
        present: presentCount,
        absent: absentCount,
        leave: leaveCount,
        total: totalCount,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const { present, absent, leave, total } = stats;

  const presentPercent = total ? Math.round((present / total) * 100) : 0;
  const absentPercent = total ? Math.round((absent / total) * 100) : 0;
  const leavePercent = total ? Math.round((leave / total) * 100) : 0;

  return (
    <div className="pie-section">
      <h2 className="section-title">Today's Attendance</h2>

      <div className="donut-container">
        <div
          className="donut"
          style={{
            background: `conic-gradient(
              #10b981 0 ${presentPercent}%,
              #ef4444 ${presentPercent}% ${presentPercent + absentPercent}%,
              #facc15 ${presentPercent + absentPercent}% 100%
            )`,
          }}
        ></div>
        <div className="donut-center">{present}</div>
      </div>

      <p style={{ color: "#64748b", fontSize: "16px", fontWeight: 500 }}>
        {present} Present | {absent} Absent | {leave} Leave | Total: {total} Students
      </p>

      <div className="legend">
        <span className="legend-item">
          <span className="legend-color present"></span> Present
        </span>
        <span className="legend-item">
          <span className="legend-color absent"></span> Absent
        </span>
        <span className="legend-item">
          <span className="legend-color leave"></span> Leave
        </span>
      </div>
    </div>
  );
};

export default Stats;

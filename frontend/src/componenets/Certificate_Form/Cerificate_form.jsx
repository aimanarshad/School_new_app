import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

const CertificateForm = ({ certificateType }) => {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    className: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generatePDF = () => {
  if (!formData.name || !formData.rollNo || !formData.className) {
    alert("Please fill all fields");
    return;
  }

  const doc = new jsPDF("portrait", "pt", "a4");

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // School Name & Address (Top Right)
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Green Valley Grammar School", pageWidth - 40, 40, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(
    "House No. 145, Gulistan-e-Jauhar,\nKarachi, Sindh, Pakistan",
    pageWidth - 40,
    60,
    { align: "right" }
  );

  // Certificate Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(26);
  doc.text(certificateType, pageWidth / 2, 130, { align: "center" });

  doc.setLineWidth(1);
  doc.line(60, 145, pageWidth - 60, 145);

  // Certificate Body
  doc.setFont("helvetica", "normal");
  doc.setFontSize(15);

  let paragraph = "";

  if (certificateType === "Bonafide Certificate") {
    paragraph = `This is to certify that ${formData.name}, bearing Roll No. ${formData.rollNo}, is a bonafide student of class ${formData.className} at Green Valley Grammar School. The student is duly enrolled and has been studying in this institution as per official records. This certificate is issued upon the request of the student for official purposes.`;
  } else if (certificateType === "Leaving Certificate") {
    paragraph = `This is to certify that ${formData.name}, bearing Roll No. ${formData.rollNo}, was a student of class ${formData.className} at Green Valley Grammar School and has left the institution after completing the required formalities.`;
  } else if (certificateType === "Character Certificate") {
    paragraph = `This is to certify that ${formData.name}, bearing Roll No. ${formData.rollNo}, was a student of class ${formData.className} at Green Valley Grammar School. During the period of study, the student exhibited good moral character and satisfactory conduct.`;
  }

  const textLines = doc.splitTextToSize(paragraph, pageWidth - 120);
  doc.text(textLines, 60, 190);

  // Date
  doc.setFontSize(12);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 60, pageHeight - 140);

  // Signature Section
  doc.setFont("helvetica", "bold");
  doc.text("_________________________", pageWidth - 260, pageHeight - 140);
  doc.setFontSize(13);
  doc.text("Principal", pageWidth - 220, pageHeight - 120);
  doc.text("Green Valley Grammar School", pageWidth - 260, pageHeight - 100);

  doc.save(`${formData.name}_${certificateType}.pdf`);
};


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
      padding: '20px',
      background: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    }}>
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={formData.name}
        onChange={handleChange}
        style={{ padding: '12px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <input
        type="text"
        name="rollNo"
        placeholder="Roll Number"
        value={formData.rollNo}
        onChange={handleChange}
        style={{ padding: '12px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <input
        type="text"
        name="className"
        placeholder="Class"
        value={formData.className}
        onChange={handleChange}
        style={{ padding: '12px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <button
        onClick={generatePDF}
        style={{
          padding: '12px',
          fontSize: '16px',
          backgroundColor: '#38abb8',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Generate PDF
      </button>
    </div>
  );
};

export default CertificateForm;

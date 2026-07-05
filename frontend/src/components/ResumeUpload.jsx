import { useState } from "react";

function ResumeUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a PDF resume first.");
      return;
    }

    alert(`Selected Resume: ${file.name}`);
  };

  return (
    <div
      style={{
        width: "500px",
        background: "#ffffff",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h1>🎯 AI Interview Analyzer</h1>

      <p>
        Upload your resume to begin your AI-powered mock interview.
      </p>

      <br />

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
      />

      <br />
      <br />

      {file && (
        <p>
          📄 <b>{file.name}</b>
        </p>
      )}

      <br />

      <button
        onClick={handleUpload}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          padding: "12px 25px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Upload Resume
      </button>
    </div>
  );
}

export default ResumeUpload;
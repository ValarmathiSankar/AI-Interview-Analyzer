import { useState } from "react";
import api from "../api/api";

function ResumeUpload() {

    const [file, setFile] = useState(null);

    const [message, setMessage] = useState("");

    const handleUpload = async () => {

        if (!file) {

            alert("Please choose a PDF.");

            return;

        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            const response = await api.post(
                "/resume/upload",
                formData
            );

            setMessage(response.data.message);

        } catch (error) {

            console.log(error);

            setMessage("Upload Failed");

        }

    };

    return (

        <div
            style={{
                width: "500px",
                margin: "100px auto",
                padding: "30px",
                background: "white",
                borderRadius: "10px",
                boxShadow: "0px 0px 20px rgba(0,0,0,0.1)",
                textAlign: "center",
            }}
        >

            <h1>AI Interview Analyzer</h1>

            <p>Upload Your Resume</p>

            <input

                type="file"

                accept=".pdf"

                onChange={(e) => setFile(e.target.files[0])}

            />

            <br />

            <br />

            <button onClick={handleUpload}>

                Upload Resume

            </button>

            <br />

            <br />

            <h3>{message}</h3>

        </div>

    );

}

export default ResumeUpload;
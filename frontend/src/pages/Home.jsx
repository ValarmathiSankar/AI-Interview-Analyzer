import ResumeUpload from "../components/ResumeUpload";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      <ResumeUpload />
    </div>
  );
}

export default Home;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import ResumePage from "./pages/ResumePage";
import InterviewPage from "./pages/InterviewPage";
import ReportPage from "./pages/ReportPage";
import { InterviewProvider } from "./context/InterviewContext";
function App() {
  return (
    <InterviewProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/interview" element={<InterviewPage />} />
            <Route path="/reports" element={<ReportPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </InterviewProvider>
  );
}

export default App;
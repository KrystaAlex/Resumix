import "./Resumix.css";
import ResumixView from "./views/ResumixView";
import ResumeSelector from "./components/ResumeSelector";
import resumeData from "./data/data.json";
import { useState, useEffect } from "react";

function Resumix() {
  const [selectedResumeId, setSelectedResumeId] = useState(
    null
  );
  const [selectedResume, setSelectedResume] = useState(null);

  useEffect(() => {
    const resume = resumeData.resumes.find(
      (resume) => resume.id === selectedResumeId
    );
    setSelectedResume(resume);
  }, [selectedResumeId]);

  return (
    <>
      <h1>Resumix</h1>

      <ResumeSelector
        resumes={resumeData.resumes}
        selectedId={selectedResumeId}
        onChange={setSelectedResumeId}
      />
      {!selectedResume && <p> Please select a resume.</p>}
      {selectedResume && <ResumixView resumeData={selectedResume} />}
    </>
  );
}

export default Resumix;

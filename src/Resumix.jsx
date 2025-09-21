import "./Resumix.css";
import ResumixView from "./views/ResumixView";
import ResumeSelector from "./components/ResumeSelector";
import resumeData from "./data/data.json";
import { useState, useEffect } from "react";

function Resumix() {
  const [selectedResumeId, setSelectedResumeId] = useState("");
  const [selectedResume, setSelectedResume] = useState(null);

  useEffect(() => {
    const resume = resumeData.resumes.find(
      (resume) => resume.id === selectedResumeId
    );
    setSelectedResume(resume);
  }, [selectedResumeId]);

   const updateSection = (updatedSection) => {
    const updatedSections = selectedResume.sections.map((section) =>
      section.id === updatedSection.id ? updatedSection : section
    );
    setSelectedResume({ ...selectedResume, sections: updatedSections });

  };

  return (
    <>
      <h1>Resumix</h1>

      <ResumeSelector
        resumes={resumeData.resumes}
        selectedId={selectedResumeId}
        onChange={setSelectedResumeId}
      />
      {!selectedResume && <p> Please select a resume.</p>}
      {selectedResume && <ResumixView resumeData={selectedResume} updateSection={updateSection} />}
    </>
  );
}

export default Resumix;

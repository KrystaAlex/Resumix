import "./Resumix.css";
import ResumixView from "./views/ResumixView";
import ResumeSelector from "./components/ResumeSelector";
import resumeData from "./data/data.json";
import { useState, useEffect } from "react";
import CreateSectionForm from "./components/CreateSectionForm";

function Resumix() {
  const [selectedResumeId, setSelectedResumeId] = useState("");
  const [selectedResume, setSelectedResume] = useState(null);
  const [data, setData] = useState(resumeData);

  useEffect(() => {
    const resume = resumeData.resumes.find(
      (resume) => resume.id === selectedResumeId
    );
    setSelectedResume(resume || null);
  }, [selectedResumeId, data]);

  const updateSection = (updatedSection) => {
    const updatedResumes = data.resumes.map((resume) => {
      if (resume.id === selectedResumeId) {
        const updatedSections = resume.sections.map((section) =>
          section.id === updatedSection.id ? updatedSection : section
        );
        return { ...resume, sections: updatedSections };
      }
      return resume;
    });
    setData({ ...data, resumes: updatedResumes });

    const newSelected = updatedResumes.find((r) => r.id === selectedResumeId);
    setSelectedResume(newSelected);
  };

  const addSection = (newSection) => {
    if (!selectedResume) return;

    const updatedSections = [...selectedResume.sections, newSection];
    setSelectedResume({ ...selectedResume, sections: updatedSections });
  };

  return (
    <>
      <h1>Resumix</h1>

      <ResumeSelector
        resumes={data.resumes}
        selectedId={selectedResumeId}
        onChange={setSelectedResumeId}
      />
      {!selectedResume && <p> Please select a resume.</p>}
      {selectedResume && (
        <ResumixView
          resumeData={selectedResume}
          updateSection={updateSection}
        />
      )}
      <CreateSectionForm onCreate={addSection} />
    </>
  );
}

export default Resumix;

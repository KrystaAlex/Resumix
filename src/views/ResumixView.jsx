import SectionCard from "../components/SectionCard"

function ResumixView({ resumeData, updateSection }) {
return (
    <div className="resume-view">
        <header className="resume-header">
        <h1 className="resume-name">{resumeData.header.name}</h1>
        <h2 className="resume-title">{resumeData.header.title}</h2>
        <p className="resume-contact">{resumeData.header.contact}</p>
      </header>
      {resumeData.sections.map((section) => (
         <SectionCard key={section.id} section={section} updateSection={updateSection}/>
        ))}
    </div>
)
}

export default ResumixView
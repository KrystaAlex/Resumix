function ResumeSelector({ resumes, selectedId, onChange }) {
  return (
    <select
      value={selectedId}
      onChange={(e) => onChange(Number(e.target.value))}
    >
      <option value="">
        Pick a resume version 
      </option>
      {resumes.map((resume) => (
        <option key={resume.id} value={resume.id}>
          {resume.type}
        </option>
      ))}
    </select>
  );
}

export default ResumeSelector;

function ResumeSelector({ resumes, selectedId, onChange }) {
    return (
        <select value={selectedId} onChange={e => onChange(Number(e.target.value))}>
        {resumes.map(resume => (
            <option key={resume.id} value={resume.id}>
                {resume.type}
            </option>
        ))
        }
        </select>
    )
}

export default ResumeSelector
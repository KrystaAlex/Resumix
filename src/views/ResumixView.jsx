function ResumixView({ data }) {
return (
        <>
    <h1>Resumix</h1>
    {data.sections.map((section) => (
        <div key={section.id}>
          <h2>{section.title}</h2>
          {section.entries.map((entry) => (
            <div key={entry.id}>
              <h3>{entry.company || entry.school}</h3>
              <p>{entry.role || entry.degree}</p>
              <p>{entry.dates}</p>
              <ul>
                {entry.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </>
)
}

export default ResumixView
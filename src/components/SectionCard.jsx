function SectionCard( {section} ) {
return (
        <div key={section.id} className="resume-section">
          <h3 className="section-title">{section.title}</h3>
          {section.entries.map((entry) => (
            <div key={entry.id} className="resume-card">
              <h4 className="entry-title">
                {entry.title} | {entry.organization}
              </h4>
              <p className="entry-dates">{entry.dates}</p>
              <ul className="entry-bullets">
                {entry.bullets.map((bullet, i) => (
                  <li key={i} className="bullet">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )
}

export default SectionCard
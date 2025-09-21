import { useState } from "react";

function SectionCard( { section, updateSection } ) {
 const [isEditing, setIsEditing] = useState(false);
const [localSection, setLocalSection] = useState(section);

 const handleBulletChange = (entryId, index, newBullet) => {
    const updatedEntries = localSection.entries.map((entry) => {
      if (entry.id === entryId) {
        const updatedBullets = [...entry.bullets];
        updatedBullets[index] = newBullet;
        return { ...entry, bullets: updatedBullets };
      }
      return entry;
    });
    
    const updatedSection = { ...localSection, entries: updatedEntries };
    setLocalSection(updatedSection);
    updateSection(updatedSection);
  };

    return (
        <div key={section.id} className="resume-section">
          <h3 className="section-title">{section.title}</h3>
          {localSection.entries.map((entry) => (
            <div key={entry.id} className="resume-card">
              <h4 className="entry-title">
                {entry.title} | {entry.organization}
              </h4>
              <p className="entry-dates">{entry.dates}</p>
              <ul className="entry-bullets">
                {entry.bullets.map((bullet, i) =>   isEditing ? (
                <li key={i}>
                  <input
                    value={bullet}
                    onChange={(e) =>
                      handleBulletChange(entry.id, i, e.target.value)
                    }
                  />
                </li>
              ) : (
                <li key={i}>{bullet}</li>
              )
            )}
          </ul>
            </div>
          ))}
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Done" : "Edit"}
      </button>
        </div>
      )
}

export default SectionCard
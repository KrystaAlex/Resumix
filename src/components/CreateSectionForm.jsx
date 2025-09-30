import { useState } from "react"

function CreateSectionForm({onCreate}) {
    const [title, setTitle] = useState("")
 const [entries, setEntries] = useState([
    { title: "", organization: "", dates: "", bullets: [""] }
  ]);

  const handleEntryChange = (index, field, value) => {
    const updatedEntries = [...entries];
    updatedEntries[index][field] = value;
    setEntries(updatedEntries);
  };

  const handleBulletChange = (entryIndex, bulletIndex, value) => {
    const updatedEntries = [...entries];
    updatedEntries[entryIndex].bullets[bulletIndex] = value;
    setEntries(updatedEntries);
  };

  const addBullet = (entryIndex) => {
    const updatedEntries = [...entries];
    updatedEntries[entryIndex].bullets.push("");
    setEntries(updatedEntries);
  };

  const addEntry = () => {
    setEntries([
      ...entries,
      { title: "", organization: "", dates: "", bullets: [""] }
    ]);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newSection = {
      id: Date.now(), 
      title,
      entries: entries.map((entry, idx) => ({
        id: idx + 1,
        ...entry
      }))
    };

    onCreate(newSection);
    setTitle("");
    setEntries([{ title: "", organization: "", dates: "", bullets: [""] }]);
  };
    
return (
    <>
    <form onSubmit={handleSubmit} className="create-section-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New section title"
      />

     {entries.map((entry, i) => (
        <div key={i}>
          <input
            type="text"
            placeholder="Entry Title"
            value={entry.title}
            onChange={(e) => handleEntryChange(i, "title", e.target.value)}
          />
          <input
            type="text"
            placeholder="Organization"
            value={entry.organization}
            onChange={(e) => handleEntryChange(i, "organization", e.target.value)}
          />
          <input
            type="text"
            placeholder="Dates"
            value={entry.dates}
            onChange={(e) => handleEntryChange(i, "dates", e.target.value)}
          />

          {entry.bullets.map((bullet, j) => (
            <input
              key={j}
              type="text"
              placeholder="Bullet"
              value={bullet}
              onChange={(e) => handleBulletChange(i, j, e.target.value)}
            />
          ))}
          <button type="button" onClick={() => addBullet(i)}>
            + Add Bullet
          </button>
        </div>
      ))}
      <button type="button" onClick={addEntry}>+ Add Entry</button>
      <button type="submit">Create Section</button>
    </form>

    </>
)

}

export default CreateSectionForm
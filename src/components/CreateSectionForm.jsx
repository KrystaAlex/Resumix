import { useState } from "react"

function CreateSectionForm({onCreate}) {
    const [title, setTitle] = useState("")
    const handleSubmit = (e) =>{

    e.preventDefault();
    
    if (!title.trim()) return;
    
    const newSection = {
        id: Date.now(), 
        title,
        entries: []
    };
    
    onCreate(newSection);
    setTitle(""); 
}
    
return (
    <>
    <form onSubmit={handleSubmit} className="create-section-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New section title"
      />
      <button type="submit">Add Section</button>
    </form>

    </>
)

}

export default CreateSectionForm
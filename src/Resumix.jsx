import './Resumix.css'
import ResumixView from './views/ResumixView'
import resumeData from './data/data.json'

function Resumix() {
  const selectedResume = resumeData.resumes[0];
  
  return (
  <>
  <h1>Resumix</h1>
  {selectedResume && <ResumixView resumeData={selectedResume} />}
  </>
  )
}

export default Resumix

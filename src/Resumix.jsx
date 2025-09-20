import './Resumix.css'
import ResumixView from './views/ResumixView'
import resumeData from './data/data.json'

function Resumix() {
  return <ResumixView data={resumeData}/>
}

export default Resumix

import { useSelector } from 'react-redux'
import './Sidebar.scss'

function Sidebar() {
  const skills = useSelector((state) => state.skills.skills)

  return (
    <aside className="sidebar">
      <h2>Compétences</h2>
      {skills.length > 0 ? (
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>Aucune compétence renseignée.</p>
      )}
    </aside>
  )
}

export default Sidebar

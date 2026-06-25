import { useSelector } from 'react-redux'
import './UserName.scss'

function UserName() {
  const fullName = useSelector((state) => state.user.fullName)
  const skillsCount = useSelector((state) => state.skills.skillsCount)
  const skillsLabel = skillsCount > 1 ? 'compétences' : 'compétence'

  return (
    <div className="user-name">
      <strong>{fullName || 'inconnu'}</strong>
      <span>
        {skillsCount} {skillsLabel}
      </span>
    </div>
  )
}

export default UserName

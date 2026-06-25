import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Profile.scss'

function Profile() {
  const dispatch = useDispatch()
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)
  const skills = useSelector((state) => state.skills.skills)

  const [formValues, setFormValues] = useState({
    firstName: firstName || '',
    lastName: lastName || '',
    skills: skills.join(', '),
  })

  function handleChange(event) {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const cleanedSkills = formValues.skills
      .split(',')
      .map((skill) => skill.trim())
      .filter((skill) => skill !== '')

    dispatch({
      type: 'UPDATE_USER',
      payload: {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
      },
    })

    dispatch({
      type: 'UPDATE_SKILLS',
      payload: cleanedSkills,
    })
  }

  return (
    <section className="profile">
      <h1>Profil</h1>
      <form className="profile__form" onSubmit={handleSubmit}>
        <label>
          Prénom
          <input
            name="firstName"
            onChange={handleChange}
            type="text"
            value={formValues.firstName}
          />
        </label>

        <label>
          Nom
          <input
            name="lastName"
            onChange={handleChange}
            type="text"
            value={formValues.lastName}
          />
        </label>

        <label>
          Compétences
          <input
            name="skills"
            onChange={handleChange}
            placeholder="Dev Front-end, React, Redux"
            type="text"
            value={formValues.skills}
          />
        </label>

        <button type="submit">Enregistrer</button>
      </form>
    </section>
  )
}

export default Profile

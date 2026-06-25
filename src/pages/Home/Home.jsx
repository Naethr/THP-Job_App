import { useSelector } from 'react-redux'
import './Home.scss'

function Home() {
  const firstName = useSelector((state) => state.user.firstName)
  const lastName = useSelector((state) => state.user.lastName)
  const fullName = useSelector((state) => state.user.fullName)
  const skills = useSelector((state) => state.skills.skills)

  return (
    <section className="home">
      <h1>{fullName ? `Bienvenue ${fullName} !` : 'Bienvenue !'}</h1>
      <p>
        Modifiez votre profil pour renseigner votre identité et vos compétences
        principales.
      </p>

      {(firstName || lastName) && !fullName && (
        <p className="home__warning">
          Le prénom et le nom sont nécessaires pour afficher le nom complet.
        </p>
      )}

      <h2>Vos compétences</h2>
      {skills.length > 0 ? (
        <ul className="home__skills">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>Renseignez vos compétences depuis la page profil.</p>
      )}
    </section>
  )
}

export default Home

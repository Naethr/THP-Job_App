const initialState = {
  skills: [],
  skillsCount: 0,
}

function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_SKILLS': {
      const skills = action.payload
        .map((skill) => skill.trim())
        .filter((skill) => skill !== '')

      return {
        skills,
        skillsCount: skills.length,
      }
    }

    default:
      return state
  }
}

export default skillsReducer

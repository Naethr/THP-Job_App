const initialState = {
  firstName: null,
  lastName: null,
  fullName: null,
}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_USER': {
      const firstName = action.payload.firstName?.trim() || null
      const lastName = action.payload.lastName?.trim() || null
      const fullName = firstName && lastName ? `${firstName} ${lastName}` : null

      return {
        firstName,
        lastName,
        fullName,
      }
    }

    default:
      return state
  }
}

export default userReducer

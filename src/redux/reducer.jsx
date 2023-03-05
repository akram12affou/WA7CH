const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'first':
    console.log('hey')
    return { ...state }

  default:
    return state
  }
}

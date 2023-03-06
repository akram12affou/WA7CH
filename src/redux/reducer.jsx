
const initialState = {
  firstTreeProducts : []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'FetchFirstThreeProductsData':
    return { ...state,firstTreeProducts: payload}
  default:
    return state
  }
}

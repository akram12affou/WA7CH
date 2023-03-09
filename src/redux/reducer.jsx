
const initialState = {
  firstTreeProducts : [],
  OtherProducts : []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'FetchFirstThreeProductsData':
    return { ...state,firstTreeProducts: payload}
  case 'FetchOtherProducts':
    return { ...state,OtherProducts: payload}
  default:
    return state
  }
}

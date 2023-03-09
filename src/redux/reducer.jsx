
const initialState = {
  firstTreeProducts : [],
  OtherProducts : [],
  PDetails : []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'FetchFirstThreeProductsData':
    return { ...state,firstTreeProducts: payload}
  case 'FetchOtherProducts':
    return { ...state,OtherProducts: payload}
  case 'FetchProductDetails':
 
    return { ...state,PDetails: [payload]}
    
  default:
    return state
  }
}

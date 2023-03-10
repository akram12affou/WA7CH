
const initialState = {
  firstTreeProducts : [],
  OtherProducts : [],
  PDetails : [],
  CartItems : [
  ],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'FetchFirstThreeProductsData':
    return { ...state,firstTreeProducts: payload}
  case 'FetchOtherProducts':
    return { ...state,OtherProducts: payload}
  case 'FetchProductDetails':
    return { ...state,PDetails: [payload]}
  case 'AddToCart':
    return { ...state , CartItems :[...state.CartItems ,{...payload,q:1}]}
  case 'RemoveFromCart':
    return { ...state , CartItems : state.CartItems.filter((e) => e.id !== payload.id)}
    
  default:
    return state
  }
}

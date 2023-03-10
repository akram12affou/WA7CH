
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
  case 'addQ':
    let newArr = []
    
    for(let i=0;state.CartItems.length > i ; i++){
      if(state.CartItems[i].id == payload.id){
        newArr.push({...payload , q :state.CartItems[i].q+1})
      }else{
        newArr.push(state.CartItems[i])
      }
    }
    // console.log(newArr)
    return { ...state, CartItems : newArr}
  case 'minusQ':
    let Arr = []
    
    for(let i=0;state.CartItems.length > i ; i++){
      if(state.CartItems[i].id == payload.id){
        Arr.push({...payload , q :state.CartItems[i].q-1})
      }else{
        Arr.push(state.CartItems[i])
      }
    }
    // console.log(newArr)
    return { ...state, CartItems : Arr}
    
  default:
    return state
  }
}

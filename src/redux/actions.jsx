export const fetchFirstThreeProductsData = (res) => {
    return(
        {
            type : 'FetchFirstThreeProductsData',
            payload:res
        }
    )
}
export const fetchOtherProducts = (res) => {
    return(
        {
            type : 'FetchOtherProducts',
            payload:res
        }
    )
}
export const fetchProductDetails = (res) => {
    return(
        {
            type : 'FetchProductDetails',
            payload:res
        }
    )
}
export const addToCart = (item) => {
    return(
        {
            type : 'AddToCart',
            payload:item
        }
    )
}
export const removeFromCart = (item) => {
    return(
        {
            type : 'RemoveFromCart',
            payload:item
        }
    )
}
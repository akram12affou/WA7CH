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
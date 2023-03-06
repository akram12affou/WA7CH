export const fetchFirstThreeProductsData = (res) => {
    return(
        {
            type : 'FetchFirstThreeProductsData',
            payload:res
        }
    )
}
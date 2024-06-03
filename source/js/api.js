const fetchParams = async (url) =>{
    const response = await fetch(url)
    let data = response.json()
    return data
}
export {fetchParams}
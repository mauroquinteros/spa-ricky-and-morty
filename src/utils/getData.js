const API = "https://rickandmortyapi.com/api/character/"

const getData = async (id = null) => {
  console.log('id',id)
  // check if the id  is null or not, by default it's null
  const url = id ? `${API}${id}` : API
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error("fetch error")
  }
}

export default getData
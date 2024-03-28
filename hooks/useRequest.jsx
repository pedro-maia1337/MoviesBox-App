const useRequest = () => {
  const getMovies = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    return data     
  }

  return {getMovies}
}

export default useRequest
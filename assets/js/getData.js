const url = "https://franbls.github.io/Animales_Salvajes/animales.json"
const getData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export default getData

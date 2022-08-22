const url = "https://github.com/FranBls/Animales_Salvajes.git"
const getData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    return data
}

export default getData



 export const getNoticias = async(country, category) => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=9a4f130d959a42a389e806760e917f68&pageSize=4`
    const resp = await fetch(url)
    const {articles} = await resp.json()
    console.log(articles)

    const noticias = articles.map( noticia => {
        return {
            source: noticia.source.name,
            title: noticia.title,
            description: noticia.description,
            image: noticia.urlToImage,
            url: noticia.url
        }
    } )

    console.log(noticias)
    return noticias
}

export async function getArticleList() {
    const res = await fetch(`https://jiang-xia.top/x-blog/api/v1/article/list`,{
        method:"post"
    })
    const data = await res.json()
    return data.data
}

export async function getArticleInfo(id:string) {
    const res = await fetch(`https://jiang-xia.top/x-blog/api/v1/article/info?id=${id}`,{
        method:"get"
    })
    const data = await res.json()
    return data.data
}
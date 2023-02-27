export async function getStaticProps() {
    const res = await fetch(`https://jiang-xia.top/x-blog/api/v1/article/list`,{
        method:"post"
    })
    const data = await res.json()

    if (!data) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    return {
        props: { data }, // will be passed to the page component as props
    }
}
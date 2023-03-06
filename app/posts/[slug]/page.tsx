import {getArticleInfo, getArticleList} from "@/app/api/posts/posts";

export default async function  Page({ params }: any) {
    console.log('----------------->',params)
    const data:any = await getArticleInfo()
    console.log("=================================>",data.info)
    return(<>
        <div className="flex justify-around flex-wrap">
            {/*{data.info}*/}
        </div>
    </>)
}
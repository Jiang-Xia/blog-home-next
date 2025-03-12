import {getArticleInfo} from "@/app/api/posts/posts";
import {transformMarkdown} from "@/lib/markdown"
export default async function  Page({ params }: any) {
    const { slug } = await params
    const data:any = await getArticleInfo(slug)
    // console.log('----------------->',data.info)
    const markdown:string = data.info.content
    const html:string =  await transformMarkdown(markdown) as string
    return(
        <div className="p-2 m-auto w-full md:w-3/5">
            <section className="md-editor-preview default-theme md-editor-scrn" dangerouslySetInnerHTML={{ __html: html }}></section>
        </div>
    )
}
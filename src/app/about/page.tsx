import {getArticleInfo} from "@/app/api/posts/posts";
import {transformMarkdown} from "@/lib/markdown"
export default async function  Page({ params }: any) {
  const data:any = await getArticleInfo('44')
  const markdown:string =data.info.content
  const html:string =  await transformMarkdown(markdown) as string
  return(
      <div className="p-2 m-auto w-full md:w-3/5">
        <section className="md-preview default-theme md md-previewOnly" dangerouslySetInnerHTML={{ __html: html }}></section>
      </div>
  )
}
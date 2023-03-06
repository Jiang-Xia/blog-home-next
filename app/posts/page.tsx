import {getArticleList} from "@/app/api/posts/posts";
import Link from 'next/link'
export default async function  Posts() {
    const data:any = await getArticleList()
    console.log("=================================>",data)
    const list:any[] = data.list
    const listItems:any[] = list.map((item:any, index:number) =>
        <div className="card w-96 bg-base-100 shadow-xl image-full mt-2 mr-2">
            <figure><img src={item.cover} /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                    <Link href={'/posts/'+item.id}>
                        <button className="btn btn-primary">Read</button>
                    </Link>
                </div>
            </div>
        </div>
    )
    return(<>
        <div className="flex justify-around flex-wrap">
            {listItems}
        </div>
    </>)
}
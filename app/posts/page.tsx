import {getStaticProps} from "@/app/api/posts/posts";

export default async function  Posts() {
    console.log("=================================>")
    const props:any = await getStaticProps()
    const list:any[] = props.props.data.data
    console.log(props)
    return (
        list.map((item:any, index:number) => {
            return
                (<div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={item.cover} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Read</button>
                        </div>
                    </div>
                </div>)

        })
  )
}
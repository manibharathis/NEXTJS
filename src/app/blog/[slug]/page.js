export  default async function Blog({params}){
    return(
        <div>
            <h2>Blog</h2>
            <div> {params.slug}</div>
        </div>
    )
}
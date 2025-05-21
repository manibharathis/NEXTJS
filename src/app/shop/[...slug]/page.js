export  default async function Shop({params}){
    return(
        <div>
            <h2>Shop</h2>
            <div> {params.slug}</div>
        </div>
    )
}
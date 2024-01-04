import { notFound } from "next/navigation"
import { Metadata } from "next"
export const generateMetadata = ({params}:Props):Metadata=>{
    return{
        title:`Product ${params.productId}`
    }
}
type Props = {
    params:{
        productId: string;
    }
}
export default function ProductDetails({params}:Props) {
    if(parseInt(params.productId) > 100){
        return notFound()
    }
    return <h1>Details {params.productId}</h1>
}
import Link from "next/link"

export default function ProductList() {
    const productId = 100
    return(
        <>
        <h1>Product list</h1>
        <Link href='products/1'><h2>Product 1</h2></Link>
        <Link href='products/2'><h2>Product 2</h2></Link>
        <Link href={`products/${productId}`}><h2>Product 3</h2></Link>
        </>
    )
}
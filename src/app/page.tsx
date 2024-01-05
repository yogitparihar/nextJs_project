import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome next js</h1>
      <Link href="/products">Product page</Link>
    </div>
  );
}

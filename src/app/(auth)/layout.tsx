import Link from "next/link";
const navLinks = [
    {name:"Register" , href:"/register"},
    {name:"Login", href:"/login"},
    {name:"Forgot Password", href:"/forgot-password"}
]
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div>
        {navLinks.map((link)=>{
            return(
                <Link href={link.href} key={link.name}>{link.name}</Link>
            )
        })}
      </div>
    );
  }
  
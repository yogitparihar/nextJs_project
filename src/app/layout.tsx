import { Metadata } from "next";
export const metadata: Metadata ={
  title:{
    absolute:"",
    default:"First project",
    template:"%s | project"
  },
  description:"Learning project"
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          Header
        </header>
        {children}
        <footer style={{ backgroundColor: "lightgray", padding: "1rem" }}>
          Footer
        </footer>
      </body>
    </html>
  );
}

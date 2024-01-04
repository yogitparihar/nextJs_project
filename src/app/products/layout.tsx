export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        {children}
        <h2>Product layout</h2>
    </div>
  );
}

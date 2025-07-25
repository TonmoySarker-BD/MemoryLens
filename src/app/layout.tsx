import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" sizes="any" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Professional photography services capturing life's precious moments." />
        <meta name="keywords" content="photography, wedding photographer, event photography, professional photos" />
        <meta name="author" content="Tonmoy Sarker" />
        </head>
      <body className="scroll-smooth">
        {children}
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-[100vh] min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

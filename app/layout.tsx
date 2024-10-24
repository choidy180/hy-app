import Navigation from "@/components/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-[100vw] max-w-[100vw min-h-screen`}
      >
        {children}
        <Navigation/>
      </body>
    </html>
  );
}

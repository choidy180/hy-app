import Navigation from "@/components/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>⭐️히영씨의 게임왕국⭐️</title>
      <body
        className={`w-[100vw] max-w-[100vw min-h-screen`}
      >
        {children}
        <Navigation/>
      </body>
    </html>
  );
}

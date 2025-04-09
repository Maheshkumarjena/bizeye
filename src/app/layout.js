// "use client"
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`max-h-screen  `}
      >
        {/* <SidebarProvider> */}
          
            {children}

        {/* </SidebarProvider> */}
      </body>
    </html>
  );
}
